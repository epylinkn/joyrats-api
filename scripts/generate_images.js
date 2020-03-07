const jimp = require('jimp')

async function main() {
  const font = await jimp.loadFont(jimp.FONT_SANS_64_BLACK);
  const image = await jimp.read('public/images/rat.jpg');

  for (let i = 0; i < 100; i++) {
    // apply transformations
    let texture = image.clone()
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)

    texture.color([{ apply: 'red', params: [r] }])
    texture.color([{ apply: 'green', params: [g] }])
    texture.color([{ apply: 'blue', params: [b] }])

    texture.print(
      font,
      24,
      24,
      i,
    );

    // write to new image file
    let filename = `public/textures/texture${i}.jpg`
    texture.write(filename)
  }
}

main();
