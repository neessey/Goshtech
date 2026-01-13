import Link from "next/link";
import { Facebook, Instagram, Linkedin, Github, Youtube, Mail, MapPin, Phone } from "lucide-react";

const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Youtube, href: "#", label: "YouTube" },
];

const navLinks = [
    { href: "/a-propos", label: "À propos de GHOSTECH" },
    { href: "/evenements", label: "Événements à venir" },
    { href: "/contact", label: "Contact" },
];

export default function Footer() {
    return (
        <footer className="bg-[#050505] border-t border-[#18dcd1]/20 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* About Column */}
                    <div>
                        <h3 className="text-2xl font-bold text-[#18dcd1] mb-4 font-['Orbitron']">
                            GHOSTECH
                        </h3>
                        <p className="text-gray-400 mb-6">
                            L&apos;association étudiante pour les passionnés de technologie, d&apos;innovation et de développement. Nous transformons l&apos;invisible en opérationnel.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-10 h-10 rounded-full border border-[#18dcd1]/30 flex items-center justify-center text-[#18dcd1] hover:bg-[#18dcd1] hover:text-black transition-all duration-300"
                                >
                                    <social.icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Column */}
                    <div>
                        <h3 className="text-2xl font-bold text-[#18dcd1] mb-4 font-['Orbitron']">
                            Navigation
                        </h3>
                        <ul className="space-y-3">
                            {navLinks.map((link) => (
                                <li key={link.href} className="flex items-center gap-2">
                                    <span className="text-[#18dcd1]">&#9658;</span>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-[#18dcd1] transition-colors duration-300"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h3 className="text-2xl font-bold text-[#18dcd1] mb-4 font-['Orbitron']">
                            Contact
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Mail size={18} className="text-[#18dcd1] mt-1" />
                                <span className="text-gray-400">
                                    Email :{" "}
                                    <a
                                        href="mailto:contact@ghostech.com"
                                        className="text-[#18dcd1] hover:underline"
                                    >
                                        contact@ghostech.com
                                    </a>
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-[#18dcd1] mt-1" />
                                <span className="text-gray-400">
                                    Adresse : École d&apos;Ingénieurs, Campus Innovation, Paris
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone size={18} className="text-[#18dcd1] mt-1" />
                                <span className="text-gray-400">
                                    Téléphone : +33 1 23 45 67 89
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-[#18dcd1]/20 pt-8">
                    <p className="text-center text-gray-500 text-sm">
                        © {new Date().getFullYear()} GHOSTECH. Tous droits réservés. |{" "}
                        <Link href="#" className="text-[#18dcd1] hover:underline">
                            Politique de confidentialité
                        </Link>{" "}
                        |{" "}
                        <Link href="#" className="text-[#18dcd1] hover:underline">
                            Mentions légales
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    );
}
