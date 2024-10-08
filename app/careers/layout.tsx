import CareerFooter from "./components/CareerFooter";
import CareerNavBar from "./components/CareerNavBar";
import "../globals.css";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function CareerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CareerNavBar />
        <main className="relative overflow-hidden">{children}</main>

        <CareerFooter />
      </body>
    </html>
  );
}
