// ============================================================
// Resolves image files in src/assets/images/ to Astro
// ImageMetadata objects for use with the <Image /> component
// (astro:assets), which auto-generates optimized WebP + lazy
// loading. Reference images by filename via img('name.jpg').
//
// NOTE: current images are keyword-sourced Creative-Commons
// placeholders (loremflickr) — replace with licensed/branded
// photography before launch. See spec §14.
// ============================================================

const modules = import.meta.glob(
  '../assets/images/*.{jpg,jpeg,png,webp,avif}',
  { eager: true }
);

const map = {};
for (const path in modules) {
  const name = path.split('/').pop();
  map[name] = modules[path].default;
}

export function img(name) {
  const meta = map[name];
  if (!meta) {
    throw new Error(
      `[images] "${name}" not found in src/assets/images. Available: ${Object.keys(
        map
      ).join(', ')}`
    );
  }
  return meta;
}
