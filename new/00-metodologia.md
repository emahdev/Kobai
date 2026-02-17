# Metodología base para nuevos sitios

## 1. Insumos iniciales
- Manual de identidad (PDF): paleta, tipografía, estilo fotográfico.
- Logo e íconos en alta resolución.
- Documento con contenido base (TXT/DOC) para secciones y CTA.
- Textos legales (integral y simplificado) para aviso de privacidad.

## 2. Estilo visual (definir a partir del PDF)
- **Paleta**: identificar colores primarios/secundarios; crear variables CSS (`--color-primario`, `--color-acento`, etc.).
- **Tipografía**: usar la familia indicada (ej. Montserrat) con los pesos del manual.
- **Componentes clave**:
- Hero con video/foto + overlay según paleta, dos CTA y chips/indicadores. Incluir póster de respaldo para cuando el video no pueda reproducirse.
  - Tarjetas de servicios numeradas con imagen y texto alternados.
- Modal de aviso de privacidad semitransparente (bloquea scroll del body).
- Formularios con checkbox legal que habilita el botón.
- Footer ancho con logo grande y enlaces internos.
- Header transparente al cargar y transición a fondo sólido al hacer scroll para mantener lectura del hero (en subpáginas arranca sólido para asegurar contraste).
- **Imágenes**:
  - Para cada sección, redactar prompts que respeten la paleta del manual y el rubro del cliente. Ejemplos:
    - Hero: “Photorealistic [industria] hero scene, colores [paleta], iluminación cinemática, formato panorámico”.
    - Servicios: “Close-up de [equipo/servicio], tonos [paleta], fondo minimalista, profundidad de campo”.
    - Valores/testimonios: “Equipo colaborando, luz cálida acorde al manual, estilo premium”.
  - Nombrar archivos como `hero-[keyword].jpg`, `servicio-[etapa].jpg`, `valores-[tema].jpg` para mantener consistencia.

## 3. Páginas y estructura
1. `index.html`
   - Hero → Servicios → Metodología → Paquetes → Valores → Contacto.
   - Formulario conectado a Formspree.
2. `aviso-de-privacidad/index.html`
   - Página integral con mismo header/footer.
3. `gracias/index.html`
   - Mensaje de confirmación (noindex) + CTA de regreso.
4. `error/index.html`
   - Página 404 personalizada (noindex).

## 4. Formularios (Formspree)
- `action="https://formspree.io/f/<ID>"` + hidden `_redirect` (→ `/gracias/`) y `_error` (→ `/error/`).
- Checkbox “He leído y acepto el Aviso de Privacidad” (enlace clase `js-privacy-link`).
- Botón `disabled` hasta marcar consentimientos (JS + CSS `cursor: not-allowed`).
- Validación nativa (`checkValidity/reportValidity`) antes de enviar.

## 5. Aviso de privacidad
- Usar `AVISO DE PRIVACIDAD INTEGRAL.txt` y `TEXTO PARA AVISO SIMPLIFICADO.txt`.
- Reemplazar variables:
  - `[NOMBRE_EMPRESA]`: nombre del proyecto.
  - `[DOMICILIO_COMPLETO]`: usar el nombre si no hay dirección física.
  - `[CORREO_ARCO]`: correo oficial (ej. contacto@empresa.com).
  - `[URL_SITIO]`: dominio (https://empresa.com).
- Modal simplificado presente en todas las páginas y botón que abre la versión integral.

## 6. Favicons
- Generar con RealFaviconGenerator y subir a `/assets/images/favicons/`.
- Añadir enlaces: PNG 96×96, SVG, ICO, Apple Touch, manifest, `apple-mobile-web-app-title`.
- Añadir:
<link rel="icon" type="image/png" href="/assets/images/favicons/favicon-96x96.png" sizes="96x96" />
<link rel="icon" type="image/svg+xml" href="/assets/images/favicons/favicon.svg" />
<link rel="shortcut icon" href="/assets/images/favicons/favicon.ico" />
<link rel="apple-touch-icon" sizes="180x180" href="/assets/images/favicons/apple-touch-icon.png" />
<meta name="apple-mobile-web-app-title" content="GD ABASTECEDORA DE INSUMO" />
<link rel="manifest" href="/assets/images/favicons/site.webmanifest" />

## 7. SEO y datos estructurados
- Metas: description, keywords, robots, language, author, canonical, hreflang.
- OG/Twitter: usar imagen share (ej. `assets/images/empresa-share.png`).
- JSON-LD: `ProfessionalService` (o esquema apropiado) + `FAQPage` con preguntas del brief.
- Imágenes no críticas con `loading="lazy"` y `decoding="async"`.
- `gracias` y `error`: `meta robots="noindex, nofollow"`.

## 8. Configuración (Vercel u hosting similar)
- `vercel.json` con rewrites a secciones (`/#servicios`, etc.) y páginas `/gracias/`, `/error/`; fallback a `/error/index.html`.
- `cleanUrls`: true, `trailingSlash`: false, headers de seguridad (Cache-Control, X-Frame-Options...).

## 9. Checklist final
- [ ] Hero con video/fondo acorde al manual + overlay y CTAs.
- [ ] Sección de servicios con imágenes personalizadas y tarjetas alternadas.
- [ ] Modal de aviso funcionando (enlaces `js-privacy-link`).
- [ ] Formulario Formspree con checkbox obligatorio y botón deshabilitado por defecto.
- [ ] Páginas aviso/gracias/error con header/footer consistentes y `meta robots` correctos.
- [ ] Favicons, OG/Twitter y JSON-LD configurados con la imagen del proyecto.
- [ ] vercel.json actualizado con las rutas necesarias.
- [ ] Validación en herramientas de Rich Results + revisión SEO on-page.
