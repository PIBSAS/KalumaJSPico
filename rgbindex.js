const r = 2; // GP2
const g = 3; // GP3
const b = 4; // GP4

function setColor(red, green, blue) {
  analogWrite(r, red);
  analogWrite(g, green);
  analogWrite(b, blue);
}

setInterval(() => {
  let rv = Math.random();
  let gv = Math.random();
  let bv = Math.random();
  setColor(rv, gv, bv);
  console.log(
    `random color: r=${rv.toFixed(2)},g=${gv.toFixed(2)},b=${bv.toFixed(2)}`
  );
}, 1000);