{
  id: 1,
  question:
    'Dadas as equações química abaixo, determine a variação de entalpia para o processo de mudança de estado físico da água, do estado gasoso para o está líquido.',
  reactions: [
    {
      global: false,
      reactants: [
        { substance: 'H<sub>2</sub>(g)', coef: 1 },
        { substance: 'O<sub>2</sub>(g)', coef: 0.5 },
      ],
      products: [{ substance: 'H<sub>2</sub>O(l)', coef: 1 }],
      deltaH: -68.3,
      operations: null,
    },
    {
      global: false,
      reactants: [
        { substance: 'H<sub>2</sub>(g)', coef: 1 },
        { substance: 'O<sub>2</sub>(g)', coef: 0.5 },
      ],
      products: [{ substance: 'H<sub>2</sub>O(v)', coef: 1 }],
      deltaH: -57.8,
    },
  ],
  globalReaction: {
    global: true,
    reactants: [{ substance: 'H<sub>2</sub>O(v)', coef: 1 }],
    products: [{ substance: 'H<sub>2</sub>O(l)', coef: 1 }],
    deltaH: '?',
    unit: 'kcal / mol',
  },
  currentGlobalReaction: {
    global: true,
    reactants: [],
    products: [],
    deltaH: '?',
    unit: 'kcal / mol',
  },
  createCard: function () {
    const card = document.createElement('card');
    card.classList.add('card');
    const questionP = document.createElement('p');
    questionP.style.textAlign = 'justify';
    questionP.innerHTML = `${this.id} - ${this.question}`;
    card.appendChild(questionP);
    const globalReaction = createReactionHandler(this.globalReaction);
    card.appendChild(globalReaction);
    const reactionsBox = createListOfReactionsBox(
      this.reactions,
      this.globalReaction.unit,
      this.currentGlobalReaction
    );
    card.appendChild(reactionsBox);
    return card;
  },
},
];