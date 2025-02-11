import { jsx, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, useMatches, useActionData, useLoaderData, useParams, useRouteError, Meta, Links, ScrollRestoration, Scripts, Outlet, isRouteErrorResponse } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { createElement } from "react";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, streamTimeout + 1e3);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
function withComponentProps(Component) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      matches: useMatches()
    };
    return createElement(Component, props);
  };
}
function withErrorBoundaryProps(ErrorBoundary3) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      error: useRouteError()
    };
    return createElement(ErrorBoundary3, props);
  };
}
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap"
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
function Home() {
  return /* @__PURE__ */ jsx("div", { className: "container" });
}
function meta$1({}) {
  return [{
    title: "LoveWeb"
  }, {
    name: "description",
    content: "A website about my love"
  }];
}
const home = withComponentProps(function HomeRoute() {
  return /* @__PURE__ */ jsx(Home, {});
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home,
  meta: meta$1
}, Symbol.toStringTag, { value: "Module" }));
function Poem() {
  return /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "poem-container", children: [
    /* @__PURE__ */ jsx("h1", { className: "poem-t w700", children: "O Ser de Luz" }),
    /* @__PURE__ */ jsxs("div", { className: "poem w400 white", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", {}),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { children: "Há alguns anos, fui a um show" }),
          /* @__PURE__ */ jsx("p", { children: "Quando saí do carro, uma forte luz me irradiou" }),
          /* @__PURE__ */ jsx("p", { children: "Me senti sufocado, mas de maneira agradável ao coração" }),
          /* @__PURE__ */ jsx("p", { children: "Me virei pra ver a fonte da luz, a qual eu não era digno sequer de sentir na pele" }),
          /* @__PURE__ */ jsx("p", { children: "E assim que me virei, fui dilacerado" }),
          /* @__PURE__ */ jsx("p", { children: "Por um sorriso deslumbrante" }),
          /* @__PURE__ */ jsx("p", { children: "Uma paixão incandescente" }),
          /* @__PURE__ */ jsx("p", { children: "Um amor inigualável" }),
          /* @__PURE__ */ jsx("p", { children: "Um olhar fitante que pentrava a alma" }),
          /* @__PURE__ */ jsx("p", { children: "E a encharcava de amor, e calor, e tranquilidade, e alegria" }),
          /* @__PURE__ */ jsx("p", { children: "Que trazia calma mas ao mesmo tempo a incandescia de euforia" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", {}),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { children: "Alguns segundos adiante eu senti o toque " }),
          /* @__PURE__ */ jsx("p", { children: "Da fonte de toda essa luz" }),
          /* @__PURE__ */ jsx("p", { children: "E realmente foi como se eu abraçasse o sol" }),
          /* @__PURE__ */ jsx("p", { children: "Me sentindo atravessado e derretido" }),
          /* @__PURE__ */ jsx("p", { children: "Pela paz que encontrei" }),
          /* @__PURE__ */ jsx("p", { children: "E o amor pelo qual fui agraciado " }),
          /* @__PURE__ */ jsx("p", { children: "Sem merecer," }),
          /* @__PURE__ */ jsx("p", { children: "Sem merecer" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", {}),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { children: "Seguimos em direção ao local, conversando" }),
          /* @__PURE__ */ jsx("p", { children: "Com sorrisos no rosto e timidez no coração" }),
          /* @__PURE__ */ jsx("p", { children: "Nos assentamos e demos as mãos" }),
          /* @__PURE__ */ jsx("p", { children: "Eu tocava os dedos delicados" }),
          /* @__PURE__ */ jsx("p", { children: "De um anjo materializado em luz" }),
          /* @__PURE__ */ jsx("p", { children: "Seu brilho estonteante me cegava" }),
          /* @__PURE__ */ jsx("p", { children: "E eu só conseguia ver o amor ali presente" }),
          /* @__PURE__ */ jsx("p", { children: "E sentir as manifestações da sua existência" }),
          /* @__PURE__ */ jsx("p", { children: "Seu cheiro, " }),
          /* @__PURE__ */ jsx("p", { children: "Sua textura," }),
          /* @__PURE__ */ jsx("p", { children: "Sua voz," }),
          /* @__PURE__ */ jsx("p", { children: "Não conseguia sequer compreender a felicidade que me tomava naquele momento" }),
          /* @__PURE__ */ jsx("p", { children: "Como pode um ser, ter o poder de me irradiar, com um simples encostar ?" }),
          /* @__PURE__ */ jsx("p", { children: "E como poderia eu, ser digno desse contato ?" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", {}),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { children: "O tempo foi passando e cada momento era como estar desfrutando de frutos perfeitos no paraíso" }),
          /* @__PURE__ */ jsx("p", { children: "Cada sorriso que eu tinha o privilégio de presenciar" }),
          /* @__PURE__ */ jsx("p", { children: "Cada som que saía de sua boca majestosa" }),
          /* @__PURE__ */ jsx("p", { children: "Vibrava dentro do meu crânio como um chacoalhar de prazer" }),
          /* @__PURE__ */ jsx("p", { children: "Aquelas notas doces que saíam da garganta de um ser perfeito e iluminado" }),
          /* @__PURE__ */ jsx("p", { children: "Que ressoavam todo o meu corpo e chegavam ao meu coração" }),
          /* @__PURE__ */ jsx("p", { children: "Quase explodindo de tanta paixão" }),
          /* @__PURE__ */ jsx("p", { children: "De tanta euforia" }),
          /* @__PURE__ */ jsx("p", { children: "De tanta realização" }),
          /* @__PURE__ */ jsx("p", { children: "De tanta sorte" }),
          /* @__PURE__ */ jsx("p", { children: "De tanta emoção" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", {}),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { children: "Por horas fiquei olhando para seus adoráveis cabelos" }),
          /* @__PURE__ */ jsx("p", { children: "Negros" }),
          /* @__PURE__ */ jsx("p", { children: "Que nao refletiam cor alguma" }),
          /* @__PURE__ */ jsx("p", { children: "A não ser a cor da perfeição" }),
          /* @__PURE__ */ jsx("p", { children: "E que exalavam perfume agradável " }),
          /* @__PURE__ */ jsx("p", { children: "Não só ao olfato mas também ao coração" }),
          /* @__PURE__ */ jsx("p", { children: "Macios, como a vermelhidão dos seus lábios" }),
          /* @__PURE__ */ jsx("p", { children: "Sedosos como a sua pele" }),
          /* @__PURE__ */ jsx("p", { children: "Tudo naquele ser fazia sentido" }),
          /* @__PURE__ */ jsx("p", { children: "E ao mesmo tempo tudo nele era incompreensível" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", {}),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { children: "E foi aí" }),
          /* @__PURE__ */ jsx("p", { children: "Quando eu imaginava que aquele sonho vivido nao poderia melhorar" }),
          /* @__PURE__ */ jsx("p", { children: "A nossa música começou a tocar " }),
          /* @__PURE__ */ jsx("p", { children: "E em meio aqueles versos, num lapso de coragem e vontade incontrolável" }),
          /* @__PURE__ */ jsx("p", { children: "Eu puxei aquele rosto delicado e lhe dei um beijo" }),
          /* @__PURE__ */ jsx("p", { children: "Naqueles lábios doces como uma manga rosa" }),
          /* @__PURE__ */ jsx("p", { children: "E macios como algodão das nuvens" }),
          /* @__PURE__ */ jsx("p", { children: "Por um momento, o meu corpo se tornou sem forma" }),
          /* @__PURE__ */ jsx("p", { children: "Existindo somente como espírito" }),
          /* @__PURE__ */ jsx("p", { children: "Tudo que eu via era a luz da sua face" }),
          /* @__PURE__ */ jsx("p", { children: "Adorável" }),
          /* @__PURE__ */ jsx("p", { children: "Minhas emoções dançavam, cantavam e brigavam entre si" }),
          /* @__PURE__ */ jsx("p", { children: "Me irradiava de prazer e felicidade" }),
          /* @__PURE__ */ jsx("p", { children: "Sentia algo indescritível mas ao mesmo tempo muito simples" }),
          /* @__PURE__ */ jsx("p", { children: "Eu não conseguia acreditar no que acabava de acontecer" }),
          /* @__PURE__ */ jsx("p", { children: "Até hoje e para sempre, eu nunca vou compreender como eu poderia merecer tamanho presente" }),
          /* @__PURE__ */ jsx("p", { children: "Como o de estar ao lado dele e sentir os toques do seu amor perfeito" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", {}),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { children: "Antes que meu corpo recuperasse sua forma " }),
          /* @__PURE__ */ jsx("p", { children: "Enquanto a mesma sinfonia ainda era performada" }),
          /* @__PURE__ */ jsx("p", { children: "O ser se virou a mim e, com sorriso perfeito" }),
          /* @__PURE__ */ jsx("p", { children: '"Te amo"' }),
          /* @__PURE__ */ jsx("p", { children: 'Uau. "Te amo". "Te amo".' }),
          /* @__PURE__ */ jsx("p", { children: "Aquilo ressoou na minha alma" }),
          /* @__PURE__ */ jsx("p", { children: "Por muito tempo" }),
          /* @__PURE__ */ jsx("p", { children: "A maior declaração do seu amor por mim" }),
          /* @__PURE__ */ jsx("p", { children: "Do qual eu não era, não sou, e nunca serei digno" }),
          /* @__PURE__ */ jsx("p", { children: "Proferido face a face" }),
          /* @__PURE__ */ jsx("p", { children: "Mais do que nunca me senti completo" }),
          /* @__PURE__ */ jsx("p", { children: "Mas ao mesmo tempo estava divido em várias partes de mim" }),
          /* @__PURE__ */ jsx("p", { children: "E de maneira inexplicável todas elas eram agradáveis a ele" }),
          /* @__PURE__ */ jsx("p", { children: "Como poderia aquilo acontecer comigo" }),
          /* @__PURE__ */ jsx("p", { children: "Como poderia eu merecer aquele título" }),
          /* @__PURE__ */ jsx("p", { children: "O título de ser amado pelo Ser de Luz" }),
          /* @__PURE__ */ jsx("p", { children: "Era impossível de se acreditar" }),
          /* @__PURE__ */ jsx("p", { children: "Ainda é impossível de se acreditar" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", {}),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { children: "Eternamente serei grato, e eternamente não merecedor" }),
          /* @__PURE__ */ jsx("p", { children: "Do seu lindo e único" }),
          /* @__PURE__ */ jsx("p", { children: "Inefável amor" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "embeds", children: [
      /* @__PURE__ */ jsx(
        "iframe",
        {
          style: { borderRadius: "12px" },
          src: "https://open.spotify.com/embed/track/3yiXy2ydZP9ZpsYxvUI6sO?utm_source=generator&theme=0",
          width: "100%",
          height: "152",
          allow: "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",
          loading: "lazy"
        }
      ),
      /* @__PURE__ */ jsx("img", { src: "./oserdeluz.jpeg" })
    ] })
  ] }) });
}
function meta({}) {
  return [{
    title: "Poema"
  }, {
    name: "description",
    content: "Poema 'X'"
  }];
}
const poem = withComponentProps(function PoemRoute() {
  return /* @__PURE__ */ jsx(Poem, {});
});
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: poem,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/lovewebls.github.io/assets/entry.client-QGsOKR_y.js", "imports": ["/lovewebls.github.io/assets/chunk-IR6S3I6Y-BvsIcvZg.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/lovewebls.github.io/assets/root-Sy7HLEn0.js", "imports": ["/lovewebls.github.io/assets/chunk-IR6S3I6Y-BvsIcvZg.js", "/lovewebls.github.io/assets/with-props-DvPqDDfd.js"], "css": ["/lovewebls.github.io/assets/root-DZ1MjiAm.css"] }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/lovewebls.github.io/assets/home-BP8r3cV1.js", "imports": ["/lovewebls.github.io/assets/with-props-DvPqDDfd.js", "/lovewebls.github.io/assets/chunk-IR6S3I6Y-BvsIcvZg.js"], "css": ["/lovewebls.github.io/assets/root-DZ1MjiAm.css"] }, "routes/poem": { "id": "routes/poem", "parentId": "root", "path": "poem", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/lovewebls.github.io/assets/poem-fwEHSTBd.js", "imports": ["/lovewebls.github.io/assets/with-props-DvPqDDfd.js", "/lovewebls.github.io/assets/chunk-IR6S3I6Y-BvsIcvZg.js"], "css": ["/lovewebls.github.io/assets/root-DZ1MjiAm.css"] } }, "url": "/lovewebls.github.io/assets/manifest-0fc87522.js", "version": "0fc87522" };
const assetsBuildDirectory = "build\\client";
const basename = "/";
const future = { "unstable_optimizeDeps": false };
const isSpaMode = false;
const publicPath = "/lovewebls.github.io/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  },
  "routes/poem": {
    id: "routes/poem",
    parentId: "root",
    path: "poem",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  publicPath,
  routes
};
