# Devil May Cry · temas para Kino

Plugin de temas para toda la app de Kino, inspirado en la serie de Netflix. Incluye cuatro presentaciones, cada una con su paleta, su fondo, su estilo de bordes y **su propio logo**: el nombre del personaje (`wordmark`, para menú y cabecera) y su emblema (`mark`, para el riel cerrado del TV), vectorizados fielmente a partir del arte original (con sus colores).

| Tema | Id | Logo |
| --- | --- | --- |
| Dante · Ebony & Ivory | `dmc-dante` | Espadas y pistolas cruzadas sobre una espada dorada; «DANTE» en rojo |
| Vergil · Yamato | `dmc-vergil` | Puño con katana y esquirlas de hielo; «VERGIL» en azul |
| Lady · Kalina Ann | `dmc-lady` | Mira con lanzacohetes; «LADY» en cobre |
| Trish · Thunderbolt | `dmc-trish` | Calavera con rayo y aro púrpura; «TRISH» en dorado |

## Archivos

- `kino-plugin.json`: manifiesto con los 4 `appThemes`, sus logos y el icono (`"icon": "icon.png"`).
- `plugin.js`: pantalla de presentación con un botón para activar cada tema.
- `icon.png`: icono 512×512 (cuernos, aro rojo y corte dorado).
- `preview-logos.png`: vista previa de los logos vectorizados.
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
- Los logos son solo vectores (`logo.wordmark` y `logo.mark`). Como el manifiesto pesa máximo 16 KB y cada trazo máximo 2.000 caracteres, son una vectorización del arte original, sin el subtítulo (por ejemplo «Ebony & Ivory») ni los detalles más finos. Kino conserva su logo original en la pantalla de inicio y en las pantallas de decisión.
- Dante, Lady y Trish piden la experiencia completa y Vergil la ligera; Kino pregunta antes de cambiarla.
- No cambies los `id` de los temas después de publicar: de ellos cuelgan los ajustes de cada persona.

Devil May Cry es propiedad de sus titulares. Este plugin es un trabajo de fans y no está afiliado a Capcom ni a Netflix.
