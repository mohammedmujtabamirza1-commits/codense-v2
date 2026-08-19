import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Codense — Custom AI Agents for Business",
  description:
    "Codense builds custom AI agents designed around real business workflows, from customer support and sales to operations and automation.",
};

const themeScript = `
  try {
    const saved = localStorage.getItem('codense-theme');
    const theme = saved || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  } catch (_) {}
`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body>{children}</body>
    </html>
  );
}
