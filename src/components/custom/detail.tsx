import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface DetailProps {
  id: number;
}

const mockInvoiceItems = [
  { description: "Web Hosting (Oct)", quantity: 1, price: 200 },
  { description: "Additional Storage", quantity: 2, price: 25 },
];

export const Detail: React.FC<DetailProps> = ({ id }) => {
  const invoiceStatus = "Paid";
  const invoiceTotal = mockInvoiceItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <Card className="mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Invoice Details</CardTitle>
        <div className="text-sm text-gray-500">Invoice ID: {id}</div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-gray-500">Status</div>
            <Badge
              variant={invoiceStatus === "Paid" ? "default" : "destructive"}
            >
              {invoiceStatus}
            </Badge>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500">Total Amount</div>
            <div className="text-xl font-bold">${invoiceTotal.toFixed(2)}</div>
          </div>
        </div>

        <Separator />

        <div>
          <div className="text-lg font-semibold mb-2">Items</div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Description</TableHead>
                <TableHead className="text-right">Quantity</TableHead>
                <TableHead className="text-right">Price</TableHead>
                <TableHead className="text-right">Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockInvoiceItems.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.description}</TableCell>
                  <TableCell className="text-right">{item.quantity}</TableCell>
                  <TableCell className="text-right">
                    ${item.price.toFixed(2)}
                  </TableCell>
                  <TableCell className="text-right">
                    ${(item.price * item.quantity).toFixed(2)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};
