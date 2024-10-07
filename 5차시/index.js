const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  calArea() {
    return this.height * this.width;
  }
}

rl.question('사각형의 높이를 입력하세요: ', (height) => {
  rl.question('사각형의 너비를 입력하세요: ', (width) => {
    const userRectangle = new Rectangle(parseFloat(height), parseFloat(width));
    console.log(`사각형의 넓이는 ${userRectangle.calArea()} 입니다.`);
    rl.close();
  });
});
