"use client";
import { Globe, Zap, Cpu, Briefcase, GraduationCap, Users, FlaskConical, Globe2, Rocket, CheckCircle, ArrowRight } from 'lucide-react';
import Link from "next/link";
import Image from "next/image";


const partners = [
    {
        image: "/images/part1.jpeg",
        name: "AIESEC",
        subtitle: "Le plus grand réseau mondial de jeunes leaders",
        description: "AIESEC est la plus grande organisation étudiante au monde, offrant des opportunités de leadership et d'échanges internationaux à plus de 100,000 jeunes chaque année.",
        advantages: [
            "Accompagnement pour l'organisation d'événements étudiants",
            "Accès aux programmes de leadership et stages internationaux",
            "Formations en soft skills et développement personnel",
            "Connexion à un réseau global de jeunes innovateurs",
            "Collaboration sur des projets à dimension internationale"
        ],
        color: "#18dcd1"
    },
    {
        image: "/images/part2.jpeg",
        name: "ERANOVE ACADEMY",
        subtitle: "Formation et innovation dans le secteur de l'énergie",
        description: "ERANOVE ACADEMY est un acteur majeur dans la formation et l'innovation dans le secteur de l'énergie, développant les compétences pour la transition énergétique.",
        advantages: [
            "Création de projets liés à la gestion intelligente de l'énergie",
            "Organisation du Hackathon SmartWatt IUA 2025",
            "Expertise technique et mentorat pour les projets étudiants",
            "Exposition aux enjeux réels de l'industrie énergétique",
            "Accès à des ressources et équipements spécialisés"
        ],
        color: "#18dcd1"
    },
    {
        image: "/images/part3.jpeg",
        name: "HELECTRO",
        subtitle: "Solutions électriques et technologiques innovantes",
        description: "HELECTRO est une entreprise spécialisée dans les solutions électriques et technologiques innovantes, offrant une expertise de pointe en automatisation et contrôle.",
        advantages: [
            "Intégration de solutions technologiques avancées dans nos projets",
            "Travail sur des projets pratiques avec du matériel professionnel",
            "Soutien logistique et technique lors des événements",
            "Accès à des équipements et technologies de pointe",
            "Mentorat par des experts de l'industrie"
        ],
        color: "#18dcd1"
    }
];

const benefits = [
    {
        icon: Rocket,
        title: "Accélération des Projets",
        description: "Accès à des ressources, expertises et infrastructures pour concrétiser nos projets étudiants."
    },
    {
        icon: GraduationCap,
        title: "Formation et Mentorat",
        description: "Opportunités de formation, mentorat et accompagnement par des experts de l'industrie."
    },
    {
        icon: Users,
        title: "Réseau Professionnel",
        description: "Élargissement du réseau professionnel et connexions avec des leaders de l'industrie tech."
    },
    {
        icon: Briefcase,
        title: "Opportunités de Carrière",
        description: "Accès privilégié à des stages, emplois et programmes de développement professionnel chez nos partenaires."
    },
    {
        icon: FlaskConical,
        title: "Innovation Collaborative",
        description: "Collaboration sur des projets innovants qui répondent à des défis réels de l'industrie et de la société."
    },
    {
        icon: Globe2,
        title: "Impact International",
        description: "Participation à des projets et initiatives à dimension internationale grâce à nos partenaires globaux."
    }
];

export default function Evenements() {
    return (
        <div>
            {/* Hero Section */}
            <section className="relative py-32 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-black/80" />
                <div className="relative z-10 container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 glow-text">
                        Nos Partenaires
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                        Des alliances stratégiques pour renforcer l&apos;innovation et offrir des opportunités uniques à nos membres
                    </p>
                </div>
            </section>

            {/* Upcoming Events */}
            <section className="py-20 bg-[#0a0a09]">
                <div className="container mx-auto px-4">
                    <h2 className="section-title mb-4">Partenariats stratégiques</h2>
                    <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
                        Découvrez nos partenaires qui partagent notre vision d&apos;innovation et d&apos;excellence technologique.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {partners.map((partner, index) => (
                            <div
                                key={index}
                                className="bg-black border border-[#18dcd1]/50 rounded-xl p-8 hover:border-[#18dcd1]/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#18dcd1]/20"
                            >
                                {/* Icon */}
                                <div className="w-36 h-36 mx-auto mb-6 flex items-center justify-center">
                                    <div className="relative h-40 w-full">
                                        <Image
                                            src={partner.image}
                                            alt={partner.name}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>

                                {/* Name */}
                                <h3 className="text-2xl font-bold text-[#18dcd1] text-center mb-2">
                                    {partner.name}
                                </h3>

                                {/* Subtitle */}
                                <p className="text-gray-400 text-sm text-center mb-6 italic">
                                    {partner.subtitle}
                                </p>

                                {/* Description */}
                                <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                                    {partner.description}
                                </p>

                                {/* Advantages */}
                                <div className="mb-6">
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="text-[#18dcd1]">👍</div>
                                        <h4 className="text-[#18dcd1] font-semibold">Avantages du partenariat</h4>
                                    </div>
                                    <ul className="space-y-2">
                                        {partner.advantages.map((advantage, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-gray-400 text-sm">
                                                <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                                                <span>{advantage}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Buttons */}
                                <div className="space-y-3">
                                    <button className="w-full bg-[#18dcd1] hover:bg-[#15b8aa] text-black font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105">
                                        EN SAVOIR PLUS
                                    </button>
                                    <button className="w-full border-2 border-[#18dcd1] text-[#18dcd1] hover:bg-[#18dcd1] hover:text-black font-semibold py-3 px-6 rounded-xl transition-all duration-300">
                                        VOIR LES PROJETS CONJOINTS
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Past Events */}
            <section className="relative py-32 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-black/80" />
                <div className="relative container mx-auto px-4">
                    <h2 className="section-title mb-4">Avantages des Partenariats</h2>
                    <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
                        En collaborant avec nos partenaires, nous offrons à nos membres une multitude d&apos;avantages qui stimulent leur croissance professionnelle et personnelle.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className=" bg-black/80 backdrop-blur-sm rounded-xl p-8 hover:border-[#18dcd1]/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#18dcd1]/20"
                            >
                                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-[#18dcd1]/10 rounded-full">
                                    <benefit.icon size={32} className="text-[#18dcd1]" />
                                </div>
                                <h3 className="text-xl font-bold text-[#18dcd1] text-center mb-4">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-400 text-center text-sm leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-[#0a0a09]">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Devenez Partenaire de GHOSTECH
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                        Rejoignez-nous pour co-créer des opportunités uniques, stimuler l&apos;innovation et façonner l&apos;avenir de la technologie avec une communauté dynamique d&apos;étudiants passionnés.
                    </p>
                    <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                        Contactez-Nous
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </section>
        </div>
    );
}
