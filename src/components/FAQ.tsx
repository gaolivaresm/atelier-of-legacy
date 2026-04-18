import FadeIn from "./FadeIn";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "¿Cuánto demora todo el proceso?",
    a: "Entre 3 y 5 meses, según la complejidad del manuscrito y el volumen de archivo. El estándar del mercado va de 12 a 18 meses; nuestro modelo con partner dedicada y equipo editorial reduce significativamente los tiempos sin comprometer el detalle artesanal.",
  },
  {
    q: "¿Qué pasa con la confidencialidad de mis testimonios y documentos?",
    a: "Toda partner certificada firma un acuerdo de confidencialidad (NDA) antes de la primera entrevista. Sus documentos físicos y digitales se manejan bajo protocolos de custodia, y nada de su historia se publica ni se comparte sin su autorización expresa.",
  },
  {
    q: "¿Cómo se entrega el material: en línea o en persona?",
    a: "Como prefiera. Puede entregar fotografías, cartas y documentos en mano a su partner, o subirlos a un espacio privado en línea. Las entrevistas pueden realizarse presencialmente o por videollamada.",
  },
  {
    q: "¿Por qué la impresión va aparte?",
    a: "Porque la edición impresa es una decisión personal: papel, encuadernación, tiraje y acabados varían enormemente en costo. Editamos y diseñamos el libro completo; luego lo asesoramos para elegir la edición impresa que mejor honre su legado, desde un ejemplar único hasta una pequeña tirada familiar.",
  },
  {
    q: "¿Cuánto cuesta aproximadamente comparado con el mercado?",
    a: "Nuestra propuesta es cerca de un 30% más accesible que las casas editoriales tradicionales del segmento, gracias al modelo de partners y a un flujo de trabajo optimizado. Cada proyecto se cotiza a la medida tras una valoración inicial sin costo.",
  },
  {
    q: "¿Cómo funciona el programa de partners y las comisiones?",
    a: "Los partners reciben un 5% de comisión por cada cliente referido y un 5% adicional si realizan personalmente la entrevista de una hora. Incluye capacitación en línea y guía estructurada de entrevista. Es un modelo pensado para profesionales con redes de contacto patrimoniales.",
  },
  {
    q: "¿Cuántos proyectos aceptan al año?",
    a: "Un máximo de 6 proyectos anuales. Esta es una decisión deliberada: el nivel de detalle artesanal y la confidencialidad que ofrecemos solo son posibles cuidando el volumen.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-28 px-6 bg-card/30">
      <div className="container mx-auto max-w-3xl">
        <FadeIn>
          <div className="text-center mb-14">
            <div className="separator-gold w-20 mx-auto mb-6" />
            <h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight mb-4">
              Preguntas <span className="text-gradient-gold italic">Frecuentes</span>
            </h2>
            <p className="font-display text-lg text-foreground/80">
              Respuestas claras sobre el servicio, la confidencialidad y nuestro programa
              de partners.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b border-border/60"
              >
                <AccordionTrigger className="font-serif text-left text-lg md:text-xl text-foreground hover:text-primary hover:no-underline py-6">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="font-display text-base md:text-lg text-foreground/75 leading-relaxed pb-6">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  );
};

export default FAQ;
