const questions = [
  {
    id: 1,
    question:
      '(FEI-SP-mod) São dadas as variações de entalpia de combustão de um conjunto de reações. Determine a quantidade de quilocalorias, em valor absoluto, envolvidas na formação de 1 mol de metano.',
    reactions: [
      {
        reactants: [
          { substance: 'C(s)', coef: 1, cancel: false },
          { substance: 'O<sub>2</sub>(g)', coef: 1, cancel: true },
        ],
        products: [{ substance: 'CO<sub>2</sub>(g)', coef: 1, cancel: true }],
        deltaH: -94.4,
        operation: { multiply: false, reverse: false },
        operationsDone: { multiply: false, reverse: false },
      },
      {
        reactants: [
          { substance: 'H<sub>2</sub>(g)', coef: 1, cancel: false },
          { substance: 'O<sub>2</sub>(g)', coef: 0.5, cancel: true },
        ],
        products: [{ substance: 'H<sub>2</sub>O(l)', coef: 1, cancel: true }],
        deltaH: -68.0,
        operation: { multiply: 2, reverse: false },
        operationsDone: { multiply: false, reverse: false },
      },
      {
        reactants: [
          { substance: 'CH<sub>4</sub>(g)', coef: 1, cancel: false },
          { substance: 'O<sub>2</sub>(g)', coef: 2, cancel: true },
        ],
        products: [
          { substance: 'CO<sub>2</sub>(g)', coef: 1, cancel: true },
          { substance: 'H<sub>2</sub>O(l)', coef: 2, cancel: true },
        ],
        deltaH: -212,
        operation: { multiply: false, reverse: true },
        operationsDone: { multiply: false, reverse: false },
      },
    ],
    totalOperationsCount: 2,
    globalReaction: {
      reactants: [
        { substance: 'C(s)', coef: 1, cancel: false },
        { substance: 'H<sub>2</sub>(g)', coef: 2, cancel: false },
      ],
      products: [{ substance: 'CH<sub>4</sub>(g)', coef: 1, cancel: false }],
      deltaH: '?',
      unit: 'kcal / mol',
      operation: { multiply: false, reverse: false },
      answer: -18,
    },
    createCard: function () {
      const card = createHessCard(
        this.id,
        this.question,
        this.globalReaction,
        this.reactions,
        this.totalOperationsCount
      );
      return card;
    },
  },
  {
    id: 2,
    question:
      '(UFSC-mod) Dadas as duas equações de formação de água, determine a variação de entalpia no processo de mudança de estado físico da água, do estado gasoso para o está líquido.',
    reactions: [
      {
        reactants: [
          { substance: 'H<sub>2</sub>(g)', coef: 1, cancel: true },
          { substance: 'O<sub>2</sub>(g)', coef: 0.5, cancel: true },
        ],
        products: [{ substance: 'H<sub>2</sub>O(l)', coef: 1, cancel: false }],
        deltaH: -68.3,
        operation: { multiply: false, reverse: false },
        operationsDone: { multiply: false, reverse: false },
      },
      {
        reactants: [
          { substance: 'H<sub>2</sub>(g)', coef: 1, cancel: true },
          { substance: 'O<sub>2</sub>(g)', coef: 0.5, cancel: true },
        ],
        products: [{ substance: 'H<sub>2</sub>O(g)', coef: 1, cancel: false }],
        deltaH: -57.8,
        operation: { multiply: false, reverse: true },
        operationsDone: { multiply: false, reverse: false },
      },
    ],
    totalOperationsCount: 1,
    globalReaction: {
      reactants: [{ substance: 'H<sub>2</sub>O(g)', coef: 1, cancel: false }],
      products: [{ substance: 'H<sub>2</sub>O(l)', coef: 1, cancel: false }],
      deltaH: '?',
      unit: 'kcal / mol',
      operation: { multiply: false, reverse: false },
      answer: -10.5,
    },
    createCard: function () {
      const card = createHessCard(
        this.id,
        this.question,
        this.globalReaction,
        this.reactions,
        this.totalOperationsCount
      );
      return card;
    },
  },
  {
    id: 3,
    question:
      'A partir dos dados fornecidos, determine a variação de entalpia do processo de conversão do enxofre rômbico em enxofre monoclínico.',
    reactions: [
      {
        reactants: [
          { substance: 'S<sub>(rômbico)</sub>(g)', coef: 1, cancel: false },
          { substance: 'O<sub>2</sub>(g)', coef: 1, cancel: true },
        ],
        products: [{ substance: 'SO<sub>2</sub>(g)', coef: 1, cancel: true }],
        deltaH: -296.06,
        operation: { multiply: false, reverse: false },
        operationsDone: { multiply: false, reverse: false },
      },
      {
        reactants: [
          { substance: 'S<sub>(monoclínico)</sub>(g)', coef: 1, cancel: false },
          { substance: 'O<sub>2</sub>(g)', coef: 1, cancel: true },
        ],
        products: [{ substance: 'SO<sub>2</sub>(g)', coef: 1, cancel: true }],
        deltaH: -296.36,
        operation: { multiply: false, reverse: true },
        operationsDone: { multiply: false, reverse: false },
      },
    ],
    totalOperationsCount: 1,
    globalReaction: {
      reactants: [
        { substance: 'S<sub>(rômbico)</sub>(g)', coef: 1, cancel: false },
      ],
      products: [
        { substance: 'S<sub>(monoclínico)</sub>(g)', coef: 1, cancel: false },
      ],
      deltaH: '?',
      unit: 'kJ',
      operation: { multiply: false, reverse: false },
      answer: +0.3,
    },
    createCard: function () {
      const card = createHessCard(
        this.id,
        this.question,
        this.globalReaction,
        this.reactions,
        this.totalOperationsCount
      );
      return card;
    },
  },
  {
    id: 4,
    question:
      '(Puccamp-SP-mod) O acetileno (C<sub>2</sub>H<sub>2</sub>) usado nos maçaricos de “solda a oxigênio” queima conforme a equação a seguir. Utilizando o conjunto de reações fornecidas determine a variação de entalpia da combustão completa do acetileno.',
    reactions: [
      {
        reactants: [
          { substance: 'C(s)', coef: 2, cancel: true },
          { substance: 'H<sub>2</sub>(g)', coef: 1, cancel: true },
        ],
        products: [
          {
            substance: 'C<sub>2</sub>H<sub>2</sub>(g)',
            coef: 1,
            cancel: false,
          },
        ],
        deltaH: 54.2,
        operation: { multiply: false, reverse: true },
        operationsDone: { multiply: false, reverse: false },
      },
      {
        reactants: [
          { substance: 'H<sub>2</sub>(g)', coef: 1, cancel: true },
          { substance: 'O<sub>2</sub>(g)', coef: 0.5, cancel: false },
        ],
        products: [{ substance: 'H<sub>2</sub>O(l)', coef: 1, cancel: false }],
        deltaH: -68.3,
        operation: { multiply: false, reverse: false },
        operationsDone: { multiply: false, reverse: false },
      },
      {
        reactants: [
          { substance: 'C(s)', coef: 1, cancel: true },
          { substance: 'O<sub>2</sub>(g)', coef: 1, cancel: false },
        ],
        products: [{ substance: 'CO<sub>2</sub>(g)', coef: 1, cancel: false }],
        deltaH: -94.1,
        operation: { multiply: 2, reverse: false },
        operationsDone: { multiply: false, reverse: false },
      },
    ],
    totalOperationsCount: 2,
    globalReaction: {
      reactants: [
        { substance: 'C<sub>2</sub>H<sub>2</sub>(g)', coef: 1, cancel: false },
        { substance: 'O<sub>2</sub>(g)', coef: 2.5, cancel: false },
      ],
      products: [
        { substance: 'H<sub>2</sub>O(l)', coef: 1, cancel: false },
        { substance: 'CO<sub>2</sub>(g)', coef: 2, cancel: false },
      ],
      deltaH: '?',
      unit: 'kcal / mol',
      operation: { multiply: false, reverse: false },
      answer: -310.7,
    },
    createCard: function () {
      const card = createHessCard(
        this.id,
        this.question,
        this.globalReaction,
        this.reactions,
        this.totalOperationsCount
      );
      return card;
    },
  },
  {
    id: 5,
    question:
      'O elemento químico tungstênio, de símbolo W, é muito utilizado em filamentos de lâmpadas incandescentes comuns. Quando ligado a elementos como carbono ou boro, forma substâncias quimicamente inertes e duras. O carbeto de tungstênio, WC(s), é muito utilizado em ponteiras de ferramentas como lixas para metais, etc. Essa substância pode ser obtida através da reação abaixo. A partir do conjunto de reacões fornecido, calcule o ΔH da reação de obtenção do carbeto de tungstênio.',
    reactions: [
      {
        reactants: [
          { substance: 'W(s)', coef: 1, cancel: false },
          { substance: 'O<sub>2</sub>(g)', coef: 1.5, cancel: true },
        ],
        products: [
          {
            substance: 'WO<sub>3</sub>(s)',
            coef: 1,
            cancel: true,
          },
        ],
        deltaH: -840,
        operation: { multiply: false, reverse: false },
        operationsDone: { multiply: false, reverse: false },
      },
      {
        reactants: [
          { substance: 'C(grafite)', coef: 1, cancel: false },
          { substance: 'O<sub>2</sub>(g)', coef: 1, cancel: true },
        ],
        products: [{ substance: 'CO<sub>2</sub>(g)', coef: 1, cancel: true }],
        deltaH: -394,
        operation: { multiply: false, reverse: false },
        operationsDone: { multiply: false, reverse: false },
      },
      {
        reactants: [
          { substance: 'WC(s)', coef: 1, cancel: false },
          { substance: 'O<sub>2</sub>(g)', coef: 2.5, cancel: true },
        ],
        products: [
          { substance: 'CO<sub>2</sub>(g)', coef: 1, cancel: true },
          { substance: 'WO<sub>3</sub>(s)', coef: 1, cancel: true },
        ],
        deltaH: -1196,
        operation: { multiply: false, reverse: true },
        operationsDone: { multiply: false, reverse: false },
      },
    ],
    totalOperationsCount: 1,
    globalReaction: {
      reactants: [
        { substance: 'W(s)', coef: 1, cancel: false },
        { substance: 'C(grafite)', coef: 1, cancel: false },
      ],
      products: [{ substance: 'WC(s)', coef: 1, cancel: false }],
      deltaH: '?',
      unit: 'kJ / mol',
      operation: { multiply: false, reverse: false },
      answer: -38,
    },
    createCard: function () {
      const card = createHessCard(
        this.id,
        this.question,
        this.globalReaction,
        this.reactions,
        this.totalOperationsCount
      );
      return card;
    },
  },
  {
    id: 6,
    question:
      '(UFMS-mod) Calcule a entalpia, ∆H, em kcal/mol, da reação a seguir nas condições ambientais (25 °C e 1 atm), dado o conjunto de reações na caixa cinza.',
    reactions: [
      {
        reactants: [
          {
            substance: 'C<sub>2</sub>H<sub>6</sub>(g)',
            coef: 1,
            cancel: true,
          },
          { substance: 'O<sub>2</sub>(g)', coef: 3.5, cancel: false },
        ],
        products: [
          {
            substance: 'CO<sub>2</sub>(g)',
            coef: 2,
            cancel: false,
          },
          {
            substance: 'H<sub>2</sub>O(l)',
            coef: 3,
            cancel: true,
          },
        ],
        deltaH: -372.7,
        operation: { multiply: 0.5, reverse: true },
        operationsDone: { multiply: false, reverse: false },
      },
      {
        reactants: [
          { substance: 'C(grafite)', coef: 2, cancel: false },
          { substance: 'H<sub>2</sub>(g)', coef: 3, cancel: true },
        ],
        products: [
          {
            substance: 'C<sub>2</sub>H<sub>6</sub>(g)',
            coef: 1,
            cancel: true,
          },
        ],
        deltaH: -20,
        operation: { multiply: 0.5, reverse: true },
        operationsDone: { multiply: false, reverse: false },
      },
      {
        reactants: [
          { substance: 'H<sub>2</sub>(g)', coef: 1, cancel: true },
          { substance: 'O<sub>2</sub>(g)', coef: 0.5, cancel: false },
        ],
        products: [{ substance: 'H<sub>2</sub>O(l)', coef: 1, cancel: true }],
        deltaH: -68.3,
        operation: { multiply: 1.5, reverse: false },
        operationsDone: { multiply: false, reverse: false },
      },
    ],
    totalOperationsCount: 5,
    globalReaction: {
      reactants: [{ substance: 'CO<sub>2</sub>(g)', coef: 1, cancel: false }],
      products: [
        { substance: 'C(s)', coef: 1, cancel: false },
        { substance: 'O<sub>2</sub>(g)', coef: 1, cancel: false },
      ],
      deltaH: '?',
      unit: 'kcal / mol',
      operation: { multiply: false, reverse: false },
      answer: 93.9,
    },
    createCard: function () {
      const card = createHessCard(
        this.id,
        this.question,
        this.globalReaction,
        this.reactions,
        this.totalOperationsCount
      );
      return card;
    },
  },
];

function createHessCard(
  id,
  question,
  globalReact,
  reactions,
  totalOperationsCount
) {
  const card = document.createElement('card');
  card.classList.add('card');
  card.setAttribute('id', id);
  const questionP = document.createElement('p');
  questionP.style.textAlign = 'justify';
  questionP.innerHTML = `${id} - ${question}`;
  card.appendChild(questionP);
  const globalReaction = createReactionHandler(globalReact);
  card.appendChild(globalReaction);
  const reactionsBox = createListOfReactionsBox(
    reactions,
    globalReact,
    totalOperationsCount,
    id
  );
  card.appendChild(reactionsBox);
  return card;
}

function createListOfReactionsBox(reactions, global, totalOperationsCount, id) {
  const reactionsDiv = document.createElement('div');
  reactionsDiv.style.width = '98%';
  reactionsDiv.style.borderRadius = '10px';
  reactionsDiv.style.display = 'flex';
  reactionsDiv.style.backgroundColor = 'grey';
  reactionsDiv.style.flexDirection = 'column';
  reactionsDiv.style.alignItems = 'center';
  const reactionTitle = document.createElement('p');
  reactionTitle.style.textAlign = 'center';
  reactionTitle.innerHTML = `Reações`;
  const unitP = document.createElement('p');
  unitP.style.textAlign = 'center';
  unitP.innerHTML = `Unidade de &Delta;H: ${global.unit}`;
  reactionsDiv.appendChild(reactionTitle);
  reactionsDiv.appendChild(unitP);

  const showManipulationButtons = document.createElement('button');
  showManipulationButtons.innerText = 'Mostrar Botões de Manipulação';
  showManipulationButtons.style.backgroundColor = 'blue';
  showManipulationButtons.style.color = 'white';
  showManipulationButtons.style.borderRadius = '10px';
  showManipulationButtons.style.fonteWeight = 'bold';
  showManipulationButtons.style.border = 'blue solid 2px';
  showManipulationButtons.addEventListener('click', () => {
    const card = document.getElementById(id);
    card.querySelectorAll('.manipulation').forEach((button) => {
      if (button.classList.contains('shown')) {
        button.classList.remove('shown');
        button.style.display = 'none';
      } else {
        button.classList.add('shown');
        button.style.display = 'block';
      }
    });
  });
  reactionsDiv.appendChild(showManipulationButtons);

  const numberOfReactions = reactions.length;
  for (let i = 0; i < numberOfReactions; i++) {
    const reactionHandlerBox = createReactionHandler(
      reactions[i],
      reactions,
      totalOperationsCount,
      id,
      global
    );
    reactionsDiv.appendChild(reactionHandlerBox);
  }

  const hr = document.createElement('hr');
  hr.style.width = '100%';
  reactionsDiv.appendChild(hr);

  const globalDiv = document.createElement('div');
  globalDiv.classList.add('global');
  globalDiv.style.display = 'flex';
  globalDiv.style.flexDirection = 'column';
  globalDiv.style.alignItems = 'center';
  globalDiv.style.justifyContent = 'center';
  globalDiv.style.display = 'none';
  const globalP = document.createElement('p');
  globalP.innerText = 'Reação Global: ';
  globalP.style.marginRight = '10px';
  globalDiv.appendChild(globalP);
  const globalReaction = createReactionHandler(global);
  globalDiv.appendChild(globalReaction);

  reactionsDiv.appendChild(globalDiv);
  return reactionsDiv;
}

function createReactionHandler(
  reaction,
  reactions,
  totalOperationsCount,
  id,
  globalReact
) {
  const reactionHandler = document.createElement('div');
  reactionHandler.style.display = 'flex';
  reactionHandler.style.alignItems = 'center';
  reactionHandler.style.justifyContent = 'center';

  const reactantsBox = document.createElement('div');
  reactantsBox.classList.add('reactants');
  reactantsBox.style.display = 'flex';
  reactantsBox.style.alignItems = 'center';
  reactantsBox.style.justifyContent = 'center';
  const reactantsSize = reaction.reactants.length;
  for (let i = 0; i < reactantsSize; i++) {
    const substanceAmount = document.createElement('div');
    substanceAmount.style.display = 'flex';
    substanceAmount.style.alignItems = 'center';
    substanceAmount.classList.add('reactant');
    if (reaction.reactants[i].cancel) {
      substanceAmount.classList.add('cancel');
    }
    const coefP = document.createElement('p');
    coefP.classList.add('coef');
    coefP.style.textAlign = 'center';
    coefP.innerText = reaction.reactants[i].coef;
    const substance = document.createElement('p');
    substance.style.textAlign = 'center';
    substance.innerHTML = reaction.reactants[i].substance;
    substance.classList.add('formula');
    substanceAmount.appendChild(coefP);
    substanceAmount.appendChild(substance);
    const plusOrArrow = document.createElement('p');
    plusOrArrow.style.textAlign = 'center';
    plusOrArrow.style.marginLeft = '5px';
    plusOrArrow.style.marginRight = '5px';
    if (i === reactantsSize - 1) {
      plusOrArrow.innerHTML = '&rarr;';
      plusOrArrow.classList.add('arrow');
      reactantsBox.appendChild(substanceAmount);
      reactionHandler.appendChild(reactantsBox);
      reactionHandler.appendChild(plusOrArrow);
    } else {
      plusOrArrow.innerHTML = '+';
      reactantsBox.appendChild(substanceAmount);
      reactantsBox.appendChild(plusOrArrow);
      reactionHandler.appendChild(reactantsBox);
    }
  }
  const productsBox = document.createElement('div');
  productsBox.classList.add('products');
  productsBox.style.display = 'flex';
  productsBox.style.alignItems = 'center';
  productsBox.style.justifyContent = 'center';
  const productsSize = reaction.products.length;
  for (let i = 0; i < productsSize; i++) {
    const substanceAmount = document.createElement('div');
    substanceAmount.style.display = 'flex';
    substanceAmount.style.alignItems = 'center';
    substanceAmount.classList.add('product');
    if (reaction.products[i].cancel) {
      substanceAmount.classList.add('cancel');
    }
    const coefP = document.createElement('p');
    coefP.style.textAlign = 'center';
    coefP.classList.add('coef');
    coefP.innerText = reaction.products[i].coef;
    const substance = document.createElement('p');
    substance.style.textAlign = 'center';
    substance.innerHTML = reaction.products[i].substance;
    substance.classList.add('formula');
    substanceAmount.appendChild(coefP);
    substanceAmount.appendChild(substance);
    productsBox.appendChild(substanceAmount);
    if (i !== productsSize - 1) {
      const plus = document.createElement('p');
      plus.style.textAlign = 'center';
      plus.style.marginLeft = '5px';
      plus.style.marginRight = '5px';
      plus.innerHTML = '+';
      productsBox.appendChild(plus);
    }
    reactionHandler.appendChild(productsBox);
  }
  const deltaH = document.createElement('p');
  deltaH.classList.add('deltaH');
  deltaH.style.textAlign = 'center';
  deltaH.innerHTML = `&Delta;H = ${
    reaction.deltaH === '?'
      ? '?'
      : reaction.deltaH.toFixed(2).toString().replace('.', ',')
  }`;
  deltaH.style.marginLeft = '5px';
  reactionHandler.appendChild(deltaH);
  if (reaction.operation.multiply || reaction.operation.reverse) {
    const divOperations = document.createElement('div');
    divOperations.style.display = 'flex';
    divOperations.style.alignItems = 'center';
    divOperations.style.justifyContent = 'center';
    divOperations.style.marginLeft = '5px';
    if (reaction.operation.reverse) {
      const reverseButton = document.createElement('button');
      reverseButton.classList.add('manipulation');
      reverseButton.style.display = 'none';
      reverseButton.innerText = 'Inv';
      reverseButton.style.fontWeight = 'bold';
      reverseButton.addEventListener('click', () => {
        reverseButton.classList.toggle('isActive');
        const arrow = reactionHandler.querySelector('.arrow');
        reactionHandler.querySelector('.arrow').remove();
        const reactants = reactionHandler.querySelector('.products');
        reactants.classList.remove('products');
        reactants.classList.add('reactants');
        const products = reactionHandler.querySelector('.reactants');
        products.classList.remove('reactants');
        products.classList.add('products');
        reactionHandler.querySelector('.products').remove();
        reactionHandler.querySelector('.reactants').remove();
        reactionHandler.prepend(products);
        reactionHandler.prepend(arrow);
        reactionHandler.prepend(reactants);
        reaction.deltaH = reaction.deltaH * -1;
        deltaH.innerHTML = `&Delta;H = ${reaction.deltaH
          .toFixed(2)
          .toString()
          .replace('.', ',')}`;
        reaction.operationsDone.reverse = !reaction.operationsDone.reverse;
        let count = 0;
        for (let reaction of reactions) {
          if (reaction.operation.multiply && reaction.operationsDone.multiply) {
            count += 1;
          }
          if (reaction.operation.reverse && reaction.operationsDone.reverse) {
            count += 1;
          }
        }
        const card = document.getElementById(id);
        const global = card.querySelector('.global');
        const dH = global.querySelector('.deltaH');
        if (count === totalOperationsCount) {
          global.style.display = 'flex';
          dH.innerHTML = `&Delta;H = ${globalReact.answer
            .toFixed(2)
            .toString()
            .replace('.', ',')}`;
          card.querySelectorAll('.cancel').forEach((subs) => {
            subs.style.color = 'black';
          });
        } else {
          global.style.display = 'none';
          dH.innerHTML = `&Delta;H = ${globalReact.deltaH}`;
          card.querySelectorAll('.cancel').forEach((subs) => {
            subs.style.color = 'white';
          });
        }
      });
      divOperations.appendChild(reverseButton);
    }
    if (reaction.operation.multiply) {
      const multiplyButton = document.createElement('button');
      multiplyButton.classList.add('manipulation');
      multiplyButton.style.display = 'none';
      multiplyButton.innerText = `x ${reaction.operation.multiply}`;
      multiplyButton.style.fontWeight = 'bold';
      multiplyButton.addEventListener('click', () => {
        multiplyButton.classList.toggle('isActive');
        if (reaction.operation.multiply && !reaction.operationsDone.multiply) {
          reactionHandler.querySelectorAll('.coef').forEach((coef) => {
            coef.innerText =
              Number(coef.innerText) * reaction.operation.multiply;
          });

          reaction.deltaH = reaction.deltaH * reaction.operation.multiply;
          deltaH.innerHTML = `&Delta;H = ${reaction.deltaH
            .toFixed(2)
            .toString()
            .replace('.', ',')}`;
          reaction.operationsDone.multiply = !reaction.operationsDone.multiply;
        } else if (
          reaction.operation.multiply &&
          reaction.operationsDone.multiply
        ) {
          reactionHandler.querySelectorAll('.coef').forEach((coef) => {
            coef.innerText =
              Number(coef.innerText) / reaction.operation.multiply;
          });
          reaction.deltaH = reaction.deltaH / reaction.operation.multiply;
          deltaH.innerHTML = `&Delta;H = ${reaction.deltaH
            .toFixed(2)
            .toString()
            .replace('.', ',')}`;
          reaction.operationsDone.multiply = !reaction.operationsDone.multiply;
        }
        let count = 0;
        for (let reaction of reactions) {
          if (reaction.operation.multiply && reaction.operationsDone.multiply) {
            count += 1;
          }
          if (reaction.operation.reverse && reaction.operationsDone.reverse) {
            count += 1;
          }
        }
        const card = document.getElementById(id);
        const global = card.querySelector('.global');
        const dH = global.querySelector('.deltaH');
        if (count === totalOperationsCount) {
          global.style.display = 'flex';
          dH.innerHTML = `&Delta;H = ${globalReact.answer
            .toFixed(2)
            .toString()
            .replace('.', ',')}`;
          card.querySelectorAll('.cancel').forEach((subs) => {
            subs.style.color = 'black';
          });
        } else {
          global.style.display = 'none';
          dH.innerHTML = `&Delta;H = ${globalReact.deltaH}`;
          card.querySelectorAll('.cancel').forEach((subs) => {
            subs.style.color = 'white';
          });
        }
      });
      divOperations.appendChild(multiplyButton);
    }
    reactionHandler.appendChild(divOperations);
  }
  return reactionHandler;
}

for (let question of questions) {
  const card = question.createCard();
  document.querySelector('main').appendChild(card);
}

document.querySelector(
  'footer'
).innerHTML = `<p>Copyright &copy; Danilo Morais Itokagi. All rights reserved. ${new Date().getFullYear()}</p>`;
