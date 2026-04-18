
# Mejoras: Hero más explícito, FAQ y comparativa de precio

## 1. Hero — primer párrafo más explícito + mejor contraste
- Reescribir subtítulo para vender claramente: "Un servicio exclusivo para transformar su testimonio, fotografías y documentos en un **Libro de Memorias** de autor. Una partner certificada recoge su historia bajo confidencialidad; nuestros editores y diseñadores la convierten en una obra patrimonial."
- Mejorar contraste: cambiar `text-muted-foreground` por `text-foreground/90` y oscurecer más los gradientes del overlay para que el texto resalte sobre la imagen de fondo.
- Aumentar peso/tamaño tipográfico del párrafo si hace falta.

## 2. Nueva sección "Inversión y Valor" (comparativa de mercado)
Insertar entre `SocialProof` y `PartnersProgram`. Tono patrimonial, no agresivo.

Layout: dos tarjetas comparativas lado a lado + bloque conclusión.

```text
┌─────────────────────────┬─────────────────────────┐
│  Mercado tradicional    │  Atelier de Legado      │
│  • Tiempos: 12–18 meses │  • Tiempos: 3–5 meses   │
│  • Procesos rígidos     │  • Partner dedicada     │
│  • Precio referencia    │  • 30% más accesible    │
└─────────────────────────┴─────────────────────────┘
        "70% más rápido · 30% más accesible"
```

- Tarjeta izquierda: estilo discreto (bordes neutros).
- Tarjeta derecha: destacada con borde dorado y fondo sutil.
- Cifras grandes en serif dorada (`70%` / `30%`).
- Nota al pie: "Cifras estimadas en base a estudios de mercado del segmento de libros de autor en Chile."

## 3. Nueva sección FAQ
Insertar antes del `LeadMagnet`. Usar el componente `Accordion` de shadcn (ya disponible en el proyecto).

Preguntas propuestas (mezclando audiencia cliente + partner):
1. ¿Cuánto demora todo el proceso? (3–5 meses vs 12–18 del mercado)
2. ¿Qué pasa con la confidencialidad de mis testimonios y documentos?
3. ¿Cómo se entrega el material: en línea o en persona?
4. ¿Por qué la impresión va aparte?
5. ¿Cuánto cuesta aproximadamente vs el mercado? (30% más accesible, rangos referenciales sin cifra exacta)
6. ¿Cómo funciona el programa de partners y las comisiones?
7. ¿Cuántos proyectos toman al año? (máx. 6)

Estilo: acordeón elegante, bordes sutiles dorados, tipografía serif en preguntas, sans en respuestas.

## 4. Ajustes menores
- **Navbar**: agregar link "Preguntas" que apunte a `#faq`.
- **Index.tsx**: nuevo orden →
  ```
  Navbar → Hero → ValueProps → ServiceIncludes → Process → Niches
  → SocialProof → PricingComparison (NUEVO) → PartnersProgram
  → FAQ (NUEVO) → LeadMagnet → Footer
  ```

## Archivos a tocar
- `src/components/Hero.tsx` (copy + contraste)
- `src/components/PricingComparison.tsx` (NUEVO)
- `src/components/FAQ.tsx` (NUEVO, usa `ui/accordion`)
- `src/components/Navbar.tsx` (nuevo link)
- `src/pages/Index.tsx` (montar nuevas secciones)

Sin backend, todo visual.
