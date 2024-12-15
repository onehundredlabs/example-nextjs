import { Detail } from "@/components/custom/detail";

export default async function DetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const invoiceId = (await params).id;
  const request = await fetch(
    `http://localhost:3000/api/invoices/${invoiceId}`
  );
  const data = await request.json();

  return <Detail invoice={data} />;
}
