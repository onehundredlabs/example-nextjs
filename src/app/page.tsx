import { InvoiceSummaryKPI } from "@/components/custom/invoice-summary-kpi";

export default async function OverviewPage() {
  const result = await fetch("http://localhost:3001/api/invoices/summary");
  const data = await result.json();

  return <InvoiceSummaryKPI summary={data} />;
}
