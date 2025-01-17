import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { InvoicesSummary } from "@/types/invoices";

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}

interface InvoiceSummaryKPIProps {
  summary: InvoicesSummary;
}

export function InvoiceSummaryKPI({ summary }: InvoiceSummaryKPIProps) {
  const averageInvoiceAmount = summary.totalAmount / summary.totalInvoices;

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Invoices</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{summary.totalInvoices}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Amount</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {formatCurrency(summary.totalAmount)}
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Most Recent Invoice
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {formatCurrency(summary.mostRecentInvoice)}
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Average Invoice Amount
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {formatCurrency(averageInvoiceAmount)}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
