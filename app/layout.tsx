import InitColorSchemeScript from "@mui/joy/InitColorSchemeScript";
import CssBaseline from "@mui/joy/CssBaseline";
import { CssVarsProvider } from "@mui/joy/styles";
import type { Metadata } from "next";
import "@fontsource/inter";
import { ModeToggle } from "./components/mode-toggle";

export const metadata: Metadata = {
  title: "Testing ground",
  description: "An app for testing out projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <body>
        <InitColorSchemeScript />
        <CssVarsProvider>
          {/* <ModeToggle /> */}
          <CssBaseline />
          {children}
        </CssVarsProvider>
      </body>
    </html>
  );
}
