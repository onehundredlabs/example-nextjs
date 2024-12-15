import { KPI } from "./kpi";

interface OverviewProps {
  totalInvoices: number;
  totalAmount: number;
  mostRecentInvoice: number;
}

export const Overview: React.FC<OverviewProps> = ({
  totalInvoices,
  totalAmount,
  mostRecentInvoice,
}) => {
  return (
    <div className="flex flex-col justify-center gap-2 lg:flex-row">
      <KPI title="Total Invoices" value={totalInvoices} />
      <KPI title="Total Amount" value={totalAmount} />
      <KPI title="Most Recent Invoice" value={mostRecentInvoice} />
    </div>
  );
};
