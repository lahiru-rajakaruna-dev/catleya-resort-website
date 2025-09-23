import type { PropsWithChildren } from "react";

export default function H3(props: PropsWithChildren<{ classes?: string }>) {
  return (
    <h3 className={`mb-4 text-lg font-semibold ${props.classes}`}>
      {props.children}
    </h3>
  );
}
