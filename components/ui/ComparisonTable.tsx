import { Check, Minus } from "lucide-react";

type Column = { key: string; label: string };
type Row = { label: string; values: Record<string, string | boolean> };

type Props = {
  columns: Column[];
  rows: Row[];
  caption?: string;
};

/**
 * Generic comparison/data table matching this document's own visual
 * language: mist borders, violet bold row labels, IBM Plex Mono for any
 * numeric cell. Boolean values render as a check or dash rather than
 * "true"/"false" — for something like a future services-by-tier
 * comparison, where this component's first real use case will likely be.
 */
export function ComparisonTable({ columns, rows, caption }: Props) {
  return (
    <div className="overflow-x-auto rounded-lg border border-mist">
      <table className="w-full border-collapse text-sm">
        {caption && <caption className="sr-only">{caption}</caption>}
        <thead>
          <tr className="bg-violet text-white">
            <th scope="col" className="px-4 py-3 text-left font-data text-xs font-semibold uppercase tracking-wide">
              &nbsp;
            </th>
            {columns.map((col) => (
              <th key={col.key} scope="col" className="px-4 py-3 text-left font-data text-xs font-semibold uppercase tracking-wide">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-cloud"}>
              <th scope="row" className="px-4 py-3 text-left font-semibold text-violet">
                {row.label}
              </th>
              {columns.map((col) => {
                const value = row.values[col.key];
                return (
                  <td key={col.key} className="px-4 py-3 text-charcoal">
                    {typeof value === "boolean" ? (
                      value ? (
                        <Check className="h-4 w-4 text-success" aria-label="Yes" />
                      ) : (
                        <Minus className="h-4 w-4 text-charcoal/40" aria-label="No" />
                      )
                    ) : (
                      <span className="font-data">{value}</span>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
