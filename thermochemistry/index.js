const questions = [
  {
    id: 1,
    question:
      'Indque se a reação é endo ou exotérmica. então, represente corretamente seu diagrama de entalpia.',
    reactants: 'CH<sub>4</sub>(g) + 2 O<sub>2</sub>(g)',
    products: 'CO<sub>2</sub>(g) + H<sub>2</sub>O(l)',
    enthalpyDelta: 890.4,
    unity: 'KJ / mol',
    reaction: 'exothermic',
    diagramArrow: './public/images/down-direction.png',
    movingHalf: null,
    upper: false,
    lower: false,
    done: false,
    reactionTypeDone: false,
  },
  {
    id: 2,
    question:
      'Indque se a reação é endo ou exotérmica. então, represente corretamente seu diagrama de entalpia.',
    reactants: 'CaCO<sub>3</sub>(s)',
    products: 'CaO(s) + CO<sub>2</sub>(g)',
    enthalpyDelta: 177.8,
    unity: 'KJ / mol',
    reaction: 'endothermic',
    diagramArrow: './public/images/up-direction.png',
    movingHalf: null,
    upper: false,
    lower: false,
    done: false,
    reactionTypeDone: false,
  },
  {
    id: 3,
    question:
      'Indque se a reação é endo ou exotérmica. então, represente corretamente seu diagrama de entalpia.',
    reactants: 'H<sub>2</sub>(g) + F<sub>2</sub>(g)',
    products: '2 HF(g)',
    enthalpyDelta: 130,
    unity: 'kcal',
    reaction: 'exothermic',
    diagramArrow: './public/images/down-direction.png',
    movingHalf: null,
    upper: false,
    lower: false,
    done: false,
    reactionTypeDone: false,
  },
  {
    id: 4,
    question:
      'Indque se a reação é endo ou exotérmica. então, represente corretamente seu diagrama de entalpia.',
    reactants: '2 C(s) + H<sub>2</sub>(g)',
    products: 'C<sub>2</sub>H<sub>2</sub>(g)',
    enthalpyDelta: 5.3,
    unity: 'kcal',
    reaction: 'endothermic',
    diagramArrow: './public/images/up-direction.png',
    movingHalf: null,
    upper: false,
    lower: false,
    done: false,
    reactionTypeDone: false,
  },
  {
    id: 5,
    question:
      'Indque se a reação é endo ou exotérmica. então, represente corretamente seu diagrama de entalpia.',
    reactants: 'Fe<sub>2</sub>O<sub>3</sub>(s) + 3 C(s)',
    products: '2 Fe(s) + 3 CO(g)',
    enthalpyDelta: 491.5,
    unity: 'kJ',
    reaction: 'endothermic',
    diagramArrow: './public/images/up-direction.png',
    movingHalf: null,
    upper: false,
    lower: false,
    done: false,
    reactionTypeDone: false,
  },
  {
    id: 6,
    question:
      'Indque se a reação é endo ou exotérmica. então, represente corretamente seu diagrama de entalpia.',
    reactants: 'H<sub>2</sub>(g) + O<sub>2</sub>(g)',
    products: 'H<sub>2</sub>O(g)',
    enthalpyDelta: 241.6,
    unity: 'kJ',
    reaction: 'exothermic',
    diagramArrow: './public/images/down-direction.png',
    movingHalf: null,
    upper: false,
    lower: false,
    done: false,
    reactionTypeDone: false,
  },
  {
    id: 7,
    question:
      'Indque se a reação é endo ou exotérmica. então, represente corretamente seu diagrama de entalpia.',
    reactants: 'H<sub>2</sub>O(g)',
    products: 'H<sub>2</sub>(g) + O<sub>2</sub>(g)',
    enthalpyDelta: 241.6,
    unity: 'kJ',
    reaction: 'endothermic',
    diagramArrow: './public/images/up-direction.png',
    movingHalf: null,
    upper: false,
    lower: false,
    done: false,
    reactionTypeDone: false,
  },
  {
    id: 8,
    question:
      'Indque se a reação é endo ou exotérmica. então, represente corretamente seu diagrama de entalpia.',
    reactants: 'H<sub>2</sub>(g) + O<sub>2</sub>(g)',
    products: 'H<sub>2</sub>O(l)',
    enthalpyDelta: 285.5,
    unity: 'kJ',
    reaction: 'exothermic',
    diagramArrow: './public/images/down-direction.png',
    movingHalf: null,
    upper: false,
    lower: false,
    done: false,
    reactionTypeDone: false,
  },
];

let score = 0;
let total = questions.length;
const totalScoreH4 = document.createElement('h4');
totalScoreH4.textContent = `Pontos: ${score} / ${total}`;
totalScoreH4.style.textAlign = 'center';
totalScoreH4.style.color = 'white';
totalScoreH4.style.fontWeight = 'bold';

const body = document.querySelector('body');
const main = document.querySelector('main');
body.insertBefore(totalScoreH4, main);
console.log(body);
console.log(totalScoreH4);

function createCard(question) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.setAttribute('id', question.id);
  const successP = document.createElement('p');
  successP.textContent = 'Parabéns, você acertou!!!';
  successP.style.backgroundColor = 'blue';
  successP.style.display = 'none';
  successP.style.margin = '0px';

  card.appendChild(successP);
  const questionP = document.createElement('p');
  questionP.innerHTML = `${question.id} - ${question.question}`;
  card.appendChild(questionP);

  const reaction = document.createElement('div');
  reaction.classList.add('reaction');
  const reactants = document.createElement('div');
  reactants.classList.add('reactants');
  reactants.setAttribute('draggable', true);
  const arrow = document.createElement('div');
  arrow.classList.add('arrow');
  const products = document.createElement('div');
  products.classList.add('products');
  products.setAttribute('draggable', true);
  const enthalpy = document.createElement('div');
  enthalpy.classList.add('enthalpy');

  reactants.innerHTML = question.reactants;
  arrow.innerHTML = '&rarr;';
  products.innerHTML = question.products;
  enthalpy.innerHTML = `&Delta;H = ${
    question.reaction === 'exothermic' ? '-' : '+'
  } ${question.enthalpyDelta} ${question.unity}`;
  reaction.appendChild(reactants);
  reaction.appendChild(arrow);
  reaction.appendChild(products);
  reaction.appendChild(enthalpy);
  card.appendChild(reaction);

  const reactionTypeBox = document.createElement('div');
  reactionTypeBox.style.display = 'flex';
  reactionTypeBox.style.alignItems = 'center';
  reactionTypeBox.style.marginTop = '20px';
  reactionTypeBox.style.marginBottom = '10px';
  const reactionTypeP = document.createElement('p');
  reactionTypeP.textContent = 'reação (endo ou exotérmica): ';
  const reactionTypeInput = document.createElement('input');
  reactionTypeInput.style.width = '150px';
  reactionTypeInput.style.height = '20px';
  reactionTypeInput.style.marginLeft = '5px';
  reactionTypeInput.style.textAlign = 'center';
  const reactionResponse = document.createElement('p');
  reactionResponse.innerText = 'OK';
  reactionResponse.style.color = 'orange';
  reactionResponse.style.fontWeight = 'bold';
  reactionResponse.style.marginLeft = '5px';
  reactionResponse.style.display = 'none';
  reactionTypeInput.addEventListener('keyup', () => {
    if (
      (question.reaction === 'exothermic' &&
        reactionTypeInput.value.trim() === 'exotérmica') ||
      (question.reaction === 'endothermic' &&
        reactionTypeInput.value.trim() === 'endotérmica')
    ) {
      reactionTypeInput.style.backgroundColor = 'blue';
      reactionTypeInput.style.color = 'white';
      reactionTypeInput.style.fontWeight = 'bold';
      reactionResponse.style.display = 'block';
      question.reactionTypeDone = true;
    } else {
      reactionTypeInput.style.backgroundColor = 'white';
      reactionTypeInput.style.color = 'black';
      reactionTypeInput.style.fontWeight = 'normal';
      reactionResponse.style.display = 'none';
      question.reactionTypeDone = false;
    }
  });
  reactionTypeBox.appendChild(reactionTypeP);
  reactionTypeBox.appendChild(reactionTypeInput);
  reactionTypeBox.appendChild(reactionResponse);
  card.appendChild(reactionTypeBox);

  const diagramP = document.createElement('p');
  diagramP.textContent = 'Diagrama de Variação de Entalpia';
  card.appendChild(diagramP);

  const answerBox = document.createElement('div');
  answerBox.classList.add('answer');
  const imgEnthalpyLevel = document.createElement('img');
  imgEnthalpyLevel.setAttribute('src', './public/images/entalpy-level.png');
  imgEnthalpyLevel.classList.add('enthalpy-level');
  answerBox.appendChild(imgEnthalpyLevel);

  const diagramBox = document.createElement('div');
  diagramBox.classList.add('box');

  const upper = document.createElement('div');
  upper.classList.add('upper');
  const upperP = document.createElement('p');
  upper.appendChild(upperP);
  const upperDropZoneP = document.createElement('p');
  upperDropZoneP.textContent = 'Arraste Aqui';
  upper.appendChild(upperDropZoneP);

  const imgDirection = document.createElement('img');
  imgDirection.classList.add('direction');
  imgDirection.setAttribute('src', question.diagramArrow);
  imgDirection.style.display = 'none';

  const lower = document.createElement('div');
  lower.classList.add('lower');
  const lowerP = document.createElement('p');
  lower.appendChild(lowerP);
  const lowerDropZoneP = document.createElement('p');
  lowerDropZoneP.textContent = 'Arraste Aqui';
  lower.appendChild(lowerDropZoneP);

  reactants.addEventListener('dragstart', (e) => {
    question.movingHalf = 'reactants';
  });

  products.addEventListener('dragstart', (e) => {
    question.movingHalf = 'products';
  });

  lowerDropZoneP.addEventListener('dragover', (e) => {
    e.preventDefault();
  });

  upperDropZoneP.addEventListener('dragover', (e) => {
    e.preventDefault();
  });

  lowerDropZoneP.addEventListener('drop', (e) => {
    if (!question.reactionTypeDone) {
      alert(
        `Q${question.id} - Primeiro você precisa escrever corretamente se a reação é endo ou exotérmica!!`
      );
    } else {
      if (!question.done) {
        if (question.reaction === 'exothermic') {
          if (question.movingHalf === 'products') {
            lowerDropZoneP.innerHTML = products.innerHTML;
            lowerP.innerHTML = 'H<sub>f</sub>';
            lowerDropZoneP.style.backgroundColor = 'blue';
            question.lower = true;
            if (question.upper && question.lower) {
              question.done = true;
              successP.style.display = 'block';
              imgDirection.style.display = 'block';
              if (score < total) {
                score += 1;
                document.querySelector(
                  'h4'
                ).textContent = `Pontos: ${score} / ${total}.`;
              }
              if (score === total) {
                alert(
                  `Parabéns! Você completou a tarefa com todas certas, ${score} / ${total}.`
                );
                return;
              }
            }
          }
        } else {
          if (question.movingHalf === 'reactants') {
            lowerDropZoneP.innerHTML = reactants.innerHTML;
            lowerP.innerHTML = 'H<sub>i</sub>';
            lowerDropZoneP.style.backgroundColor = 'blue';
            question.lower = true;
            if (question.upper && question.lower) {
              question.done = true;
              successP.style.display = 'block';
              imgDirection.style.display = 'block';
              if (score < total) {
                score += 1;
                document.querySelector(
                  'h4'
                ).textContent = `Pontos: ${score} / ${total}.`;
              }
              if (score === total) {
                alert(
                  `Parabéns! Você completou a tarefa com todas certas, ${score} / ${total}.`
                );
                return;
              }
            }
          }
        }
      }
    }
  });

  upperDropZoneP.addEventListener('drop', (e) => {
    if (!question.reactionTypeDone) {
      alert(
        `Q${question.id} - Primeiro você precisa escrever corretamente se a reação é endo ou exotérmica!!`
      );
    } else {
      if (!question.done) {
        if (question.reaction === 'exothermic') {
          if (question.movingHalf === 'reactants') {
            upperDropZoneP.innerHTML = reactants.innerHTML;
            upperP.innerHTML = 'H<sub>i</sub>';
            upperDropZoneP.style.backgroundColor = 'blue';
            question.upper = true;
            if (question.upper && question.lower) {
              question.done = true;
              successP.style.display = 'block';
              imgDirection.style.display = 'block';
              if (score < total) {
                score += 1;
                document.querySelector(
                  'h4'
                ).textContent = `Pontos: ${score} / ${total}.`;
              }
              if (score === total) {
                alert(
                  `Parabéns! Você completou a tarefa com todas certas, ${score} / ${total}.`
                );
                return;
              }
            }
          }
        } else {
          if (question.movingHalf === 'products') {
            upperDropZoneP.innerHTML = products.innerHTML;
            upperP.innerHTML = 'H<sub>f</sub>';
            upperDropZoneP.style.backgroundColor = 'blue';
            question.upper = true;
            if (question.upper && question.lower) {
              question.done = true;
              successP.style.display = 'block';
              imgDirection.style.display = 'block';
              if (score < total) {
                score += 1;
                document.querySelector(
                  'h4'
                ).textContent = `Pontos: ${score} / ${total}.`;
              }
              if (score === total) {
                alert(
                  `Parabéns! Você completou a tarefa com todas certas, ${score} / ${total}.`
                );
                return;
              }
            }
          }
        }
      }
    }
  });

  diagramBox.appendChild(upper);
  diagramBox.appendChild(lower);
  answerBox.appendChild(diagramBox);
  answerBox.appendChild(imgDirection);
  card.appendChild(answerBox);

  return card;
}

function showCards() {
  for (let question of questions) {
    const card = createCard(question);
    document.querySelector('main').appendChild(card);
  }
}

showCards();
// const reactants = document.querySelector('.reactants');
// const products = document.querySelector('.products');
// const lowerDropZone = document.querySelector('.lower-dropZone');
// const upperDropZone = document.querySelector('.upper-dropZone');

// let movingHalf = null;
// reactants.addEventListener('dragstart', function (e) {
//   movingHalf = reactants;
// });

// products.addEventListener('dragstart', function (e) {
//   movingHalf = products;
// });

// lowerDropZone.addEventListener('dragover', function (e) {
//   e.preventDefault(e);
// });

// upperDropZone.addEventListener('dragover', function (e) {
//   e.preventDefault(e);
// });

// lowerDropZone.addEventListener('drop', function (e) {
//   if (movingHalf.className === 'products') {
//     lowerDropZone.innerHTML = products.innerHTML;
//   }
// });

// upperDropZone.addEventListener('drop', function (e) {
//   if (movingHalf.className === 'reactants') {
//     upperDropZone.innerHTML = reactants.innerHTML;
//   }
// });

document.querySelector(
  'footer'
).innerHTML = `<p>Copyright &copy; Danilo Morais Itokagi. All rights reserved. ${new Date().getFullYear()}</p>`;
