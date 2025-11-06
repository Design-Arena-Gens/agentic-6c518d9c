import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "مرحباً | بوابة الترحيب",
  description:
    "تجربة تفاعلية ترحب بك وتعرض ملامح منصة عربية حديثة تجمع بين الإلهام والتواصل.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
