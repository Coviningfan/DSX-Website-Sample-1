import type { CaseStudy } from "@/lib/types";

export const caseStudies: CaseStudy[] = [
  {
    id: "synology",
    title: "Synology Inc.",
    category: "Enterprise — Technology",
    location: "Global",
    summary:
      "DSX consolidated 100,000+ minutes/month onto a single 3CX enterprise deployment with capacity-based trunks and CRM integration.",
    excerpt:
      "Global NAS leader processing over 100,000 voice minutes/month across sales, support, and partners. The incumbent carrier's per-minute pricing scaled badly and adding capacity meant contract amendments.",
    heroImage: "",
    challenge:
      "100,000+ minutes of voice traffic monthly. Per-minute and per-seat pricing that scaled badly. Rigid queue routing. Adding capacity required contract renegotiation.",
    solution:
      "3CX enterprise deployment with capacity-based DSX trunks. Department-aware call-flow routing. CRM integration. Capacity sized for headroom, not headcount.",
    results: [
      { metric: "46%", label: "Monthly spend reduction" },
      { metric: "50%", label: "Added capacity headroom" },
      { metric: "16%", label: "Lower cost vs legacy carrier" },
    ],
    tags: ["enterprise", "technology", "crm-integration"],
    featured: true,
  },
  {
    id: "law-office-bonner",
    title: "Law Office of Michael H. Bonner",
    category: "Small Business — Legal",
    location: "California, USA",
    summary:
      "California business law practice cut telecom costs 65% with a single 3CX deployment including off-site softphones and SIP trunking.",
    excerpt:
      "Paying for a legacy hosted PBX with per-extension fees, separate conferencing, and limited mobility. Cross-border client calls were expensive and partners couldn't move seamlessly between office, conference room, and home.",
    heroImage: "",
    challenge:
      "Legacy hosted PBX with per-extension fees. Separate conferencing. Limited mobility. Expensive cross-border calls. Partners juggling forwarding rules between locations.",
    solution:
      "3CX deployment on DSX backbone. Off-site softphones for every attorney. Unified conference room endpoint. SIP trunking sized to actual international call volume. Completed in under two weeks with zero downtime.",
    results: [
      { metric: "65%", label: "Monthly cost reduction" },
      { metric: "$199/mo", label: "Single bill replaces legacy" },
      { metric: "2 weeks", label: "Migration with zero downtime" },
    ],
    tags: ["legal", "small-business", "cost-reduction"],
    featured: false,
  },
  {
    id: "synergy-homeopathic",
    title: "Synergy Homeopathic",
    category: "International — Healthcare Software",
    location: "Multi-region",
    summary:
      "Distributed global team achieved 64% cost savings with unified call flow, regional DIDs, and follow-the-sun routing rules.",
    excerpt:
      "Team spread across multiple countries with customers everywhere. Regional phone numbers, expensive international forwarding, and inconsistent voicemail-to-email behavior between offices.",
    heroImage: "",
    challenge:
      "Distributed team across multiple countries. Expensive international forwarding. Inconsistent voicemail-to-email between offices. Regional phone number contracts everywhere.",
    solution:
      "Single 3CX tenant with regional DIDs routing into one unified call flow. Softphones for every team member. Follow-the-sun routing rules. Consistent voicemail and recording across all regions.",
    results: [
      { metric: "64%", label: "Monthly cost reduction" },
      { metric: "Multi", label: "Regional numbers, one contract" },
      { metric: "24/7", label: "Follow-the-sun coverage" },
    ],
    tags: ["international", "healthcare", "remote-teams"],
    featured: true,
  },
];
