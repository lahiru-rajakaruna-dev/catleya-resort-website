import type { PropsWithChildren } from "react";

export default function H1(props: PropsWithChildren<{ classes?: string }>) {
  return (
    <h1 className={`mb-4 text-4xl font-bold ${props.classes}`}>
      {props.children}
    </h1>
  );
}
