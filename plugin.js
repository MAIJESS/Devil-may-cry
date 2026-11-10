// Devil May Cry · temas para Kino (apiVersion 18)
// Los temas son datos en kino-plugin.json. Este archivo solo dibuja la pantalla de presentación.

const THEMES = [
  { id: "dmc-dante",  es: "Dante",  en: "Dante",  tagEs: "Rojo carmesí y cuernos de demonio", tagEn: "Crimson red and demon horns" },
  { id: "dmc-vergil", es: "Vergil", en: "Vergil", tagEs: "Azul Yamato y un corte limpio",     tagEn: "Yamato blue and a clean cut" },
  { id: "dmc-lady",   es: "Lady",   en: "Lady",   tagEs: "Turquesa y mira de Kalina Ann",     tagEn: "Teal and a Kalina Ann crosshair" },
  { id: "dmc-trish",  es: "Trish",  en: "Trish",  tagEs: "Amarillo eléctrico y relámpago",    tagEn: "Electric yellow and lightning" },
];

export async function screen({ activeTheme }) {
  const cards = THEMES.map((t) => {
    const on = activeTheme === t.id;
    return {
      type: "Card",
      key: "card-" + t.id,
      padding: 16,
      children: [
        { type: "Text", text: t.es, textEn: t.en, style: "h3", color: "primary" },
        { type: "Text", text: t.tagEs, textEn: t.tagEn, style: "caption", color: "muted" },
        { type: "SizedBox", height: 8 },
        {
          type: "ElevatedButton",
          key: "btn-" + t.id,
          labelText: on ? "Quitar tema" : "Usar este tema",
          labelTextEn: on ? "Turn off" : "Use this theme",
          onPressed: { go: { useTheme: { theme: on ? null : t.id } } },
        },
      ],
    };
  });

  return {
    type: "SingleChildScrollView",
    children: [
      {
        type: "Column",
        padding: { compact: 16, expanded: 32 },
        gap: 12,
        children: [
          { type: "Text", text: "Devil May Cry", style: "h1" },
          {
            type: "Text",
            text: "Elige un tema para toda la app. Cada uno cambia colores, fondo y el logo de Kino.",
            textEn: "Pick a theme for the whole app. Each one changes colors, background and the Kino logo.",
            style: "p",
            color: "muted",
          },
          { type: "Row", wrap: true, gap: 12, children: cards.map((c) => ({ ...c, span: { compact: 12, medium: 6, expanded: 6 } })) },
        ],
      },
    ],
  };
}

export async function screenEvent() {
  return null;
}
