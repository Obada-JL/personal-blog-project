import { Noto_Kufi_Arabic } from "next/font/google";
import "./globals.css";

const notoKufi = Noto_Kufi_Arabic({
  variable: "--font-noto-kufi",
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "مدونة واعية",
  description: "مدونة واعية - استكشاف التكنولوجيا ونمط الحياة والعافية من خلال عدسة مدروسة",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${notoKufi.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
