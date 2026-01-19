import lume from "lume/mod.ts";
import redirects from "lume/plugins/redirects.ts";
import xeo from "xeo/mod.ts";

const site = lume();

site
  .use(xeo({
    fonts: {
      display:
        "https://fonts.google.com/share?selection.family=Sen|Sofia+Sans+Condensed:ital,wght@0,1..1000;1,1..1000",
      text:
        "https://fonts.google.com/share?selection.family=Lexend:wght@100..900",
    },
    colors: {
      xlight: 96, // 84-92
      lighter: 92, // 76-84
      lightness: 84, // 64-72
      darker: 0, // 0-12
    },
  }))
  .add("_redirects")
  .use(redirects({
    output: "netlify",
  }))
  .add("artact.css")
  .add("img")
  .add("lyt")
  .add(
    "https://cdn.jsdelivr.net/npm/lite-youtube-embed@0.3.4/src/lite-yt-embed.min.js",
    "lyt/lite-yt-embed.js",
  )
  .add(
    "https://cdn.jsdelivr.net/npm/lite-youtube-embed@0.3.4/src/lite-yt-embed.min.css",
    "lyt/lite-yt-embed.css",
  );

export default site;
