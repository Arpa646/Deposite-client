import type { Metadata } from "next";

import { Providerss } from "../GlobalRedux/provider";
export const metadata: Metadata = {
  title: "BankAccount",
  description: "Account",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>bank</title>
        {/* Add the favicon link here */}
        <link
          rel="icon"
          type="image/svg+xml"
          href="https://wpbingosite.com/wordpress/flacio/wp-content/uploads/2021/12/slider-10-1.jpg"
        />
      </head>
      <body className={`antialiased`}>
     
      <Providerss>
       
            <div className="">{children}</div>
       
        </Providerss>
      </body>
    </html>
  );
}
