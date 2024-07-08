/* empty css                                      */
import { k as createComponent, l as renderTemplate, m as maybeRenderHead, o as createAstro, p as renderComponent, n as addAttribute } from './astro/server_D_poGQdw.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */
/* empty css                         */
import { a as $$Icon, $ as $$Layout } from './Layout_BkmwKvw_.mjs';
/* empty css                                           */
import { $ as $$FormularioContacto } from './FormularioContacto_yqo5AoYP.mjs';

const $$Astro$2 = createAstro();
const $$Numberstep = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Numberstep;
  const { number, preposition } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bento bg-lime-500 border-solid text-lime-900 text-lg font-extrabold rounded-full shadow-md shadow-gray-900 rotate-3 border-lime-900 border-4 p-1" data-astro-cid-3oes6hcg> <p data-astro-cid-3oes6hcg>${number}<sup data-astro-cid-3oes6hcg>${preposition}</sup>Paso:</p> </div> `;
}, "C:/Users/dytal/OneDrive/Documentos/Darlyn/PaginaWeb/latamstudyvisa/src/components/Numberstep.astro", void 0);

const $$Astro$1 = createAstro();
const $$Buttons = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Buttons;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button class="block font-semibold py-1 px-4 mx-auto mt-2 text-amber-50 bg-amber-900 hover:scale-95 hover:bg-amber-500 text-lg border-solid border-2 border-amber-900 rounded-full shadow-sm shadow-amber-700 hover:shadow-none hover:text-amber-900 transition duration-300">✉️ <a href="#formularioContacto" rel="noreferrer">${title}</a> </button>`;
}, "C:/Users/dytal/OneDrive/Documentos/Darlyn/PaginaWeb/latamstudyvisa/src/components/Buttons.astro", void 0);

const $$BentoProcess = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="relative pt-6 view" data-astro-cid-2cozxc7f> <h2 class="mt-28 mb-4 text-4xl py-4 font-semibold text-white bg-lime-900 border-solid border-4 border-lime-900 capitalize tracking-widest" data-astro-cid-2cozxc7f>
Pasos para cumplir tus sueños
</h2> <p class="text-xl text-gray-700 text-center max-w-2xl mx-auto" data-astro-cid-2cozxc7f>
Conoce los 5 pasos a seguir para hacer realidad tus sueño de estudiar y
        trabajar en el extranjero.
</p> <div class="flex items-center justify-center mt-2 pt-10 pb-10" data-astro-cid-2cozxc7f> <div class="grid h-full w-5/6 gap-2 p-2 grid-cols-3 grid-rows-3 rounded-lg shadow-md max-md:grid-rows-1 max-md:grid-cols-1 max-md:w-full max-md:gap-x-0 max-md:px-0" data-astro-cid-2cozxc7f> <div class="relative col-span-1 bg-cover bg-center bento1 row-span-1 bg-pink-200 animation rounded-lg shadow-md p-4 overflow-hidden" data-astro-cid-2cozxc7f> ${renderComponent($$result, "Numberstep", $$Numberstep, { "number": "1", ",": true, "preposition": "er", "data-astro-cid-2cozxc7f": true })} <div class="backdrop-brightness-50 backdrop-blur-sm bg-black/5 rounded p-4 shadow-lg" data-astro-cid-2cozxc7f> <h3 class="font-bold text-pretty text-lime-50 text-2xl text-right pb-3" data-astro-cid-2cozxc7f>
Mensaje inicial
</h3> <p class="pt-3 text-center text-pretty text-white text-md" data-astro-cid-2cozxc7f> <strong data-astro-cid-2cozxc7f>El primer paso en tu camino es enviarnos un correo.</strong> Comparte con nosotros su destino de interés y, con gusto,
<strong data-astro-cid-2cozxc7f>nos comunicaremos para ofrecerle nuestra asistencia
                            personalizada sin costo alguno.</strong> </p> ${renderComponent($$result, "Buttons", $$Buttons, { "title": "Contactar", "data-astro-cid-2cozxc7f": true })} </div> </div> <div class="col-span-2 relative bento2 row-span-1 bg-lime-900 animationR rounded-lg shadow-md items-center justify-center p-4 overflow-hidden" data-astro-cid-2cozxc7f> ${renderComponent($$result, "Numberstep", $$Numberstep, { "number": "2", ",": true, "preposition": "do", "data-astro-cid-2cozxc7f": true })} <div class="flex rounded shadow-lg h-full relative max-md:flex-col" data-astro-cid-2cozxc7f> <!-- Imagen --> <div class="w-1/3 h-full max-md:w-full" data-astro-cid-2cozxc7f> <img src="2.jpg" alt="Segundo paso de como obtener visa estudiantil" class="object-cover w-full rounded-l h-full" data-astro-cid-2cozxc7f> </div> <!-- Texto --> <div class="w-2/3 p-4 backgroundCircle relative z-10 max-md:w-full" data-astro-cid-2cozxc7f> <h3 class="font-bold text-pretty text-lime-50 text-2xl text-left pb-3" data-astro-cid-2cozxc7f>
Asesoramiento y matricula
</h3> <p class="pt-3 text-center text-pretty text-white text-md" data-astro-cid-2cozxc7f>
Un asesor se comunicará contigo para colaborar en la
<strong data-astro-cid-2cozxc7f>creación de un plan personalizado.</strong> Juntos
                            explorarán opciones para encontrar la ciudad de tu preferencia
                            y <strong data-astro-cid-2cozxc7f>el curso que se ajuste a tus intereses y metas
                                profesionales,</strong> siempre considerando el tiempo que deseas vivir esta
                            experiencia.
</p> </div> </div> </div> <div class="col-span-2 relative bento3 row-span-1 bg-lime-900 animation rounded-lg items-center justify-center p-4 overflow-hidden" data-astro-cid-2cozxc7f> ${renderComponent($$result, "Numberstep", $$Numberstep, { "number": "3", ",": true, "preposition": "er", "data-astro-cid-2cozxc7f": true })} <div class="flex rounded shadow-lg h-full relative max-md:flex-col-reverse" data-astro-cid-2cozxc7f> <!-- Imagen --> <div class="w-2/3 h-full max-md:w-full px-4" data-astro-cid-2cozxc7f> <h3 class="font-bold text-pretty text-lime-50 text-2xl text-right pb-3" data-astro-cid-2cozxc7f>
Aplicación a la visa
</h3> <p class="pt-3 text-center text-white text-md text-pretty" data-astro-cid-2cozxc7f>
Nos comprometemos en ayudarte a obtener la visa de
                            forma rapida y sencilla. Nos ocuparemos de gestionar
                            meticulosamente cada paso necesario, siempre al
                            margen de la ley, <strong data-astro-cid-2cozxc7f>permitiéndote enfocarte en aspectos más
                                placenteros de tu aventura.</strong> </p> </div> <div class="w-5/12 h-full max-md:w-full" data-astro-cid-2cozxc7f> <img src="3.jpg" alt="Segundo paso de como obtener visa estudiantil" class="object-cover w-full rounded-l h-full" data-astro-cid-2cozxc7f> </div> <!-- Texto --> </div> </div> <div class="overflow-hidden col-span-1 relative row-span-2 bg-tan-200 animationR rounded-lg shadow-md flex items-center justify-start bg-cover bg-center bento5 p-4" data-astro-cid-2cozxc7f> ${renderComponent($$result, "Numberstep", $$Numberstep, { "number": "5", ",": true, "preposition": "o", "data-astro-cid-2cozxc7f": true })} <div class="backdrop-brightness-50 backdrop-blur-sm bg-black/5 rounded p-4 shadow-lg" data-astro-cid-2cozxc7f> <h3 class="font-bold text-pretty text-lime-50 text-2xl text-right pb-3" data-astro-cid-2cozxc7f>
Hasta el final
</h3> <p class="pt-3 text-center text-pretty text-white text-md" data-astro-cid-2cozxc7f>
En Latam Study Visa entendemos que participar en un
                        programa de intercambio estudiantil representa <strong data-astro-cid-2cozxc7f>un hito significativo en el crecimiento individual
                            y la carrera de nuestros clientes.</strong>
Por ello, brindamos asesoramiento continuo desde el inicio
                        hasta la conclusión de su viaje educativo, <strong data-astro-cid-2cozxc7f>asegurándonos de satisfacer todas sus expectativas
                            y requerimientos.</strong> </p> </div> </div> <div class="col-span-2 relative bento4 row-span-1 bg-cyan-900 rounded-lg animation shadow-md items-center justify-center p-4 overflow-hidden" data-astro-cid-2cozxc7f> ${renderComponent($$result, "Numberstep", $$Numberstep, { "number": "4", ",": true, "preposition": "o", "data-astro-cid-2cozxc7f": true })} <div class="flex rounded shadow-lg h-full relative max-md:flex-col-reverse" data-astro-cid-2cozxc7f> <!-- Imagen --> <div class="w-2/3 p-4 relative z-10 backgroundCircle2 max-md:w-full" data-astro-cid-2cozxc7f> <h3 class="font-bold text-pretty text-lime-50 text-2xl text-right pb-3" data-astro-cid-2cozxc7f>
Salida y llegada
</h3> <p class="pt-3 text-center text-pretty text-white text-md" data-astro-cid-2cozxc7f>
De la mano de profesionales altamente capacitados
                            que te <strong data-astro-cid-2cozxc7f>guiaran en trámites de vuelo, búsqueda de
                                alojamiento, trabajo, adaptación en el país
                                escogido</strong> y todo lo que sea necesario para que tu viaje sea una
<strong data-astro-cid-2cozxc7f>experiencia inolvidable.</strong> </p> </div> <div class="w-1/3 h-full max-md:w-full" data-astro-cid-2cozxc7f> <img src="5.jpg" alt="Segundo paso de como obtener visa estudiantil" class="object-cover w-full rounded-l h-full" data-astro-cid-2cozxc7f> </div> <!-- Texto --> </div> </div> </div> </div> </div> `;
}, "C:/Users/dytal/OneDrive/Documentos/Darlyn/PaginaWeb/latamstudyvisa/src/components/BentoProcess.astro", void 0);

const $$ButtonScroll = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="w-full flex justify-center mt-4" data-astro-cid-lxvtolha> <a href="#siguiente-seccion" class="animate-bounce p-4 text-amber-900 rounded-full border-2 border-amber-900 shadow-lg cursor-pointer hover:bg-amber-600 transition duration-500 ease-in-out" data-astro-cid-lxvtolha>
⬇
</a> </div> `;
}, "C:/Users/dytal/OneDrive/Documentos/Darlyn/PaginaWeb/latamstudyvisa/src/components/ButtonScroll.astro", void 0);

const $$CallToActionCountrys = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="bg-amber-800 mt-10"> <div class="max-w-screen-xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8"> <h2 class="text-3xl font-extrabold text-white tracking-wide leading-[10rem] max-md:leading-[3rem]">
¿Listo para comenzar tu aventura ?
<br>
Contacta con un asesor estudiantil ahora mismo.
</h2> <div class="mt-8 flex justify-center"> ${renderComponent($$result, "Buttons", $$Buttons, { "title": "Quiero hablar con un asesor" })} </div> </div> </div>`;
}, "C:/Users/dytal/OneDrive/Documentos/Darlyn/PaginaWeb/latamstudyvisa/src/components/CallToActionCountrys.astro", void 0);

const $$Feature = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative bg-blueGray-50 mt-20"> <div class="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75"> <div class="absolute top-0 w-full h-full bg-center bg-cover" style="
                background-image: url('herovisa.jpg');
              "> <span id="blackOverlay" class="w-full h-full absolute opacity-75 bg-lime-950"></span> </div> <div class="container relative mx-auto"> <div class="items-center flex flex-wrap"> <div class="w-full lg:w-8/12 px-4 ml-auto mr-auto text-center"> <div class=""> <h2 class="text-white font-semibold text-4xl capitalize tracking-widest leading-[3rem]">
Tu historia comienza con nosotros.
</h2> <p class="mt-6 text-xl text-lime-50">
En Latam Study Visa, no solo te abrimos las puertas
                            al mundo, sino que te acompañamos en cada paso del
                            camino. Somos más que una empresa; <strong>somos tu aliado estratégico
</strong>en la búsqueda de nuevas oportunidades de
<strong>estudio y trabajo en el extranjero.</strong> </p> </div> </div> </div> </div> </div> <section class="pb-10 bg-blueGray-200 -mt-24"> <div class="container mx-auto px-4"> <div class="flex flex-wrap"> <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center"> <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"> <div class="px-4 py-5 flex-auto"> <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lime-400"> ${renderComponent($$result, "Icon", $$Icon, { "name": "raphael:people", "class": "text-3xl" })} </div> <h6 class="text-xl font-semibold">
Equipo de trabajo
</h6> <p class="mt-2 mb-4 text-gray-700">
Latam Study Visa está conformado por un equipo
                                de trabajo joven pero experimentado y altamente
                                comprometido con entregar un servicio de calidad
                                a cada estudiante. Se caracterizan por su
                                profesionalismo, honestidad, dinamismo y apoyo
                                en cada paso de tu programa académico.
</p> </div> </div> </div> <div class="w-full md:w-4/12 px-4 text-center"> <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"> <div class="px-4 py-5 flex-auto"> <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-amber-400"> ${renderComponent($$result, "Icon", $$Icon, { "name": "raphael:book", "class": "text-3xl" })} </div> <h6 class="text-xl
                                    font-semibold">
Instituciones de maxima calidad
</h6> <p class="mt-2 mb-4 text-gray-700">
Poseemos un conocimiento exhaustivo sobre cada
                                uno de los destinos e instituciones con los que
                                colaboramos. Por esta razón, nuestros
                                intercambios se realizan exclusivamente con
                                entidades de reconocida seriedad y que cuentan
                                con las certificaciones apropiadas de las
                                autoridades pertinentes en cada nación de
                                acogida.
</p> </div> </div> </div> <div class="pt-6 w-full md:w-4/12 px-4 text-center"> <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"> <div class="px-4 py-5 flex-auto"> <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-cyan-400"> ${renderComponent($$result, "Icon", $$Icon, { "name": "raphael:plane", "class": "text-3xl" })} </div> <h6 class="text-xl font-semibold">Flexibilidad</h6> <p class="mt-2 mb-4 text-gray-700">
En Latam Study Visa ofrecemos un extenso abanico
                                de alternativas para tu aventura. Nos
                                caracterizamos por no aplicar tarifas extra en
                                nuestros servicios, asegurando así que los
                                precios se mantengan accesibles en todos
                                nuestros programas educativos, boletos de viaje,
                                seguros médicos, ofertas exclusivas y
                                consultoría especializada.
</p> </div> </div> </div> </div> </div> </section> </section>`;
}, "C:/Users/dytal/OneDrive/Documentos/Darlyn/PaginaWeb/latamstudyvisa/src/components/Feature.astro", void 0);

const $$TextoAnimate = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<h1 class="text-6xl max-md:text-5xl font-normal pt-10 tracking-wider max-md:flex-col leading-snug capitalize" data-astro-cid-xtm5hu6o>
Tus Sueños de <span class="animar" data-astro-cid-xtm5hu6o></span> <span class="point" data-astro-cid-xtm5hu6o>Estudiar</span> Esperan
</h1> `;
}, "C:/Users/dytal/OneDrive/Documentos/Darlyn/PaginaWeb/latamstudyvisa/src/components/TextoAnimate.astro", void 0);

const $$HeroSeccionIndex = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="relative" data-astro-cid-falnkxit> <div class="bg-cover bg-center pb-5 hero text-white text-center max-md:h-full max-md:bg-top" data-astro-cid-falnkxit> ${renderComponent($$result, "TextoAnimate", $$TextoAnimate, { "data-astro-cid-falnkxit": true })} <p class="text-white font-semibold text-base text-center max-w-xl mx-auto mt-4" data-astro-cid-falnkxit>
Descubre la riqueza cultural, amplía tus horizontes y construye un
            futuro brillante en Maravillosos Destinos. No importa si eres
            estudiante, profesional o aventurero.
</p> <span class="text-2xl font-semibold p-3 mb-3 mt-4 block tracking-wider" data-astro-cid-falnkxit>
¡Nosotros te guiaremos en esta experiencia!
</span> </div> </div> `;
}, "C:/Users/dytal/OneDrive/Documentos/Darlyn/PaginaWeb/latamstudyvisa/src/components/HeroSeccionIndex.astro", void 0);

const $$Astro = createAstro();
const $$CardTravel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardTravel;
  const { title, link, img, studies } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex justify-center items-center max-w-1/3"> <div class="p-4 bg-white rounded-sm shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform duration-500"> <img class="w-60 object-cover rounded-t-md"${addAttribute(img, "src")} alt="visa estudiantil en el extranjero"> <div class=""> <h3 class="text-base font-bold text-gray-700">${title}</h3> <div class="mb-2 flex justify-between"> <button class="block text-xs font-regular text-gray-700 cursor-auto">${studies} estudiantes</button> <button class="text-sm block font-semibold py-1 px-4 text-lime-50 bg-lime-900 hover:text-lime-900 hover:bg-lime-500 border-solid border-2 border-lime-900 rounded-full shadow hover:shadow-md transition duration-300"><a${addAttribute(link, "href")}>Leer más...</a></button> </div> </div> </div> </div>`;
}, "C:/Users/dytal/OneDrive/Documentos/Darlyn/PaginaWeb/latamstudyvisa/src/components/CardTravel.astro", void 0);

const $$TravelsCards = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex max-md:flex-col max-w-[80%] m-auto"> <div class="flex-grow mt-10 -rotate-6"> ${renderComponent($$result, "CardTravel", $$CardTravel, { "title": "Australia", ",": true, "link": "/estudiaenaustralia", ",": true, "img": "visaaustralia2.jpg", ",": true, "studies": "57" })} <!-- Contenido de la primera tarjeta --> </div> <div class="flex-grow rotate-3"> ${renderComponent($$result, "CardTravel", $$CardTravel, { "title": "Nueva Zelanda", ",": true, "link": "/estudiaennuevazelanda", ",": true, "img": "visanuevazelanda.jpg", ",": true, "studies": "150" })} <!-- Contenido de la segunda tarjeta --> </div> <div class="flex-grow mt-10 rotate-6 max-md:mt-4 max-md:-rotate-6"> ${renderComponent($$result, "CardTravel", $$CardTravel, { "title": "Irlanda", ",": true, "link": "/estudiaenirlanda", ",": true, "img": "visairlanda.jpg", ",": true, "studies": "100" })} <!-- Contenido de la tercera tarjeta --> </div> </div>`;
}, "C:/Users/dytal/OneDrive/Documentos/Darlyn/PaginaWeb/latamstudyvisa/src/components/TravelsCards.astro", void 0);

const $$Why = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="p-8" id="siguiente-seccion"> <h2 class="text-4xl text-gray-800 font-semibold text-center mb-4 tracking-wide">
Nuestro Compromiso
</h2> <p class="text-xl text-gray-700 text-center mt-4">
Te ayudamos a cumplir tus objetivos de aprendizaje ofreciéndote la
        oferta más completa de <strong>colegios e institutos en el extranjero</strong>, abarcando todo lo relacionados con estudios superiores, <strong>cursos de idiomas, maestrías y diplomados</strong>. Además, te brindamos asesoramiento legal integral para asegurar que
        tu experiencia sea segura y conforme a las regulaciones internacionales.
        Y no solo te ayudamos a elegir lo que necesitas con un asesoramiento
        100% personalizado, sino que también <strong>te ofrecemos acompañamiento en el destino elegido</strong>, garantizando que tengas el apoyo necesario en cada paso de tu viaje
        educativo.
</p> </section>`;
}, "C:/Users/dytal/OneDrive/Documentos/Darlyn/PaginaWeb/latamstudyvisa/src/components/Why.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Asesores Intercambio Europeo para Ingles", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="view" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "HeroSeccionIndex", $$HeroSeccionIndex, { "data-astro-cid-j7pv25f6": true })} <div class="blockAnimation" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "TravelsCards", $$TravelsCards, { "data-astro-cid-j7pv25f6": true })} </div> ${renderComponent($$result2, "ButtonScroll", $$ButtonScroll, { "data-astro-cid-j7pv25f6": true })} <div class="blockAnimation" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Why", $$Why, { "data-astro-cid-j7pv25f6": true })} </div> ${renderComponent($$result2, "BentoProcess", $$BentoProcess, { "data-astro-cid-j7pv25f6": true })} <div class="blockAnimation" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "CallToActionCountrys", $$CallToActionCountrys, { "data-astro-cid-j7pv25f6": true })} </div> <div class="blockAnimation2 animate-spin" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Feature", $$Feature, { "data-astro-cid-j7pv25f6": true })} </div> ${renderComponent($$result2, "FormularioContacto", $$FormularioContacto, { "title": "\xBFQuieres Estudiar y trabajar en El extranjero?", "data-astro-cid-j7pv25f6": true })} </main> ` })} `;
}, "C:/Users/dytal/OneDrive/Documentos/Darlyn/PaginaWeb/latamstudyvisa/src/pages/index.astro", void 0);

const $$file = "C:/Users/dytal/OneDrive/Documentos/Darlyn/PaginaWeb/latamstudyvisa/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
