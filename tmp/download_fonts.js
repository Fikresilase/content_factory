
import axios from 'axios';
import fs from 'fs';
import path from 'path';

async function downloadFile(url, dest) {
  const response = await axios({
    method: 'GET',
    url: url,
    responseType: 'stream'
  });
  const writer = fs.createWriteStream(dest);
  response.data.pipe(writer);
  return new Promise((resolve, reject) => {
    writer.on('finish', resolve);
    writer.on('error', reject);
  });
}

async function run() {
  const fonts = [
    {
      name: 'MaterialSymbolsOutlined.woff2',
      url: 'https://fonts.gstatic.com/s/materialsymbolsoutlined/v322/kJF1BvYX7BgnkSrUwT8OhrdQw4oELdPIeeII9v6oDMzByHX9rA6RzazHD_dY43zj-jCxv3fzvRNU22ZXGJpEpjC_1v-p_4MrImHCIJIZrDCvHOem.woff2'
    },
    {
      name: 'Inter-Variable.woff2',
      url: 'https://github.com/rsms/inter/raw/master/docs/font-files/Inter-Variable.woff2'
    }
  ];

  const fontsDir = path.join(process.cwd(), 'public', 'fonts');
  if (!fs.existsSync(fontsDir)) {
    fs.mkdirSync(fontsDir, { recursive: true });
  }

  for (const font of fonts) {
    console.log(`Downloading ${font.name}...`);
    try {
      await downloadFile(font.url, path.join(fontsDir, font.name));
      console.log(`Completed ${font.name}`);
    } catch (error) {
       console.error(`Failed ${font.name}: ${error.message}`);
    }
  }
}

run();
