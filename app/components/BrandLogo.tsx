import Image from "next/image";

interface BrandLogoProps {
  className?: string;
  size?: number;
  showWordmark?: boolean;
  priority?: boolean;
  wordmarkClassName?: string;
}

export function BrandLogo({
  className = "",
  size = 32,
  showWordmark = true,
  priority = false,
  wordmarkClassName = "text-base font-semibold tracking-tight text-neutral-900 dark:text-white",
}: BrandLogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <div className="bg-black rounded-lg">
        <Image
          src="/logo-white.png"
          alt="vDeck"
          width={size}
          height={size}
          className="rounded-lg shadow-sm shrink-0 border-0 bg-[#f11c1c00]"
          priority={priority}
        />
      </div>
      {showWordmark && <span className={wordmarkClassName}>vMix Deck</span>}
    </span>
  );
}
