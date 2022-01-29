const getCoffee = () => {
  return new Promise((resolve, reject) => {
    const seeds = 1;
    setTimeout(() => {
      if (seeds >= 10) {
        resolve("Kopi didapatkan!");
      } else {
        reject("Biji kopi habis!");
      }
    }, 1000);
  })
}

async function makeCoffee() {
  try {
    const coffe = await getCoffee();
    console.log(coffe);
  } catch (error) {
    console.log(error);
  }
}

makeCoffee();