/* empty css                                      */
import { k as createComponent, l as renderTemplate, m as maybeRenderHead, q as renderSlot, o as createAstro, p as renderComponent } from './astro/server_D_poGQdw.mjs';
import 'kleur/colors';
import { $ as $$HeroCurse, a as $$WhatIs } from './WhatIs_y2_r0r8Q.mjs';
import 'clsx';
/* empty css                                           */
import { $ as $$FormularioContacto } from './FormularioContacto_yqo5AoYP.mjs';
import { $ as $$Layout } from './Layout_BkmwKvw_.mjs';

const $$Astro$1 = createAstro();
const $$WhyLarge = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$WhyLarge;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="p-8 mt-10 max-w-3xl bg-lime-600 text-gray-50 rounded-lg shadow-lg" id="siguiente-seccion" data-astro-cid-ajzijoyr> <h2 class="text-4xl text-gray-50 font-semibold text-center mb-4 tracking-wider" data-astro-cid-ajzijoyr> ${title} </h2> ${renderSlot($$result, $$slots["default"])} </section> `;
}, "C:/Users/dytal/OneDrive/Documentos/Darlyn/PaginaWeb/latamstudyvisa/src/components/WhyLarge.astro", void 0);

const $$Astro = createAstro();
const $$WhyBento = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$WhyBento;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="p-8 mt-10 max-w-md bg-[#023323] text-gray-50 rounded-lg shadow-lg" id="siguiente-seccion" data-astro-cid-ca2tnvpp> <h2 class="text-4xl text-gray-50 font-semibold text-center mb-4 tracking-wider" data-astro-cid-ca2tnvpp> ${title} </h2> ${renderSlot($$result, $$slots["default"])} </section> `;
}, "C:/Users/dytal/OneDrive/Documentos/Darlyn/PaginaWeb/latamstudyvisa/src/components/WhyBento.astro", void 0);

const $$Entrenamientovocacional = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Cursos Vocacionales En El Extranjero", "data-astro-cid-jrdiesot": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="bg-white" data-astro-cid-jrdiesot> ${renderComponent($$result2, "HeroCurse", $$HeroCurse, { "src": "/talleresvocacionales.jpg", "title": "Curso Vocacionales", "sub": "Comienza tu vida laboral en el extranjero lo m\xE1s pronto posible con los cursos vocaciones m\xE1s modernos de habla inglesa.", "data-astro-cid-jrdiesot": true })} ${renderComponent($$result2, "WhatIs", $$WhatIs, { "title": "VET", "sub": "Los cursos de entrenamiento o vocacionales se centran en un oficio espec\xEDfico y son impartidos por profesionales del sector.", "data-astro-cid-jrdiesot": true })} <div class="flex justify-center gap-14 max-md:flex-col max-md:gap-4 max-md:items-center" data-astro-cid-jrdiesot> ${renderComponent($$result2, "WhyLarge", $$WhyLarge, { "title": "Por qu\xE9 realiar un curso vocacional en el extanjero ", "data-astro-cid-jrdiesot": true }, { "default": ($$result3) => renderTemplate` <ul class="text-center flex flex-col gap-8 text-xl mt-8" data-astro-cid-jrdiesot> <li data-astro-cid-jrdiesot>
En comparación con otros programas educativos, los
                        cursos VET tienen periodos estandarizados que permite a
                        los estudiantes incorporarse al mercado laboral más
                        rápidamente, Las cursada pueden ser elegidas desde un
                        Certificado III a un Diploma avanzado incluyendo el
                        paquete completo.
</li> </ul> ` })} </div> <div class="flex justify-center max-w-6xl gap-14 max-md:flex-col max-md:gap-4 max-md:items-center m-auto" data-astro-cid-jrdiesot> ${renderComponent($$result2, "WhyBento", $$WhyBento, { "title": "Oportunidades laborales", "data-astro-cid-jrdiesot": true }, { "default": ($$result3) => renderTemplate` <ul class="text-center flex flex-col gap-8 text-xl mt-8" data-astro-cid-jrdiesot> <li data-astro-cid-jrdiesot>
Al completar un curso VET, los estudiantes tienen la
                        oportunidad de trabajar en Australia en sus campos de
                        estudio durante o después de sus estudios.
</li> </ul> ` })} ${renderComponent($$result2, "WhyLarge", $$WhyLarge, { "title": "Reconocimiento internacional", "data-astro-cid-jrdiesot": true }, { "default": ($$result3) => renderTemplate` <ul class="text-center flex flex-col gap-8 text-xl mt-8" data-astro-cid-jrdiesot> <li data-astro-cid-jrdiesot>
Los certificados y calificaciones obtenidos a través de
                        cursos VET son reconocidos a nivel internacional, lo que
                        mejora las oportunidades de empleo en todo el mundo.
</li> </ul> ` })} ${renderComponent($$result2, "WhyBento", $$WhyBento, { "title": "Variedad de disciplinas", "data-astro-cid-jrdiesot": true }, { "default": ($$result3) => renderTemplate` <ul class="text-center flex flex-col gap-8 text-xl mt-8" data-astro-cid-jrdiesot> <li data-astro-cid-jrdiesot>
Los cursos VET abarcan una amplia gama de disciplinas,
                        lo que brinda a los estudiantes la libertad de elegir un
                        área de estudio que se alinee con sus intereses y metas
                        profesionales.
</li> </ul> ` })} </div> ${renderComponent($$result2, "FormularioContacto", $$FormularioContacto, { "title": "\xBFQuieres prepararte en algun curso vocacional?", "data-astro-cid-jrdiesot": true })} </main> ` })} `;
}, "C:/Users/dytal/OneDrive/Documentos/Darlyn/PaginaWeb/latamstudyvisa/src/pages/entrenamientovocacional.astro", void 0);

const $$file = "C:/Users/dytal/OneDrive/Documentos/Darlyn/PaginaWeb/latamstudyvisa/src/pages/entrenamientovocacional.astro";
const $$url = "/entrenamientovocacional";

export { $$Entrenamientovocacional as default, $$file as file, $$url as url };
