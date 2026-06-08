import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const PALETTES = [
  "from-primary to-primary-glow text-primary-foreground",
  "from-blue-600 to-blue-400 text-white",
  "from-violet-600 to-violet-400 text-white",
  "from-emerald-600 to-emerald-400 text-white",
  "from-amber-600 to-amber-400 text-white",
  "from-rose-600 to-rose-400 text-white",
] as const;

function getInitials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

function paletteForName(name: string) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return PALETTES[Math.abs(hash) % PALETTES.length];
}

function avatarSrc(name: string) {
  const seed = encodeURIComponent(name.trim());
  return `https://api.dicebear.com/9.x/notionists/svg?seed=${seed}&backgroundColor=b6e3f4,c0aede,ffd5dc,ffdfbf,d1f4d1`;
}

type TestimonialAvatarProps = {
  name: string;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const SIZES = {
  sm: "h-9 w-9 text-xs",
  md: "h-11 w-11 text-sm",
  lg: "h-14 w-14 text-base",
} as const;

export function TestimonialAvatar({ name, size = "md", className }: TestimonialAvatarProps) {
  return (
    <Avatar className={cn(SIZES[size], "ring-2 ring-background shadow-card", className)}>
      <AvatarImage src={avatarSrc(name)} alt={name} />
      <AvatarFallback
        className={cn("bg-gradient-to-br font-semibold", paletteForName(name))}
        delayMs={0}
      >
        {getInitials(name)}
      </AvatarFallback>
    </Avatar>
  );
}
