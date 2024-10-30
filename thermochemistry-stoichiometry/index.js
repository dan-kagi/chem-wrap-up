const questions = [
  {
    id: 1,
    question:
      'A reação abaixo mostra a reação de combustão completa do butano, C<sub>4</sub>H<sub>10</sub>. Determine o calor liberado (em kJ) na queima de 348 g desta substância.',
    reaction:
      ' C<sub>4</sub>H<sub>10</sub>(g) + 13/2 O<sub>2</sub>(g) &rarr; 4 CO<sub>2</sub>(g) + 5 H<sub>2</sub>O(l) &Delta;H = - 2658kJ / mol',
    dados: 'massa molar do butano = 58 g / mol',
    answer: -15948,
    unit: 'kJ',
  },
  {
    id: 2,
    question:
      'A combustão do gás hidrogênio está representada abaixo. Calcule o calor liberado na combustão de 1 Kg de gás hidrogênio.',
    reaction:
      ' H<sub>2</sub>(g) + 1/2 O<sub>2</sub>(g) &rarr;  H<sub>2</sub>O(l) &Delta;H = - 286 kJ / mol',
    dados: 'massa molar do H<sub>2</sub> = 2 g / mol',
    answer: -143000,
    unit: 'kJ',
  },
  {
    id: 3,
    question:
      'Que massa de etanol (em gramas) deve sofrer combustão para gerar 9822 kJ de energia?',
    reaction:
      ' C<sub>2</sub>H<sub>6</sub>O(l) + 3 O<sub>2</sub>(g) &rarr; 2 CO<sub>2</sub>(g) + 3 H<sub>2</sub>O(l) &Delta;H = - 1637 kJ / mol',
    dados: 'massa molar do etanol = 46 g / mol',
    answer: 276,
    unit: 'g',
  },
  {
    id: 4,
    question:
      'O carbonato de cálcio sofreu decomposição de acordo com a reação abaixo. Na reação foram absorvidos da vizinhança 711,2 kJ de energia. Calcule a massa, em g, de carbonato de cálcio que foi decomposta.',
    reaction:
      ' CaCO<sub>3</sub>(s) &rarr; CaO(s) +  CO<sub>2</sub>(g) &Delta;H = + 177.8 kJ / mol',
    dados: 'massa molar do CaCO<sub>3</sub> = 100 g / mol',
    answer: 400,
    unit: 'g',
  },
];

function createCard(question) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.setAttribute('id', question.id);

  const questionP = document.createElement('p');
  questionP.innerHTML = `${question.id}` + ' - ' + question.question;
  questionP.style.textAlign = 'justify';
  card.appendChild(questionP);

  const dadosP = document.createElement('p');
  dadosP.innerHTML = question.dados;
  dadosP.style.textAlign = 'justify';
  dadosP.style.margin = '0';
  card.appendChild(dadosP);

  const reactionP = document.createElement('p');
  reactionP.innerHTML = question.reaction;
  reactionP.style.textAlign = 'justify';
  reactionP.style.color = 'white';
  reactionP.style.fontWeight = 'bold';
  card.appendChild(reactionP);

  answerDiv = document.createElement('div');
  answerDiv.style.display = 'flex';
  answerDiv.style.justifyContent = 'center';
  answerDiv.style.alignItems = 'center';
  answerInput = document.createElement('input');
  answerInput.style.backgroundColor = 'black';
  answerInput.style.width = '80px';
  answerInput.style.color = 'white';
  answerInput.style.fontWeight = 'bold';
  answerInput.style.textAlign = 'center';
  answerUnit = document.createElement('p');
  answerUnit.innerHTML = question.unit;
  answerUnit.style.marginLeft = '5px';

  const message = document.createElement('p');
  message.innerText = 'Resposta correta!';
  message.style.color = 'orange';
  message.style.fontWeight = 'bold';
  message.style.display = 'none';
  message.style.margin = '0';

  answerInput.addEventListener('keyup', (event) => {
    const card = document.getElementById(question.id);
    const input = card.querySelector('input');
    const userInput = Number(input.value);
    if (userInput === question.answer) {
      input.style.backgroundColor = 'blue';
      message.style.display = 'block';
    } else {
      input.style.backgroundColor = 'black';
      message.style.display = 'none';
    }
  });
  answerDiv.appendChild(answerInput);
  answerDiv.appendChild(answerUnit);
  card.appendChild(answerDiv);
  card.appendChild(message);

  return card;
}

const main = document.querySelector('main');
for (let question of questions) {
  main.appendChild(createCard(question));
}

document.querySelector(
  'footer'
).innerHTML = `<p>Copyright &copy; Danilo Morais Itokagi. All rights reserved. ${new Date().getFullYear()}</p>`;
