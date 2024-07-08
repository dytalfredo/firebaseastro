import '@astrojs/internal-helpers/path';
import 'cookie';
import { bold, red, yellow, dim, blue } from 'kleur/colors';
import './astro/server_D_poGQdw.mjs';
import 'clsx';
import 'html-escaper';
import { compile } from 'path-to-regexp';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/node","routes":[{"file":"api/auth/register","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/auth/register","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/auth\\/register\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"auth","dynamic":false,"spread":false}],[{"content":"register","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/auth/register.ts","pathname":"/api/auth/register","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"api/auth/signin","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/auth/signin","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/auth\\/signin\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"auth","dynamic":false,"spread":false}],[{"content":"signin","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/auth/signin.ts","pathname":"/api/auth/signin","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"api/auth/signout","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/auth/signout","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/auth\\/signout\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"auth","dynamic":false,"spread":false}],[{"content":"signout","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/auth/signout.ts","pathname":"/api/auth/signout","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"certificacionielts/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/certificacionielts","isIndex":false,"type":"page","pattern":"^\\/certificacionielts\\/?$","segments":[[{"content":"certificacionielts","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/certificacionielts.astro","pathname":"/certificacionielts","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"dashboard/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/dashboard","isIndex":false,"type":"page","pattern":"^\\/dashboard\\/?$","segments":[[{"content":"dashboard","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/dashboard.astro","pathname":"/dashboard","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"entrenamientovocacional/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/entrenamientovocacional","isIndex":false,"type":"page","pattern":"^\\/entrenamientovocacional\\/?$","segments":[[{"content":"entrenamientovocacional","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/entrenamientovocacional.astro","pathname":"/entrenamientovocacional","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"envioexitoso/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/envioexitoso","isIndex":false,"type":"page","pattern":"^\\/envioexitoso\\/?$","segments":[[{"content":"envioexitoso","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/envioexitoso.astro","pathname":"/envioexitoso","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"estudiaenaustralia/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/estudiaenaustralia","isIndex":false,"type":"page","pattern":"^\\/estudiaenaustralia\\/?$","segments":[[{"content":"estudiaenaustralia","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/estudiaenaustralia.astro","pathname":"/estudiaenaustralia","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"estudiaenirlanda/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/estudiaenirlanda","isIndex":false,"type":"page","pattern":"^\\/estudiaenirlanda\\/?$","segments":[[{"content":"estudiaenirlanda","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/estudiaenirlanda.astro","pathname":"/estudiaenirlanda","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"estudiaennuevazelanda/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/estudiaennuevazelanda","isIndex":false,"type":"page","pattern":"^\\/estudiaennuevazelanda\\/?$","segments":[[{"content":"estudiaennuevazelanda","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/estudiaennuevazelanda.astro","pathname":"/estudiaennuevazelanda","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"faq/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/faq","isIndex":false,"type":"page","pattern":"^\\/faq\\/?$","segments":[[{"content":"faq","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/faq.astro","pathname":"/faq","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"preparacioncertificaciontoefl/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/preparacioncertificaciontoefl","isIndex":false,"type":"page","pattern":"^\\/preparacioncertificaciontoefl\\/?$","segments":[[{"content":"preparacioncertificaciontoefl","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/preparacioncertificaciontoefl.astro","pathname":"/preparacioncertificaciontoefl","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"register/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/register","isIndex":false,"type":"page","pattern":"^\\/register\\/?$","segments":[[{"content":"register","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/register.astro","pathname":"/register","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"signin/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/signin","isIndex":false,"type":"page","pattern":"^\\/signin\\/?$","segments":[[{"content":"signin","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/signin.astro","pathname":"/signin","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"signout/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/signout","isIndex":false,"type":"page","pattern":"^\\/signout\\/?$","segments":[[{"content":"signout","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/signout.astro","pathname":"/signout","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"sobrenosotros/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/sobrenosotros","isIndex":false,"type":"page","pattern":"^\\/sobrenosotros\\/?$","segments":[[{"content":"sobrenosotros","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sobrenosotros.astro","pathname":"/sobrenosotros","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/node.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/certificacionielts.BpokG6SA.css"},{"type":"inline","content":"@font-face{font-family:Abril Fatface;font-style:normal;font-display:swap;font-weight:400;src:url(/_astro/abril-fatface-latin-ext-400-normal.C5FI7UIy.woff2) format(\"woff2\"),url(/_astro/abril-fatface-latin-ext-400-normal.CIwJmCNm.woff) format(\"woff\");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Abril Fatface;font-style:normal;font-display:swap;font-weight:400;src:url(/_astro/abril-fatface-latin-400-normal.Bld6cQVQ.woff2) format(\"woff2\"),url(/_astro/abril-fatface-latin-400-normal.Ma3PFmLR.woff) format(\"woff\");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}\n"},{"type":"external","src":"/_astro/entrenamientovocacional.BCBNzTOw.css"},{"type":"inline","content":"h3[data-astro-cid-73vdfurv]{font-family:Abril Fatface,cursive;text-shadow:4px 4px 2px rgba(0,0,0,.6)}p[data-astro-cid-73vdfurv]{text-shadow:4px 4px 2px rgba(0,0,0,.6)}\nh2[data-astro-cid-6lejxtmk]{text-shadow:4px 4px 2px rgba(4,39,20,.6)}\nh2[data-astro-cid-gkkuu6lp]{text-shadow:4px 4px 2px rgba(4,39,20,.6)}\nh2[data-astro-cid-d3m3t4dp]{text-shadow:2px 2px 2px rgb(24,24,23)}.flag[data-astro-cid-d3m3t4dp]{animation:float 6s ease-in-out infinite;filter:drop-shadow(2px 2px 5px rgb(21,21,18))}.more[data-astro-cid-d3m3t4dp]{animation:more 1s ease-in-out infinite}@keyframes float{0%{filter:drop-shadow(0 5px 15px 0px rgba(0,0,0,.6));transform:translatey(0)}50%{filter:drop-shadow(0 25px 15px 0px rgba(0,0,0,.2));transform:translatey(-10px)}to{filter:drop-shadow(0 5px 15px 0px rgba(0,0,0,.6));transform:translatey(0)}}@keyframes more{0%{transform:translate(0)}50%{transform:translate(-5px)}to{transform:translate(0)}}strong[data-astro-cid-lovch3sb]{font-weight:900;text-shadow:3px 2px 5px #061b33}.mega-menu[data-astro-cid-lovch3sb]{z-index:-10;left:0;position:absolute;text-align:left;width:100%;opacity:0;transition:all .2s ease-in-out;top:80%}.hoverable[data-astro-cid-lovch3sb]{position:static}.hoverable[data-astro-cid-lovch3sb]>a[data-astro-cid-lovch3sb]:after{content:\"▼\";font-size:10px;padding-left:6px;position:relative;top:-1px}.hoverable[data-astro-cid-lovch3sb]:hover .mega-menu[data-astro-cid-lovch3sb]{opacity:1;top:100%;z-index:50}a{text-decoration:none}*,*:before,*:after{box-sizing:border-box}*{margin:0}body{line-height:1.5;-webkit-font-smoothing:antialiased}img,picture,video,canvas,svg{display:block;max-width:100%}input,button,textarea,select{font:inherit}p,h1,h2,h3,h4,h5,h6{overflow-wrap:break-word}#root,#__next{isolation:isolate}html{font-family:Lato,sans-serif;background:var(--whiteBlue);scroll-behavior:smooth}body{position:relative;overflow-x:hidden;background-color:#fff;transition:all .3s ease-out}h1,h2{font-weight:800;color:var(--whiteBlue)}h2{color:var(--black);font-size:2rem;font-family:Abril Fatface,system-ui;text-align:center}h1{font-size:2rem}\n"}],"routeData":{"route":"/preparaciontesolltam","isIndex":false,"type":"page","pattern":"^\\/preparaciontesolltam\\/?$","segments":[[{"content":"preparaciontesolltam","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/preparaciontesolltam.astro","pathname":"/preparaciontesolltam","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/dytal/OneDrive/Documentos/Darlyn/PaginaWeb/latamstudyvisa/src/pages/dashboard.astro",{"propagation":"none","containsHead":true}],["C:/Users/dytal/OneDrive/Documentos/Darlyn/PaginaWeb/latamstudyvisa/src/pages/entrenamientovocacional.astro",{"propagation":"none","containsHead":true}],["C:/Users/dytal/OneDrive/Documentos/Darlyn/PaginaWeb/latamstudyvisa/src/pages/envioexitoso.astro",{"propagation":"none","containsHead":true}],["C:/Users/dytal/OneDrive/Documentos/Darlyn/PaginaWeb/latamstudyvisa/src/pages/estudiaenaustralia.astro",{"propagation":"none","containsHead":true}],["C:/Users/dytal/OneDrive/Documentos/Darlyn/PaginaWeb/latamstudyvisa/src/pages/estudiaenirlanda.astro",{"propagation":"none","containsHead":true}],["C:/Users/dytal/OneDrive/Documentos/Darlyn/PaginaWeb/latamstudyvisa/src/pages/estudiaennuevazelanda.astro",{"propagation":"none","containsHead":true}],["C:/Users/dytal/OneDrive/Documentos/Darlyn/PaginaWeb/latamstudyvisa/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/dytal/OneDrive/Documentos/Darlyn/PaginaWeb/latamstudyvisa/src/pages/preparacioncertificaciontoefl.astro",{"propagation":"none","containsHead":true}],["C:/Users/dytal/OneDrive/Documentos/Darlyn/PaginaWeb/latamstudyvisa/src/pages/preparaciontesolltam.astro",{"propagation":"none","containsHead":true}],["C:/Users/dytal/OneDrive/Documentos/Darlyn/PaginaWeb/latamstudyvisa/src/pages/register.astro",{"propagation":"none","containsHead":true}],["C:/Users/dytal/OneDrive/Documentos/Darlyn/PaginaWeb/latamstudyvisa/src/pages/signin.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:node_modules/astro/dist/assets/endpoint/node@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/api/auth/register@_@ts":"pages/api/auth/register.astro.mjs","\u0000@astro-page:src/pages/api/auth/signin@_@ts":"pages/api/auth/signin.astro.mjs","\u0000@astro-page:src/pages/api/auth/signout@_@ts":"pages/api/auth/signout.astro.mjs","\u0000@astro-page:src/pages/certificacionielts@_@astro":"pages/certificacionielts.astro.mjs","\u0000@astro-page:src/pages/dashboard@_@astro":"pages/dashboard.astro.mjs","\u0000@astro-page:src/pages/entrenamientovocacional@_@astro":"pages/entrenamientovocacional.astro.mjs","\u0000@astro-page:src/pages/envioexitoso@_@astro":"pages/envioexitoso.astro.mjs","\u0000@astro-page:src/pages/estudiaenaustralia@_@astro":"pages/estudiaenaustralia.astro.mjs","\u0000@astro-page:src/pages/estudiaenirlanda@_@astro":"pages/estudiaenirlanda.astro.mjs","\u0000@astro-page:src/pages/estudiaennuevazelanda@_@astro":"pages/estudiaennuevazelanda.astro.mjs","\u0000@astro-page:src/pages/faq@_@astro":"pages/faq.astro.mjs","\u0000@astro-page:src/pages/preparacioncertificaciontoefl@_@astro":"pages/preparacioncertificaciontoefl.astro.mjs","\u0000@astro-page:src/pages/preparaciontesolltam@_@astro":"pages/preparaciontesolltam.astro.mjs","\u0000@astro-page:src/pages/register@_@astro":"pages/register.astro.mjs","\u0000@astro-page:src/pages/signin@_@astro":"pages/signin.astro.mjs","\u0000@astro-page:src/pages/signout@_@astro":"pages/signout.astro.mjs","\u0000@astro-page:src/pages/sobrenosotros@_@astro":"pages/sobrenosotros.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","C:/Users/dytal/OneDrive/Documentos/Darlyn/PaginaWeb/latamstudyvisa/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","/node_modules/astro/dist/assets/endpoint/node.js":"chunks/node_CXoAAVli.mjs","/src/pages/api/auth/register.ts":"chunks/register_BQdxSVqj.mjs","/src/pages/api/auth/signin.ts":"chunks/signin_D0teyOyC.mjs","/src/pages/api/auth/signout.ts":"chunks/signout_DkaHrLg9.mjs","/src/pages/certificacionielts.astro":"chunks/certificacionielts_DdgPxfrx.mjs","/src/pages/dashboard.astro":"chunks/dashboard_VC87YPd4.mjs","/src/pages/entrenamientovocacional.astro":"chunks/entrenamientovocacional_CYsG5zTN.mjs","/src/pages/envioexitoso.astro":"chunks/envioexitoso_Cnw8nzf9.mjs","/src/pages/estudiaenaustralia.astro":"chunks/estudiaenaustralia_B-QYi2_H.mjs","/src/pages/estudiaenirlanda.astro":"chunks/estudiaenirlanda_NZjlnanS.mjs","/src/pages/estudiaennuevazelanda.astro":"chunks/estudiaennuevazelanda_B4gd7ZZt.mjs","/src/pages/faq.astro":"chunks/faq_tOSFbXY6.mjs","/src/pages/preparacioncertificaciontoefl.astro":"chunks/preparacioncertificaciontoefl_BchW8PCC.mjs","/src/pages/preparaciontesolltam.astro":"chunks/preparaciontesolltam_DWU13CRP.mjs","/src/pages/register.astro":"chunks/register_-lkTPheY.mjs","/src/pages/signin.astro":"chunks/signin_DnIC5E95.mjs","/src/pages/signout.astro":"chunks/signout_CGLh4pQk.mjs","/src/pages/sobrenosotros.astro":"chunks/sobrenosotros_DtyYH9-q.mjs","/src/pages/index.astro":"chunks/index_C7gyOgC-.mjs","\u0000@astrojs-manifest":"manifest_Ba-wvsqE.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.NhUnWv8s.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/lato-latin-400-normal.BEhtfm5r.woff2","/_astro/abril-fatface-latin-400-normal.Bld6cQVQ.woff2","/_astro/lato-latin-ext-400-normal.C8eBZ-j2.woff2","/_astro/abril-fatface-latin-ext-400-normal.C5FI7UIy.woff2","/_astro/lato-latin-400-normal.B11PyLys.woff","/_astro/abril-fatface-latin-400-normal.Ma3PFmLR.woff","/_astro/abril-fatface-latin-ext-400-normal.CIwJmCNm.woff","/_astro/certificacionielts.BpokG6SA.css","/_astro/entrenamientovocacional.BCBNzTOw.css","/2.jpg","/3.jpg","/5.jpg","/8.jpg","/australiastudy.jpg","/canada-flag.svg","/favicon.svg","/herovisa.jpg","/herovisa2.jpg","/irlandastudy.jpg","/Logo.png","/logo2.png","/logolatamstudyvisa.svg","/logolatamstudyvisa2.svg","/nuevazelandastudy.jpg","/paisaje-isla-sur-archipielago.jpg","/pamelatestimonio.jpg","/preparacion_ingles.jpg","/preparacion_toefl.jpg","/roadtodream.jpg","/roadtodream2.jpg","/talleresvet.webp","/talleresvocacionales.jpg","/visaaustralia.jpg","/visaaustralia2.jpg","/visairlanda.jpg","/visanuevazelanda.jpg","/volcantongariro.webp","/_astro/hoisted.NhUnWv8s.js","/api/auth/register","/api/auth/signin","/api/auth/signout","/certificacionielts/index.html","/dashboard/index.html","/entrenamientovocacional/index.html","/envioexitoso/index.html","/estudiaenaustralia/index.html","/estudiaenirlanda/index.html","/estudiaennuevazelanda/index.html","/faq/index.html","/preparacioncertificaciontoefl/index.html","/register/index.html","/signin/index.html","/signout/index.html","/sobrenosotros/index.html","/index.html"],"buildFormat":"directory","checkOrigin":false,"rewritingEnabled":false,"experimentalEnvGetSecretEnabled":false});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest as m };
