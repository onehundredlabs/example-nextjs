import { Detail } from "@/components/custom/detail";

export default async function DetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const invoiceId = (await params).id;

  return <Detail id={Number(invoiceId)} />;
}
