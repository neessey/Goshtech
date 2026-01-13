/* eslint-disable @next/next/no-img-element */
"use client";

import { Users, Lightbulb, Rocket, Award, GraduationCap, Heart } from "lucide-react";
import Link from "next/link";

const teamMembers = [
    {
        name: "Membre 1",
        role: "Président",
        image: "",
    },
    {
        name: "Membre 2",
        role: "Vice-Président",
        image: "",
    },
    {
        name: "Membre 3",
        role: "Secrétaire Général",
        image: "",
    },
    {
        name: "Membre 4",
        role: "Responsable Tech",
        image: "",
    },
];

const stats = [
    { icon: Users, value: "50+", label: "Membres actifs" },
    { icon: Rocket, value: "20+", label: "Projets réalisés" },
    { icon: Award, value: "10+", label: "Événements organisés" },
    { icon: GraduationCap, value: "5+", label: "Années d'existence" },
];

const activities = [
    {
        icon: Lightbulb,
        title: "Hackathons",
        description: "Nous organisons des hackathons réguliers pour stimuler la créativité et l'innovation technologique.",
    },
    {
        icon: GraduationCap,
        title: "Formations",
        description: "Des ateliers et formations pour maîtriser les dernières technologies : IA, robotique, développement web.",
    },
    {
        icon: Users,
        title: "Networking",
        description: "Rencontres avec des professionnels du secteur et partenariats avec des entreprises innovantes.",
    },
    {
        icon: Rocket,
        title: "Projets",
        description: "Développement de projets concrets qui ont un impact réel sur notre communauté et au-delà.",
    },
];

export default function APropos() {
    return (
        <div>
            {/* Hero Section */}
            <section className="relative py-32 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://ext.same-assets.com/1187505756/3515925577.jpeg')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-black/80" />
                <div className="relative z-10 container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 glow-text">
                        À Propos de GHOSTECH
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                        Découvrez notre histoire, notre mission et les personnes passionnées qui font vivre notre association.
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20 bg-[#0a0a09]">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="section-title mb-12">Notre Histoire</h2>
                        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                            <p>
                                <span className="glow-text font-bold">GHOSTECH</span> est née de la passion commune d&apos;un groupe d&apos;étudiants pour l&apos;innovation technologique. Fondée sur le campus de notre école d&apos;ingénieurs, notre association s&apos;est donnée pour mission de créer un espace où la technologie et la créativité se rencontrent.
                            </p>
                            <p>
                                Notre nom, GHOSTECH, symbolise notre capacité à transformer l&apos;invisible en réalité tangible. Comme des fantômes du monde numérique, nous donnons vie aux idées les plus audacieuses, repoussant constamment les limites du possible.
                            </p>
                            <p>
                                Aujourd&apos;hui, nous sommes fiers de compter plus de 50 membres actifs, tous unis par la même passion pour la robotique, l&apos;intelligence artificielle, le développement web et mobile, et bien d&apos;autres domaines de pointe.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-[#050505]">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat) => (
                            <div key={stat.label} className="text-center">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#18dcd1]/20 flex items-center justify-center">
                                    <stat.icon size={32} className="text-[#18dcd1]" />
                                </div>
                                <div className="text-4xl md:text-5xl font-bold text-[#18dcd1] mb-2 font-['Orbitron']">
                                    {stat.value}
                                </div>
                                <div className="text-gray-400">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Activities Section */}
            <section className="py-20 bg-[#0a0a09]">
                <div className="container mx-auto px-4">
                    <h2 className="section-title mb-4">Nos Activités</h2>
                    <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
                        GHOSTECH organise de nombreuses activités tout au long de l&apos;année pour promouvoir l&apos;innovation et le partage de connaissances.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {activities.map((activity) => (
                            <div
                                key={activity.title}
                                className="neon-border rounded-xl p-6 bg-[#0a0a09] hover:scale-105 transition-transform duration-300"
                            >
                                <div className="w-14 h-14 mb-4 rounded-full bg-[#18dcd1]/20 flex items-center justify-center">
                                    <activity.icon size={28} className="text-[#18dcd1]" />
                                </div>
                                <h3 className="text-lg font-bold text-[#18dcd1] mb-3">
                                    {activity.title}
                                </h3>
                                <p className="text-gray-400 text-sm">{activity.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 bg-[#050505]">
                <div className="container mx-auto px-4">
                    <h2 className="section-title mb-4">Notre Équipe</h2>
                    <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
                        Découvrez les membres du bureau qui font vivre GHOSTECH au quotidien.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member) => (
                            <div
                                key={member.name}
                                className="card-glow rounded-xl overflow-hidden text-center"
                            >
                                <div className="h-64 overflow-hidden">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-white mb-1">
                                        {member.name}
                                    </h3>
                                    <p className="text-[#18dcd1]">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-[#0a0a09]">
                <div className="container mx-auto px-4 text-center">
                    <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-[#18dcd1]/20 flex items-center justify-center">
                        <Heart size={40} className="text-[#18dcd1]" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Rejoignez l&apos;aventure GHOSTECH
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                        Vous êtes passionné par la technologie ? Rejoignez notre communauté et participez à des projets innovants aux côtés d&apos;autres étudiants motivés.
                    </p>
                    <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                        Devenir Membre
                    </Link>
                </div>
            </section>
        </div>
    );
}
