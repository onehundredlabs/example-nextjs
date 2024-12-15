import { mockInvoicesWithItems } from "@/data/mock-data";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;

  /**
   * Simulate a 2 second delay
   */
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const dataById = mockInvoicesWithItems.find(
    (invoice) => invoice.invoiceId === id
  );

  return Response.json(dataById);
}
