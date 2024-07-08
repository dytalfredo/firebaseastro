import { k as createComponent, l as renderTemplate, m as maybeRenderHead, q as renderSlot, o as createAstro } from './astro/server_D_poGQdw.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                                 */

const $$Astro = createAstro();
const $$WhyList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$WhyList;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="p-8 mt-10 max-w-md bg-lime-600 text-gray-50 rounded-lg shadow-lg" id="siguiente-seccion" data-astro-cid-6lejxtmk> <h2 class="text-4xl text-gray-50 font-semibold text-center mb-4 tracking-wider" data-astro-cid-6lejxtmk> ${title} </h2> ${renderSlot($$result, $$slots["default"])} </section> `;
}, "C:/Users/dytal/OneDrive/Documentos/Darlyn/PaginaWeb/latamstudyvisa/src/components/WhyList.astro", void 0);

export { $$WhyList as $ };
