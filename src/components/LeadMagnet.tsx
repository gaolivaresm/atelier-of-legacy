import { useState } from "react";
import { Download, CheckCircle2 } from "lucide-react";
import FadeIn from "./FadeIn";

const LeadMagnet = () => {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    
    try {
      // Envío AJAX a Netlify
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });

      setStatus("success");

      // Disparar la descarga automática del PDF
      const link = document.createElement("a");
      link.href = "/legado_guia.pdf"; // Ruta al archivo en public/
      link.download = "Guia_Patrimonial_Atelier_Legado.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error al enviar el formulario", error);
      setStatus("idle");
    }
  };

  return (
    <section className="py-28 md:py-36">
      <div className="container mx-auto px-6 max-w-3xl">
        <FadeIn>
          <div className="border border-primary/20 p-10 md:p-16 rounded-sm bg-gradient-to-br from-card to-secondary/30 text-center">
            <p className="text-primary text-xs tracking-[0.3em] uppercase mb-4 font-sans">
              Guía Exclusiva
            </p>
            
            {status === "success" ? (
              <div className="py-8 animate-in fade-in duration-500">
                <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-4" />
                <h2 className="font-serif text-2xl md:text-3xl font-medium mb-2 text-gradient-gold">
                  ¡Gracias por su interés!
                </h2>
                <p className="text-muted-foreground text-sm font-sans">
                  Su descarga debería haber comenzado automáticamente.<br />
                  Si no es así, <a href="/legado_guia.pdf" download className="text-primary underline">haga clic aquí</a>.
                </p>
              </div>
            ) : (
              <>
                <h2 className="font-serif text-2xl md:text-4xl font-medium mb-4">
                  Cómo comenzar a construir su{" "}
                  <span className="italic text-gradient-gold">legado familiar</span> hoy
                </h2>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed font-sans mb-10 max-w-lg mx-auto">
                  Descargue nuestra guía exclusiva sobre cómo organizar sus archivos históricos
                  y las 10 preguntas esenciales para entrevistar a sus padres.
                </p>

                <form
                  name="contacto-guia"
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:row gap-3 max-w-md mx-auto"
                >
                  <input type="hidden" name="form-name" value="contacto-guia" />
                  <div className="flex flex-col sm:flex-row gap-3 mb-4 w-full">
                    <input
                      type="text"
                      name="nombre"
                      placeholder="Su nombre"
                      required
                      disabled={status === "submitting"}
                      className="flex-1 bg-background border border-border px-4 py-3 text-sm focus:border-primary/50 outline-none transition-colors font-sans"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Su email"
                      required
                      disabled={status === "submitting"}
                      className="flex-1 bg-background border border-border px-4 py-3 text-sm focus:border-primary/50 outline-none transition-colors font-sans"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-gold-light text-primary-foreground font-sans text-sm tracking-widest uppercase px-8 py-3 transition-all duration-300 disabled:opacity-50"
                  >
                    <Download className="w-4 h-4" />
                    {status === "submitting" ? "Enviando..." : "Descargar Guía de Legado"}
                  </button>
                </form>
              </>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default LeadMagnet;
