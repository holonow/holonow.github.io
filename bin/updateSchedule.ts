import parseScheduleHtml from 'holo-schedule';
import getScheduleHtml from 'holo-schedule/lib/getScheduleHtml';
import { writeFile } from 'fs';

function write(path: string, data: string): Promise<void> {
  return new Promise((resolve, reject) => {
    writeFile(path, data, (err) => {
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
    write('public/data/schedule.json', JSON.stringify(lives)),
    write('public/data/imageMap.json', JSON.stringify(dict)),
  ]);
}

main().catch((e) => {
  // eslint-disable-next-line no-console
  console.error(e);

  process.exit(1);
});
