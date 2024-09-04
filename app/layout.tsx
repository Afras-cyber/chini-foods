import React from "react";
import "./globals.css";

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 

  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}

export default layout;
