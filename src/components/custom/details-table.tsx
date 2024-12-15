"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Invoice } from "@/types/invoices";
import { useRouter } from "next/navigation";

interface DetailProps {
  invoices: Invoice[];
}

export const DetailsTable: React.FC<DetailProps> = ({ invoices }) => {
  const router = useRouter();

  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoiceId}>
            <TableCell
              onClick={() => router.push(`/invoices/${invoice.invoiceId}`)}
              className="font-medium underline cursor-pointer"
            >
              {invoice.invoiceId}
            </TableCell>
            <TableCell>{invoice.status}</TableCell>
            <TableCell>{invoice.method}</TableCell>
            <TableCell className="text-right">${invoice.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
