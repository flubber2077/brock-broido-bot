const file = Bun.file('./res/posts.txt');

const text = await file.text();

const parsedText = text
  .split('\r\n') // split at line breaks into array
  .filter((c) => c) // filter out any empty lines
  .map((c) => c.trim().replaceAll(/[“”]+/g, '')) // trim whitespace from titles THEN remove all quotation marks
  .map((c) => `“${c}”`); // finally, add back in quotation marks, should now be in right spot

const writeFile = Bun.file('./res/posts.json');
const writer = writeFile.writer();
writer.write(JSON.stringify(parsedText));
