import React from "react";

interface CrossPatternProps {
  className?: string;
  color?: string;
  opacity?: number;
  size?: number;
}

export const CrossPattern: React.FC<CrossPatternProps> = ({
  className = "",
  color = "#DD0B14",
  opacity = 0.07,
  size = 48,
}) => {
  return (
    <div
      className={`pointer-events-none absolute inset-0 z-0 ${className}`}
      style={{
        opacity: opacity,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='${size}' height='${size}' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='${encodeURIComponent(
          color
        )}' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M16 4h8v12h12v8H24v12h-8V24H4v-8h12V4z'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
      }}
    />
  );
};

export const SingleCrossGraphic: React.FC<{ className?: string; size?: number; color?: string }> = ({
  className = "",
  size = 120,
  color = "#DD0B14",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={`pointer-events-none ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M38 10H62V38H90V62H62V90H38V62H10V38H38V10Z"
        fill={color}
        fillOpacity="0.12"
        stroke={color}
        strokeOpacity="0.25"
        strokeWidth="3"
        strokeDasharray="6 4"
      />
    </svg>
  );
};
