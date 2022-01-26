// Before
const countDown = start => {
  do {
    console.log(start);
    start -= 1;
  }
  while (start > 0);
}

countDown(10);
console.log("batas");

const countDown2 = start => {
  console.log(start);
  if (start > 0) countDown2(start - 1);
}

countDown2(10)