import { useState } from "react";

import { LocationCard } from "@/entities/location";
import type { Location } from "@/entities/location";
import { Container, SectionEyebrow } from "@/shared/ui";

interface LocationsMapProps {
  locations: Location[];
  defaultSelectedId?: string;
  eyebrow?: { numeral: string; label: string };
  title?: string;
}

export function LocationsMap({ locations, defaultSelectedId, eyebrow, title }: LocationsMapProps) {
  const [selectedId, setSelectedId] = useState(defaultSelectedId ?? locations[0]?.id ?? "");

  const selected = locations.find((l) => l.id === selectedId) ?? locations[0];

  return (
    <section className="bg-sumi-paper py-[var(--space-24)]">
      <Container size="xl">
        {eyebrow && (
          <SectionEyebrow numeral={eyebrow.numeral} label={eyebrow.label} className="mb-3" />
        )}
        {title && (
          <h2 className="mb-12 font-display text-[length:var(--text-h2)] text-text-primary">
            {title}
          </h2>
        )}

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_2fr]">
          {/* Location list */}
          <div className="flex flex-col gap-4">
            {locations.map((location) => (
              <LocationCard
                key={location.id}
                location={location}
                selected={location.id === selectedId}
                onClick={() => setSelectedId(location.id)}
              />
            ))}
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-[var(--radius-lg)] border border-border">
            {selected?.mapEmbedUrl ? (
              <iframe
                key={selectedId}
                src={selected.mapEmbedUrl}
                title={`Bản đồ ${selected.name}`}
                className="h-full min-h-[400px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            ) : (
              <div className="flex min-h-[400px] items-center justify-center bg-border/20 text-text-muted">
                Không có bản đồ
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
