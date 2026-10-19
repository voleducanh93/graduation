import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Lời mời tốt nghiệp · Võ Lê Đức Anh",
  description: "Thân mời bạn đến chung vui trong ngày lễ tốt nghiệp của Võ Lê Đức Anh, ngành Kỹ thuật phần mềm, Đại học FPT TP. Hồ Chí Minh.",
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="vi"><body>{children}</body></html>;
}
