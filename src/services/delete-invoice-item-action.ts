"use server";

import { revalidatePath } from "next/cache";

export const deleteInvoiceItemAction = async (
  invoiceId: string,
  invoiceItemId: string
) => {
  await fetch(
    `http://localhost:3001/api/invoices/${invoiceId}/items/${invoiceItemId}`,
    {
      method: "DELETE",
    }
  );
  revalidatePath(`/invoices/${invoiceId}`);
};
