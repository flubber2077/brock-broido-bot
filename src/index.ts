import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import Bot from './lib/bot';
import getPostText from './lib/getPostText';
import { LOCAL } from './lib/constants';

dayjs.extend(localizedFormat);

const dryRun = LOCAL;
const text = await Bot.run(getPostText, { dryRun });

console.log(
  `[${dayjs().format('LLLL')}]
  Text Length: ${text.length}.
  ${dryRun ? 'Was not' : 'Was'} skeeted based on dryRun variable.
  Posted:
  ${text}`,
);
