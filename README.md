# Devil May Cry · temas para Kino

Plugin de temas para toda la app de Kino, inspirado en la serie de Netflix. Incluye cuatro presentaciones, cada una con su paleta, su fondo, su estilo de bordes y su **logo de Kino modificado**.

| Tema | Id | Logo de Kino modificado |
| --- | --- | --- |
| Dante · Carmesí | `dmc-dante` | Cuernos de demonio sobre la «o» y un ojo rojo en el centro |
| Vergil · Yamato | `dmc-vergil` | Corte diagonal de katana sobre la «o» y chispas azules |
| Lady · Kalina Ann | `dmc-lady` | Mira de francotirador sobre la «o» |
| Trish · Relámpago | `dmc-trish` | Rayo amarillo sobre la «o» |

## Archivos

- `kino-plugin.json`: manifiesto con los 4 `appThemes` y el icono (`"icon": "icon.png"`).
- `plugin.js`: pantalla de presentación con un botón para activar cada tema.
- `icon.png`: icono 512×512 (cuernos, aro rojo y corte dorado).
- `README.md`: este archivo.

## Requisitos

- Kino 0.9.81 o posterior (`apiVersion` 18).
- Los bordes (`colors.border`, `shape.*Border`) se ven desde Kino 0.9.82; en versiones anteriores se ignoran.
- El plugin no usa red ni capacidades (`"hosts": []`).

## Instalar

1. Sube estos cuatro archivos a un repositorio de GitHub (en la raíz o en una subcarpeta).
2. En Kino, instala el plugin con la dirección `owner/repo`.
3. Activa un tema en **Ajustes ▸ Apariencia** o desde la pantalla **Devil May Cry** del plugin.

## Probar antes de publicar

```
node sdk/validate.mjs .
node sdk/run.mjs --context '{"activeTheme":"dmc-dante"}' . screen
```

## Notas de diseño

- Fondos oscuros y pares de color que cumplen las protecciones de legibilidad de Kino (texto 4,5:1, acento 3:1).
- El logo usa `decor`, que se dibuja encima del logo de Kino, centrado en la «o» (radio exterior 100).
- Dante y Vergil piden la experiencia completa y la ligera respectivamente; Kino pregunta antes de cambiarla.
- No cambies los `id` de los temas después de publicar: de ellos cuelgan los ajustes de cada persona.

Devil May Cry es propiedad de sus titulares. Este plugin es un trabajo de fans y no está afiliado a Capcom ni a Netflix.
