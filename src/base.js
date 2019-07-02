const NORTH = { x: 0, y: -1 };
const SOUTH = { x: 0, y: 1 };
const EAST = { x: 1, y: 0 };
const WEST = { x: -1, y: 0 };

const initialState = () => ({
  speed: 10,
  width: 600,
  height: 600,
  cols: 20,
  rows: 20,
  move: EAST,
  snake: [{ x: 3, y: 2 }],
  snakeColor: "green",
  fruit: { x: 12, y: 2 }
});
