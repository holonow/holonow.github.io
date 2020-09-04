import parseScheduleHtml from 'holo-schedule';
import getScheduleHtml from 'holo-schedule/lib/getScheduleHtml';
import fs from 'fs';

function writeFile(path: string, data: string): Promise<void> {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

async function main() {
  const html = await getScheduleHtml();
  const { lives, dict } = parseScheduleHtml(html);

  return Promise.all([
    writeFile('public/data/schedule.json', JSON.stringify(lives)),
    writeFile('public/data/imageMap.json', JSON.stringify(dict)),
  ]);
}

main().catch((e) => {
  // eslint-disable-next-line no-console
  console.error(e);

  process.exit(1);
});
