import { k as createComponent, l as renderTemplate, m as maybeRenderHead, n as addAttribute, o as createAstro } from './astro/server_D_poGQdw.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */
/* empty css                                           */
/* empty css                                           */

const $$Astro$1 = createAstro();
const $$HeroCurse = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$HeroCurse;
  const { title, src, sub } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative max-h-[400px] overflow-hidden flex items-center justify-center" data-astro-cid-73vdfurv> <!-- Imagen de fondo con superposición degradada --> <div class="absolute inset-0 bg-gradient-to-b from-lime-900 to-transparent opacity-70" data-astro-cid-73vdfurv></div> <img${addAttribute(src, "src")} alt="Imagen de fondo" class="w-full h-full object-cover" data-astro-cid-73vdfurv> <!-- Contenido centrado --> <div class="absolute transform text-white text-center z-10" data-astro-cid-73vdfurv> <h3 class="text-6xl font-bold mb-4 tracking-widest" data-astro-cid-73vdfurv> ${title} </h3> <p class="text-lg" data-astro-cid-73vdfurv>${sub}</p> </div> </div> `;
}, "C:/Users/dytal/OneDrive/Documentos/Darlyn/PaginaWeb/latamstudyvisa/src/components/HeroCurse.astro", void 0);

const $$Astro = createAstro();
const $$WhatIs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$WhatIs;
  const { title, src, sub } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="p-8 mt-10" id="siguiente-seccion"> <h2 class="text-4xl text-gray-800 font-semibold text-center mb-4 tracking-wide">
¿Que es el ${title}?
</h2> <p class="text-xl text-gray-700 text-center mt-4"> ${sub} </p> </section>`;
}, "C:/Users/dytal/OneDrive/Documentos/Darlyn/PaginaWeb/latamstudyvisa/src/components/WhatIs.astro", void 0);

export { $$HeroCurse as $, $$WhatIs as a };
