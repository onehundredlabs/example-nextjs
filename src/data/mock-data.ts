import { Invoice, InvoicesSummary, InvoiceWithItems } from "@/types/invoices";

export const mockInvoices: Invoice[] = [
  {
    invoiceId: "inv-1",
    status: "Paid",
    method: "Credit Card",
    amount: 200,
  },
  {
    invoiceId: "inv-2",
    status: "Paid",
    method: "Credit Card",
    amount: 50,
  },
];

export const mockInvoicesSummary: InvoicesSummary = {
  totalInvoices: 2,
  totalAmount: 250,
  mostRecentInvoice: 50,
};

export const mockInvoicesWithItems: InvoiceWithItems[] = [
  {
    invoiceId: "inv-1",
    status: "Paid",
    method: "Credit Card",
    amount: 200,
    items: [
      {
        invoiceItemId: "item-1",
        description: "Super Cool Item",
        quantity: 1,
        price: 100,
      },
      {
        invoiceItemId: "item-2",
        description: "Another Super Cool Item",
        quantity: 1,
        price: 100,
      },
    ],
  },
  {
    invoiceId: "inv-2",
    status: "Paid",
    method: "Credit Card",
    amount: 50,
    items: [
      {
        invoiceItemId: "item-1",
        description: "Usual Item",
        quantity: 1,
        price: 50,
      },
    ],
  },
];
