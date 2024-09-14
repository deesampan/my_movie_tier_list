import localFont from "next/font/local";
import "./globals.css";


//music
import MusicPlayer from "./musicPlayer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "My Movie Tier List🎬",
  description: "All with movies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MusicPlayer />
        {children}
      </body>
    </html>
  );
}
