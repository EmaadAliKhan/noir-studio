import * as React from "react";

function parseInline(text: string): React.ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-medium text-ink">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

export function BodyRenderer({ body }: { body: string }) {
  const blocks = body.split(/\n\n+/).filter(Boolean);

  return (
    <div className="space-y-5">
      {blocks.map((block, i) => {
        const trimmed = block.trim();

        if (trimmed.startsWith("## ")) {
          return (
            <h2
              key={i}
              className="font-display text-2xl md:text-3xl font-medium tracking-tight text-ink mt-10 first:mt-0 mb-4"
            >
              {trimmed.slice(3)}
            </h2>
          );
        }

        if (trimmed.startsWith("### ")) {
          return (
            <h3
              key={i}
              className="font-display text-xl font-medium tracking-tight text-ink mt-8 first:mt-0 mb-3"
            >
              {trimmed.slice(4)}
            </h3>
          );
        }

        return (
          <p
            key={i}
            className="text-ink-2 text-base md:text-lg leading-relaxed"
          >
            {parseInline(trimmed)}
          </p>
        );
      })}
    </div>
  );
}
