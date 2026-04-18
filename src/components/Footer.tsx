import { Facebook, Twitter, Linkedin, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contacto" className="border-t border-border bg-card/30">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8 max-w-5xl mx-auto">
          {/* Brand */}
          <div>
            <p className="font-serif text-xl text-gradient-gold mb-4">Atelier de Legado</p>
            <div className="flex items-start gap-2 text-muted-foreground text-sm font-sans">
              <MapPin className="w-4 h-4 mt-0.5 text-primary/60 shrink-0" />
              <span>Viña del Mar, Chile</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-primary mb-4 font-sans">
              Enlaces
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground font-sans">
              <li><a href="#servicios" className="hover:text-primary transition-colors">Servicios</a></li>
              <li><a href="#proceso" className="hover:text-primary transition-colors">Proceso</a></li>
              <li><a href="#partners" className="hover:text-primary transition-colors">Programa de Partners</a></li>
              <li>
                <a href="mailto:hola@taett.cl" className="hover:text-primary transition-colors inline-flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5" /> hola@taett.cl
                </a>
              </li>
            </ul>
          </div>

          {/* Social + note */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-primary mb-4 font-sans">
              Síguenos
            </p>
            <div className="flex gap-4 mb-6">
              {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 border border-border rounded-sm flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <p className="text-xs text-muted-foreground font-sans leading-relaxed">
              Atención personalizada y bajo estricta confidencialidad.
            </p>
          </div>
        </div>

        <div className="separator-gold mt-12 mb-8" />

        <p className="text-center text-xs text-muted-foreground font-sans">
          © 2024 Atelier de Legado. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
