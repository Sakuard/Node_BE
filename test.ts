import { IncomingMessage, ServerResponse } from 'http';

console.log(`import test.js`)

const test =  (req: IncomingMessage, res: ServerResponse) => {
  console.log(`Exec test...`);
  const result = "fine"
  return result;
};

const test2 = (req: IncomingMessage, res: ServerResponse) => {
  console.log(`Exec test2...`)
}

export default { test, test2 };
