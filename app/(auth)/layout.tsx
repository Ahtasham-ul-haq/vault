import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Vault",
  description: "Vault is amodern banking platform",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full justify-between font-inter">
      {children}
      <div className="auth-asset">
        <Image
          src="/icons/auth-image.svg"
          alt="auth-image"
          width={500}
          height={500}
        />
      </div>
    </main>
  );
}
