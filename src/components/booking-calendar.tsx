import { useEffect, useMemo, useState } from "react";
import { CalendarDays, ChevronLeft, ChevronRight, Clock, Loader2 } from "lucide-react";

export type BookingSelection = {
  dateKey: string;
  dateLabel: string;
  timeLabel: string;
  startIso: string;
  endIso: string;
};

type Slot = { start: string; end: string; label: string };

type Props = {
  value: BookingSelection | null;
  onChange: (next: BookingSelection | null) => void;
};

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function monthLabel(year: number, monthIndex: number) {
  return new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric" }).format(
    new Date(year, monthIndex, 1),
  );
}

function buildMonthGrid(year: number, monthIndex: number) {
  const first = new Date(year, monthIndex, 1);
  const startPad = first.getDay();
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const cells: Array<{ day: number | null; dateKey: string | null }> = [];
  for (let i = 0; i < startPad; i++) cells.push({ day: null, dateKey: null });
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ day: d, dateKey: `${year}-${pad(monthIndex + 1)}-${pad(d)}` });
  }
  while (cells.length % 7 !== 0) cells.push({ day: null, dateKey: null });
  return cells;
}

function isPastDateKey(dateKey: string): boolean {
  const today = new Date();
  const key = `${today.getFullYear()}-${pad(today.getMonth() + 1)}-${pad(today.getDate())}`;
  return dateKey < key;
}

function isWeekendDateKey(dateKey: string): boolean {
  const [y, m, d] = dateKey.split("-").map(Number);
  const wd = new Date(y, m - 1, d).getDay();
  return wd === 0 || wd === 6;
}

export default function BookingCalendar({ value, onChange }: Props) {
  const now = new Date();
  const [viewYear, setViewYear] = useState(now.getFullYear());
  const [viewMonth, setViewMonth] = useState(now.getMonth());
  const [selectedDate, setSelectedDate] = useState<string>(value?.dateKey ?? "");
  const [slots, setSlots] = useState<Slot[]>([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [slotError, setSlotError] = useState("");
  const [source, setSource] = useState<"outlook" | "local" | "">("");
  const [timezone, setTimezone] = useState("America/Los_Angeles");

  const cells = useMemo(() => buildMonthGrid(viewYear, viewMonth), [viewYear, viewMonth]);

  useEffect(() => {
    if (!selectedDate) {
      setSlots([]);
      return;
    }
    let cancelled = false;
    setLoadingSlots(true);
    setSlotError("");
    fetch(`/api/availability?date=${encodeURIComponent(selectedDate)}`)
      .then(async (res) => {
        if (!res.ok) throw new Error("Could not load times");
        return res.json() as Promise<{ slots: Slot[]; source: "outlook" | "local"; timezone: string }>;
      })
      .then((data) => {
        if (cancelled) return;
        setSlots(data.slots ?? []);
        setSource(data.source ?? "local");
        setTimezone(data.timezone ?? "America/Los_Angeles");
      })
      .catch(() => {
        if (!cancelled) {
          setSlots([]);
          setSlotError("Could not load available times. Please try another day.");
        }
      })
      .finally(() => {
        if (!cancelled) setLoadingSlots(false);
      });
    return () => {
      cancelled = true;
    };
  }, [selectedDate]);

  const goMonth = (delta: number) => {
    const d = new Date(viewYear, viewMonth + delta, 1);
    setViewYear(d.getFullYear());
    setViewMonth(d.getMonth());
  };

  const pickDate = (dateKey: string) => {
    if (isPastDateKey(dateKey) || isWeekendDateKey(dateKey)) return;
    setSelectedDate(dateKey);
    onChange(null);
  };

  const pickSlot = (slot: Slot) => {
    if (!selectedDate) return;
    const [y, m, d] = selectedDate.split("-").map(Number);
    const dateLabel = new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(new Date(y, m - 1, d));
    onChange({
      dateKey: selectedDate,
      dateLabel,
      timeLabel: slot.label,
      startIso: slot.start,
      endIso: slot.end,
    });
  };

  return (
    <div className="booking-calendar">
      <p className="mb-1.5 text-sm font-medium text-[#191919]">BEST TIMES TO REACH YOU</p>
      <p className="mb-4 text-sm text-[#191919]/55">
        Select a day from the calendar, then choose an available time. Typing is disabled — only open slots can be chosen.
        {source === "outlook"
          ? " Times sync with the DSXEdge Outlook calendar."
          : " Times use business hours and existing bookings."}
      </p>

      <div className="booking-calendar-layout">
        <div className="booking-month-panel">
          <div className="booking-month-header">
            <button type="button" className="booking-nav-btn" onClick={() => goMonth(-1)} aria-label="Previous month">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <p className="booking-month-title">
              <CalendarDays className="h-4 w-4 text-[#114CA8]" aria-hidden="true" />
              {monthLabel(viewYear, viewMonth)}
            </p>
            <button type="button" className="booking-nav-btn" onClick={() => goMonth(1)} aria-label="Next month">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
          <div className="booking-weekday-row" aria-hidden="true">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
              <span key={d}>{d}</span>
            ))}
          </div>
          <div className="booking-day-grid" role="grid" aria-label="Select a day">
            {cells.map((cell, i) => {
              if (!cell.day || !cell.dateKey) return <span key={`e-${i}`} className="booking-day empty" />;
              const disabled = isPastDateKey(cell.dateKey) || isWeekendDateKey(cell.dateKey);
              const selected = selectedDate === cell.dateKey;
              return (
                <button
                  key={cell.dateKey}
                  type="button"
                  role="gridcell"
                  disabled={disabled}
                  aria-selected={selected}
                  className={`booking-day${selected ? " is-selected" : ""}${disabled ? " is-disabled" : ""}`}
                  onClick={() => pickDate(cell.dateKey!)}
                >
                  {cell.day}
                </button>
              );
            })}
          </div>
        </div>

        <div className="booking-slots-panel">
          <div className="booking-slots-header">
            <Clock className="h-4 w-4 text-[#FC5104FA]" aria-hidden="true" />
            <div>
              <p className="text-sm font-semibold text-[#191919]">
                {selectedDate ? "Available times" : "Pick a day first"}
              </p>
              <p className="text-xs text-[#191919]/50">
                {selectedDate
                  ? `${value?.dateLabel || selectedDate} · ${timezone.replace(/_/g, " ")}`
                  : "Weekdays only"}
              </p>
            </div>
          </div>

          {!selectedDate && (
            <p className="booking-slots-empty">Choose a weekday on the calendar to see open times.</p>
          )}
          {selectedDate && loadingSlots && (
            <p className="booking-slots-empty inline-flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Loading open times…
            </p>
          )}
          {selectedDate && !loadingSlots && slotError && (
            <p className="booking-slots-empty text-red-700" role="alert">
              {slotError}
            </p>
          )}
          {selectedDate && !loadingSlots && !slotError && slots.length === 0 && (
            <p className="booking-slots-empty">No open times this day. Please select another day.</p>
          )}
          {selectedDate && !loadingSlots && slots.length > 0 && (
            <div className="booking-slot-grid" role="listbox" aria-label="Available times">
              {slots.map((slot) => {
                const selected = value?.startIso === slot.start;
                return (
                  <button
                    key={slot.start}
                    type="button"
                    role="option"
                    aria-selected={selected}
                    className={`booking-slot${selected ? " is-selected" : ""}`}
                    onClick={() => pickSlot(slot)}
                  >
                    {slot.label}
                  </button>
                );
              })}
            </div>
          )}
          {value && (
            <p className="booking-selection-summary">
              Selected: <strong>{value.dateLabel}</strong> at <strong>{value.timeLabel}</strong>
            </p>
          )}
        </div>
      </div>

      <input type="hidden" name="bestDay" value={value?.dateLabel || ""} readOnly />
      <input type="hidden" name="bestTime" value={value?.timeLabel || ""} readOnly />
      <input type="hidden" name="slotStart" value={value?.startIso || ""} readOnly />
      <input type="hidden" name="slotEnd" value={value?.endIso || ""} readOnly />
    </div>
  );
}
