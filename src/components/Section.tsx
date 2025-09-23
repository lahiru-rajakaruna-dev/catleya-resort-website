import type { PropsWithChildren } from "react";

export default function Section(props: PropsWithChildren<{ id: string }>) {
  return (
    <section
      id={props.id}
      className="w-full h-fit"
    >
      <div className="w-full h-fit pt-8">{props.children}</div>
    </section>
  );
}
