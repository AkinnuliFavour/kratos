import { Skeleton } from "@/components/ui/skeleton";

export function ListingSkeleton() {
  return (
    <div className="max-w-[273px] pr-2.5">
      <div className="w-full">
        <div className="animate-pulse">
          <Skeleton className="h-[100px] w-full max-w-[273px] rounded-md" />
          <div className="mt-3 space-y-2">
            <Skeleton className="h-4 w-[70%]" />
            <Skeleton className="h-3 w-[50%]" />
            <Skeleton className="h-3 w-[40%]" />
          </div>
        </div>
      </div>
    </div>
  );
}
