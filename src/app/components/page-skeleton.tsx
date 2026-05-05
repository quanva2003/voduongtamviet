import { Skeleton } from "@/shared/ui";

export function PageSkeleton() {
  return (
    <div className="flex min-h-[70vh] flex-col gap-6 p-8">
      <Skeleton className="h-64 w-full rounded-none" />
      <Skeleton className="mx-auto h-8 w-64" />
      <Skeleton className="mx-auto h-4 w-96" />
    </div>
  );
}
