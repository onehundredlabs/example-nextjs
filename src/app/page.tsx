import { Overview } from "@/components/custom/overview";

export default async function OverviewPage() {
  const result = await fetch("http://localhost:3000/api/invoices/summary");
  const data = await result.json();

  return (
    <Overview
      totalInvoices={data.totalInvoices}
      totalAmount={data.totalAmount}
      mostRecentInvoice={data.mostRecentInvoice}
    />
  );
}
