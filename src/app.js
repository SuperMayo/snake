let state = initialState();

function setup() {
  createCanvas(state.width, state.height);
  createP("");
  scoreElem = createElement("h2", "Score: 0");
}

const x = c => Math.round((c * width) / state.cols);
const y = r => Math.round((r * width) / state.cols);

function draw() {
  frameRate(state.speed);
  // clear
  clear();
  noStroke();

  // Background
  background(44, 62, 80);

  // draw snake
  fill(39, 174, 96);
  R.map(p => rect(x(p.x), y(p.y), x(1), y(1)), state.snake);

  // draw Apple
  fill(192, 57, 43);
  rect(x(state.fruit.x), y(state.fruit.y), x(1), y(1));

  // Update state
  state = next(state);
  scoreElem.html(`Score: ${R.length(state.snake) - 1}`);
}

function keyPressed() {
  // Mutable state
  if (keyCode === LEFT_ARROW) {
    state = direction(state, WEST);
  } else if (keyCode === RIGHT_ARROW) {
    state = direction(state, EAST);
  } else if (keyCode === UP_ARROW) {
    state = direction(state, NORTH);
  } else if (keyCode === DOWN_ARROW) {
    state = direction(state, SOUTH);
  }
}
