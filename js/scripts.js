const wordsearchElement = document.getElementById('wordsearch');
const letters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

const words = [
  {
    value: 'malvado',
    direction: 'v',
    x: 0,
    y: 0
  },
  {
    value: 'bootstrap',
    direction: 'h',
    x: 1,
    y: 0
  },
  {
    value: 'paralelepipedo',
    direction: 'v',
    x: 10,
    y: 6
  },
  {
    value: 'angular',
    direction: 'h',
    x: 1,
    y: 10
  },
  {
    value: 'jquery',
    direction: 'h',
    x: 12,
    y: 13
  },
  {
    value: 'tailwind',
    direction: 'h',
    x: 10,
    y: 1
  },
  {
    value: 'gato',
    direction: 'v',
    x: 19,
    y: 4
  }
];

const matrix = [];

const randomLetter = () => letters[Math.floor(Math.random() * letters.length)];

const drawSoupInDOM = () => {
  const fragment = document.createDocumentFragment();
  for (let indexRow = 0; indexRow < 20; indexRow++) {
    for (let indexColumn = 0; indexColumn < 20; indexColumn++) {
      const span = document.createElement('span');
      span.textContent = matrix[indexRow][indexColumn];
      fragment.appendChild(span);
    }
  }

  wordsearchElement.appendChild(fragment);

  // const elementToWrite = document.querySelector(
  //   `[data-position-x='${word.x}'][data-position-y='${word.y + i}']`
  // );

  // const elementToWrite = document.querySelector(
  //   `[data-position-x='${word.x + i}'][data-position-y='${word.y}']`
  // );
};

const generateRandomLetters = () => {
  for (let indexRow = 0; indexRow < 20; indexRow++) {
    for (let indexColumn = 0; indexColumn < 20; indexColumn++) {
      if (matrix[indexRow][indexColumn] === 0) {
        matrix[indexRow][indexColumn] = randomLetter();
      }
    }
  }

  drawSoupInDOM();
};

// METEMOS LAS PALABRAS EN LA MATRIZ
const pushWordsInMatrix = () => {
  for (word of words) {
    if (word.direction === 'v') {
      for (let i = 0; i < word.value.length; i++) {
        matrix[word.x][word.y + i] = word.value[i];
      }
    } else if (word.direction === 'h') {
      for (let i = 0; i < word.value.length; i++) {
        matrix[word.x + i][word.y] = word.value[i];
      }
    }
  }
  generateRandomLetters();
};

// RELLENAMOS DE 0 LA MATRIZ
const generateSoup = () => {
  for (let indexRow = 0; indexRow < 20; indexRow++) {
    const row = [];
    for (let indexColumn = 0; indexColumn < 20; indexColumn++) {
      row[indexColumn] = 0;
    }
    matrix.push([...row]);
  }

  pushWordsInMatrix();
};

generateSoup();
