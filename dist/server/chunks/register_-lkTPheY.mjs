/* empty css                                      */
import { k as createComponent, l as renderTemplate, p as renderComponent, m as maybeRenderHead } from './astro/server_D_poGQdw.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './Layout_BkmwKvw_.mjs';

const $$Register = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Register" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Register</h1> <p>Already have an account? <a href="/signin">Sign in</a></p> <form action="/api/auth/register" method="post"> <label for="name">Name</label> <input type="text" name="name" id="name"> <label for="email" for="email">Email</label> <input type="email" name="email" id="email"> <label for="password">Password</label> <input type="password" name="password" id="password"> <button type="submit">Login</button> </form> ` })}`;
}, "C:/Users/dytal/OneDrive/Documentos/Darlyn/PaginaWeb/latamstudyvisa/src/pages/register.astro", void 0);

const $$file = "C:/Users/dytal/OneDrive/Documentos/Darlyn/PaginaWeb/latamstudyvisa/src/pages/register.astro";
const $$url = "/register";

export { $$Register as default, $$file as file, $$url as url };
