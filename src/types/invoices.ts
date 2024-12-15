export interface Invoice {
  invoiceId: string;
  status: string;
  method: string;
  amount: number;
}

export interface InvoiceWithItems extends Invoice {
  items: InvoiceItems[];
}

export interface InvoiceItems {
  invoiceItemId: string;
  description: string;
  quantity: number;
  price: number;
}

export interface InvoicesSummary {
  totalInvoices: number;
  totalAmount: number;
  mostRecentInvoice: number;
}
