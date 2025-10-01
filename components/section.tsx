import Separator from "./separator";
import { ReactNode } from "react";

export function Section({ title, action, children }:{
  title: string; action?: ReactNode; children: ReactNode;
}) {
  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">{title}</h2>
        {action}
      </div>
      <Separator />
      {children}
    </section>
  );
}
