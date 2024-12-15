import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { InvoiceWithItems } from "@/types/invoices";
import { DetailItems } from "./detail-items";

interface DetailProps {
  invoice: InvoiceWithItems;
}

export const Detail: React.FC<DetailProps> = ({ invoice }) => {
  return (
    <Card className="mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Invoice Details</CardTitle>
        <div className="text-sm text-gray-500">
          Invoice ID: {invoice.invoiceId}
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-gray-500">Status</div>
            <Badge variant="default">{invoice.status}</Badge>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500">Total Amount</div>
            <div className="text-xl font-bold">
              ${invoice.amount.toFixed(2)}
            </div>
          </div>
        </div>

        <Separator />

        <div>
          <div className="text-lg font-semibold mb-2">Items</div>

          <DetailItems invoice={invoice} />
        </div>
      </CardContent>
    </Card>
  );
};
