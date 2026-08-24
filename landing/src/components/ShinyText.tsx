import type { CSSProperties, ReactNode } from "react";

interface ShinyTextProps {
  text?: string;
  children?: ReactNode;
  className?: string;
  speed?: number;
  delay?: number;
  color?: string;
  shineColor?: string;
  spread?: number;
  direction?: "left" | "right";
  yoyo?: boolean;
  pauseOnHover?: boolean;
}

type ShinyTextStyle = CSSProperties & {
  "--shiny-text-color"?: string;
  "--shiny-text-shine"?: string;
  "--shiny-text-spread"?: string;
  "--shiny-text-speed"?: string;
  "--shiny-text-delay"?: string;
};

export default function ShinyText({
  text,
  children,
  className = "",
  speed = 2,
  delay = 0,
  color,
  shineColor = "#ffffff",
  spread = 120,
  direction = "left",
  yoyo = false,
  pauseOnHover = false,
}: ShinyTextProps) {
  const content = text ?? children;
  const visualTest = import.meta.env.VITE_VISUAL_TEST === "true";
  const style: ShinyTextStyle = {
    "--shiny-text-shine": shineColor,
    "--shiny-text-spread": `${spread}deg`,
    "--shiny-text-speed": `${Math.max(speed, 0.01)}s`,
    "--shiny-text-delay": `${Math.max(delay, 0)}s`,
  };

  if (color) style["--shiny-text-color"] = color;

  const classes = [
    "shiny-text",
    `shiny-text--${direction}`,
    yoyo && "shiny-text--yoyo",
    pauseOnHover && "shiny-text--pause-on-hover",
    visualTest && "shiny-text--static",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={classes} style={style}>
      <span className="shiny-text__base">{content}</span>
      <span className="shiny-text__shine" aria-hidden="true">
        {content}
      </span>
    </span>
  );
}
