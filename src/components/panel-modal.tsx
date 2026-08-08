import { useEffect, useRef } from "react";
import { X, Phone, MessageCircle, Shield, Cpu, Network, Brain } from "lucide-react";

interface PanelModalProps {
  layer: number | null;
  onClose: () => void;
}

const CONTENT = [
  {
    num: "01",
    label: "Communications",
    icon: Phone,
    headline: "Every channel. Always on.",
    body: "DSX Edge handles inbound and outbound voice calls, SMS text conversations, and email — simultaneously, across any number of lines. Callers never get a busy signal. Voicemails become searchable email transcripts. Your team works from anywhere on any device.",
    bullets: [
      "Unlimited concurrent calls — no more missed revenue",
      "SMS + voice on the same number, same conversation thread",
      "Voicemail-to-email transcription, no dial-in codes",
      "Microsoft 365 and Google Workspace integration",
    ],
  },
  {
    num: "02",
    label: "Intelligence",
    icon: Brain,
    headline: "AI that knows your business.",
    body: "The AI is trained on your products, services, pricing, policies, and business rules. It doesn't just answer calls — it diagnoses problems, qualifies leads, schedules appointments, processes payments, and follows up. Every interaction improves the model.",
    bullets: [
      "Learns your catalog, pricing, and policies — no generic scripts",
      "Diagnoses customer issues before escalating to your team",
      "Qualifies leads, books appointments, processes payments",
      "Gets smarter with every conversation — continuous improvement",
    ],
  },
  {
    num: "03",
    label: "Infrastructure",
    icon: Network,
    headline: "Enterprise telecom, simplified.",
    body: "DSX Edge replaces your legacy phone system with a cloud-native platform. SIP trunking, call routing, extensions, IVR menus — everything managed from one dashboard. Your existing numbers port over. Your team keeps their workflow.",
    bullets: [
      "Full cloud PBX — no on-premise hardware",
      "Port your existing numbers — no disruption",
      "Custom IVR menus and call routing rules",
      "Real-time dashboard: calls, transcripts, analytics",
    ],
  },
];

export default function PanelModal({ layer, onClose }: PanelModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (layer !== null) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [layer]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  if (layer === null) return null;

  const item = CONTENT[layer];
  const Icon = item.icon;

  return (
    <dialog
      ref={dialogRef}
      className="fixed inset-0 z-[100] m-auto bg-transparent p-0 border-0 backdrop:bg-[#191919]/40 open:flex open:items-center open:justify-center"
      onClick={(e) => {
        if (e.target === dialogRef.current) onClose();
      }}
    >
      <div className="relative max-w-lg w-[calc(100vw-2rem)] bg-white rounded-2xl p-8 shadow-2xl animate-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-[#191919]/40 hover:text-[#191919] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-2">
          <span className="text-[#191919]/30 text-xs font-medium">0{item.num}</span>
          <span className="text-[#191919]/20 text-xs">/</span>
          <span className="text-xs font-medium uppercase tracking-[0.15em] text-[#0084FF]">{item.label}</span>
        </div>

        <div className="flex items-start gap-3 mb-4">
          <div className="p-2 bg-[#0084FF]/10 rounded-xl mt-0.5">
            <Icon className="w-5 h-5 text-[#0084FF]" />
          </div>
          <h3 className="text-xl font-bold text-[#114CA8] leading-snug">{item.headline}</h3>
        </div>

        <p className="text-[#191919]/70 text-sm leading-relaxed mb-6">{item.body}</p>

        <ul className="space-y-2">
          {item.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-[#191919]/70">
              <span className="mt-1.5 w-1 h-1 rounded-full bg-[#0084FF]/50 shrink-0" />
              {b}
            </li>
          ))}
        </ul>

        <div className="mt-6 pt-4 border-t border-gray-100">
          <a
            href="tel:844-379-3343"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[#0084FF] rounded-xl hover:bg-[#0084FF]/90 transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            Call 844-DSX-Edge for a live demo
          </a>
        </div>
      </div>
    </dialog>
  );
}
