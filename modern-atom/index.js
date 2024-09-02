const questions = [
  {
    id: 1,
    question: 'Realize a distribuição eletrônica do <sub>10</sub>Ne.',
    exerciseType: 'distribution',
    answer: [
      { shell: '1s', e: 2, current: true },
      { shell: '2s', e: 2, current: false },
      { shell: '2p', e: 6, current: false },
    ],
  },
  {
    id: 2,
    question: 'Realize a distribuição eletrônica do <sub>51</sub>Sb.',
    exerciseType: 'distribution',
    answer: [
      { shell: '1s', e: 2, current: true },
      { shell: '2s', e: 2, current: false },
      { shell: '2p', e: 6, current: false },
      { shell: '3s', e: 2, current: false },
      { shell: '3p', e: 6, current: false },
      { shell: '4s', e: 2, current: false },
      { shell: '3d', e: 10, current: false },
      { shell: '4p', e: 6, current: false },
      { shell: '5s', e: 2, current: false },
      { shell: '4d', e: 10, current: false },
      { shell: '5p', e: 3, current: false },
    ],
  },
  {
    id: 3,
    question: 'Realize a distribuição eletrônica do <sub>55</sub>Cs.',
    exerciseType: 'distribution',
    answer: [
      { shell: '1s', e: 2, current: true },
      { shell: '2s', e: 2, current: false },
      { shell: '2p', e: 6, current: false },
      { shell: '3s', e: 2, current: false },
      { shell: '3p', e: 6, current: false },
      { shell: '4s', e: 2, current: false },
      { shell: '3d', e: 10, current: false },
      { shell: '4p', e: 6, current: false },
      { shell: '5s', e: 2, current: false },
      { shell: '4d', e: 10, current: false },
      { shell: '5p', e: 6, current: false },
      { shell: '6s', e: 1, current: false },
    ],
  },
  {
    id: 4,
    question: 'Realize a distribuição eletrônica do <sub>28</sub>Ni.',
    exerciseType: 'distribution',
    answer: [
      { shell: '1s', e: 2, current: true },
      { shell: '2s', e: 2, current: false },
      { shell: '2p', e: 6, current: false },
      { shell: '3s', e: 2, current: false },
      { shell: '3p', e: 6, current: false },
      { shell: '4s', e: 2, current: false },
      { shell: '3d', e: 8, current: false },
    ],
  },
  {
    id: 5,
    question:
      '<span>(não consultar tabela periódica)</span> Realize a distribuição eletrônica do elemento <strong><sub>37</sub>Rb</strong>. Então, indique a configuração eletrônica na camada de valência, assim como sua localização na tabela periódica.',
    exerciseType: 'location',
    options: [
      {
        isCorrect: true,
        answer:
          '<strong>CV</strong>: 5s<sup>1</sup> - <strong>Localização</strong>: 5<sup>0</sup> período e grupo 1.',
      },
      {
        isCorrect: false,
        answer:
          '<strong>CV</strong>: 4s<sup>1</sup> - <strong>Localização</strong>: 4<sup>0</sup> período e grupo 1.',
      },
      {
        isCorrect: false,
        answer:
          '<strong>CV</strong>: 4s<sup>1</sup> - <strong>Localização</strong>: 4<sup>0</sup> período e grupo 2.',
      },
      {
        isCorrect: false,
        answer:
          '<strong>CV</strong>: 3s<sup>1</sup> - <strong>Localização</strong>: 3<sup>0</sup> período e grupo 1.',
      },
      {
        isCorrect: false,
        answer:
          '<strong>CV</strong>: 3s<sup>2</sup> - <strong>Localização</strong>: 3<sup>0</sup> período e grupo 2.',
      },
    ],
  },
  {
    id: 6,
    question:
      '<span>(não consultar tabela periódica)</span> Realize a distribuição eletrônica do elemento <strong><sub>19</sub>K</strong>. Então, indique a configuração eletrônica na camada de valência, assim como sua localização na tabela periódica.',
    exerciseType: 'location',
    options: [
      {
        isCorrect: true,
        answer:
          '<strong>CV</strong>: 4s<sup>1</sup> - <strong>Localização</strong>: 5<sup>0</sup> período e grupo 1.',
      },
      {
        isCorrect: false,
        answer:
          '<strong>CV</strong>: 5s<sup>1</sup> - <strong>Localização</strong>: 4<sup>0</sup> período e grupo 1.',
      },
      {
        isCorrect: false,
        answer:
          '<strong>CV</strong>: 3s<sup>1</sup> - <strong>Localização</strong>: 4<sup>0</sup> período e grupo 2.',
      },
      {
        isCorrect: false,
        answer:
          '<strong>CV</strong>: 4s<sup>1</sup> - <strong>Localização</strong>: 3<sup>0</sup> período e grupo 2.',
      },
      {
        isCorrect: false,
        answer:
          '<strong>CV</strong>: 3s<sup>2</sup> - <strong>Localização</strong>: 3<sup>0</sup> período e grupo 2.',
      },
    ],
  },
  {
    id: 7,
    question:
      '<span>(não consultar tabela periódica)</span> Realize a distribuição eletrônica do elemento <strong><sub>32</sub>Ge</strong>. Então, indique a configuração eletrônica na camada de valência, assim como sua localização na tabela periódica.',
    exerciseType: 'location',
    options: [
      {
        isCorrect: true,
        answer:
          '<strong>CV</strong>: 4s<sup>2</sup> 4p<sup>2</sup> - <strong>Localização</strong>: 4<sup>0</sup> período e grupo 14.',
      },
      {
        isCorrect: false,
        answer:
          '<strong>CV</strong>: 4s<sup>2</sup> 4p<sup>5</sup> - <strong>Localização</strong>: 4<sup>0</sup> período e grupo 17.',
      },
      {
        isCorrect: false,
        answer:
          '<strong>CV</strong>: 3s<sup>2</sup> - <strong>Localização</strong>: 3<sup>0</sup> período e grupo 2.',
      },
      {
        isCorrect: false,
        answer:
          '<strong>CV</strong>: 5s<sup>2</sup> 5p<sup>2</sup> - <strong>Localização</strong>: 5<sup>0</sup> período e grupo 14.',
      },
      {
        isCorrect: false,
        answer:
          '<strong>CV</strong>: 3s<sup>2</sup> 3p<sup>3</sup>- <strong>Localização</strong>: 3<sup>0</sup> período e grupo 15.',
      },
    ],
  },
  {
    id: 8,
    question:
      '<span>(não consultar tabela periódica)</span> Realize a distribuição eletrônica do elemento <strong><sub>35</sub>Br</strong>. Então, indique a configuração eletrônica na camada de valência, assim como sua localização na tabela periódica.',
    exerciseType: 'location',
    options: [
      {
        isCorrect: true,
        answer:
          '<strong>CV</strong>: 4s<sup>2</sup> 4p<sup>5</sup> - <strong>Localização</strong>: 4<sup>0</sup> período e grupo 17.',
      },
      {
        isCorrect: false,
        answer:
          '<strong>CV</strong>: 3s<sup>2</sup> 3p<sup>5</sup> - <strong>Localização</strong>: 3<sup>0</sup> período e grupo 17.',
      },
      {
        isCorrect: false,
        answer:
          '<strong>CV</strong>: 4s<sup>2</sup> 4p<sup>4</sup> - <strong>Localização</strong>: 4<sup>0</sup> período e grupo 16.',
      },
      {
        isCorrect: false,
        answer:
          '<strong>CV</strong>: 5s<sup>2</sup> 5p<sup>2</sup> - <strong>Localização</strong>: 5<sup>0</sup> período e grupo 14.',
      },
      {
        isCorrect: false,
        answer:
          '<strong>CV</strong>: 4s<sup>2</sup> 4p<sup>3</sup>- <strong>Localização</strong>: 4<sup>0</sup> período e grupo 15.',
      },
    ],
  },
  {
    id: 9,
    question:
      '<span>(não consultar tabela periódica)</span> A seguir estão as configurações da camada de valência do Te, do Sr e do Ga: <strong>5s<sup>2</sup> 5p<sup>4</sup></strong>, <strong>5s<sup>2</sup></strong> e <strong>4s<sup>2</sup>4p<sup>1</sup></strong>. Indique a localização de cada elemento na tabela periódica inserindo seu número atômico no local correto. Você deve inserir apenas três números atômicos. <strong>Dica: faça distribuição eletrônica utilizando diagrama de Linus Pauling</strong>.',
    exerciseType: 'table',
    answer: [31, 38, 52],
  },
  {
    id: 10,
    question:
      '<span>(não consultar tabela periódica)</span> A seguir estão as configurações da camada de valência do cálcio, do iodo e do potássio: <strong>4s<sup>2</sup></strong>, <strong>5s<sup>2</sup> 5p<sup>5</sup></strong> e <strong>4s<sup>1</sup></strong>. Indique a localização de cada elemento na tabela periódica inserindo seu número atômico no local correto. Você deve inserir apenas três números atômicos. <strong>Dica: faça distribuição eletrônica utilizando diagrama de Linus Pauling</strong>',
    exerciseType: 'table',
    answer: [19, 20, 53],
  },
  {
    id: 11,
    question:
      '<span>(não consultar tabela periódica)</span> A distribuição eletrônica do ferro termina em <strong>4s<sup>2</sup> 3d<sup>6</sup></strong>. A do zinco em <strong>4s<sup>2</sup> 3d<sup>10</sup></strong>. O estanho apresenta a seguinte distribuição na camada de valência: <strong>5s<sup>2</sup> 5p<sup>2</sup></strong>. Indique a localização de cada elemento na tabela periódica inserindo seu número atômico no local correto. Você deve inserir apenas três números atômicos. <strong>Dica: faça distribuição eletrônica utilizando diagrama de Linus Pauling</strong>',
    exerciseType: 'table',
    answer: [26, 30, 50],
  },
  {
    id: 12,
    question:
      '<span>(não consultar tabela periódica)</span> Estas são as configurações eletrônicas da camada de valência do magnésio, fósforo, do cloro e do criptônio, respectivamente:<br/> <strong>Mg - 3s<sup>2</sup></strong>,<br/> <strong> P - 3s<sup>2</sup> 3p<sup>3</sup></strong>,<br/>  <strong>Cl - 3s<sup>2</sup> 3p<sup>5</sup></strong> e<br/> <strong>Kr - 4s<sup>2</sup> 4p<sup>6</sup></strong>.</br>Indique a localização de cada elemento na tabela periódica inserindo seu número atômico no local correto. Você deve inserir apenas quatro números atômicos. <strong>Dica: faça distribuição eletrônica utilizando diagrama de Linus Pauling</strong>',
    exerciseType: 'table',
    answer: [12, 16, 17, 18],
  },
  {
    id: 13,
    question:
      '<span>(não consultar tabela periódica)</span> A distribuição eletrônica do ítrio termina em <strong>5s<sup>2</sup> 4d<sup>1</sup></strong>. A do cobalto em <strong>4s<sup>2</sup> 3d<sup>7</sup></strong>. O enxofre apresenta a seguinte distribuição na camada de valência: <strong>3s<sup>2</sup> 3p<sup>4</sup></strong>. Indique a localização de cada elemento na tabela periódica inserindo seu número atômico no local correto. Você deve inserir apenas três números atômicos. <strong>Dica: faça distribuição eletrônica utilizando diagrama de Linus Pauling</strong>',
    exerciseType: 'table',
    answer: [16, 27, 39],
  },
];

const orbitalImages = [
  { link: './public/images/s_orbital.png', description: 's orbital' },
  { link: './public/images/p_orbital.png', description: 'p orbital' },
  { link: './public/images/d_orbital.png', description: 'd orbital' },
  { link: './public/images/f_orbital.png', description: 'f orbital' },
];

const periodicTable = [
  [
    { position: { line: 1, col: 1 }, symbol: 'H', z: 1 },
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { position: { line: 1, col: 18 }, symbol: 'He', z: 2 },
  ],
  [
    { position: { line: 2, col: 1 }, symbol: 'Li', z: 3 },
    { position: { line: 2, col: 2 }, symbol: 'Be', z: 4 },
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,

    { position: { line: 2, col: 13 }, symbol: 'B', z: 5 },
    { position: { line: 2, col: 14 }, symbol: 'C', z: 6 },
    { position: { line: 2, col: 15 }, symbol: 'N', z: 7 },
    { position: { line: 2, col: 16 }, symbol: 'O', z: 8 },
    { position: { line: 2, col: 17 }, symbol: 'F', z: 9 },
    { position: { line: 2, col: 18 }, symbol: 'Ne', z: 10 },
  ],
  [
    { position: { line: 3, col: 1 }, symbol: 'Na', z: 11 },
    { position: { line: 3, col: 2 }, symbol: 'Mg', z: 12 },
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { position: { line: 3, col: 13 }, symbol: 'Al', z: 13 },
    { position: { line: 3, col: 14 }, symbol: 'Si', z: 14 },
    { position: { line: 3, col: 15 }, symbol: 'P', z: 15 },
    { position: { line: 3, col: 16 }, symbol: 'S', z: 16 },
    { position: { line: 3, col: 17 }, symbol: 'Cl', z: 17 },
    { position: { line: 3, col: 18 }, symbol: 'Ar', z: 18 },
  ],
  [
    { position: { line: 4, col: 1 }, symbol: 'K', z: 19 },
    { position: { line: 4, col: 2 }, symbol: 'Ca', z: 20 },
    { position: { line: 4, col: 3 }, symbol: 'Sc', z: 21 },
    { position: { line: 4, col: 4 }, symbol: 'Ti', z: 22 },
    { position: { line: 4, col: 5 }, symbol: 'V', z: 23 },
    { position: { line: 4, col: 6 }, symbol: 'Cr', z: 24 },
    { position: { line: 4, col: 7 }, symbol: 'Mn', z: 25 },
    { position: { line: 4, col: 8 }, symbol: 'Fe', z: 26 },
    { position: { line: 4, col: 9 }, symbol: 'Co', z: 27 },
    { position: { line: 4, col: 10 }, symbol: 'Ni', z: 28 },
    { position: { line: 4, col: 11 }, symbol: 'Cu', z: 29 },
    { position: { line: 4, col: 12 }, symbol: 'Zn', z: 30 },
    { position: { line: 4, col: 13 }, symbol: 'Ga', z: 31 },
    { position: { line: 4, col: 14 }, symbol: 'Ge', z: 32 },
    { position: { line: 4, col: 15 }, symbol: 'As', z: 33 },
    { position: { line: 4, col: 16 }, symbol: 'Se', z: 34 },
    { position: { line: 4, col: 17 }, symbol: 'Br', z: 35 },
    { position: { line: 4, col: 18 }, symbol: 'Kr', z: 36 },
  ],
  [
    { position: { line: 4, col: 1 }, symbol: 'Rb', z: 37 },
    { position: { line: 5, col: 2 }, symbol: 'Sr', z: 38 },
    { position: { line: 5, col: 3 }, symbol: 'Y', z: 39 },
    { position: { line: 5, col: 4 }, symbol: 'Zr', z: 40 },
    { position: { line: 5, col: 5 }, symbol: 'Nb', z: 41 },
    { position: { line: 5, col: 6 }, symbol: 'Mo', z: 42 },
    { position: { line: 5, col: 7 }, symbol: 'Tc', z: 43 },
    { position: { line: 5, col: 8 }, symbol: 'Ru', z: 44 },
    { position: { line: 5, col: 9 }, symbol: 'Rh', z: 45 },
    { position: { line: 5, col: 10 }, symbol: 'Pd', z: 46 },
    { position: { line: 5, col: 11 }, symbol: 'Ag', z: 47 },
    { position: { line: 5, col: 12 }, symbol: 'Cd', z: 48 },
    { position: { line: 5, col: 13 }, symbol: 'In', z: 49 },
    { position: { line: 5, col: 14 }, symbol: 'Sn', z: 50 },
    { position: { line: 5, col: 15 }, symbol: 'Sb', z: 51 },
    { position: { line: 5, col: 16 }, symbol: 'Te', z: 52 },
    { position: { line: 5, col: 17 }, symbol: 'I', z: 53 },
    { position: { line: 5, col: 18 }, symbol: 'Xe', z: 54 },
  ],
];

const atomicNumbers = [];
for (let i = 0; i < periodicTable.length; i++) {
  for (let j = 0; j < periodicTable[i].length; j++) {
    if (periodicTable[i][j]) {
      atomicNumbers.push(periodicTable[i][j].z);
    }
  }
}

function shuffle(arr) {
  const length = arr.length;
  const newArr = [];
  const storedIdx = [];
  for (let i = 0; i < length; i++) {
    let randomIdx = Math.floor(Math.random() * length);
    while (storedIdx.includes(randomIdx)) {
      randomIdx = Math.floor(Math.random() * length);
    }
    newArr.push(arr[randomIdx]);
    storedIdx.push(randomIdx);
  }
  return newArr;
}

function checkResult(inputs, question) {
  let selectedInput = false;
  inputs.forEach((input) => {
    if (input.checked === true) {
      selectedInput = input;
    }
  });
  if (selectedInput) {
    if (selectedInput.value === 'true') {
      alert(`Q${question.id} - Parabéns, Você Acertou!`);
    } else {
      alert(`Q${question.id} - Errado. Resolva o exercício novamente.`);
    }
  } else {
    alert(`Você deve selecionar uma resposta para Q${question.id}!`);
  }
}

function createCard(question) {
  const card = document.createElement('div');
  card.setAttribute('class', 'card');
  card.setAttribute('id', question.id);

  const pQuestion = document.createElement('p');
  pQuestion.setAttribute('class', 'enum');
  pQuestion.innerHTML = question.id + ' - ' + question.question;
  card.appendChild(pQuestion);
  if (question.exerciseType === 'location') {
    const form = document.createElement('form');
    const shuffledOptions = shuffle(question.options);
    for (let i = 0; i < shuffledOptions.length; i++) {
      const input = document.createElement('input');
      input.setAttribute('type', 'radio');
      input.setAttribute('name', question.id);
      input.setAttribute('value', shuffledOptions[i].isCorrect);
      const label = document.createElement('label');
      label.innerHTML = shuffledOptions[i].answer;
      const breakLine = document.createElement('br');
      form.appendChild(input);
      form.appendChild(label);
      form.appendChild(breakLine);
    }
    card.appendChild(form);
    const button = document.createElement('button');
    button.textContent = 'Checar Resposta';
    button.setAttribute('class', 'card-button');
    button.addEventListener('click', () => {
      const card = document.getElementById(question.id);
      const inputs = card.querySelectorAll('input');
      checkResult(inputs, question);
    });
    card.appendChild(button);
  } else if (question.exerciseType === 'table') {
    const periodicTable = createPeriodicTable(question);
    const button = document.createElement('button');
    button.textContent = 'Checar Resposta';
    button.setAttribute('class', 'card-button');
    button.addEventListener('click', () => {
      const card = document.getElementById(question.id);
      const inputs = card.querySelectorAll('input');
      checkPeriodicTableResult(inputs, question);
    });
    card.appendChild(button);
    card.appendChild(periodicTable);
  } else if (question.exerciseType === 'distribution') {
    const distribution = createEletronicDistribution(question);
    card.appendChild(distribution);
  }
  return card;
}

function checkPeriodicTableResult(inputs, tableQuestion) {
  inputs.forEach((input) => {
    input.style.backgroundColor = 'white';
    input.style.color = 'black';
    input.style.fontWeight = 'normal';
  });
  let n = tableQuestion.answer.length;
  const correctIndexes = [];
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].className === 'marked') {
      if (Number(inputs[i].value.trim()) === atomicNumbers[i]) {
        n = n - 1;
        correctIndexes.push(i);
        if (n === 0) {
          correctIndexes.forEach((j) => {
            inputs[j].style.backgroundColor = 'blue';
            inputs[j].style.color = 'white';
            inputs[j].style.fontWeight = 'bold';
          });
          alert(`Q${tableQuestion.id} - Parabéns, resposta está CORRETA!!!`);
          return;
        }
      }
    } else {
      if (inputs[i].value.trim()) {
        alert(`Q${tableQuestion.id} - resposta está ERRADA!!!`);
        return;
      }
    }
  }
  alert(`Q${tableQuestion.id} - resposta está ERRADA!!!`);
  return;
}

function showQuestions() {
  const divCollection = document.createElement('div');
  divCollection.setAttribute('id', 'collection');
  divCollection.setAttribute('class', 'square');
  const h3 = document.createElement('h3');
  h3.textContent = 'Questões de Distribuição Eletrônica e Tabela Periódica';
  divCollection.appendChild(h3);

  const cards = document.createElement('div');
  cards.setAttribute('id', 'cards');
  questions.forEach((question) => {
    const card = createCard(question);
    cards.appendChild(card);
  });
  divCollection.appendChild(cards);
  return divCollection;
}

function showOrbitals() {
  const divOrbitals = document.createElement('div');
  divOrbitals.setAttribute('class', 'square');
  divOrbitals.setAttribute('id', 'orbitals');

  const h3 = document.createElement('h3');
  h3.textContent = 'Orbitais';
  divOrbitals.appendChild(h3);

  const divOrbitalPics = document.createElement('div');
  divOrbitalPics.setAttribute('class', 'orbital-pics');
  orbitalImages.forEach((image) => {
    const img = document.createElement('img');
    img.setAttribute('class', 'img-orbital');
    img.setAttribute('src', image.link);
    img.setAttribute('alt', image.description);
    divOrbitalPics.appendChild(img);
  });
  divOrbitals.appendChild(divOrbitalPics);
  const p = document.createElement('p');
  p.setAttribute('class', 'reference');
  p.textContent =
    'Fonte: https://www.geeksforgeeks.org/shapes-of-atomic-orbitals/. Acesso: 29/08/2024';
  divOrbitals.appendChild(p);
  return divOrbitals;
}

function showLinusPauling() {
  const divPauling = document.createElement('div');
  divPauling.setAttribute('id', 'pauling-diagram');
  divPauling.setAttribute('class', 'square');
  const h3 = document.createElement('h3');
  h3.textContent = 'Diagrama de Linus Pauling';
  divPauling.appendChild(h3);
  const img = document.createElement('img');
  img.setAttribute('src', './public/images/linus-pauling-diagram.png');
  img.setAttribute('alt', 'diagrama de linus pauling');
  const p = document.createElement('p');
  p.textContent =
    'Fonte: https://pratico-e-basico.blogspot.com/2015/06/configuracao-e-distribuicao-eletronica.html. Acesso: 29/08/2024';
  p.setAttribute('class', 'reference');
  divPauling.appendChild(img);
  divPauling.appendChild(p);
  return divPauling;
}

const buttonOrbital = document.getElementById('b-orbital');
const buttonPauling = document.getElementById('b-pauling');
const buttonQuestions = document.getElementById('b-questions');
const buttonTabelaPeriodica = document.getElementById('b-tabelaPeriodica');

// showQuestions();
// showOrbitals();
// showLinusPauling();
let hasShown = {
  orbital: false,
  pauling: false,
  questions: false,
};
buttonOrbital.addEventListener('click', () => {
  if (!hasShown.orbital) {
    const orbitals = showOrbitals();
    const square = document.querySelector('.square');
    if (!square) {
      const main = document.querySelector('main');
      main.appendChild(orbitals);
    } else {
      const main = document.querySelector('main');
      main.insertBefore(orbitals, square);
    }

    hasShown.orbital = true;
    buttonOrbital.classList.add('isActive');
  } else {
    document.getElementById('orbitals').remove();
    hasShown.orbital = false;
    buttonOrbital.classList.remove('isActive');
  }
});

buttonPauling.addEventListener('click', () => {
  if (!hasShown.pauling) {
    const pauling = showLinusPauling();
    const square = document.querySelector('.square');
    if (!square) {
      const main = document.querySelector('main');
      main.appendChild(pauling);
    } else {
      const main = document.querySelector('main');
      main.insertBefore(pauling, square);
    }

    hasShown.pauling = true;
    buttonPauling.classList.add('isActive');
  } else {
    document.getElementById('pauling-diagram').remove();
    hasShown.pauling = false;
    buttonPauling.classList.remove('isActive');
  }
});

buttonQuestions.addEventListener('click', () => {
  if (!hasShown.questions) {
    const questions = showQuestions();
    const square = document.querySelector('.square');
    if (!square) {
      const main = document.querySelector('main');
      main.appendChild(questions);
    } else {
      const main = document.querySelector('main');
      main.insertBefore(questions, square);
    }

    hasShown.questions = true;
    buttonQuestions.classList.add('isActive');
  } else {
    document.getElementById('collection').remove();
    hasShown.questions = false;
    buttonQuestions.classList.remove('isActive');
  }
});

function createPeriodicTable(question) {
  const table = document.createElement('table');
  for (let i = 0; i < periodicTable.length; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < periodicTable[i].length; j++) {
      if (!periodicTable[i][j]) {
        const td = document.createElement('td');
        td.setAttribute('class', 'cell');
        td.style.backgroundColor = 'greenyellow';
        row.appendChild(td);
      } else {
        const td = document.createElement('td');
        td.setAttribute('class', 'cell');
        const input = document.createElement('input');
        input.style.fontSize = '0.7rem';
        input.style.width = '100%';
        input.style.heigth = '100%';
        if (question.answer.includes(periodicTable[i][j].z)) {
          input.setAttribute('class', 'marked');
        }
        td.appendChild(input);
        row.appendChild(td);
      }
    }
    table.appendChild(row);
  }
  return table;
}

function createEletronicDistribution(question) {
  const divDistr = document.createElement('div');
  divDistr.setAttribute('class', 'distribution');
  const divShell = document.createElement('div');
  divShell.classList.add('divShell');
  divShell.innerHTML =
    "<input type='text' class='shell'> <sup><input type=text class='electron'></sup>";
  divShell.addEventListener('keyup', () => {
    const card = document.getElementById(question.id);
    const divDistr = card.querySelector('.distribution');
    const divShell = card.querySelector('.divShell');
    const shellInput = divShell.querySelector('.shell');
    const electronInput = divShell.querySelector('.electron');
    for (let i = 0; i < question.answer.length; i++) {
      if (question.answer[i].current === true) {
        if (
          shellInput.value.trim() === question.answer[i].shell &&
          Number(electronInput.value.trim()) === question.answer[i].e
        ) {
          const pShell = document.createElement('p');
          pShell.innerHTML = `${shellInput.value}<sup>${electronInput.value}</sup>`;
          pShell.style.marginRight = '3px';
          divDistr.insertBefore(pShell, divShell);
          question.answer[i].current = false;
          if (i < question.answer.length - 1) {
            question.answer[i + 1].current = true;
          } else {
            divShell.remove();
            const pOK = document.createElement('p');
            pOK.innerHTML = 'ok';
            pOK.style.color = 'blue';
            pOK.style.fontSize = '0.8rem';
            pOK.style.fontWeight = 'bold';
            divDistr.appendChild(pOK);
          }
        }
      }
    }
  });
  divDistr.appendChild(divShell);
  return divDistr;
}

// document
//   .querySelector('main')
//   .appendChild(createEletronicDistribution(questions[0]));

document.querySelector(
  'footer'
).innerHTML = `<p>Copyright &copy; Danilo Morais Itokagi. All rights reserved. ${new Date().getFullYear()}</p>`;
