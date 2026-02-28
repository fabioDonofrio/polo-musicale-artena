const sharp = require("sharp");
const fs = require("fs-extra");
const path = require("path");

const inputDir = path.join(__dirname, "../src/events_images/cross_polo_sound_2025");
const outputDir = path.join(__dirname, "../src/events_images/cross_polo_sound_2025/thumbnails");

async function generate() {
    await fs.ensureDir(outputDir);

    const files = await fs.readdir(inputDir);

    for (const file of files) {
        if (!file.match(/\.(jpg|jpeg|png|webp)$/)) continue;

        const inputPath = path.join(inputDir, file);
        const outputPath = path.join(outputDir, file);

        await sharp(inputPath)
            .resize(300) // larghezza thumbnail
            .jpeg({ quality: 70 })
            .toFile(outputPath);

        console.log("Creato:", outputPath);
    }
}

generate();