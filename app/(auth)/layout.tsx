import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vault",
  description: "Vault is amodern banking platform",
  icons: {
    icon: "/icons/logo.svg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
        {children}
    </main>
  );
}
