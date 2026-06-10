import { brand } from "../data/benchmarkData";

export function WaterDropIcon({ className = "w-8 h-8" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 0C12 0 2 14 2 21C2 26.5228 6.47715 31 12 31C17.5228 31 22 26.5228 22 21C22 14 12 0 12 0Z"
        fill="#1B7F9E"
      />
    </svg>
  );
}

export default function Logo({ variant = "light", className = "" }) {
  const textColor = variant === "light" ? "text-white" : "text-culligan-deep";

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <WaterDropIcon className="w-7 h-7" />
      <span className={`font-headline font-extrabold text-xl tracking-tight ${textColor}`}>
        {brand.companyName}
      </span>
    </div>
  );
}
