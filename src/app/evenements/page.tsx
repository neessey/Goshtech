/* eslint-disable @next/next/no-img-element */
"use client";

import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

const upcomingEvents = [
    {
        id: 1,
        title: "Hackathon SmartWart IUA (2)",
        date: "2025-2026",
        time: "09:00 - 18:00",
        location: "Campus IUA Corniche, Abidjan",
        description: "48 heures pour créer une solution innovante. Prix à gagner et mentors professionnels sur place.",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop",
        status: "upcoming",
        participants: 100,
    },
    {
        id: 2,
        title: "Atelier de formation ",
        date: "Date à confirmer",
        time: "A confirmer",
        location: "Campus IUA Corniche, Abidjan",
        description: "Ghost Protocol organise régulièrement des ateliers de formation pratique pour partager le savoir et développer les compétences des étudiants.",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
        status: "upcoming",
        participants: 30,
    },
    {
        id: 3,
        title: "Conférence : L'IA, Technologie et Innovation",
        date: "Date à confirmer",
        time: "A confirmer",
        location: "Campus IUA Corniche, Abidjan",
        description: "Nos experts discutent des dernières avancées de l'IA et de leur impact sur la société.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
        status: "upcoming",
        participants: 200,
    },
];

const pastEvents = [
    {
        id: 4,
        title: "Hackathon AI-Vision : Reconnaissance Faciale",
        date: "20-22 Novembre 2025",
        location: "Campus IUA Corniche, Abidjan",
        description: "Création d'un système de reconnaissance faciale haute précision pour la sécurité d'accès avec détection d'émotions en temps réel.",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
        status: "past",
        participants: 75,
    },
    {
        id: 5,
        title: "Projet Alpha : Smart Home Hub",
        date: "5 Octobre 2025",
        location: "Campus IUA Corniche, Abidjan",
        description: "Développement d'une interface de contrôle domotique avancée via une application mobile avec intégration IA pour l'apprentissage des habitudes.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
        status: "past",
        participants: 40,
    },
    {
        id: 6,
        title: "Bot de Conférence : Assistant Interactif",
        date: "15 Septembre 2025",
        location: "Campus IUA Corniche, Abidjan",
        description: "Un bot assistant IA pour les événements, gérant Q&A intelligente, plannings dynamiques et interactions personnalisées avec les participants.",
        image: " https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
        status: "past",
        participants: 120,
    },
];

export default function Evenements() {
    return (
        <div>
            {/* Hero Section */}
            <section className="relative py-32 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://ext.same-assets.com/1187505756/1424153247.jpeg')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-black/80" />
                <div className="relative z-10 container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 glow-text">
                        Nos Événements
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                        Découvrez les événements passés, en cours et à venir organisés par GHOSTECH. Hackathons, formations, conférences et plus encore.
                    </p>
                </div>
            </section>

            {/* Upcoming Events */}
            <section className="py-20 bg-[#0a0a09]">
                <div className="container mx-auto px-4">
                    <h2 className="section-title mb-4">Événements à Venir</h2>
                    <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
                        Ne manquez pas nos prochains événements ! Inscrivez-vous dès maintenant pour réserver votre place.
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {upcomingEvents.map((event) => (
                            <div
                                key={event.id}
                                className="card-glow rounded-xl overflow-hidden group"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4 px-3 py-1 bg-[#18dcd1] text-black text-xs font-bold rounded-full uppercase">
                                        À venir
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-[#18dcd1] mb-4">
                                        {event.title}
                                    </h3>
                                    <div className="space-y-2 mb-4">
                                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                                            <Calendar size={16} className="text-[#18dcd1]" />
                                            {event.date}
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                                            <Clock size={16} className="text-[#18dcd1]" />
                                            {event.time}
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                                            <MapPin size={16} className="text-[#18dcd1]" />
                                            {event.location}
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                                            <Users size={16} className="text-[#18dcd1]" />
                                            {event.participants} places
                                        </div>
                                    </div>
                                    <p className="text-gray-400 text-sm mb-6">{event.description}</p>
                                    <Link
                                        href="/contact"
                                        className="btn-primary w-full flex items-center gap-2 justify-center text-sm"
                                    >
                                        S&apos;inscrire
                                        <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Past Events */}
            <section className="py-20 bg-[#050505]">
                <div className="container mx-auto px-4">
                    <h2 className="section-title mb-4">Événements Passés</h2>
                    <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
                        Retour sur les événements que nous avons organisés. Merci à tous les participants !
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {pastEvents.map((event) => (
                            <div
                                key={event.id}
                                className="card-glow rounded-xl overflow-hidden opacity-80 hover:opacity-100 transition-opacity duration-300"
                            >
                                <div className="relative h-40 overflow-hidden">
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                    />
                                    <div className="absolute top-4 left-4 px-3 py-1 bg-gray-600 text-white text-xs font-bold rounded-full uppercase">
                                        Terminé
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-white mb-3">
                                        {event.title}
                                    </h3>
                                    <div className="space-y-2 mb-4">
                                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                                            <Calendar size={14} />
                                            {event.date}
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                                            <MapPin size={14} />
                                            {event.location}
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                                            <Users size={14} />
                                            {event.participants} participants
                                        </div>
                                    </div>
                                    <p className="text-gray-500 text-sm">{event.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-[#0a0a09]">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Vous souhaitez organiser un événement avec nous ?
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                        Nous sommes toujours ouverts aux collaborations et partenariats. Contactez-nous pour discuter de vos idées.
                    </p>
                    <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                        Proposer un événement
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </section>
        </div>
    );
}
