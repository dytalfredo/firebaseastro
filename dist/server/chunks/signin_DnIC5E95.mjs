/* empty css                                      */
import { k as createComponent, l as renderTemplate, p as renderComponent, o as createAstro, m as maybeRenderHead } from './astro/server_D_poGQdw.mjs';
import 'kleur/colors';
import { a as app } from './server_1hFA-0b5.mjs';
import { getAuth } from 'firebase-admin/auth';
import { $ as $$Layout } from './Layout_BkmwKvw_.mjs';

const $$Astro = createAstro();
const $$Signin = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Signin;
  const auth = getAuth(app);
  if (Astro2.cookies.has("__session")) {
    const sessionCookie = Astro2.cookies.get("__session");
    const decodedCookie = await auth.verifySessionCookie(sessionCookie.value);
    if (decodedCookie) {
      return Astro2.redirect("/dashboard");
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sign in" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Sign in</h1> <p>New here? <a href="/register">Create an account</a></p> <form action="/api/auth/signin" method="post"> <label for="email" for="email">Email</label> <input type="email" name="email" id="email"> <label for="password">Password</label> <input type="password" name="password" id="password"> <button type="submit">Login</button> </form> ` })} `;
}, "C:/Users/dytal/OneDrive/Documentos/Darlyn/PaginaWeb/latamstudyvisa/src/pages/signin.astro", void 0);

const $$file = "C:/Users/dytal/OneDrive/Documentos/Darlyn/PaginaWeb/latamstudyvisa/src/pages/signin.astro";
const $$url = "/signin";

export { $$Signin as default, $$file as file, $$url as url };
