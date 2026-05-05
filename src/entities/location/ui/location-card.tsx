import { Card, Picture } from "@/shared/ui";

import type { Location } from "../model/types";

interface LocationCardProps {
  location: Location;
  selected?: boolean;
  onClick?: () => void;
}

export function LocationCard({ location, selected = false, onClick }: LocationCardProps) {
  return (
    <Card
      variant={selected ? "featured" : "zen"}
      padding="sm"
      className="cursor-pointer overflow-hidden transition-shadow hover:shadow-md"
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => e.key === "Enter" && onClick() : undefined}
    >
      <Picture
        src={location.coverImage}
        alt={location.name}
        aspectRatio="16/9"
        className="mb-3 overflow-hidden rounded-[var(--radius-md)]"
      />
      <div className="px-1 pb-1">
        <h3 className="font-display text-[length:var(--text-h3)] text-text-primary">
          {location.name}
        </h3>
        <p className="mt-1 text-[length:var(--text-body-sm)] text-text-secondary">
          {location.address}
        </p>
        {location.hours && (
          <p className="mt-1 text-[length:var(--text-body-sm)] text-gold">{location.hours}</p>
        )}
        {location.phone && (
          <a
            href={`tel:${location.phone}`}
            className="mt-1 block text-[length:var(--text-body-sm)] text-shu-seal"
          >
            {location.phone}
          </a>
        )}
      </div>
    </Card>
  );
}
