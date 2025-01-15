for (let i = 0; i < 25; i++) {
  console.log(i);

  let c = 20;
  var d = 30;
}

console.log(c);
console.log(d);

console.log("end of for loop");

let i = 0;
while (i < 20) {
  console.log(i);
  i++;
}
console.log("end of while loop");

i = 0;

let j = 0;
do {
  console.log(i);
  i++;
} while (i < 30);
console.log("end of do while loop");

const numbers = [2, 3, 6, 7, 8, 9, 23, 24, 29];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    console.log(numbers[i]);
  }
}

const currentDay = new Date().getDay();
let day = "";
switch (currentDay) {
  case 0:
    day = "კვირა";
    break;
  case 1:
    day = "ორშაბათი";
    break;
  case 2:
    day = "სამშაბათი";
    break;
  case 3:
    day = "ოთხშაბათი";
    break;
  case 4:
    day = "ხუთშაბათი";
    break;
  case 5:
    day = "პარასკევი";
    break;
  case 6:
    day = "შაბათი";
    break;
  default:
    day = "";
}
console.log(day);
