export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 py-8 flex flex-col items-center gap-3">
        <h3 className="text-lg font-semibold tracking-tight">Modern Walk</h3>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Modern Walk. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

