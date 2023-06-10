console.log(`import test.js`)

exports.test =  () => {
  console.log(`Exec test...`);
  const result = "fine"
  return result;
};

exports.test2 = () => {
  console.log(`Exec test2...`)
}