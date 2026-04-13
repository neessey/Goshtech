import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "GHOSTECH - L'Invisible, rendu opérationnel",
    description: "GHOSTECH est une association étudiante spécialisée dans l'innovation technologique. Robotique, IA, développement web et mobile.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            <body className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-grow pt-20">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
