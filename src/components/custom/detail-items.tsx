"use client";

import { InvoiceWithItems } from "@/types/invoices";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Trash2 } from "lucide-react";
import { deleteInvoiceItemAction } from "@/services/delete-invoice-item-action";
import { useTransition } from "react";
import { cn } from "@/lib/utils";

interface DetailItemsProps {
  invoice: InvoiceWithItems;
}

export const DetailItems: React.FC<DetailItemsProps> = ({ invoice }) => {
  const [isPending, startTransition] = useTransition();

  const onDelete = (invoiceItemId: string) => {
    startTransition(async () => {
      await deleteInvoiceItemAction(invoice.invoiceId, invoiceItemId);
    });
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Description</TableHead>
          <TableHead className="text-right">Quantity</TableHead>
          <TableHead className="text-right">Price</TableHead>
          <TableHead className="text-right">Total</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className={cn(isPending && "blur-md animate-pulse")}>
        {invoice.items.map((item, index) => (
          <TableRow key={index}>
            <TableCell>{item.description}</TableCell>
            <TableCell className="text-right">{item.quantity}</TableCell>
            <TableCell className="text-right">
              ${item.price.toFixed(2)}
            </TableCell>
            <TableCell className="text-right">
              ${(item.price * item.quantity).toFixed(2)}
            </TableCell>
            <TableCell className="flex justify-end">
              <Trash2
                className="cursor-pointer"
                onClick={() => onDelete(item.invoiceItemId)}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
