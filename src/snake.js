const NORTH = { x: 0, y: -1 };
const SOUTH = { x: 0, y: 1 };
const EAST = { x: 1, y: 0 };
const WEST = { x: -1, y: 0 };

const initialState = () => ({
  speed: 10,
  width: 500,
  height: 500,
  cols: 20,
  rows: 20,
  move: EAST,
  snake: [{ x: 3, y: 2 }],
  snakeColor: "green",
  fruit: { x: 12, y: 2 }
});

// Randomness
const randPos = state => ({
  x: floor(random(0, state.cols)),
  y: floor(random(0, state.rows))
});

// Is move valid ?
const validMove = move => state =>
  state.move.x + move.x != 0 || state.move.y + move.y != 0;

// Controls
const direction = (state, move) =>
  validMove(move)(state) ? R.merge(state, { move: move }) : state;

// Booleans
const willEat = state => R.equals(nextHead(state), state.fruit);
const willDie = state => R.find(R.equals(nextHead(state)))(state.snake);

//Next logic
const nextHead = state =>
  R.length(state.snake) == 0
    ? { x: 2, y: 2 }
    : {
        x: R.mathMod(state.snake[0].x + state.move.x, state.cols),
        y: R.mathMod(state.snake[0].y + state.move.y, state.rows)
      };

const nextSnake = state =>
  willDie(state)
    ? []
    : willEat(state) || console.log(willEat(state))
    ? [nextHead(state)].concat(state.snake)
    : [nextHead(state)].concat(R.dropLast(1, state.snake));

const nextFruit = state => (willEat(state) ? randPos(state) : state.fruit);

// State update
const newkeys = R.applySpec({
  snake: nextSnake,
  fruit: nextFruit
});

const next = state => R.merge(state, newkeys(state));
