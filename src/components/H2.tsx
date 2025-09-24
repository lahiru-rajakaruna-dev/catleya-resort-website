import type { PropsWithChildren } from "react";

export default function H2(props: PropsWithChildren<{ classes?: string }>) {
  return (
    <h2 className={`mb-6 text-2xl font-semibold ${props.classes}`}>
      {props.children}
    </h2>
  );
}
