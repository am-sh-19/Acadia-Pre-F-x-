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
  { bg: string; border: string; text: string; iconColor: string; Icon: typeof Info }
> = {
  info: {
    bg: "bg-cream-100",
    border: "border-forest-300",
    text: "text-forest-800",
    iconColor: "text-forest-600",
    Icon: Info,
  },
  warning: {
    bg: "bg-sunrise-50",
    border: "border-sunrise-300",
    text: "text-sunrise-700",
    iconColor: "text-sunrise-500",
    Icon: AlertTriangle,
  },
  success: {
    bg: "bg-forest-100",
    border: "border-forest-300",
    text: "text-forest-800",
    iconColor: "text-forest-600",
    Icon: CheckCircle,
  },
};

export default function InfoCallout({
  variant = "info",
  children,
  className,
}: InfoCalloutProps) {
  const { bg, border, text, iconColor, Icon } = variantConfig[variant];

  return (
    <div
      className={cn(
        "flex gap-3 p-4 rounded-xl border-2",
        bg,
        border,
        className
      )}
    >
      <Icon className={cn("w-5 h-5 mt-0.5 shrink-0", iconColor)} />
      <p className={cn("text-sm leading-relaxed font-medium", text)}>{children}</p>
    </div>
  );
}
