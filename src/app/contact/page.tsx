"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from "lucide-react";

export default function Contact() {
    const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormStatus("loading");

        try {
            const response = await fetch("https://formspree.io/f/mpwpwvrv", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setFormStatus("success");
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                setFormStatus("error");
            }
        } catch {
            setFormStatus("error");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div>
            {/* Hero Section */}
            <section className="relative py-32 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://ext.same-assets.com/1187505756/3815335003.jpeg')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-black/80" />
                <div className="relative z-10 container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 glow-text">
                        Contactez-nous
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                        Une question, une proposition de partenariat ou envie de rejoindre GHOSTECH ? N&apos;hésitez pas à nous contacter.
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 bg-[#0a0a09]">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div>
                            <h2 className="text-3xl font-bold mb-8 text-[#18dcd1]">
                                Nos Coordonnées
                            </h2>
                            <p className="text-gray-400 mb-8">
                                Vous pouvez nous joindre par email, téléphone ou en passant directement nous voir sur le campus. Nous serons ravis de discuter avec vous.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4 p-4 neon-border rounded-xl">
                                    <div className="w-12 h-12 rounded-full bg-[#18dcd1]/20 flex items-center justify-center flex-shrink-0">
                                        <Mail size={24} className="text-[#18dcd1]" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white mb-1">Email</h3>
                                        <a
                                            href="mailto:contact@ghostech.com"
                                            className="text-[#18dcd1] hover:underline"
                                        >
                                            contact@ghostech.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-4 neon-border rounded-xl">
                                    <div className="w-12 h-12 rounded-full bg-[#18dcd1]/20 flex items-center justify-center flex-shrink-0">
                                        <MapPin size={24} className="text-[#18dcd1]" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white mb-1">Adresse</h3>
                                        <p className="text-gray-400">
                                            École d&apos;Ingénieurs<br />
                                            Campus Innovation<br />
                                            75000 Paris, France
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-4 neon-border rounded-xl">
                                    <div className="w-12 h-12 rounded-full bg-[#18dcd1]/20 flex items-center justify-center flex-shrink-0">
                                        <Phone size={24} className="text-[#18dcd1]" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white mb-1">Téléphone</h3>
                                        <p className="text-gray-400">+33 1 23 45 67 89</p>
                                    </div>
                                </div>
                            </div>

                            {/* Map placeholder */}
                            <div className="mt-8 h-64 rounded-xl overflow-hidden neon-border">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.94722604956!2d2.2770204160125!3d48.85883363933428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2sus!4v1704889123456!5m2!1sen!2sus"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Localisation GHOSTECH"
                                />
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div>
                            <h2 className="text-3xl font-bold mb-8 text-[#18dcd1]">
                                Envoyez-nous un message
                            </h2>

                            {formStatus === "success" ? (
                                <div className="p-8 neon-border rounded-xl text-center">
                                    <CheckCircle size={64} className="text-[#18dcd1] mx-auto mb-4" />
                                    <h3 className="text-2xl font-bold text-white mb-2">Message envoyé !</h3>
                                    <p className="text-gray-400 mb-6">
                                        Merci pour votre message. Nous vous répondrons dans les plus brefs délais.
                                    </p>
                                    <button
                                        type="button"
                                        onClick={() => setFormStatus("idle")}
                                        className="btn-secondary"
                                    >
                                        Envoyer un autre message
                                    </button>
                                </div>
                            ) : (
                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-6 p-8 neon-border rounded-xl"
                                >
                                    {formStatus === "error" && (
                                        <div className="flex items-center gap-3 p-4 bg-red-500/20 border border-red-500 rounded-xl text-red-400">
                                            <AlertCircle size={20} />
                                            <span>Une erreur est survenue. Veuillez réessayer.</span>
                                        </div>
                                    )}

                                    <div>
                                        <label htmlFor="name" className="block text-white mb-2 font-medium">
                                            Nom complet *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-[#050505] border border-[#18dcd1]/30 rounded-xl text-white focus:border-[#18dcd1] focus:outline-none focus:ring-1 focus:ring-[#18dcd1] transition-colors"
                                            placeholder="Votre nom"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-white mb-2 font-medium">
                                            Adresse email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-[#050505] border border-[#18dcd1]/30 rounded-xl text-white focus:border-[#18dcd1] focus:outline-none focus:ring-1 focus:ring-[#18dcd1] transition-colors"
                                            placeholder="votre@email.com"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-white mb-2 font-medium">
                                            Sujet *
                                        </label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-[#050505] border border-[#18dcd1]/30 rounded-xl text-white focus:border-[#18dcd1] focus:outline-none focus:ring-1 focus:ring-[#18dcd1] transition-colors"
                                        >
                                            <option value="">Sélectionnez un sujet</option>
                                            <option value="adhesion">Devenir membre</option>
                                            <option value="partenariat">Proposition de partenariat</option>
                                            <option value="evenement">Question sur un événement</option>
                                            <option value="projet">Proposition de projet</option>
                                            <option value="autre">Autre</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-white mb-2 font-medium">
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={6}
                                            className="w-full px-4 py-3 bg-[#050505] border border-[#18dcd1]/30 rounded-xl text-white focus:border-[#18dcd1] focus:outline-none focus:ring-1 focus:ring-[#18dcd1] transition-colors resize-none"
                                            placeholder="Votre message..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={formStatus === "loading"}
                                        className="btn-primary w-full flex items-center gap-2 justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {formStatus === "loading" ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                                                Envoi en cours...
                                            </>
                                        ) : (
                                            <>
                                                <Send size={18} />
                                                Envoyer le message
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-[#050505]">
                <div className="container mx-auto px-4">
                    <h2 className="section-title mb-16">Questions Fréquentes</h2>

                    <div className="max-w-3xl mx-auto space-y-6">
                        <div className="p-6 neon-border rounded-xl">
                            <h3 className="text-lg font-bold text-[#18dcd1] mb-2">
                                Comment rejoindre GHOSTECH ?
                            </h3>
                            <p className="text-gray-400">
                                Pour rejoindre GHOSTECH, il suffit de remplir le formulaire de contact en sélectionnant &quot;Devenir membre&quot;. Nous organisons également des sessions de recrutement en début d&apos;année universitaire.
                            </p>
                        </div>

                        <div className="p-6 neon-border rounded-xl">
                            <h3 className="text-lg font-bold text-[#18dcd1] mb-2">
                                Les événements sont-ils ouverts à tous ?
                            </h3>
                            <p className="text-gray-400">
                                Oui, la plupart de nos événements sont ouverts à tous les étudiants, même si vous n&apos;êtes pas membre de GHOSTECH. Certains ateliers peuvent toutefois être réservés aux membres.
                            </p>
                        </div>

                        <div className="p-6 neon-border rounded-xl">
                            <h3 className="text-lg font-bold text-[#18dcd1] mb-2">
                                Comment proposer un partenariat ?
                            </h3>
                            <p className="text-gray-400">
                                Si vous représentez une entreprise ou une organisation souhaitant collaborer avec GHOSTECH, contactez-nous via le formulaire en sélectionnant &quot;Proposition de partenariat&quot;.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
