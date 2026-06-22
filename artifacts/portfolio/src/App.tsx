import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  ArrowRight, 
  Code2, 
  Layout, 
  Smartphone, 
  Zap, 
  Mail, 
  Phone, 
  ExternalLink,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-[100dvh] flex flex-col justify-center relative px-6 md:px-12 lg:px-24 pt-20">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px]" />
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl"
      >
        <h2 className="text-sm md:text-base font-semibold tracking-wider text-muted-foreground uppercase mb-6" data-testid="hero-subtitle">
          Freelance Web Designer & Developer
        </h2>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1]" data-testid="hero-title">
          I build <span className="text-muted-foreground">business</span> websites that <span className="italic font-serif">convert</span>.
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed" data-testid="hero-description">
          Hi, I'm Mayur Tak. I craft polished, high-performance digital experiences that help businesses stand out and grow. Design-forward, technically sharp.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="rounded-full px-8 h-14 text-base group" onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })} data-testid="btn-view-work">
            View My Work
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-base" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} data-testid="btn-contact-me">
            Get in Touch
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6" data-testid="about-title">The solo expert sharper than an agency.</h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                When you hire an agency, you pay for overhead. When you work with me, you get direct access to the person building your business's most important marketing asset.
              </p>
              <p>
                I specialize in creating websites that don't just look stunning, but are architected to turn visitors into customers. Clean code, sharp aesthetics, and an obsessive attention to detail.
              </p>
              <p>
                Based in India, working with ambitious businesses worldwide.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-card p-6 rounded-2xl border border-border/50 h-48 flex flex-col justify-end">
                <Layout className="w-8 h-8 mb-4 text-primary" />
                <h3 className="font-semibold">UX/UI Design</h3>
              </div>
              <div className="bg-card p-6 rounded-2xl border border-border/50 h-48 flex flex-col justify-end">
                <Code2 className="w-8 h-8 mb-4 text-primary" />
                <h3 className="font-semibold">Web Development</h3>
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="bg-card p-6 rounded-2xl border border-border/50 h-48 flex flex-col justify-end">
                <Smartphone className="w-8 h-8 mb-4 text-primary" />
                <h3 className="font-semibold">Responsive</h3>
              </div>
              <div className="bg-card p-6 rounded-2xl border border-border/50 h-48 flex flex-col justify-end">
                <Zap className="w-8 h-8 mb-4 text-primary" />
                <h3 className="font-semibold">Performance</h3>
              </div>
            </div>
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
      icon: <Layout className="w-6 h-6 mb-4 text-primary" />
    },
    {
      title: "E-Commerce",
      description: "High-performance online stores optimized for user experience and seamless checkout flows. Turn browsing into buying.",
      icon: <Zap className="w-6 h-6 mb-4 text-primary" />
    },
    {
      title: "Landing Pages",
      description: "Laser-focused landing pages designed for specific marketing campaigns. Built to capture leads and maximize ROI.",
      icon: <Smartphone className="w-6 h-6 mb-4 text-primary" />
    },
    {
      title: "Redesign & Optimization",
      description: "Audit and overhaul of your existing digital presence. Modernizing outdated designs and fixing performance bottlenecks.",
      icon: <Code2 className="w-6 h-6 mb-4 text-primary" />
    }
  ];

  return (
    <section id="services" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6" data-testid="services-title">Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Everything you need to establish a dominant digital presence.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-colors"
            >
              {service.icon}
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
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
    }
  ];

  return (
    <section id="work" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4" data-testid="work-title">Selected Work</h2>
            <p className="text-xl text-muted-foreground max-w-xl">Digital experiences crafted for impact and conversion.</p>
          </div>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`group relative grid grid-cols-1 ${project.featured ? 'lg:grid-cols-12' : 'md:grid-cols-2'} gap-8 lg:gap-12 items-center`}
              data-testid={`project-card-${index}`}
            >
              <div className={`${project.featured ? 'lg:col-span-8' : ''} order-2 ${project.featured ? 'lg:order-1' : ''}`}>
                <div className="overflow-hidden rounded-2xl border border-border/50 bg-muted/20 aspect-[16/9] md:aspect-[4/3] lg:aspect-[16/9] relative">
                  <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors z-10 duration-500" />
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className={`${project.featured ? 'lg:col-span-4' : ''} order-1 ${project.featured ? 'lg:order-2' : ''}`}>
                {project.featured && (
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full mb-4">
                    Featured Project
                  </span>
                )}
                <h3 className="text-2xl md:text-3xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-6">{project.category}</p>
                {project.url !== "#" && (
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-semibold uppercase tracking-wider hover:text-muted-foreground transition-colors"
                  >
                    View Live Site <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
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
  const skills = ["HTML5", "CSS3", "JavaScript (ES6+)", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Figma", "UI/UX Design", "Responsive Design"];
  
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-primary text-primary-foreground overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-sm font-semibold tracking-wider uppercase mb-12 text-primary-foreground/60">Core Technologies</h2>
        <div className="flex flex-wrap gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-primary-foreground/40 hover:text-primary-foreground transition-colors cursor-default"
            >
              {skill}
              {index < skills.length - 1 && <span className="mx-4 md:mx-6 text-primary-foreground/20">/</span>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Mayur completely transformed our digital presence. The new website is not just beautiful, it's driving more leads than we ever thought possible.",
      author: "Rahul Sharma",
      role: "Director, Sartaneshwar Textiles"
    },
    {
      quote: "Working with Mayur was a breeze. He understood our vision immediately and delivered a product that exceeded our expectations in every way.",
      author: "Priya Desai",
      role: "Founder, Elle Salon"
    },
    {
      quote: "The technical execution is flawless, but it's his eye for design that really sets him apart. Highly recommended for any serious business.",
      author: "Amit Patel",
      role: "CEO, Aura Estates"
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-16 text-center">Client Feedback</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-8 rounded-2xl border border-border/50 flex flex-col justify-between"
            >
              <p className="text-lg italic text-muted-foreground mb-8">"{t.quote}"</p>
              <div>
                <p className="font-bold">{t.author}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 bg-muted/30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Let's build something extraordinary.</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-md">
            Ready to upgrade your business website? Reach out and let's discuss your project.
          </p>
          
          <div className="space-y-6">
            <a href="mailto:takmayur201@gmail.com" className="flex items-center text-lg hover:text-muted-foreground transition-colors group">
              <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center mr-4 group-hover:border-primary transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              takmayur201@gmail.com
            </a>
            <a href="mailto:mayurtak.codes@gmail.com" className="flex items-center text-lg hover:text-muted-foreground transition-colors group">
              <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center mr-4 group-hover:border-primary transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              mayurtak.codes@gmail.com
            </a>
            <a href="tel:+919082090433" className="flex items-center text-lg hover:text-muted-foreground transition-colors group">
              <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center mr-4 group-hover:border-primary transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              +91 9082090433
            </a>
          </div>
        </div>
        
        <div className="bg-card p-8 rounded-3xl border border-border/50">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Name</label>
                <input type="text" className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-primary transition-colors" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <input type="email" className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Project Details</label>
              <textarea className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-primary transition-colors min-h-[100px] resize-none" placeholder="Tell me about your business and what you need..."></textarea>
            </div>
            <Button size="lg" className="w-full rounded-full h-14 text-base mt-4" data-testid="btn-submit-contact">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="font-bold text-xl tracking-tight">Mayur Tak</p>
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Mayur Tak. All rights reserved.</p>
        <div className="flex items-center space-x-6 text-sm font-medium">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-muted-foreground transition-colors">Back to Top</button>
        </div>
      </div>
    </footer>
  );
};

function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      <Hero />
      <About />
      <Services />
      <Work />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
