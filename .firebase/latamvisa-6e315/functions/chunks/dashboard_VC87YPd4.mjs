/* empty css                                      */
import { k as createComponent, l as renderTemplate, p as renderComponent, o as createAstro, m as maybeRenderHead } from './astro/server_D_poGQdw.mjs';
import 'kleur/colors';
import { a as app } from './server_1hFA-0b5.mjs';
import { getAuth } from 'firebase-admin/auth';
import { $ as $$Layout } from './Layout_BkmwKvw_.mjs';

const $$Astro = createAstro();
const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Dashboard;
  const auth = getAuth(app);
  if (!Astro2.cookies.has("__session")) {
    return Astro2.redirect("/signin");
  }
  const sessionCookie = Astro2.cookies.get("__session");
  const decodedCookie = await auth.verifySessionCookie(sessionCookie.value);
  const user = await auth.getUser(decodedCookie.uid);
  if (!user) {
    return Astro2.redirect("/signin");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "dashboard" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Welcome ${user.displayName}</h1> <p>We are happy to see you here</p> <form action="/api/auth/signout"> <button type="submit">Sign out</button> </form> ` })}`;
}, "C:/Users/dytal/OneDrive/Documentos/Darlyn/PaginaWeb/latamstudyvisa/src/pages/dashboard.astro", void 0);

const $$file = "C:/Users/dytal/OneDrive/Documentos/Darlyn/PaginaWeb/latamstudyvisa/src/pages/dashboard.astro";
const $$url = "/dashboard";

export { $$Dashboard as default, $$file as file, $$url as url };
