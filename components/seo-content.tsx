import { ChevronDown } from "lucide-react"

export type SpecRow = { label: string; value: string }
export type FaqItem = { q: string; a: string }

export function SpecsTable({
  title,
  rows,
  caption,
}: {
  title: string
  rows: SpecRow[]
  caption?: string
}) {
  return (
    <section aria-labelledby="specs-title" className="space-y-4">
      <header className="space-y-1">
        <h2
          id="specs-title"
          className="text-xl sm:text-2xl font-black text-white"
          style={{ letterSpacing: "-0.01em" }}
        >
          {title}
        </h2>
        {caption && (
          <p className="text-sm text-muted-foreground max-w-3xl leading-relaxed">{caption}</p>
        )}
      </header>

      <div className="overflow-hidden rounded-xl border border-white/5 bg-card/50">
        <table className="w-full text-sm">
          <tbody>
            {rows.map((r, i) => (
              <tr
                key={r.label}
                className={
                  i % 2 === 0
                    ? "bg-white/[0.015] border-b border-white/[0.04] last:border-0"
                    : "border-b border-white/[0.04] last:border-0"
                }
              >
                <th
                  scope="row"
                  className="w-[44%] sm:w-[36%] px-4 py-3 text-left text-muted-foreground font-medium align-top"
                >
                  {r.label}
                </th>
                <td className="px-4 py-3 text-white/90 align-top">{r.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export function FaqList({
  title,
  items,
  caption,
}: {
  title: string
  items: FaqItem[]
  caption?: string
}) {
  return (
    <section aria-labelledby="faq-title" className="space-y-4">
      <header className="space-y-1">
        <h2
          id="faq-title"
          className="text-xl sm:text-2xl font-black text-white"
          style={{ letterSpacing: "-0.01em" }}
        >
          {title}
        </h2>
        {caption && (
          <p className="text-sm text-muted-foreground max-w-3xl leading-relaxed">{caption}</p>
        )}
      </header>

      <ol className="space-y-2">
        {items.map((it, i) => (
          <li key={i}>
            <details className="group rounded-xl border border-white/5 bg-card/50 open:bg-card/70 transition-colors">
              <summary className="flex cursor-pointer list-none items-start gap-3 px-4 py-3.5 text-sm font-semibold text-white/95 [&::-webkit-details-marker]:hidden">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-primary/20 text-[11px] font-bold text-primary tabular-nums">
                  {i + 1}
                </span>
                <h3 className="flex-1 text-pretty text-[13px] sm:text-sm font-semibold leading-snug">
                  {it.q}
                </h3>
                <ChevronDown
                  aria-hidden="true"
                  className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180"
                />
              </summary>
              <div className="px-4 pb-4 pl-12 text-[13px] leading-relaxed text-muted-foreground">
                {it.a}
              </div>
            </details>
          </li>
        ))}
      </ol>
    </section>
  )
}

export function SeoContent({
  specsTitle,
  specsCaption,
  specs,
  faqTitle,
  faqCaption,
  faq,
}: {
  specsTitle: string
  specsCaption?: string
  specs: SpecRow[]
  faqTitle: string
  faqCaption?: string
  faq: FaqItem[]
}) {
  return (
    <div className="border-t border-white/5 pt-10 mt-12 space-y-12">
      <SpecsTable title={specsTitle} caption={specsCaption} rows={specs} />
      <FaqList title={faqTitle} caption={faqCaption} items={faq} />
    </div>
  )
}
