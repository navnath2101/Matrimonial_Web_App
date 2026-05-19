import { useId } from "react";

interface CircularProgressProps {
  value: number;
  size?: number;
  strokeWidth?: number;
  color?: "purple" | "blue" | "green" | "orange";
}

export function CircularProgress({
  value,
  size = 80,
  strokeWidth = 6,
  color = "purple",
}: CircularProgressProps) {
  const uniqueId = useId();
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (value / 100) * circumference;

  const colors = {
    purple: {
      gradient: ["#a855f7", "#3b82f6"],
      text: "text-purple-600",
    },
    blue: {
      gradient: ["#3b82f6", "#06b6d4"],
      text: "text-blue-600",
    },
    green: {
      gradient: ["#10b981", "#059669"],
      text: "text-green-600",
    },
    orange: {
      gradient: ["#f97316", "#ea580c"],
      text: "text-orange-600",
    },
  };

  const gradientId = `gradient-${uniqueId}`;

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="transform -rotate-90">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colors[color].gradient[0]} />
            <stop offset="100%" stopColor={colors[color].gradient[1]} />
          </linearGradient>
        </defs>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#e5e7eb"
          strokeWidth={strokeWidth}
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={`url(#${gradientId})`}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-500"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className={`font-semibold ${colors[color].text}`}
          style={{ fontSize: size * 0.25 }}
        >
          {value}%
        </span>
      </div>
    </div>
  );
}
