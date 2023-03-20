function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
}

function draw() {
  let xoff = 0;
  let yoff = 0;
  let red = 0;
  let blue = 0;

  background(17, 17, 17);
  noFill();

  let spot1 = windowWidth - windowWidth * 10;
  for (let i = 0; i < windowWidth; i++) {
    yoff = frameCount * 0.005;
    xoff = xoff + 0.008;

    let ny = (noise(xoff, yoff) * windowWidth) / 2;
    let nx = noise(xoff, yoff) * windowHeight * 2;

    spot1 += 20;
    for (let c = 0; c < 255; c++) {
      red = -frameCount * 0.001;
      blue = -frameCount * 0.005;
    }
    red = frameCount * 0.001;
    blue = frameCount * 0.005;

    let rednoise = noise(red) * 255;
    let bluenoise = noise(blue) * 255;

    stroke(rednoise, 0, bluenoise);
    bezier(spot1, windowHeight, nx, ny, nx, ny, spot1, 0);
  }
}
