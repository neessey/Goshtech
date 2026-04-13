/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { X, ZoomIn, Calendar, Users, Tag } from "lucide-react";

const categories = ["Tous", "Hackathons", "Formations", "Conférences", "Projets"];

const galleryItems = [
    {
        id: 1,
        title: "Hackathon SmartWart IUA",
        category: "Hackathons",
        date: "2025-2026",
        participants: 100,
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop",
        description: "48 heures d'innovation et de créativité réunissant les meilleurs développeurs du campus.",
        featured: true,
    },
    {
        id: 2,
        title: "Atelier Deep Learning",
        category: "Formations",
        date: "Novembre 2025",
        participants: 30,
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
        description: "Formation intensive sur les réseaux de neurones et l'apprentissage profond.",
        featured: false,
    },
    {
        id: 3,
        title: "Conférence IA & Innovation",
        category: "Conférences",
        date: "Octobre 2025",
        participants: 200,
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
        description: "Exploration des dernières avancées en intelligence artificielle.",
        featured: true,
    },
    {
        id: 4,
        title: "Hackathon AI-Vision",
        category: "Hackathons",
        date: "20-22 Nov. 2025",
        participants: 75,
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
        description: "Système de reconnaissance faciale haute précision développé en 48h.",
        featured: false,
    },
    {
        id: 5,
        title: "Smart Home Hub",
        category: "Projets",
        date: "5 Oct. 2025",
        participants: 40,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
        description: "Interface domotique avancée avec intégration IA pour l'apprentissage des habitudes.",
        featured: false,
    },
    {
        id: 6,
        title: "Bot Assistant Conférence",
        category: "Projets",
        date: "15 Sept. 2025",
        participants: 120,
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
        description: "Assistant IA pour événements gérant Q&A intelligente et plannings dynamiques.",
        featured: false,
    },
    {
        id: 7,
        title: "Sprint UI/UX Design",
        category: "Formations",
        date: "Août 2025",
        participants: 25,
        image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&h=600&fit=crop",
        description: "Workshop intensif sur le design d'interfaces et l'expérience utilisateur.",
        featured: false,
    },
    {
        id: 8,
        title: "Nuit du Code",
        category: "Hackathons",
        date: "Juillet 2025",
        participants: 60,
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop",
        description: "Une nuit entière dédiée au code, à l'innovation et à la camaraderie.",
        featured: true,
    },
    {
        id: 9,
        title: "Talk : Blockchain & Web3",
        category: "Conférences",
        date: "Juin 2025",
        participants: 90,
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop",
        description: "Décryptage des technologies blockchain et des opportunités Web3 en Afrique.",
        featured: false,
    },
];

type GalleryItem = typeof galleryItems[0];

export default function Galerie() {
    const [activeCategory, setActiveCategory] = useState("Tous");
    const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

    const filtered =
        activeCategory === "Tous"
            ? galleryItems
            : galleryItems.filter((item) => item.category === activeCategory);

    return (
        <div>
            {/* Lightbox */}
            {selectedItem && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
                    onClick={() => setSelectedItem(null)}
                >
                    <div
                        className="relative max-w-4xl w-full bg-[#0f0f0e] rounded-2xl overflow-hidden border border-[#18dcd1]/20 shadow-[0_0_60px_rgba(24,220,209,0.15)]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button
                            onClick={() => setSelectedItem(null)}
                            className="absolute top-4 right-4 z-10 p-2 bg-black/60 hover:bg-[#18dcd1]/20 border border-white/10 hover:border-[#18dcd1]/50 rounded-full transition-all duration-200"
                        >
                            <X size={20} className="text-white" />
                        </button>

                        <div className="grid grid-cols-1 md:grid-cols-2">
                            {/* Image */}
                            <div className="relative h-64 md:h-auto">
                                <img
                                    src={selectedItem.image}
                                    alt={selectedItem.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0f0f0e]/60 hidden md:block" />
                                {/* Category badge */}
                                <div className="absolute top-4 left-4 px-3 py-1 bg-[#18dcd1] text-black text-xs font-bold rounded-full uppercase">
                                    {selectedItem.category}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 flex flex-col justify-center">
                                <h3 className="text-2xl font-bold text-[#18dcd1] mb-4 leading-tight">
                                    {selectedItem.title}
                                </h3>
                                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                                    {selectedItem.description}
                                </p>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-gray-400 text-sm">
                                        <div className="w-8 h-8 rounded-lg bg-[#18dcd1]/10 border border-[#18dcd1]/20 flex items-center justify-center">
                                            <Calendar size={14} className="text-[#18dcd1]" />
                                        </div>
                                        {selectedItem.date}
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-400 text-sm">
                                        <div className="w-8 h-8 rounded-lg bg-[#18dcd1]/10 border border-[#18dcd1]/20 flex items-center justify-center">
                                            <Users size={14} className="text-[#18dcd1]" />
                                        </div>
                                        {selectedItem.participants} participants
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-400 text-sm">
                                        <div className="w-8 h-8 rounded-lg bg-[#18dcd1]/10 border border-[#18dcd1]/20 flex items-center justify-center">
                                            <Tag size={14} className="text-[#18dcd1]" />
                                        </div>
                                        {selectedItem.category}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section className="relative py-32 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://ext.same-assets.com/1187505756/1424153247.jpeg')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-black/80" />
                <div className="relative z-10 container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 glow-text">
                        Notre Galerie
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                        Revivez les moments forts de GHOSTECH — hackathons, formations, conférences et projets innovants capturés en images.
                    </p>
                </div>
            </section>

            {/* Filter Tabs */}
            <section className="py-12 bg-[#0a0a09] sticky top-0 z-40 border-b border-white/5">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${activeCategory === cat
                                        ? "bg-[#18dcd1] text-black border-[#18dcd1] shadow-[0_0_20px_rgba(24,220,209,0.4)]"
                                        : "bg-transparent text-gray-400 border-gray-700 hover:border-[#18dcd1]/50 hover:text-[#18dcd1]"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-20 bg-[#0a0a09]">
                <div className="container mx-auto px-4">

                    {/* Stats bar */}
                    <div className="flex justify-between items-center mb-10">
                        <p className="text-gray-500 text-sm">
                            <span className="text-[#18dcd1] font-bold">{filtered.length}</span> photos affichées
                        </p>
                        <p className="text-gray-600 text-xs uppercase tracking-widest">
                            {activeCategory === "Tous" ? "Toutes catégories" : activeCategory}
                        </p>
                    </div>

                    {/* Masonry-style grid */}
                    <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                        {filtered.map((item) => (
                            <div
                                key={item.id}
                                className="break-inside-avoid card-glow rounded-xl overflow-hidden group cursor-pointer relative"
                                onClick={() => setSelectedItem(item)}
                            >
                                {/* Image */}
                                <div className={`relative overflow-hidden ${item.featured ? "h-72" : "h-52"}`}>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    {/* Zoom icon */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="w-12 h-12 rounded-full bg-[#18dcd1]/20 border border-[#18dcd1] flex items-center justify-center backdrop-blur-sm">
                                            <ZoomIn size={20} className="text-[#18dcd1]" />
                                        </div>
                                    </div>

                                    {/* Category badge */}
                                    <div className="absolute top-3 left-3 px-2 py-1 bg-[#18dcd1] text-black text-xs font-bold rounded-full uppercase">
                                        {item.category}
                                    </div>

                                    {/* Featured badge */}
                                    {item.featured && (
                                        <div className="absolute top-3 right-3 px-2 py-1 bg-black/60 border border-[#18dcd1]/50 text-[#18dcd1] text-xs font-bold rounded-full uppercase backdrop-blur-sm">
                                            ★ Featured
                                        </div>
                                    )}

                                    {/* Bottom info on hover */}
                                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                        <h3 className="text-white font-bold text-sm leading-tight mb-1">
                                            {item.title}
                                        </h3>
                                        <div className="flex items-center gap-3 text-gray-300 text-xs">
                                            <span className="flex items-center gap-1">
                                                <Calendar size={10} />
                                                {item.date}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Users size={10} />
                                                {item.participants}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Empty state */}
                    {filtered.length === 0 && (
                        <div className="text-center py-24">
                            <p className="text-gray-600 text-lg">Aucun élément dans cette catégorie.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-[#050505]">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Vous souhaitez rejoindre l&apos;aventure ?
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                        Participez à nos prochains événements et faites partie de l&apos;histoire de GHOSTECH.
                    </p>
                    <a href="/evenements" className="btn-primary inline-flex items-center gap-2">
                        Voir les événements à venir
                    </a>
                </div>
            </section>
        </div>
    );
}