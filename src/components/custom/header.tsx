import Link from "next/link";

export const Header: React.FC = () => {
  return (
    <header className="container mx-auto py-4 px-4 flex gap-4 border-b border-gray-200">
      <Link href="/">Overview</Link>
      <Link href="/invoices" legacyBehavior passHref>
        Invoices
      </Link>
    </header>
  );
};
