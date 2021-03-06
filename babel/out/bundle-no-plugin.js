const sleep = (timestamp) => {
  return new Promise((resolve) => {
    setTimeout(() => { resolve(); }, timestamp);
  })
};

const printAnswer = async () => {
  await sleep(3000);
  console.log('I am awake');
};

export { printAnswer };
