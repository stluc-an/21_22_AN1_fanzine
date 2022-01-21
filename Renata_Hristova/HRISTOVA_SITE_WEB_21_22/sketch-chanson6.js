
let values = [];
let states = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i = 0; i < width/8; i++) {
    values.push(random(height));
    states.push(-1);
  }
  quickSort(0, values.length - 2);
}

function draw() {
  background(125, 173, 201);
  for(let i = 0; i < values.length; i++) {
    
    if (states[i] == 0) {
  
      fill('#645E4E');
    } else if (states[i] == 1) {
    
      fill('#D6FFB7');
    } else {
      fill(134,157, 118);
    }
    rect(i * 8, height - values[i], 8, values[i]);
   }
}

async function quickSort(start, end) {
  if (start > end) {  
    return;
  }
  
  let index = await partition(start, end);
  states[index] = -1;
  await Promise.all(
    [quickSort(start, index - 1), 
     quickSort(index + 1, end)
    ]);
}


async function partition(start, end) {
  for (let i = start; i < end; i++) {

    states[i] = 1;
  }
  
  let pivotIndex = start;

  states[pivotIndex] = 0;
  let pivotElement = values[end];
  for (let i = start; i < end; i++) {
    if (values[i] < pivotElement) {
      await swap(i, pivotIndex);
      states[pivotIndex] = -1;
      pivotIndex++;
      states[pivotIndex] = 0;
    }
  }
  await swap(end, pivotIndex);
  for (let i = start; i < end; i++) {
    
    if (i != pivotIndex) {
      states[i] = -1;
    }
  }
  return pivotIndex;
}


async function swap(i, j) {
  
  await sleep(25);
  let temp = values[i];
  values[i] = values[j];
  values[j] = temp;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}