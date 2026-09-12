// User configuration for the startpage - update the palette, location, and your preferred tabs, categories, and links

// Define preferred palette for light and dark mode
const preferredLightTheme = latte;
const preferredDarkTheme = mocha;

let palette = initThemeSystem(preferredLightTheme, preferredDarkTheme);

const default_configuration = {
  overrideStorage: true,
  temperature: {
    location: "Barcelona",
    scale: "C",
  },
  clock: {
    format: "k:i p",
    icon_color: palette.maroon,
  },
  additionalClocks: [
    {
      label: "CAT",
      timezone: "Europe/Madrid",
      format: "h:i",
      icon_color: palette.peach,
    },
  ],
  search: {
    engines: {
      p: ["https://www.perplexity.ai/search/?q=", "PerplexityAI"],
      d: ["https://duckduckgo.com/?q=", "DuckDuckGo"],
      g: ["https://google.com/search?q=", "Google"],
    },
    default: "g",
  },
  keybindings: {
    "s": "search-bar",
    "S": "search-bar",
  },
  disabled: [],
  localIcons: true,
  localFonts: true,
  fastlink: "https://gemini.google.com/app?hl=es-ES",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "myself",
      background_url: "src/img/banners/frieren.gif",
      categories: [
        {
          name: "bookmarks",
          links: [
            { name: "Movistar", url: "https://ver.movistarplus.es/", icon: "plus", icon_color: palette.sky },
            { name: "DAZN", url: "https://www.dazn.com/es-ES/home", icon: "building-stadium", icon_color: palette.green },
            { name: "r/unixporn", url: "https://www.reddit.com/r/unixporn", icon: "brand-reddit", icon_color: palette.red },
            { name: "Hyprland", url: "https://wiki.hypr.land/", icon: "droplet", icon_color: palette.sky },
          ],
        },
        {
          name: "workspace",
          links: [
            { name: "Gmail", url: "https://mail.google.com", icon: "brand-gmail", icon_color: palette.green },
            { name: "GCalendar", url: "https://calendar.google.com", icon: "calendar-filled", icon_color: palette.peach },
            { name: "GSheets", url: "https://docs.google.com/spreadsheets", icon: "table", icon_color: palette.red },
            { name: "GDrive", url: "https://drive.google.com/drive/home", icon: "brand-google-drive", icon_color: palette.blue },
          ],
        },
        {
          name: "media",
          links: [
            { name: "WhatsApp", url: "https://web.whatsapp.com/", icon: "brand-whatsapp", icon_color: palette.green },
            { name: "YouTube", url: "https://www.youtube.com", icon: "brand-youtube", icon_color: palette.red },
            { name: "Twitch", url: "https://www.twitch.tv/", icon: "brand-twitch", icon_color: palette.flamingo },
            { name: "Instagram", url: "https://www.instagram.com/", icon: "brand-instagram", icon_color: palette.red },
            { name: "Twitter", url: "https://x.com/home", icon: "brand-x", icon_color: palette.blue },
          ],
        },
      ],
    },
    {
      name: "uni",
      background_url: "src/img/banners/frierenreading.gif",
      categories: [
        {
          name: "upc",
          links: [
            { name: "Github", url: "https://github.com", icon: "brand-github", icon_color: palette.green },
            { name: "Racó", url: "https://raco.fib.upc.edu/home/portada/didac.molina", icon: "school", icon_color: palette.peach },
            { name: "Atenea", url: "https://atenea.upc.edu/my/", icon: "world-www", icon_color: palette.sky },
          ],
        },
        {
          name: "coding",
          links: [
            { name: "Jutge", url: "https://jutge.org/", icon: "hammer", icon_color: palette.green },
            { name: "EDA", url: "https://www.cs.upc.edu/eda/", icon: "file-code", icon_color: palette.red },
            { name: "SQL", url: "https://learnsql3.fib.upc.edu/moodle/login/index.php", icon: "database", icon_color: palette.blue },
          ],
        },
        {
          name: "webpages",
          links: [
            { name: "PE Web", url: "https://docencia.ac.upc.edu/FIB/grau/EC/", icon: "math-symbols", icon_color: palette.red },
            { name: "SO Web", url: "https://web.mat.upc.edu/fib/matematiques1/index_english.htm", icon: "brand-ubuntu", icon_color: palette.peach },
            { name: "Aula UOC", url: "https://aula.uoc.edu/", icon: "chalkboard-teacher", icon_color: palette.sky },
          ],
        },
      ],
    },
    {
      name: "chi ll",
      background_url: "src/img/banners/frierenfeet.gif",
      categories: [
        {
          name: "buy games",
          links: [
            { name: "GG Deals", url: "https://gg.deals/", icon: "shopping-cart-discount", icon_color: palette.green },
            { name: "Instant Gaming", url: "https://www.instant-gaming.com/es/", icon: "shopping-cart-discount", icon_color: palette.peach },
            { name: "Eneba", url: "https://www.eneba.com/es/", icon: "shopping-cart-discount", icon_color: palette.red },
          ],
        },
        {
          name: "gaming",
          links: [
            { name: "infiniteBacklog", url: "https://infinitebacklog.net", icon: "device-gamepad", icon_color: palette.green },
            { name: "Steam", url: "https://store.steampowered.com", icon: "brand-steam", icon_color: palette.peach },
            { name: "Vandal", url: "https://vandal.elespanol.com/", icon: "news", icon_color: palette.red },
          ],
        },
        {
          name: "utils",
          links: [
            { name: "SteamDB", url: "https://steamdb.info/", icon: "database", icon_color: palette.green },
            { name: "Weeb Central", url: "https://weebcentral.com/", icon: "book", icon_color: palette.peach },
            { name: "AniList", url: "https://anilist.co/user/asomiD/", icon: "eye-check", icon_color: palette.red },
            { name: "MyFigureCollection", url: "https://myfigurecollection.net/", icon: "shirt", icon_color: palette.blue },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_configuration, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.blue);
