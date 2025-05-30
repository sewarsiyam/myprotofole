import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import { ThemeProvider } from '@/providers/theme-provider';

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "portfolio | sewarDev",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  description: "portfolio website for sewarDev",
};

export default function RootLayout({ children }) {
  const currentYear = new Date().getFullYear();

  return (
    <html lang="en" suppressHydrationWarning >
      <body className={jetBrainsMono.variable}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
          <footer className="container border-t border-dark/10 dark:border-white/10 py-6">
            <div className="container mx-auto">
              <div className="flex justify-center items-center">
                <p className="text-dark/60 dark:text-white/60 hover:text-accent dark:hover:text-white transition-colors">
                  © {currentYear} <span className="font-medium">sewarDev</span>
                  <span className="font-code">/&gt;</span>
                  <span className="text-accent">.</span>
                </p>
              </div>
            </div>
          </footer>
        </ThemeProvider>

      </body>
    </html>
  );
} 
