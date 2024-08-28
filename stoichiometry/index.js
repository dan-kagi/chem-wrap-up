const questions = [
  {
    id: '1',
    question:
      'Na reação de 2,7 mol de trióxido de enxofre determine a quantidade de óxido férrico que reage.',
    image: './public/images/chem_eq1.png',
    options: [
      { isCorrect: true, answer: '0,9 mol' },
      { isCorrect: false, answer: '2,7 mol' },
      { isCorrect: false, answer: '1,8 mol' },
      { isCorrect: false, answer: '9 mol' },
    ],
  },
  {
    id: '2',
    question:
      'Determine a quantidade de gás oxigênio que deve ser consumida na combustão completa de 0,4 mol de benzeno? Nesta combustão qual deve ser a quantidade de gás carbônico produzida?',
    image: './public/images/chem_eq2.png',
    options: [
      {
        isCorrect: true,
        answer: '3 mol de gás oxigênio, 2,4 mol de gás carbônico',
      },
      {
        isCorrect: false,
        answer: '6 mol de gás oxigênio, 0,6 mol de gás carbônico',
      },
      {
        isCorrect: false,
        answer: '6 mol de gás oxigênio, 2,4 mol de gás carbônico',
      },
      {
        isCorrect: false,
        answer: '15 mol de gás oxigênio, 1,2 mol de gás carbônico',
      },
    ],
  },
  {
    id: '3',
    question:
      'Quais as quantidades de água e de sódio metálico devem reagir para produzir 2,5 mol de gás hidrogênio?',
    image: './public/images/chem_eq3.png',
    options: [
      { isCorrect: true, answer: '5 mol de água e 5 mol de sódio' },
      { isCorrect: false, answer: '2,5 mol de água e 2,5 mol de sódio' },
      { isCorrect: false, answer: '5 mol de água e 0,25 mol de sódio' },
      { isCorrect: false, answer: '10 mol de água e 5 mol de sódio' },
    ],
  },
  {
    id: '4',
    question:
      'Realize o balanceamento da equação química abaixo e indique a quantidade de gás oxigênio necessária para reagir com 4 mol de etano.',
    image: './public/images/chem_eq4.png',
    options: [
      { isCorrect: true, answer: '2 / 7 / 4 / 6 ---- 14 mol de gás oxigênio' },
      { isCorrect: false, answer: '2 / 7 / 4 / 6 ---- 10 mol de gás oxigênio' },
      {
        isCorrect: false,
        answer: '1 / 7 / 3 / 5 ----  28 mol de gás oxigênio',
      },
      {
        isCorrect: false,
        answer: '1 / 5 / 2 / 8 ----  20 mol de gás oxigênio',
      },
    ],
  },
  {
    id: '5',
    question:
      'Considerando que em 100 mL de suco de limão há cerca de 0,036 mol de ácido cítrico. Determine a quantidade de hidróxido sódio necessária para reação de neutralização representada abaixo. Nesta reação qual seria a quantidade de citrato de sódio formada?',
    image: './public/images/chem_eq5.png',
    options: [
      {
        isCorrect: true,
        answer:
          '0,108 mol de hidróxido de sódio --- 0,036 mol de citrato de sódio',
      },
      {
        isCorrect: false,
        answer:
          '0,072 mol de hidróxido de sódio --- 0,032 mol de citrato de sódio',
      },
      {
        isCorrect: false,
        answer:
          '0,108 mol de hidróxido de sódio --- 0,108 mol de citrato de sódio',
      },
      {
        isCorrect: false,
        answer:
          '0,036 mol de hidróxido de sódio --- 0,036 mol de citrato de sódio',
      },
    ],
  },
  {
    id: '6',
    question:
      'A reação abaixo representa a combustão do etanol. A equação química não está balanceada. Realize o balanceamento da equação química e determine qual é a quantidade de gás carbônico liberada na combustão de 0,5 mol de etanol.',
    image: './public/images/chem_eq6.png',
    options: [
      {
        isCorrect: true,
        answer: '1 / 3 / 2 / 3 ---- 1 mol de gás carbônico',
      },
      {
        isCorrect: false,
        answer: '1 / 2 / 2 / 4 ---- 2 mol de gás carbônico',
      },
      {
        isCorrect: false,
        answer: '1 / 3 / 2 / 3 ---- 0,5 mol de gás carbônico',
      },
      {
        isCorrect: false,
        answer: '1 / 1 / 2 / 3 ---- 1 mol de gás carbônico',
      },
    ],
  },
  {
    id: '7',
    question:
      'Realize o balanceamento da equação abaixo e determine a quantidade de ferro que deve reagir para gerar 2,4 mol de gás hidrogênio.',
    image: './public/images/chem_eq7.png',
    options: [
      {
        isCorrect: true,
        answer: '1,8 mol de Fe',
      },
      {
        isCorrect: false,
        answer: '2,0 mol de Fe',
      },
      {
        isCorrect: false,
        answer: '0,8 mol de Fe',
      },
      {
        isCorrect: false,
        answer: '2,4 mol de Fe',
      },
    ],
  },
  {
    id: '8',
    question:
      'Realize o balanceamento da equação química abaixo e calcule as quantidades de sulfato de chumbo e de cloreto de alumínio, formadas a partir de 3 mol de sulfato de alumínio',
    image: './public/images/chem_eq8.png',
    options: [
      {
        isCorrect: true,
        answer: '9 mol de sulfato de chumbo e 6 mol de cloreto de alumínio',
      },
      {
        isCorrect: false,
        answer: '3 mol de sulfato de chumbo e 3 mol de cloreto de alumínio',
      },
      {
        isCorrect: false,
        answer: '6 mol de sulfato de chumbo e 4 mol de cloreto de alumínio',
      },
      {
        isCorrect: false,
        answer: '9 mol de sulfato de chumbo e 5 mol de cloreto de alumínio',
      },
    ],
  },
];

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

function checkResult(inputs) {
  let selectedInput = false;
  const questionId = inputs[0].id;
  inputs.forEach((input) => {
    if (input.checked === true) {
      selectedInput = input;
    }
  });
  if (selectedInput) {
    if (selectedInput.value === 'true') {
      alert(`Q${questionId} - Parabéns, Você Acertou!`);
    } else {
      alert(`Q${questionId} - Errado. Resolva o exercício novamente.`);
    }
  } else {
    alert(`Você deve selecionar uma resposta para Q${questionId}!`);
  }
}

function createQuestion(obj) {
  let template = document.getElementsByTagName('template')[0];
  let card = template.content.cloneNode('true');
  card.querySelector(
    'p'
  ).innerHTML = `<span><em>${obj.id} - </em></span>${obj.question}`;
  card.querySelector('img').setAttribute('src', obj.image);
  const inputs = card.querySelectorAll('input');
  const labels = card.querySelectorAll('label');
  const shuffledOptions = shuffle(obj.options);
  const button = card.querySelector('button');
  button.addEventListener('click', (event) => {
    checkResult(inputs);
    event.preventDefault();
  });
  for (let i = 0; i < 4; i++) {
    inputs[i].value = shuffledOptions[i].isCorrect;
    inputs[i].id = obj.id;
    labels[i].textContent = shuffledOptions[i].answer;
  }

  let container = document.createElement('div');
  container.setAttribute('class', 'card');
  container.appendChild(card);
  const main = document.querySelector('#main');
  main.append(container);
}

function listAllQuestions() {
  questions.forEach(createQuestion);
}

document.querySelector(
  'footer'
).innerHTML = `<p>Copyright &copy; Danilo Morais Itokagi. All rights reserved. ${new Date().getFullYear()}</p>`;

listAllQuestions();
