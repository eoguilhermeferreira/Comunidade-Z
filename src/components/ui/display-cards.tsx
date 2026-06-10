"use client";

import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

interface DisplayCardProps {
  className?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  date?: string;
  iconClassName?: string;
  titleClassName?: string;
}

function DisplayCard({
  className,
  icon = <Sparkles className="size-4 text-white/80" />,
  title = "Featured",
  description = "Discover amazing content",
  date = "Just now",
  iconClassName = "text-white",
  titleClassName = "text-white",
}: DisplayCardProps) {
  return (
    <div
      className={cn(
        "relative flex h-36 w-full max-w-[22rem] flex-col justify-between rounded-xl border-2 bg-muted/70 backdrop-blur-sm px-4 py-3 transition-all duration-700 [&>*]:flex [&>*]:items-center [&>*]:gap-2",
        "md:-skew-y-[8deg] md:after:absolute md:after:-right-1 md:after:top-[-5%] md:after:h-[110%] md:after:w-[20rem] md:after:bg-gradient-to-l md:after:from-background md:after:to-transparent md:after:content-[''] md:hover:border-white/20 md:hover:bg-muted",
        className
      )}
    >
      <div>
        <span className="relative inline-block rounded-full bg-white/15 p-1">
          {icon}
        </span>
        <p className={cn("text-lg font-medium", titleClassName)}>{title}</p>
      </div>
      <p className="whitespace-nowrap text-lg">{description}</p>
      <p className="text-muted-foreground">{date}</p>
    </div>
  );
}

interface DisplayCardsProps {
  cards?: DisplayCardProps[];
}

export default function DisplayCards({ cards }: DisplayCardsProps) {
  const defaultCards = [
    {
      className:
        "md:[grid-area:stack] md:hover:-translate-y-10 md:before:absolute md:before:w-[100%] md:before:outline-1 md:before:rounded-xl md:before:outline-border md:before:h-[100%] md:before:content-[''] md:before:bg-blend-overlay md:before:bg-background/50 md:grayscale-[100%] md:hover:before:opacity-0 md:before:transition-opacity md:before:duration-700 md:hover:grayscale-0 md:before:left-0 md:before:top-0",
    },
    {
      className:
        "md:[grid-area:stack] md:translate-x-16 md:translate-y-10 md:hover:-translate-y-1 md:before:absolute md:before:w-[100%] md:before:outline-1 md:before:rounded-xl md:before:outline-border md:before:h-[100%] md:before:content-[''] md:before:bg-blend-overlay md:before:bg-background/50 md:grayscale-[100%] md:hover:before:opacity-0 md:before:transition-opacity md:before:duration-700 md:hover:grayscale-0 md:before:left-0 md:before:top-0",
    },
    {
      className:
        "md:[grid-area:stack] md:translate-x-32 md:translate-y-20 md:hover:translate-y-10",
    },
  ];

  const displayCards = cards || defaultCards;

  return (
    <div className="flex w-full max-w-[22rem] flex-col gap-4 opacity-100 animate-in fade-in-0 duration-700 md:grid md:max-w-none md:[grid-template-areas:'stack'] md:place-items-center md:gap-0">
      {displayCards.map((cardProps, index) => (
        <DisplayCard key={index} {...cardProps} />
      ))}
    </div>
  );
}
