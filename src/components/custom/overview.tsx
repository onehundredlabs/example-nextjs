import { KPI } from "./kpi";

export const Overview: React.FC = () => {
  return (
    <div className="flex flex-col justify-center gap-2 lg:flex-row">
      <KPI title="Total Invoices" value="12" />
      <KPI title="Total Amount" value="$250" />
      <KPI title="Most Recent Invoice" value="$10" />
    </div>
  );
};
