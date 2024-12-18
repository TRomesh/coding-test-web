import React from "react";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="container mx-auto p-4">
        <main>{children}</main>
      </body>
    </html>
  );
}
