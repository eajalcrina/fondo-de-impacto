import { Fragment } from "react";

/** Título que sube palabra por palabra (la clase "in" la agrega Motion al entrar en pantalla). */
export function Words({ as: Tag = "h2", className, style, text }: { as?: "h1" | "h2" | "h3"; className?: string; style?: React.CSSProperties; text: string }) {
  const words = text.trim().split(/\s+/);
  return (
    <Tag className={`${className ?? ""} tr`} style={style}>
      {words.map((w, i) => (
        <Fragment key={i}>
          <span className="w">
            <span style={{ transitionDelay: `${i * 40}ms` }}>{w}</span>
          </span>
          {i < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </Tag>
  );
}
