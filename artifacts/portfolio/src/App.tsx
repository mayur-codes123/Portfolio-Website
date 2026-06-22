import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Code2, 
  Layout, 
  Smartphone, 
  Zap, 
  Mail, 
  Phone, 
  ExternalLink,
  Menu,
  X,
  Building2,
  Utensils,
  Factory,
  Home,
  ShoppingBag,
  Scissors,
  Briefcase,
  Hotel
} from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/40 shadow-lg shadow-black/10" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 h-16 flex items-center justify-between">
          <motion.a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="text-xl font-bold tracking-tight hover:opacity-70 transition-opacity"
            data-testid="nav-logo"
            whileHover={{ scale: 1.02 }}
          >
            Mayur Tak
          </motion.a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                data-testid={`nav-link-${link.label.toLowerCase()}`}
              >
                {link.label}
              </button>
            ))}
            <Button
              size="sm"
              className="rounded-full px-5"
              onClick={() => scrollTo("#contact")}
              data-testid="nav-cta"
            >
              Hire Me
            </Button>
          </nav>

          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            data-testid="nav-mobile-toggle"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-background/95 backdrop-blur-xl border-b border-border px-6 py-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                {link.label}
              </button>
            ))}
            <Button className="rounded-full mt-2" onClick={() => scrollTo("#contact")}>Hire Me</Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 80]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="min-h-[100dvh] flex flex-col justify-center relative px-6 md:px-12 lg:px-24 pt-20 overflow-hidden">
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 -z-10 pointer-events-none"
      >
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[130px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[45%] h-[45%] rounded-full bg-primary/8 blur-[130px]" />
      </motion.div>

      <div className="max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-sm md:text-base font-semibold tracking-widest text-muted-foreground uppercase mb-6"
          data-testid="hero-subtitle"
        >
          Freelance Web Designer & Developer
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.05]"
          data-testid="hero-title"
        >
          I build <span className="text-muted-foreground/60">business</span>{" "}
          websites that{" "}
          <span className="italic font-serif text-foreground">convert</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed"
          data-testid="hero-description"
        >
          Hi, I'm{" "}
          <span className="text-foreground font-semibold">Mayur Tak</span>. I
          craft polished, high-performance digital experiences that help
          businesses stand out and grow. Design-forward, technically sharp.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button
            size="lg"
            className="rounded-full px-8 h-14 text-base group"
            onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
            data-testid="btn-view-work"
          >
            View My Work
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-8 h-14 text-base hover:bg-foreground hover:text-background transition-colors duration-300"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            data-testid="btn-contact-me"
          >
            Get in Touch
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-muted-foreground/40" />
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <div>
            <span className="text-xs tracking-widest uppercase text-muted-foreground font-semibold mb-4 block">About</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6" data-testid="about-title">
              The solo expert sharper than an agency.
            </h2>
            <div className="space-y-5 text-lg text-muted-foreground">
              <p>
                When you hire an agency, you pay for overhead. When you work
                with me, you get direct access to the person building your
                business's most important marketing asset.
              </p>
              <p>
                I specialize in creating websites that don't just look stunning,
                but are architected to turn visitors into customers. Clean code,
                sharp aesthetics, and an obsessive attention to detail.
              </p>
              <p>Based in India. Working with ambitious businesses worldwide.</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: <Layout className="w-7 h-7 text-primary" />, label: "UX/UI Design" },
              { icon: <Code2 className="w-7 h-7 text-primary" />, label: "Web Development" },
              { icon: <Smartphone className="w-7 h-7 text-primary" />, label: "Responsive" },
              { icon: <Zap className="w-7 h-7 text-primary" />, label: "Performance" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`bg-card p-6 rounded-2xl border border-border/50 h-44 flex flex-col justify-end hover:border-primary/40 transition-colors duration-300 ${i % 2 === 1 ? "mt-8" : ""}`}
              >
                {item.icon}
                <h3 className="font-semibold mt-4">{item.label}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Business Websites",
      description: "Custom-designed websites that act as your 24/7 sales representative. Architected for conversion, speed, and establishing industry authority.",
      icon: <Layout className="w-6 h-6 text-primary" />,
    },
    {
      title: "E-Commerce Stores",
      description: "High-performance online stores optimized for user experience and seamless checkout flows. Turn browsing into buying.",
      icon: <Zap className="w-6 h-6 text-primary" />,
    },
    {
      title: "Landing Pages",
      description: "Laser-focused landing pages designed for specific marketing campaigns. Built to capture leads and maximize ROI.",
      icon: <Smartphone className="w-6 h-6 text-primary" />,
    },
    {
      title: "Redesign & Optimization",
      description: "Audit and overhaul of your existing digital presence. Modernizing outdated designs and fixing performance bottlenecks.",
      icon: <Code2 className="w-6 h-6 text-primary" />,
    },
  ];

  return (
    <section id="services" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs tracking-widest uppercase text-muted-foreground font-semibold mb-4 block">Services</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4" data-testid="services-title">
            What I deliver
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Everything you need to establish a dominant digital presence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-card p-8 rounded-2xl border border-border/50 hover:border-primary/40 transition-colors duration-300 group"
            >
              <div className="mb-5 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const industries = [
  { icon: <Home className="w-5 h-5" />, label: "Real Estate", desc: "Property listings, agent portfolios, and luxury real estate showcase sites." },
  { icon: <Utensils className="w-5 h-5" />, label: "Fine Dining & Restaurants", desc: "Elegant menus, reservation flows, and brand storytelling for restaurants." },
  { icon: <Factory className="w-5 h-5" />, label: "Steel & Manufacturing", desc: "Industrial business sites with product catalogues and inquiry systems." },
  { icon: <Building2 className="w-5 h-5" />, label: "Textile & Apparel", desc: "B2B and B2C textile businesses with product galleries and contact forms." },
  { icon: <Hotel className="w-5 h-5" />, label: "Hotels & Hospitality", desc: "Booking-ready hotel sites that showcase amenities and drive reservations." },
  { icon: <ShoppingBag className="w-5 h-5" />, label: "Retail & E-Commerce", desc: "Conversion-optimized online stores for physical and digital products." },
  { icon: <Scissors className="w-5 h-5" />, label: "Salons & Wellness", desc: "Appointment-driven sites for salons, spas, and wellness brands." },
  { icon: <Briefcase className="w-5 h-5" />, label: "Consultants & Agencies", desc: "Professional service sites that build authority and generate leads." },
];

const Industries = () => {
  return (
    <section id="industries" className="py-24 px-6 md:px-12 lg:px-24 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs tracking-widest uppercase text-muted-foreground font-semibold mb-4 block">Industries</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4" data-testid="industries-title">
            Websites for every business
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Whatever your industry, I know how to translate your business into a website that wins customers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {industries.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-card border border-border/50 rounded-2xl p-6 hover:border-primary/40 hover:bg-card/80 transition-all duration-300 group cursor-default"
            >
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="font-semibold mb-2 text-sm">{item.label}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <p className="text-muted-foreground text-base">
            Don't see your industry?{" "}
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="text-foreground font-semibold underline underline-offset-4 hover:text-muted-foreground transition-colors"
            >
              Let's talk
            </button>
            — I build websites for any type of business.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const Work = () => {
  const projects = [
    {
      title: "Sartaneshwar Textiles",
      category: "Textile Manufacturing",
      image: "/projects/textile.png",
      url: "https://sartaneshwar-textiles.vercel.app/",
      featured: true,
    },
    {
      title: "Lumina Fine Dining",
      category: "Restaurant",
      image: "/projects/restaurant.png",
      url: "#",
      featured: false,
    },
    {
      title: "Aura Estates",
      category: "Luxury Real Estate",
      image: "/projects/real-estate.png",
      url: "#",
      featured: false,
    },
    {
      title: "Elle Salon",
      category: "Beauty & Wellness",
      image: "/projects/salon.png",
      url: "#",
      featured: false,
    },
  ];

  return (
    <section id="work" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <span className="text-xs tracking-widest uppercase text-muted-foreground font-semibold mb-4 block">Work</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4" data-testid="work-title">
            Selected Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-xl">
            Digital experiences crafted for impact and conversion.
          </p>
        </motion.div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative grid grid-cols-1 ${
                project.featured ? "lg:grid-cols-12" : "md:grid-cols-2"
              } gap-8 lg:gap-12 items-center`}
              data-testid={`project-card-${index}`}
            >
              <div
                className={`${project.featured ? "lg:col-span-8" : ""} order-2 ${
                  project.featured ? "lg:order-1" : ""
                }`}
              >
                <div className="overflow-hidden rounded-2xl border border-border/50 bg-muted/20 aspect-[16/9] relative">
                  <motion.div
                    className="absolute inset-0 bg-primary/5 z-10"
                    whileHover={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  />
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
              </div>

              <div
                className={`${project.featured ? "lg:col-span-4" : ""} order-1 ${
                  project.featured ? "lg:order-2" : ""
                }`}
              >
                {project.featured && (
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary text-primary-foreground rounded-full mb-4 tracking-wide">
                    Featured Project
                  </span>
                )}
                <h3 className="text-2xl md:text-3xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-6">{project.category}</p>
                {project.url !== "#" && (
                  <motion.a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-semibold uppercase tracking-wider hover:text-muted-foreground transition-colors group/link"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    data-testid={`link-project-${index}`}
                  >
                    View Live Site{" "}
                    <ExternalLink className="ml-2 w-4 h-4 group-hover/link:rotate-6 transition-transform duration-200" />
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skills = [
    "HTML5", "CSS3", "JavaScript", "React", "TypeScript",
    "Tailwind CSS", "Framer Motion", "Figma", "UI/UX Design", "Responsive Design",
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-foreground text-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xs font-semibold tracking-widest uppercase mb-12 text-background/50">Core Technologies</h2>
        <div className="flex flex-wrap gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              whileHover={{ color: "hsl(var(--background))", opacity: 1, transition: { duration: 0.15 } }}
              className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-background/30 cursor-default transition-opacity"
            >
              {skill}
              {index < skills.length - 1 && (
                <span className="mx-4 md:mx-6 text-background/15">/</span>
              )}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 bg-muted/20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-xs tracking-widest uppercase text-muted-foreground font-semibold mb-4 block">Contact</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Let's build something extraordinary.
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-md">
            Ready to upgrade your business website? Reach out and let's discuss your project.
          </p>

          <div className="space-y-5">
            {[
              { href: "mailto:takmayur201@gmail.com", icon: <Mail className="w-5 h-5" />, label: "takmayur201@gmail.com" },
              { href: "mailto:mayurtak.codes@gmail.com", icon: <Mail className="w-5 h-5" />, label: "mayurtak.codes@gmail.com" },
              { href: "tel:+919082090433", icon: <Phone className="w-5 h-5" />, label: "+91 9082090433" },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                whileHover={{ x: 6, transition: { duration: 0.2 } }}
                className="flex items-center text-base md:text-lg hover:text-muted-foreground transition-colors group"
                data-testid={`contact-link-${i}`}
              >
                <div className="w-11 h-11 rounded-full bg-card border border-border flex items-center justify-center mr-4 group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300">
                  {item.icon}
                </div>
                {item.label}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="bg-card p-8 rounded-3xl border border-border/50"
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Name</label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-primary transition-colors duration-200 placeholder:text-muted-foreground/50"
                  placeholder="John Doe"
                  data-testid="input-contact-name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-primary transition-colors duration-200 placeholder:text-muted-foreground/50"
                  placeholder="john@example.com"
                  data-testid="input-contact-email"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Project Details</label>
              <textarea
                className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-primary transition-colors duration-200 min-h-[100px] resize-none placeholder:text-muted-foreground/50"
                placeholder="Tell me about your business and what you need..."
                data-testid="input-contact-message"
              />
            </div>
            <Button
              size="lg"
              className="w-full rounded-full h-14 text-base mt-4 hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200"
              data-testid="btn-submit-contact"
            >
              Send Message
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="font-bold text-xl tracking-tight">Mayur Tak</p>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Mayur Tak. All rights reserved.
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          Back to Top
        </button>
      </div>
    </footer>
  );
};

function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Industries />
      <Work />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
