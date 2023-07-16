import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "The Mars' Logbook",
  description: "Mars Blog",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;1,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
