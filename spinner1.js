setTimeout(() => {
  process.stdout.write(`\r| BUFFERING  `);
}, 100);

setTimeout(() => {
  process.stdout.write(`\r/ BUFFERING   `);
}, 300);

setTimeout(() => {
  process.stdout.write(`\r- BUFFERING  `);
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write(`\r\\ BUFFERING   `);
}, 700);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write(`\r| BUFFERING   `);
}, 1000);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write(`\r/ BUFFERING  `);
}, 1200);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write(`\r- BUFFERING  `);
}, 1500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write(`\r\\ BUFFERING  `);
}, 1700);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write(`\r| DONE  `);
}, 2000);
