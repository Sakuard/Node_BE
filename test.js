console.log(`import test.js ...`)

// import { IncomingMessage, ServerResponse } from 'http';

const test =  (req, res) => {
  console.log(`Exec test...`);
  const result = "fine"
  return result;
};

const test2 = (req, res) => {
  console.log(`Exec test2...`)
}

// export default { test, test2 };
module.exports = { test, test2 };
