import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export interface ChangelogEntry {
  badge?: string;
  date: string;
  description: string;
  title: string;
}

interface Team2Props {
  className?: string;
  description?: string;
  entries?: ChangelogEntry[];
  title?: string;
}

const defaultEntries: ChangelogEntry[] = [
  {
    date: "2026",
    title: "Lançamento da Comunidade Z",
    description:
      "O início do movimento. Os primeiros membros se conectam e dão forma à comunidade.",
    badge: "PRÓXIMO",
  },
  {
    date: "2026",
    title: "Primeiros Eventos Online",
    description:
      "Encontros virtuais, workshops e sessões de networking para acelerar conexões.",
  },
  {
    date: "2027",
    title: "Primeira Palestra Presencial",
    description:
      "A comunidade sai do digital para o presencial com o primeiro grande encontro.",
  },
  {
    date: "2027",
    title: "Expansão Nacional",
    description:
      "Novos hubs, novas cidades e novas oportunidades de networking por todo o país.",
  },
  {
    date: "2028",
    title: "Grande Conferência Comunidade Z",
    description:
      "O maior evento do movimento, reunindo lideranças, mentores e membros de todo o Brasil.",
  },
];

export default function Team2({
  title = "O Futuro da Comunidade Z",
  description = "Uma timeline do movimento que está apenas começando",
  entries = defaultEntries,
  className,
}: Team2Props) {
  return (
    <section className={cn("w-full px-4 py-16", className)}>
      <div className="mx-auto max-w-2xl">
        {(title || description) && (
          <div className="mb-10 text-center">
            {title && (
              <h2 className="mb-3 font-bold text-2xl tracking-tight md:text-3xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-muted-foreground text-sm">{description}</p>
            )}
          </div>
        )}

        <div className="flex flex-col gap-4">
          {entries.map((entry, idx) => (
            <div key={entry.title}>
              <Card className="relative bg-card/60 backdrop-blur-sm border-white/10">
                {entry.badge && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="text-[10px]">{entry.badge}</Badge>
                  </div>
                )}
                <CardHeader className="pb-2">
                  <div className="mb-1 text-muted-foreground text-xs tracking-widest uppercase">
                    {entry.date}
                  </div>
                  <CardTitle className="text-base">{entry.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {entry.description}
                  </CardDescription>
                </CardContent>
              </Card>
              {idx < entries.length - 1 && <Separator className="mt-4" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
