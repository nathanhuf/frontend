import Link from "next/link";
import { Metadata } from "next";
import styles from "../styles/Home.module.css";

import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Arch",
  description: "Arch data platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={styles.container}>
        <nav className="w-full flex gap-4 justify-end items-center mt-4">
          <Link href="/about">About</Link>
        </nav>
        <main className={styles.main}>{children}</main>
        <footer className={styles.footer} />
      </body>
    </html>
  );
}
