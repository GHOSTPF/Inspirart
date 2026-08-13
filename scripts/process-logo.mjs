import sharp from "sharp";

async function keyOut({ input, output, mode, trimThreshold = 12 }) {
  const img = sharp(input).toColourspace("srgb");
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  const out = Buffer.alloc(width * height * 4);

  for (let i = 0; i < width * height; i++) {
    const r = data[i * channels];
    const g = data[i * channels + 1];
    const b = data[i * channels + 2];
    const luminance = (r + g + b) / 3;
    const alpha = mode === "dark-on-light" ? 255 - luminance : luminance;

    out[i * 4] = r;
    out[i * 4 + 1] = g;
    out[i * 4 + 2] = b;
    out[i * 4 + 3] = alpha;
  }

  await sharp(out, { raw: { width, height, channels: 4 } })
    .png()
    .trim({ threshold: trimThreshold })
    .toFile(output);
}

async function recolor({ input, output, hex }) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  const { data, info } = await sharp(input)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const { width, height } = info;
  const out = Buffer.alloc(width * height * 4);

  for (let i = 0; i < width * height; i++) {
    out[i * 4] = r;
    out[i * 4 + 1] = g;
    out[i * 4 + 2] = b;
    out[i * 4 + 3] = data[i * 4 + 3];
  }

  await sharp(out, { raw: { width, height, channels: 4 } }).png().toFile(output);
}

const brand = "public/brand";

// Base transparent cut-outs from the CMYK exports
await keyOut({ input: `${brand}/src-mark-dark.jpg`, output: `${brand}/logo_mark_preto.png`, mode: "dark-on-light" });
await keyOut({ input: `${brand}/src-mark-branco.jpg`, output: `${brand}/logo_mark_branco.png`, mode: "light-on-dark" });
await keyOut({ input: `${brand}/src-mark-navy.jpg`, output: `${brand}/logo_mark_navy.png`, mode: "dark-on-light" });
await keyOut({ input: `${brand}/src-wordmark-dark.jpg`, output: `${brand}/logo_wordmark_preto.png`, mode: "dark-on-light" });
await keyOut({ input: `${brand}/src-wordmark-light.jpg`, output: `${brand}/logo_wordmark_branco.png`, mode: "light-on-dark" });

// Recolored mark variants (alpha mask from the dark cut-out, refilled with brand colors)
const colors = {
  coral: "#ee8477",
  mustard: "#f0a83e",
};

for (const [name, hex] of Object.entries(colors)) {
  await recolor({ input: `${brand}/logo_mark_preto.png`, output: `${brand}/logo_mark_${name}.png`, hex });
}

console.log("done");
