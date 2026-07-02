import { 
  Percent, 
  HeartPulse, 
  Calculator, 
  Type, 
  Code, 
  Palette, 
  Calendar, 
  Briefcase, 
  CheckSquare, 
  ShieldCheck, 
  RefreshCw,
  Clock,
  TrendingUp,
  Cpu
} from "lucide-react";

export interface CategoryInfo {
  name: string;
  slug: string;
  description: string;
  iconName: string; // Lucide icon name to allow static indexing
  color: string; // Tailwind tint classes
  bgGradient: string; // Tailwind background gradient classes
}

export const categories: CategoryInfo[] = [
  {
    name: "Finance",
    slug: "finance",
    description: "Mortgages, loan amortizations, tax deductions, and interest payments.",
    iconName: "TrendingUp",
    color: "text-emerald-500 border-emerald-500/20 bg-emerald-500/5",
    bgGradient: "from-emerald-500/10 to-teal-500/10",
  },
  {
    name: "Health & Fitness",
    slug: "health",
    description: "Body mass index, biological metrics, and fitness calculations.",
    iconName: "HeartPulse",
    color: "text-rose-500 border-rose-500/20 bg-rose-500/5",
    bgGradient: "from-rose-500/10 to-orange-500/10",
  },
  {
    name: "Mathematics",
    slug: "math",
    description: "Percentages, fractions, trigonometry, and scientific arithmetic.",
    iconName: "Calculator",
    color: "text-indigo-500 border-indigo-500/20 bg-indigo-500/5",
    bgGradient: "from-indigo-500/10 to-violet-500/10",
  },
  {
    name: "Text & Writing",
    slug: "text",
    description: "Word counts, case conversions, and alphanumeric formatting utilities.",
    iconName: "Type",
    color: "text-amber-500 border-amber-500/20 bg-amber-500/5",
    bgGradient: "from-amber-500/10 to-yellow-500/10",
  },
  {
    name: "Developer Tools",
    slug: "developer",
    description: "Code formatters, regex helpers, encoders, and programmer utilities.",
    iconName: "Code",
    color: "text-cyan-500 border-cyan-500/20 bg-cyan-500/5",
    bgGradient: "from-cyan-500/10 to-blue-500/10",
  },
  {
    name: "Color Utilities",
    slug: "color",
    description: "RGB, Hex, HSL space converters, and palette configurations.",
    iconName: "Palette",
    color: "text-purple-500 border-purple-500/20 bg-purple-500/5",
    bgGradient: "from-purple-500/10 to-fuchsia-500/10",
  },
  {
    name: "Time & Date",
    slug: "time",
    description: "Date gaps, age statistics, and countdown configurations.",
    iconName: "Calendar",
    color: "text-sky-500 border-sky-500/20 bg-sky-500/5",
    bgGradient: "from-sky-500/10 to-cyan-500/10",
  },
  {
    name: "Business & Commerce",
    slug: "business",
    description: "GST calculations, profit margins, and corporate finance parameters.",
    iconName: "Briefcase",
    color: "text-blue-500 border-blue-500/20 bg-blue-500/5",
    bgGradient: "from-blue-500/10 to-indigo-500/10",
  },
  {
    name: "Productivity",
    slug: "productivity",
    description: "Task matrices, checklists, and time management trackers.",
    iconName: "CheckSquare",
    color: "text-teal-500 border-teal-500/20 bg-teal-500/5",
    bgGradient: "from-teal-500/10 to-emerald-500/10",
  },
  {
    name: "Security",
    slug: "security",
    description: "Entropy checks, password creators, and hashes generation.",
    iconName: "ShieldCheck",
    color: "text-violet-500 border-violet-500/20 bg-violet-500/5",
    bgGradient: "from-violet-500/10 to-purple-500/10",
  },
  {
    name: "Converters",
    slug: "conversion",
    description: "Unit metrics, physical dimensions, and volume ratios.",
    iconName: "RefreshCw",
    color: "text-pink-500 border-pink-500/20 bg-pink-500/5",
    bgGradient: "from-pink-500/10 to-rose-500/10",
  }
];

export function getCategoryIcon(name: string) {
  switch (name) {
    case "TrendingUp": return TrendingUp;
    case "HeartPulse": return HeartPulse;
    case "Calculator": return Calculator;
    case "Type": return Type;
    case "Code": return Code;
    case "Palette": return Palette;
    case "Calendar": return Calendar;
    case "Briefcase": return Briefcase;
    case "CheckSquare": return CheckSquare;
    case "ShieldCheck": return ShieldCheck;
    case "RefreshCw": return RefreshCw;
    case "Clock": return Clock;
    case "Percent": return Percent;
    default: return Cpu;
  }
}
