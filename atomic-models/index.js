const questions = [
  {
    id: '1',
    question:
      'Dalton, Rutherford e Bohr propuseram, em diferentes épocas, modelos atômicos. Algumas características desses modelos são apresentadas no quadro que se segue:',
    image: './public/images/fig1.png',
    options: [
      {
        isCorrect: true,
        answer: 'I/Rutherford,   II/Dalton,  III/Bohr',
      },
      {
        isCorrect: false,
        answer: 'I/Bohr,  II/Dalton,  III/Rutherford',
      },
      {
        isCorrect: false,
        answer: 'I/Dalton,  II/Bohr,  III/Rutherford',
      },
      {
        isCorrect: false,
        answer: 'I/Dalton,   II/Rutherford,   III/Bohr',
      },
      {
        isCorrect: false,
        answer: 'I/Rutherford,  II/Bohr,  III/Dalton',
      },
    ],
  },
  {
    id: '2',
    question:
      'Considerando a experiência de Rutherford, assinale a alternativa falsa.',
    image: '',
    options: [
      {
        isCorrect: true,
        answer:
          'Observando o espectro de difração de partículas alfa, Rutherford concluiu que o átomo tem densidade uniforme.',
      },
      {
        isCorrect: false,
        answer:
          'A experiência consistiu em bombardear películas metálicas delgadas com partículas alfa.',
      },
      {
        isCorrect: false,
        answer:
          'Essa experiência permitiu descobrir o núcleo atômico e seu tamanho relativo.',
      },
      {
        isCorrect: false,
        answer:
          'Rutherford sabia antecipadamente que as partículas alfa eram carregadas positivamente.',
      },
      {
        isCorrect: false,
        answer:
          'Algumas partículas alfa foram desviadas do seu trajeto devido à repulsão exercida pelo núcleo positivo do metal.',
      },
    ],
  },
  {
    id: '3',
    question:
      'O modelo de Rutherford da estrutura atômica apresentou, como novidade, a noção de:',
    image: '',
    options: [
      {
        isCorrect: true,
        answer: 'Núcleo',
      },
      {
        isCorrect: false,
        answer: 'Massa Atômica',
      },
      {
        isCorrect: false,
        answer: 'Energia Quantizada',
      },
      {
        isCorrect: false,
        answer: 'Orbital',
      },
      {
        isCorrect: false,
        answer: 'Spin',
      },
    ],
  },
  {
    id: '4',
    question:
      'Na produção de fogos de artifício, diferentes metais são misturados à pólvora para que os fogos, quando detonados, produzam cores variadas. Por exemplo, o sódio, o estrôncio e o cobre produzem, respectivamente, as cores amarela, vermelha e azul. Se a localização dos elétrons num determinado nível depende da sua quantidade de energia, é INCORRETO afirmar que: ',
    image: '',
    options: [
      {
        isCorrect: true,
        answer:
          'a luminosidade colorida nos fogos de artifício não depende do salto de elétrons de um nível para outro.',
      },
      {
        isCorrect: false,
        answer:
          'quando a pólvora explode, a energia produzida excita os elétrons dos átomos desses metais, fazendo-os passar de níveis de menor energia para níveis de maior energia. ',
      },
      {
        isCorrect: false,
        answer:
          'os níveis de menor energia são aqueles mais próximos do núcleo, e os níveis de maior energia são aqueles mais distantes do núcleo.',
      },
      {
        isCorrect: false,
        answer:
          'quando o elétron retorna para o estado fundamental, ele cede energia anteriormente recebida sob a forma de luz.',
      },
      {
        isCorrect: false,
        answer:
          'no laboratório, o estrôncio poderia ser identificado pela coloração vermelha quando este recebe o calor de uma chama.',
      },
    ],
  },
  {
    id: '5',
    question:
      'O esquema a seguir representa de modo simplificado o experimento de J. J. Thomson. Um feixe de partículas sai do cátodo, passa através de um orifício no ânodo e sofre a influência das placas metálicas A e B. De acordo com esse esquema, o feixe se aproxima de A quando',
    image: './public/images/fig5.png',
    options: [
      {
        isCorrect: true,
        answer: 'a placa A for positiva e a B negativa',
      },
      {
        isCorrect: false,
        answer: 'as placas A e B forem negativas',
      },
      {
        isCorrect: false,
        answer: 'a placa A for negativa e a B, positiva',
      },
      {
        isCorrect: false,
        answer: 'as placas A e B forem positivas',
      },
      {
        isCorrect: false,
        answer: 'as placas A e B forem neutras',
      },
    ],
  },
  {
    id: '6',
    question:
      '(ESPM-SP) - O átomo de Rutherford (1911) foi comparado ao sistema planetário (o núcleo atômico representa o sol e a eletrosfera, os planetas): Eletrosfera é a região do átomo que: ',
    image: '',
    options: [
      {
        isCorrect: true,
        answer: 'contém as partículas de carga elétrica negativa.',
      },
      {
        isCorrect: false,
        answer: 'contém as partículas de carga elétrica positiva.',
      },
      {
        isCorrect: false,
        answer: 'contém nêutrons',
      },
      {
        isCorrect: false,
        answer: 'concentra praticamente toda a massa do átomo.',
      },
      {
        isCorrect: false,
        answer: 'contém prótons e nêutrons',
      },
    ],
  },
  {
    id: '7',
    question:
      '(UFAL/2011) - De acordo com o modelo atômico de Bohr, elétrons giram ao redor do núcleo em órbitas específicas, tais como os planetas giram em órbitas específicas ao redor do Sol. Diferentemente dos planetas, os elétrons saltam de uma órbita específica para outra, ganhando ou perdendo energia. Qual das afirmações abaixo está em discordância com o modelo proposto por Bohr?',
    image: '',
    options: [
      {
        isCorrect: true,
        answer:
          'O modelo proposto é aplicado com êxito somente ao átomo de hidrogênio.',
      },
      {
        isCorrect: false,
        answer:
          'Ao saltar de uma órbita mais próxima do núcleo, para outra mais afastada, o elétron absorve energia.',
      },
      {
        isCorrect: false,
        answer:
          'Ao saltar de uma órbita mais afastada do núcleo para outra mais próxima, o elétron emite energia.',
      },
      {
        isCorrect: false,
        answer:
          'Dentro de uma mesma órbita, o elétron se movimenta sem ganho ou perda de energia.',
      },
      {
        isCorrect: false,
        answer:
          ' O processo no qual o elétron absorve energia suficiente para escapar completamente do átomo é chamado ionização. ',
      },
    ],
  },
  {
    id: '8',
    question:
      'As afirmativas a seguir descrevem estudos sobre modelos atômicos, realizados por Niels Bohr, John Dalton e Ernest Rutherford. Assinale a alternativa que indica a sequência correta do relacionamento desses estudos com seus autores.',
    image: './public/images/fig8.png',
    options: [
      {
        isCorrect: true,
        answer: 'Rutherford, Dalton, Bohr',
      },
      {
        isCorrect: false,
        answer: 'Rutherford, Bohr, Dalton',
      },
      {
        isCorrect: false,
        answer: 'Dalton, Rutherford, Bohr',
      },
      {
        isCorrect: false,
        answer: 'Dalton, Bohr, Rutherford',
      },
      {
        isCorrect: false,
        answer: 'Dalton, Dalton, Rutherford',
      },
    ],
  },
  {
    id: '9',
    question:
      '(Fuvest) Há exatos 100 anos, J. J. Thomson determinou, pela primeira vez, a relação entre a massa e a carga do elétron, o que pode ser considerado como a descoberta do elétron. É reconhecida como uma contribuição de Thomson ao modelo atômico.',
    image: '',
    options: [
      {
        isCorrect: true,
        answer: 'a existência de partículas subatômicas.',
      },
      {
        isCorrect: false,
        answer: 'o átomo ser indivisível.',
      },
      {
        isCorrect: false,
        answer: 'os elétrons ocuparem níveis discretos de energia.',
      },
      {
        isCorrect: false,
        answer: 'os elétrons girarem em órbitas circulares ao redor do núcleo.',
      },
      {
        isCorrect: false,
        answer:
          'o átomo possuir um núcleo com carga positiva e uma eletrosfera',
      },
    ],
  },
  {
    id: '10',
    question:
      '(UFRGS) Considere as seguintes afirmações a respeito do experimento de Rutherford e do modelo atômico de Rutherford-Bohr. Quais estão corretas?',
    image: './public/images/fig10.png',
    options: [
      {
        isCorrect: true,
        answer: 'Apenas II e III.',
      },
      {
        isCorrect: false,
        answer: 'Apenas I.',
      },
      {
        isCorrect: false,
        answer: 'Apenas II.',
      },
      {
        isCorrect: false,
        answer: 'Apenas III',
      },
      {
        isCorrect: false,
        answer: 'I, II e III.',
      },
    ],
  },
];

function createQuestion(obj) {
  let template = document.getElementsByTagName('template')[0];
  let card = template.content.cloneNode('true');
  card.querySelector(
    'p'
  ).innerHTML = `<span>${obj.id} - </span>${obj.question}`;
  card.querySelector('img').setAttribute('src', obj.image);
  const inputs = card.querySelectorAll('input');
  const labels = card.querySelectorAll('label');
  const shuffledOptions = shuffle(obj.options);
  const button = card.querySelector('button');
  button.addEventListener('click', (event) => {
    checkResult(inputs);
    event.preventDefault();
  });
  for (let i = 0; i < shuffledOptions.length; i++) {
    inputs[i].value = shuffledOptions[i].isCorrect;
    inputs[i].id = obj.id;
    labels[i].textContent = shuffledOptions[i].answer;
  }

  let container = document.createElement('div');
  container.setAttribute('class', 'card');
  container.appendChild(card);
  const main = document.querySelector('main');
  main.append(container);
}

function listAllQuestions() {
  questions.forEach(createQuestion);
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
      alert(`Q${questionId} - Errado. Leia novamente.`);
    }
  } else {
    alert(`Você deve selecionar uma resposta para Q${questionId}!`);
  }
}

document.querySelector(
  'footer'
).innerHTML = `<p>Copyright &copy; Danilo Morais Itokagi. All rights reserved. ${new Date().getFullYear()}</p>`;

listAllQuestions();
