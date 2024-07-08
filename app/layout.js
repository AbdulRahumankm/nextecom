
import "./globals.css";



export const metadata = {
  title: "NextEcomm app",
  description: "Ecomm",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
