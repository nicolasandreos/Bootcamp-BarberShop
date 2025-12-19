import { cn } from "@/lib/utils";

export const PageContainer = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={cn("space-y-12 p-5", className)}>
        {children}
    </div>
  );
}

export const PageSectionTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className="text-sm text-foreground uppercase font-bold">
        {children}
    </h2>
  );
}

export const PageSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="space-y-3">
        {children}
    </section>
  );
}

export const PageSectionScroller = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
        {children}
    </div>
  );
}
