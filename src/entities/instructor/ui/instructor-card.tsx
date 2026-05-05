import { useState } from "react";

import { Card, KanjiAccent, Link, Picture } from "@/shared/ui";

import type { Instructor } from "../model/types";

interface InstructorCardProps {
  instructor: Instructor;
}

export function InstructorCard({ instructor }: InstructorCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <Card variant="zen" padding="sm" className="overflow-hidden">
      <div
        className="mb-4 overflow-hidden rounded-[var(--radius-md)]"
        style={{ aspectRatio: "3/4" }}
      >
        {imgError ? (
          <div className="flex h-full w-full items-center justify-center bg-sumi-paper">
            <KanjiAccent char="師" size="xl" position="inline" />
          </div>
        ) : (
          <Picture
            src={instructor.photo}
            alt={instructor.name}
            aspectRatio="3/4"
            imgClassName="object-cover object-top"
            onError={() => setImgError(true)}
          />
        )}
      </div>
      <div className="px-2 pb-2">
        <p className="mb-0.5 text-[length:var(--text-eyebrow)] tracking-[0.15em] text-text-muted uppercase">
          {instructor.title}
        </p>
        <h3 className="font-display text-[length:var(--text-h3)] text-text-primary">
          {instructor.name}
        </h3>
        <p className="mt-1 line-clamp-2 text-[length:var(--text-body-sm)] text-text-secondary">
          {instructor.bio}
        </p>
        <p className="mt-1 text-[length:var(--text-body-sm)] text-gold">{instructor.beltRank}</p>
        <Link
          to={`/instructors/${instructor.slug}`}
          className="mt-3 inline-block text-[length:var(--text-body-sm)] text-shu-seal"
        >
          Xem chi tiết →
        </Link>
      </div>
    </Card>
  );
}
