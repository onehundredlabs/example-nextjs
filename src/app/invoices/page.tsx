import { DetailsTable } from "@/components/custom/details-table";

export default async function DetailsPage() {
  const result = await fetch("http://localhost:3001/api/invoices");
  const data = await result.json();

  return <DetailsTable invoices={data} />;
}
