import { mockInvoicesSummary } from "@/data/mock-data";

export async function GET() {
  /**
   * Simulate a 2 second delay
   */
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return Response.json({ ...mockInvoicesSummary });
}
