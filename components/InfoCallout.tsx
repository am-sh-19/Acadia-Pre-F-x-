"use client";

import { Info, AlertTriangle, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type CalloutVariant = "info" | "warning" | "success";

interface InfoCalloutProps {
  variant?: CalloutVariant;
  children: React.ReactNode;
  className?: string;
}

const variantConfig: Record<
  CalloutVariant,
  { bg: string; border: string; text: string; Icon: typeof Info }
> = {
  info: {
    bg: "bg-ocean-50",
    border: "border-ocean-200",
    text: "text-ocean-800",
    Icon: Info,
  },
  warning: {
    bg: "bg-cream-50",
    border: "border-cream-300",
    text: "text-amber-800",
    Icon: AlertTriangle,
  },
  success: {
    bg: "bg-forest-50",
    border: "border-forest-200",
    text: "text-forest-800",
    Icon: CheckCircle,
  },
};

export default function InfoCallout({
  variant = "info",
  children,
  className,
}: InfoCalloutProps) {
  const { bg, border, text, Icon } = variantConfig[variant];

  return (
    <div
      className={cn(
        "flex gap-3 p-4 rounded-xl border",
        bg,
        border,
        className
      )}
    >
      <Icon className={cn("w-5 h-5 mt-0.5 shrink-0", text)} />
      <p className={cn("text-sm leading-relaxed", text)}>{children}</p>
    </div>
  );
}
