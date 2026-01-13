/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Calendar, Users, Target, Eye, Heart, ArrowRight } from "lucide-react";

const projects = [
    {
        title: "Projet Alpha : Smart Home Hub",
        description: "Développement d'une interface de contrôle domotique avancée via une application mobile avec intégration IA pour l'apprentissage des habitudes.",
        tags: ["Mobile", "IoT", "IA"],
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    },
    {
        title: "Hackathon AI-Vision : Reconnaissance Faciale",
        description: "Création d'un système de reconnaissance faciale haute précision pour la sécurité d'accès avec détection d'émotions en temps réel.",
        tags: ["IA", "Vision", "Sécurité"],
        image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600&h=400&fit=crop",
    },
    {
        title: "Bot de Conférence : Assistant Interactif",
        description: "Un bot assistant IA pour les événements, gérant Q&A intelligente, plannings dynamiques et interactions personnalisées avec les participants.",
        tags: ["Robotique", "IA", "Web"],
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
    },
];

const values = [
    {
        icon: Target,
        title: "Notre Mission",
        description: "Promouvoir la culture technologique, encourager la créativité et développer des solutions innovantes à travers des hackathons, ateliers et formations avancées.",
    },
    {
        icon: Eye,
        title: "Notre Vision",
        description: "Être un moteur d'innovation, former les leaders technologiques de demain et impacter positivement la société par nos réalisations révolutionnaires.",
    },
    {
        icon: Heart,
        title: "Nos Valeurs",
        description: "Collaboration, Excellence, Innovation, Curiosité, Partage des connaissances et Impact sociétal positif.",
    },
];

class Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    opacity: number;
    canvasWidth: number;
    canvasHeight: number;

    constructor(canvasWidth: number, canvasHeight: number) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 0.8 - 0.4;
        this.speedY = Math.random() * 0.8 - 0.4;
        this.opacity = Math.random() * 0.6 + 0.3;
    }

    update(mouseX: number, mouseY: number) {
        this.x += this.speedX;
        this.y += this.speedY;

        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 150) {
            const angle = Math.atan2(dy, dx);
            this.x -= Math.cos(angle) * 2;
            this.y -= Math.sin(angle) * 2;
        }

        if (this.x > this.canvasWidth) this.x = 0;
        if (this.x < 0) this.x = this.canvasWidth;
        if (this.y > this.canvasHeight) this.y = 0;
        if (this.y < 0) this.y = this.canvasHeight;
    }

    draw(ctx: CanvasRenderingContext2D) {
        // Particule avec glow effect
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 3);
        gradient.addColorStop(0, `rgba(24, 220, 209, ${this.opacity})`);
        gradient.addColorStop(0.5, `rgba(24, 220, 209, ${this.opacity * 0.3})`);
        gradient.addColorStop(1, 'rgba(24, 220, 209, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
        ctx.fill();

        // Centre lumineux
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity * 0.8})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 0.5, 0, Math.PI * 2);
        ctx.fill();
    }
}

// Composant Background Animé
function AnimatedBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];
        let mouseX = 0;
        let mouseY = 0;

        const initParticles = () => {
            particles = [];
            const particleCount = Math.floor((canvas.width * canvas.height) / 12000);
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle(canvas.width, canvas.height));
            }
        };

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const drawConnections = () => {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 150) {
                        const opacity = 0.8 * (2 - distance / 150);

                        // Ligne avec gradient
                        const gradient = ctx.createLinearGradient(
                            particles[i].x, particles[i].y,
                            particles[j].x, particles[j].y
                        );
                        gradient.addColorStop(0, `rgba(24, 220, 209, ${opacity})`);
                        gradient.addColorStop(0.5, `rgba(138, 43, 226, ${opacity * 0.8})`);
                        gradient.addColorStop(1, `rgba(24, 220, 209, ${opacity})`);

                        ctx.strokeStyle = gradient;
                        ctx.lineWidth = 1.5;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
        };

        const drawGrid = () => {
            const gridSize = 50;
            ctx.strokeStyle = 'rgba(24, 220, 209, 0.03)';
            ctx.lineWidth = 1;

            for (let x = 0; x < canvas.width; x += gridSize) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, canvas.height);
                ctx.stroke();
            }

            for (let y = 0; y < canvas.height; y += gridSize) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(canvas.width, y);
                ctx.stroke();
            }
        };

        const animate = () => {
            ctx.fillStyle = 'rgba(5, 5, 5, 1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            drawGrid();

            particles.forEach(particle => {
                particle.update(mouseX, mouseY);
                particle.draw(ctx);
            });

            drawConnections();

            animationFrameId = requestAnimationFrame(animate);
        };
        animate();

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}

export default function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simuler le chargement de la page
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="relative">
            {/* Preloader */}
            <div
                className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-all duration-500 ${loading ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
                    }`}
            >
                <div className="relative">
                    {/* Cercles animés */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="w-16 h-16 border-4 border-cyan-700 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div
                            className="w-28 h-28 border-4 border-cyan-500 border-b-transparent rounded-full animate-spin"
                            style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}
                        />
                    </div>

                    {/* Texte */}
                    <div className="relative z-10 text-3xl font-bold text-cyan-500 glow-text mt-0">
                        GHOSTECH
                    </div>
                </div>
            </div>

            {/* Contenu principal */}
            <div>
                {/* Hero Section */}
                <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
                    {/* Animated Canvas Background */}
                    <AnimatedBackground />

                    {/* Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0a0a09] z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#18dcd1]/5 via-transparent to-[#18dcd1]/5 z-10" />

                    {/* Radial Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#18dcd1]/10 rounded-full blur-3xl z-10" />

                    {/* Content */}
                    <div className="relative z-20 container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 glow-text">
                            GHOSTECH
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                            Des idées aux solutions, nous sommes les architectes du numérique. Notre expertise façonne l&apos;avenir technologique.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/evenements" className="btn-primary flex items-center gap-2 justify-center">
                                <Calendar size={18} />
                                Nos Événements
                            </Link>
                            <Link href="/contact" className="btn-secondary flex items-center gap-2 justify-center">
                                <Users size={18} />
                                Nous Rejoindre
                            </Link>
                        </div>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
                        <div className="w-6 h-10 border-2 border-[#18dcd1] rounded-full flex items-start justify-center p-2">
                            <div className="w-1 h-2 bg-[#18dcd1] rounded-full animate-pulse" />
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section className="py-20 bg-[#0a0a09]">
                    <div className="container mx-auto px-4">
                        <h2 className="section-title mb-12">Qui sommes-nous ?</h2>
                        <p className="text-center text-gray-300 max-w-3xl mx-auto mb-16 text-lg">
                            <span className="glow-text font-bold">GHOSTECH</span> est une association étudiante passionnée par l&apos;innovation numérique. Nous explorons les domaines de la robotique, l&apos;intelligence artificielle, le développement web et mobile, et bien plus encore, en transformant les idées en projets concrets.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {values.map((item) => (
                                <div
                                    key={item.title}
                                    className="neon-border rounded-xl p-8 bg-[#0a0a09] hover:scale-105 transition-transform duration-300"
                                >
                                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#18dcd1]/20 flex items-center justify-center">
                                        <item.icon size={32} className="text-[#18dcd1]" />
                                    </div>
                                    <h3 className="text-xl font-bold text-center mb-4 text-[#18dcd1]">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-400 text-center">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section className="py-20 bg-[#050505]">
                    <div className="container mx-auto px-4">
                        <h2 className="section-title mb-4">Nos Dernières Réalisations</h2>
                        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
                            Découvrez nos projets les plus innovants qui repoussent les limites de la technologie et transforment des concepts en réalités tangibles.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {projects.map((project) => (
                                <div
                                    key={project.title}
                                    className="card-glow rounded-xl overflow-hidden"
                                >
                                    <div className="h-48 overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-lg font-bold text-[#18dcd1] mb-3">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="text-xs px-3 py-1 rounded-full bg-[#18dcd1]/20 text-[#18dcd1] border border-[#18dcd1]/30"
                                                >
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                        <button type="button" className="btn-secondary w-full flex items-center gap-2 justify-center text-sm py-2">
                                            <ArrowRight size={16} />
                                            Voir le projet
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-12">
                            <Link href="/evenements" className="btn-primary inline-flex items-center gap-2">
                                <Calendar size={18} />
                                Explorer toutes nos réalisations
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-gradient-to-b from-[#0a0a09] to-[#050505] relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://ext.same-assets.com/1187505756/3815335003.jpeg')] bg-cover bg-center opacity-10" />
                    <div className="container mx-auto px-4 relative z-10">
                        <h2 className="section-title mb-4">
                            Prêt à nous rejoindre ou à collaborer ?
                        </h2>
                        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-12">
                            Que vous soyez un étudiant passionné, un partenaire potentiel ou simplement curieux, GHOSTECH est fait pour vous. Ensemble, créons l&apos;avenir.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
                            <Link href="/contact" className="btn-primary animate-pulse-glow flex items-center gap-2 justify-center">
                                Contactez-nous
                            </Link>
                            <Link href="/a-propos" className="btn-secondary flex items-center gap-2 justify-center">
                                Devenir Membre
                            </Link>
                            <Link href="/contact" className="btn-secondary flex items-center gap-2 justify-center">
                                Devenir Partenaire
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}