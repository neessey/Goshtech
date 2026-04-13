/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { Calendar, Users, Target, Eye, Heart, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const slides = [
    {
        id: 0,
        tag: "Hackathons",
        title: "GHOSTECH",
        subtitle: "Des idées aux solutions, nous sommes les architectes du numérique.",
        description: "Participez à nos hackathons intenses de 48h et donnez vie à vos idées les plus ambitieuses avec des mentors professionnels.",
        cta: { label: "Voir les événements", href: "/evenements", icon: "calendar" },
        cta2: { label: "Nous rejoindre", href: "/contact", icon: "users" },
        accent: "#18dcd1",
    },
    {
        id: 1,
        tag: "Intelligence Artificielle",
        title: "L'IA au cœur de l'innovation",
        subtitle: "Explorez les frontières de l'intelligence artificielle.",
        description: "Formations, conférences et projets concrets autour du Machine Learning, Deep Learning et des technologies IA de demain.",
        cta: { label: "Nos formations", href: "/evenements", icon: "calendar" },
        cta2: { label: "Nous rejoindre", href: "/contact", icon: "users" },
        accent: "#18dcd1",
    },
    {
        id: 2,
        tag: "Projets & Réalisations",
        title: "Créer, Innover, Impacter",
        subtitle: "Transformons ensemble les concepts en réalités tangibles.",
        description: "Smart Home, Reconnaissance Faciale, Bots IA... Rejoignez une communauté de développeurs passionnés qui changent le monde.",
        cta: { label: "Nos projets", href: "/evenements", icon: "calendar" },
        cta2: { label: "Devenir membre", href: "/contact", icon: "users" },
        accent: "#18dcd1",
    },
];

const projects = [
    {
        title: "Projet Alpha : Smart Home Hub",
        description: "Interface domotique avancée avec intégration IA pour l'apprentissage des habitudes.",
        tags: ["Mobile", "IoT", "IA"],
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    },
    {
        title: "Hackathon AI-Vision : Reconnaissance Faciale",
        description: "Système de reconnaissance faciale haute précision avec détection d'émotions en temps réel.",
        tags: ["IA", "Vision", "Sécurité"],
        image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600&h=400&fit=crop",
    },
    {
        title: "Bot de Conférence : Assistant Interactif",
        description: "Bot assistant IA pour événements, gérant Q&A intelligente et plannings dynamiques.",
        tags: ["Robotique", "IA", "Web"],
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
    },
];

const values = [
    {
        icon: Target,
        title: "Notre Mission",
        description: "Promouvoir la culture technologique, encourager la créativité et développer des solutions innovantes à travers hackathons, ateliers et formations.",
    },
    {
        icon: Eye,
        title: "Notre Vision",
        description: "Être un moteur d'innovation, former les leaders technologiques de demain et impacter positivement la société par nos réalisations.",
    },
    {
        icon: Heart,
        title: "Nos Valeurs",
        description: "Collaboration, Excellence, Innovation, Curiosité, Partage des connaissances et Impact sociétal positif.",
    },
];

// ─── PARTICLE BACKGROUND ─────────────────────────────────────────────────────

class Particle {
    x: number; y: number; size: number;
    speedX: number; speedY: number; opacity: number;
    canvasWidth: number; canvasHeight: number;

    constructor(cw: number, ch: number) {
        this.canvasWidth = cw; this.canvasHeight = ch;
        this.x = Math.random() * cw; this.y = Math.random() * ch;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 0.8 - 0.4;
        this.speedY = Math.random() * 0.8 - 0.4;
        this.opacity = Math.random() * 0.6 + 0.3;
    }

    update(mx: number, my: number) {
        this.x += this.speedX; this.y += this.speedY;
        const dx = mx - this.x, dy = my - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
            const a = Math.atan2(dy, dx);
            this.x -= Math.cos(a) * 2; this.y -= Math.sin(a) * 2;
        }
        if (this.x > this.canvasWidth) this.x = 0;
        if (this.x < 0) this.x = this.canvasWidth;
        if (this.y > this.canvasHeight) this.y = 0;
        if (this.y < 0) this.y = this.canvasHeight;
    }

    draw(ctx: CanvasRenderingContext2D) {
        const g = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 3);
        g.addColorStop(0, `rgba(24,220,209,${this.opacity})`);
        g.addColorStop(0.5, `rgba(24,220,209,${this.opacity * 0.3})`);
        g.addColorStop(1, 'rgba(24,220,209,0)');
        ctx.fillStyle = g;
        ctx.beginPath(); ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = `rgba(255,255,255,${this.opacity * 0.8})`;
        ctx.beginPath(); ctx.arc(this.x, this.y, this.size * 0.5, 0, Math.PI * 2); ctx.fill();
    }
}

function AnimatedBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        const canvas = canvasRef.current; if (!canvas) return;
        const ctx = canvas.getContext('2d'); if (!ctx) return;
        let raf: number, particles: Particle[] = [], mx = 0, my = 0;

        const init = () => {
            particles = [];
            const n = Math.floor((canvas.width * canvas.height) / 12000);
            for (let i = 0; i < n; i++) particles.push(new Particle(canvas.width, canvas.height));
        };
        const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; init(); };
        resize(); window.addEventListener('resize', resize);

        const animate = () => {
            ctx.fillStyle = 'rgba(5,5,5,1)'; ctx.fillRect(0, 0, canvas.width, canvas.height);
            // grid
            ctx.strokeStyle = 'rgba(24,220,209,0.03)'; ctx.lineWidth = 1;
            for (let x = 0; x < canvas.width; x += 50) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke(); }
            for (let y = 0; y < canvas.height; y += 50) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke(); }
            particles.forEach(p => { p.update(mx, my); p.draw(ctx); });
            // connections
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y;
                    const d = Math.sqrt(dx * dx + dy * dy);
                    if (d < 150) {
                        const op = 0.8 * (1 - d / 150);
                        const g = ctx.createLinearGradient(particles[i].x, particles[i].y, particles[j].x, particles[j].y);
                        g.addColorStop(0, `rgba(24,220,209,${op})`);
                        g.addColorStop(0.5, `rgba(138,43,226,${op * 0.8})`);
                        g.addColorStop(1, `rgba(24,220,209,${op})`);
                        ctx.strokeStyle = g; ctx.lineWidth = 1.5;
                        ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y); ctx.stroke();
                    }
                }
            }
            raf = requestAnimationFrame(animate);
        };
        animate();

        const onMouse = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
        window.addEventListener('mousemove', onMouse);
        return () => { window.removeEventListener('resize', resize); window.removeEventListener('mousemove', onMouse); cancelAnimationFrame(raf); };
    }, []);
    return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}

// ─── HERO SLIDER ─────────────────────────────────────────────────────────────

function HeroSlider() {
    const [current, setCurrent] = useState(0);
    const [animating, setAnimating] = useState(false);
    const autoRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const goTo = useCallback((idx: number) => {
        if (animating) return;
        setAnimating(true);
        setTimeout(() => {
            setCurrent(idx);
            setAnimating(false);
        }, 400);
    }, [animating]);

    const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
    const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

    // Auto-play
    useEffect(() => {
        autoRef.current = setTimeout(next, 6000);
        return () => { if (autoRef.current) clearTimeout(autoRef.current); };
    }, [current, next]);

    const slide = slides[current];

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Particle canvas */}
            <AnimatedBackground />

            {/* Slide background image */}
            <div
                className={`absolute inset-0 bg-cover bg-center z-[1] transition-opacity duration-700 ${animating ? "opacity-0" : "opacity-100"}`}
            />

            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-black/5 z-[2]" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#0a0a09] z-[2]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#18dcd1]/8 rounded-full blur-3xl z-[2]" />

            {/* Slide content */}
            <div
                className={`relative z-20 container mx-auto px-4 text-center transition-all duration-500 ${animating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}
            >
                {/* Tag */}
                <div className="inline-flex items-center gap-2 mb-6">
                    <span className="w-8 h-px bg-[#18dcd1]" />
                    <span className="text-[#18dcd1] text-sm font-semibold uppercase tracking-widest">
                        {slide.tag}
                    </span>
                    <span className="w-8 h-px bg-[#18dcd1]" />
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 glow-text">
                    {slide.title}
                </h1>

                {/* Subtitle */}
                <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-4 font-medium">
                    {slide.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm md:text-base text-gray-400 max-w-xl mx-auto mb-10">
                    {slide.description}
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href={slide.cta.href} className="btn-primary flex items-center gap-2 justify-center">
                        <Calendar size={18} />
                        {slide.cta.label}
                    </Link>
                    <Link href={slide.cta2.href} className="btn-secondary flex items-center gap-2 justify-center">
                        <Users size={18} />
                        {slide.cta2.label}
                    </Link>
                </div>
            </div>

            {/* Prev / Next arrows */}
            <button
                onClick={prev}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/40 border border-[#18dcd1]/30 hover:border-[#18dcd1] hover:bg-[#18dcd1]/10 flex items-center justify-center text-white transition-all duration-200"
            >
                <ChevronLeft size={20} />
            </button>
            <button
                onClick={next}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/40 border border-[#18dcd1]/30 hover:border-[#18dcd1] hover:bg-[#18dcd1]/10 flex items-center justify-center text-white transition-all duration-200"
            >
                <ChevronRight size={20} />
            </button>

            {/* Dot navigation */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goTo(i)}
                        className={`transition-all duration-300 rounded-full ${i === current
                            ? "w-8 h-2 bg-[#18dcd1] shadow-[0_0_10px_rgba(24,220,209,0.8)]"
                            : "w-2 h-2 bg-gray-600 hover:bg-[#18dcd1]/50"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const t = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(t);
    }, []);

    return (
        <div className="relative">
            {/* Preloader */}
            <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-all duration-500 ${loading ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
                <div className="relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="w-16 h-16 border-4 border-cyan-700 border-t-transparent rounded-full animate-spin" />
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="w-28 h-28 border-4 border-cyan-500 border-b-transparent rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }} />
                    </div>
                    <div className="relative z-10 text-3xl font-bold text-cyan-500 glow-text mt-0">GHOSTECH</div>
                </div>
            </div>

            <div>
                {/* ── Hero Slider ── */}
                <HeroSlider />

                {/* ── About ── */}
                <section className="py-20 bg-[#0a0a09]">
                    <div className="container mx-auto px-4">
                        <h2 className="section-title mb-12">Qui sommes-nous ?</h2>
                        <p className="text-center text-gray-300 max-w-3xl mx-auto mb-16 text-lg">
                            <span className="glow-text font-bold">GHOSTECH</span> est une association étudiante passionnée par l&apos;innovation numérique. Nous explorons la robotique, l&apos;IA, le développement web et mobile, en transformant les idées en projets concrets.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {values.map((item) => (
                                <div key={item.title} className="neon-border rounded-xl p-8 bg-[#0a0a09] hover:scale-105 transition-transform duration-300">
                                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#18dcd1]/20 flex items-center justify-center">
                                        <item.icon size={32} className="text-[#18dcd1]" />
                                    </div>
                                    <h3 className="text-xl font-bold text-center mb-4 text-[#18dcd1]">{item.title}</h3>
                                    <p className="text-gray-400 text-center">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Projects ── */}
                <section className="py-20 bg-[#050505]">
                    <div className="container mx-auto px-4">
                        <h2 className="section-title mb-4">Nos Dernières Réalisations</h2>
                        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
                            Découvrez nos projets les plus innovants qui repoussent les limites de la technologie.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {projects.map((project) => (
                                <div key={project.title} className="card-glow rounded-xl overflow-hidden">
                                    <div className="h-48 overflow-hidden">
                                        <img src={project.image} alt={project.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-lg font-bold text-[#18dcd1] mb-3">{project.title}</h3>
                                        <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tags.map((tag) => (
                                                <span key={tag} className="text-xs px-3 py-1 rounded-full bg-[#18dcd1]/20 text-[#18dcd1] border border-[#18dcd1]/30">#{tag}</span>
                                            ))}
                                        </div>
                                        <button type="button" className="btn-secondary w-full flex items-center gap-2 justify-center text-sm py-2">
                                            <ArrowRight size={16} /> Voir le projet
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-12">
                            <Link href="/evenements" className="btn-primary inline-flex items-center gap-2">
                                <Calendar size={18} /> Explorer toutes nos réalisations
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ── CTA ── */}
                <section className="py-20 bg-gradient-to-b from-[#0a0a09] to-[#050505] relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://ext.same-assets.com/1187505756/3815335003.jpeg')] bg-cover bg-center opacity-10" />
                    <div className="container mx-auto px-4 relative z-10">
                        <h2 className="section-title mb-4">Prêt à nous rejoindre ou à collaborer ?</h2>
                        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-12">
                            Que vous soyez étudiant passionné, partenaire potentiel ou simplement curieux, GHOSTECH est fait pour vous.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
                            <Link href="/contact" className="btn-primary animate-pulse-glow flex items-center gap-2 justify-center">Contactez-nous</Link>
                            <Link href="/a-propos" className="btn-secondary flex items-center gap-2 justify-center">Devenir Membre</Link>
                            <Link href="/contact" className="btn-secondary flex items-center gap-2 justify-center">Devenir Partenaire</Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}