const questions = [
  {
    id: 1,
    question:
      'Realize a distribuição eletrônica do <sub>20</sub>Ca. Registre a configuração eletrônica da camada de valência.',
    answer: [
      { shell: '1s', e: 2, current: true },
      { shell: '2s', e: 2, current: false },
      { shell: '2p', e: 6, current: false },
      { shell: '3s', e: 2, current: false },
      { shell: '3p', e: 6, current: false },
      { shell: '4s', e: 2, current: false },
    ],
    createCard: function () {
      const card = createEletronicDistribution(
        this.id,
        this.question,
        this.answer
      );
      return card;
    },
  },
  {
    id: 2,
    question:
      'Realize a distribuição eletrônica do <sub>12</sub>Mg. Registre a configuração eletrônica da camada de valência.',
    answer: [
      { shell: '1s', e: 2, current: true },
      { shell: '2s', e: 2, current: false },
      { shell: '2p', e: 6, current: false },
      { shell: '3s', e: 2, current: false },
    ],
    createCard: function () {
      const card = createEletronicDistribution(
        this.id,
        this.question,
        this.answer
      );
      return card;
    },
  },
  {
    id: 3,
    question:
      'Realize a distribuição eletrônica do <sub>17</sub>Cl. Registre a configuração eletrônica da camada de valência.',
    answer: [
      { shell: '1s', e: 2, current: true },
      { shell: '2s', e: 2, current: false },
      { shell: '2p', e: 6, current: false },
      { shell: '3s', e: 2, current: false },
      { shell: '3p', e: 5, current: false },
    ],
    createCard: function () {
      const card = createEletronicDistribution(
        this.id,
        this.question,
        this.answer
      );
      return card;
    },
  },
  {
    id: 4,
    question:
      'Realize a distribuição eletrônica do <sub>19</sub>K. Registre a configuração eletrônica da camada de valência.',
    answer: [
      { shell: '1s', e: 2, current: true },
      { shell: '2s', e: 2, current: false },
      { shell: '2p', e: 6, current: false },
      { shell: '3s', e: 2, current: false },
      { shell: '3p', e: 6, current: false },
      { shell: '4s', e: 1, current: false },
    ],
    createCard: function () {
      const card = createEletronicDistribution(
        this.id,
        this.question,
        this.answer
      );
      return card;
    },
  },
  {
    id: 5,
    question:
      '<strong>(sem consultar tabela periódica)</strong> Faça a distribuição eletrônica para os elementos cálcio, cloro, magnésio e potássio e determine a localização de cada um deles na tabela periódica. Se a parte estiver correta, haverá indicação de OK',
    table: [
      { symbol: 'Ca', period: 4, group: 2, atomicNumber: 20 },
      { symbol: 'Cl', period: 3, group: 17, atomicNumber: 17 },
      { symbol: 'Mg', period: 3, group: 2, atomicNumber: 12 },
      { symbol: 'K', period: 4, group: 1, atomicNumber: 19 },
    ],

    createCard: function () {
      const card = createLocationCard(this.id, this.question, this.table);
      return card;
    },
  },
  {
    id: 6,
    question:
      '<strong>(sem consultar tabela periódica)</strong> Agora que você sabe a localização do cálcio, do cloro, do magnésio e do potássio na tabela periódica, insira o símbolo de cada um deles na tabela abaixo. Se a parte estiver correta, a caixinha ficará azul.',
    answer: {
      ca: { row: 3, col: 1 },
      cl: { row: 2, col: 16 },
      mg: { row: 2, col: 1 },
      k: { row: 3, col: 0 },
    },
    createCard: function () {
      const card = createPeriodicTableCard(this.id, this.question, this.answer);
      return card;
    },
  },
  {
    id: 7,
    question:
      '<strong>(sem consultar tabela periódica)</strong> Você já sabe a localização dos elementos Ca, Cl, Mg e K na tabela periódica. Ordene estes elementos de duas maneiras: ordem crescente de raio atômico e ordem crescente de energia de ionização. Se a parte estiver correta, a caixinha ficará azul.',
    radiusElements: ['Cl', 'Mg', 'Ca', 'K'],
    ioEnergyElements: ['K', 'Ca', 'Mg', 'Cl'],
    eletronegativityElements: ['K', 'Ca', 'Mg', 'Cl'],
    createCard: function () {
      const card = createPropertyOrderCard(
        this.id,
        this.question,
        this.radiusElements,
        this.ioEnergyElements,
        this.eletronegativityElements
      );
      return card;
    },
  },
  {
    id: 8,
    question:
      '<strong>(sem consultar tabela periódica)</strong> Cálcio, cloro, magnésio e potássio são elementos que fazem parte da relação dos “elementos essenciais” para o crescimento das plantas. Na tabela, são apresentadas duas propriedades, <strong>energia de ionização (EI, unidade KJ / mol) e raio atômico (R, unidade pm)</strong>, para esses quatro elementos, não necessariamente nessa ordem. Coloque o símbolo do elemento do lado da linha que o representa. Se a parte estiver correta, a caixinha ficará azul.',
    answerTable: [
      ['Símbolo', 'Elemento', 'EI', 'R'],
      ['Mg', 'I', 736, 160],
      ['Cl', 'II', 1255, 99],
      ['K', 'III', 418, 235],
      ['Ca', 'IV', 590, 197],
    ],
    createCard: function () {
      const card = createMatchTableCard(
        this.id,
        this.question,
        this.answerTable
      );
      return card;
    },
  },

  {
    id: 9,
    question:
      '<strong>(sem consultar tabela periódica)</strong> Indique a camada de valência dos seguintes elementos: <strong>Ba</strong> (grupo 2, 6<sup>o</sup> período), <strong>Br</strong> (grupo 17, 4<sup>o</sup> período), <strong>Se</strong> (grupo 16, 4<sup>o</sup> período), <strong>N</strong> (grupo 15, 2<sup>o</sup> período) e <strong>Si</strong> (grupo 14, 3<sup>o</sup> período). Se a parte estiver correta, a caixinha ficará azul.',
    elements: [
      {
        symbol: 'Ba',
        valenceShell: ['6s'],
        electrons: [2],
      },
      {
        symbol: 'Br',
        valenceShell: ['4s', '4p'],
        electrons: [2, 5],
      },
      {
        symbol: 'Se',
        valenceShell: ['4s', '4p'],
        electrons: [2, 4],
      },
      {
        symbol: 'N',
        valenceShell: ['2s', '2p'],
        electrons: [2, 3],
      },
      {
        symbol: 'Si',
        atomicNumber: 14,
        valenceShell: ['3s', '3p'],
        electrons: [2, 2],
      },
    ],
    createCard: function () {
      const card = createValenceShellCard(
        this.id,
        this.question,
        this.elements
      );
      return card;
    },
  },
  {
    id: 10,
    question:
      '<strong>(sem consultar tabela periódica)</strong> Na questão 9 você encontrou a configuração eletrônica da camada de valência dos elementos. Agora determine o número atômico deles: <strong>Ba</strong>, <strong>Br</strong>, <strong>Se</strong>, <strong>N</strong> e <strong>Si</strong>. Dica: você precisa fazer distribuição eletrônica. Se a parte estiver correta, a caixinha ficará azul.',
    elements: [
      {
        symbol: 'Ba',
        atomicNumber: 56,
      },
      {
        symbol: 'Br',
        atomicNumber: 35,
      },
      {
        symbol: 'Se',
        atomicNumber: 34,
      },
      {
        symbol: 'N',
        atomicNumber: 7,
      },
      {
        symbol: 'Si',
        atomicNumber: 14,
      },
    ],
    createCard: function () {
      const card = createAtomicNumberCard(
        this.id,
        this.question,
        this.elements
      );
      return card;
    },
  },
  {
    id: 11,
    question:
      '<strong>(sem consultar tabela periódica)</strong> Dentre os mesmos elementos das questões 9 e 10, <strong>Ba</strong>, <strong>Br</strong>, <strong>Se</strong>, <strong>N</strong> e <strong>Si</strong>, determine qual é o mais eletronegativo (Eletr.), qual possui maior energia de ionização (EI) e qual apresenta maior raio atômic (R). Para resolver esta questão você deve anotar a localização dos elementos na tabela periódica. Se a parte estiver correta, a caixinha ficará azul.',
    answer: { greatestR: 'Ba', highestEletr: 'N', highestIE: 'N' },
    createCard: function () {
      const card = createComparisonPropertyCard(
        this.id,
        this.question,
        this.answer
      );
      return card;
    },
  },
  {
    id: 12,
    question:
      '<strong>(sem consultar tabela periódica)</strong> Ordene os elementos <strong>B</strong> (grupo 13, 2<sup>o</sup> período), <strong>C</strong> (grupo 12, 2<sup>o</sup> período), <strong>N</strong> (grupo 15, 2<sup>o</sup> período), <strong>O</strong> (grupo 16, 2<sup>o</sup> período) e <strong>Al</strong> (grupo 13, 3<sup>o</sup> período). Se a parte estiver correta, a caixinha ficará azul.',
    radiusElements: null,
    ioEnergyElements: null,
    eletronegativityElements: ['Al', 'B', 'C', 'N', 'O'],
    createCard: function () {
      const card = createPropertyOrderCard(
        this.id,
        this.question,
        this.radiusElements,
        this.ioEnergyElements,
        this.eletronegativityElements
      );
      return card;
    },
  },
  {
    id: 13,
    question:
      '<strong>(sem consultar tabela periódica)</strong> A seguir estão configurações eletrônicas da camada de valência do cálcio, do iodo e do potássio: <strong>Ca - 4s<sup>2</sup> </strong>, <strong>I - 5s<sup>2</sup> 5p<sup>5</sup> </strong> e <strong>K - 4s<sup>1</sup></strong>. Determine a localização destes elementos na tabela periódica, informando o período e o grupo. Se a parte estiver correta, a caixinha ficará azul.',
    answer: {
      ca: { row: 3, col: 1 },
      i: { row: 4, col: 16 },
      k: { row: 3, col: 0 },
    },
    createCard: function () {
      const card = createPeriodicTableCard2(
        this.id,
        this.question,
        this.answer
      );
      return card;
    },
  },
  {
    id: 14,
    question:
      '<strong>(sem consultar tabela periódica)</strong> Determine o número atômico de cada elemento dadas as configurações eletrônicas na camada de valência: <strong>Ca - 4s<sup>2</sup> </strong>, <strong>I - 5s<sup>2</sup> 5p<sup>5</sup> </strong> e <strong>K - 4s<sup>1</sup></strong> Dica: você precisa fazer distribuição eletrônica. Se a parte estiver correta, a caixinha ficará azul.',
    elements: [
      {
        symbol: 'Ca',
        atomicNumber: 20,
      },
      {
        symbol: 'I',
        atomicNumber: 53,
      },
      {
        symbol: 'K',
        atomicNumber: 19,
      },
    ],
    createCard: function () {
      const card = createAtomicNumberCard(
        this.id,
        this.question,
        this.elements
      );
      return card;
    },
  },
  {
    id: 15,
    question:
      '<strong>(sem consultar tabela periódica)</strong> Na tabela são apresentados valores de <strong>energia de ionização (EI, unidade KJ / mol)</strong>, para Ca, I e K (mesmos elementos da questão 13). Associe corretamente cada um dos três elementos ao seu respectivo valor de EI, inserindo o símbolo. Se a parte estiver correta, a caixinha ficará azul.',
    answerTable: [
      ['Símbolo', 'EI'],
      ['K', 419],
      ['Ca', 590],
      ['I', 1008],
    ],
    createCard: function () {
      const card = createMatchTableCard(
        this.id,
        this.question,
        this.answerTable
      );
      card.querySelector('table').style.width = '40%';
      return card;
    },
  },
  {
    id: 16,
    question:
      '<strong>(PODE USAR TABELA PERIÓDICA)</strong> (UFPR - 2009) O gráfico a seguir corresponde à tendência da primeira energia de ionização em função do número atômico do elemento, do hidrogênio (Z = 1) ao radônio (Z = 86). A energia de ionização corresponde à energia necessária para remover um elétron do átomo neutro. Observe o gráfico e indique se cada afirmação é verdadeira (V) ou falsa (F). Se a parte estiver correta, a caixinha ficará azul.',
    img: './public/images/ei.png',
    statements: [
      {
        statement:
          'A energia de ionização tende a diminuir no grupo e aumentar no período.',
        evaluation: 'V',
      },
      {
        statement:
          'A energia de ionização do hidrogênio é maior que a do hélio.',
        evaluation: 'F',
      },
      {
        statement:
          'A energia de ionização do flúor é maior que a do argônio, do criptônio e do xenônio.',
        evaluation: 'V',
      },
      {
        statement:
          'As energias de ionização dos elementos do grupo 18 (gases nobres) são inferiores às energias de ionização dos metais de transição.',
        evaluation: 'F',
      },
    ],
    createCard: function () {
      const card = createEICard(
        this.id,
        this.question,
        this.img,
        this.statements
      );
      return card;
    },
  },
];

for (let q of questions) {
  const card = q.createCard();
  document.querySelector('main').appendChild(card);
}

document.querySelector(
  'footer'
).innerHTML = `<p>Copyright &copy; Danilo Morais Itokagi. All rights reserved. ${new Date().getFullYear()}</p>`;

function createEletronicDistribution(id, question, answer) {
  const divEletronic = document.createElement('div');
  divEletronic.classList.add('card');
  divEletronic.setAttribute('id', id);
  const questionP = document.createElement('p');
  questionP.innerHTML = `${id} - ${question}`;
  questionP.textAlign = 'justify';
  divEletronic.appendChild(questionP);

  const imgLinus = document.createElement('img');
  imgLinus.setAttribute('src', './public/images/linus-pauling-diagram.png');
  imgLinus.style.width = '200px';
  imgLinus.style.borderRadius = '10px';
  divEletronic.appendChild(imgLinus);

  const divDistr = document.createElement('div');
  divDistr.setAttribute('class', 'distribution');
  divDistr.style.marginTop = '10px';
  divDistr.style.display = 'flex';
  divDistr.style.alignItems = 'center';
  const divShell = document.createElement('div');
  divShell.style.marginLeft = '3px';
  divShell.classList.add('divShell');
  divShell.innerHTML =
    "<input type='text' class='shell'> <sup><input type=text class='electron'></sup>";
  divShell.querySelector('.shell').style.width = '20px';
  divShell.querySelector('.electron').style.width = '15px';
  divShell.querySelector('.shell').style.textAlign = 'center';
  divShell.querySelector('.electron').style.textAlign = 'center';
  divShell.addEventListener('keyup', () => {
    const card = document.getElementById(id);
    const divDistr = card.querySelector('.distribution');
    const divShell = card.querySelector('.divShell');
    const shellInput = divShell.querySelector('.shell');

    const electronInput = divShell.querySelector('.electron');
    for (let i = 0; i < answer.length; i++) {
      if (answer[i].current === true) {
        if (
          shellInput.value.trim() === answer[i].shell &&
          Number(electronInput.value.trim()) === answer[i].e
        ) {
          const pShell = document.createElement('p');
          pShell.innerHTML = `${shellInput.value}<sup>${electronInput.value}</sup>`;
          pShell.style.marginRight = '3px';
          divDistr.insertBefore(pShell, divShell);
          answer[i].current = false;
          if (i < answer.length - 1) {
            answer[i + 1].current = true;
          } else {
            divShell.remove();

            const pOK = document.createElement('p');
            pOK.innerHTML = 'ok';
            pOK.style.color = 'orange';
            pOK.style.fontSize = '1.2rem';
            pOK.style.fontWeight = 'bold';
            pOK.marginLeft = '5px';
            divDistr.appendChild(pOK);
          }
        }
      }
    }
  });

  divDistr.appendChild(divShell);
  divEletronic.appendChild(divDistr);
  return divEletronic;
}

function createLocationCard(id, question, table) {
  // .elements {
  //   display: flex;
  //   flex-direction: column;
  //   align-items: center;
  //   padding: 10px;
  // }
  // .element-container {
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  //   gap: 10px;
  // }
  // .card input {
  //   height: 10px;
  //   width: 20px;
  // }
  const card = document.createElement('card');
  card.classList.add('card');
  card.setAttribute('id', id);
  const questionP = document.createElement('p');
  questionP.innerHTML = `${id} - ${question}`;
  questionP.style.textAlign = 'justify';
  card.appendChild(questionP);
  const divElements = document.createElement('div');
  divElements.classList.add('elements');
  divElements.style.display = 'flex';
  divElements.style.flexDirection = 'column';
  divElements.style.alignItems = 'center';
  divElements.style.padding = '10px';
  for (let i = 0; i < table.length; i++) {
    const elementDiv = document.createElement('div');
    elementDiv.classList.add('element-container');
    elementDiv.style.display = 'flex';
    elementDiv.style.alignItems = 'center';
    elementDiv.style.justifyContent = 'center';
    elementDiv.style.gap = '10px';
    const elementP = document.createElement('p');
    elementP.classList.add('element');
    elementP.innerHTML = `<sub>${table[i].atomicNumber}</sub>${table[i].symbol} `;
    const elementPeriodP = document.createElement('p');
    elementPeriodP.textContent = 'Período: ';
    const elementPeriodInput = document.createElement('input');
    elementPeriodInput.style.height = '10px';
    elementPeriodInput.style.width = '20px';
    elementPeriodInput.style.textAlign = 'center';
    const elementGroupP = document.createElement('p');
    elementGroupP.textContent = 'Grupo: ';
    const elementGroupInput = document.createElement('input');
    elementGroupInput.style.height = '10px';
    elementGroupInput.style.width = '20px';
    elementGroupInput.style.textAlign = 'center';
    const responseP = document.createElement('p');
    responseP.classList.add('success');
    responseP.textContent = 'OK';
    responseP.style.color = 'orange';
    responseP.style.fontWeight = 'bold';
    responseP.style.display = 'none';
    elementPeriodInput.addEventListener('keyup', () => {
      if (
        Number(elementPeriodInput.value) === table[i].period &&
        Number(elementGroupInput.value) === table[i].group
      ) {
        responseP.style.display = 'block';
      } else {
        responseP.style.display = 'none';
      }
    });
    elementGroupInput.addEventListener('keyup', () => {
      if (
        Number(elementPeriodInput.value) === table[i].period &&
        Number(elementGroupInput.value) === table[i].group
      ) {
        responseP.style.display = 'block';
      } else {
        responseP.style.display = 'none';
      }
    });
    elementDiv.appendChild(elementP);
    elementDiv.appendChild(elementPeriodP);
    elementDiv.appendChild(elementPeriodInput);
    elementDiv.appendChild(elementGroupP);
    elementDiv.appendChild(elementGroupInput);
    elementDiv.appendChild(responseP);
    divElements.appendChild(elementDiv);
  }
  card.appendChild(divElements);
  return card;
}

function createPeriodicTableCard(id, question, answer) {
  const card = document.createElement('div');
  card.classList.add('card');
  const questionP = document.createElement('p');
  questionP.innerHTML = `${id} - ${question}`;
  questionP.style.textAlign = 'justify';
  card.appendChild(questionP);
  const table = createPeriodicTable(id, answer);
  card.appendChild(table);
  return card;
}

function createPeriodicTable(id, answer) {
  const table = document.createElement('table');
  table.classList.add('periodicTable');
  const columnIndexRow = document.createElement('tr');
  for (let k = 1; k <= 18; k++) {
    const td = document.createElement('td');
    td.textContent = k;
    td.style.textAlign = 'center';
    td.style.fontWeight = 'bold';
    td.style.fontSize = '0.7rem';
    td.style.backgroundColor = 'green';
    columnIndexRow.appendChild(td);
  }
  table.appendChild(columnIndexRow);
  const absent = [
    { row: 0, cols: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16] },
    { row: 1, cols: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
    { row: 2, cols: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
  ];

  for (let i = 0; i < 5; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < 18; j++) {
      if (absent[i] && absent[i].cols.includes(j)) {
        const td = document.createElement('td');
        td.setAttribute('class', 'cell');
        td.style.backgroundColor = 'green';
        row.appendChild(td);
      } else {
        const td = document.createElement('td');
        td.setAttribute('class', 'cell');
        const input = document.createElement('input');
        input.style.fontSize = '0.7rem';
        input.style.backgroundColor = 'white';
        input.style.width = '100%';
        input.style.heigth = '100%';
        input.style.textAlign = 'center';
        input.addEventListener('keyup', () => {
          if (i === answer.ca.row && j === answer.ca.col) {
            if (input.value === 'Ca') {
              input.classList.add('marked');
              input.style.backgroundColor = 'blue';
              input.style.color = 'white';
              input.style.fontWeight = 'bold';
            } else {
              input.style.backgroundColor = 'white';
              input.style.color = 'black';
              input.style.fontWeight = 'normal';
              input.classList.remove('marked');
            }
          } else if (i === answer.cl.row && j === answer.cl.col) {
            if (input.value === 'Cl') {
              input.classList.add('marked');
              input.style.backgroundColor = 'blue';
              input.style.color = 'white';
              input.style.fontWeight = 'bold';
            } else {
              input.style.backgroundColor = 'white';
              input.style.color = 'black';
              input.style.fontWeight = 'normal';
              input.classList.remove('marked');
            }
          } else if (i === answer.mg.row && j === answer.mg.col) {
            if (input.value === 'Mg') {
              input.classList.add('marked');
              input.style.backgroundColor = 'blue';
              input.style.color = 'white';
              input.style.fontWeight = 'bold';
            } else {
              input.style.backgroundColor = 'white';
              input.style.color = 'black';
              input.style.fontWeight = 'normal';
              input.classList.remove('marked');
            }
          } else if (i === answer.k.row && j === answer.k.col) {
            if (input.value === 'K') {
              input.classList.add('marked');
              input.style.backgroundColor = 'blue';
              input.style.color = 'white';
              input.style.fontWeight = 'bold';
            } else {
              input.style.backgroundColor = 'white';
              input.style.color = 'black';
              input.style.fontWeight = 'normal';
              input.classList.remove('marked');
            }
          }
          const markedInputs = document.querySelectorAll('.marked');
          if (markedInputs.length === 4) {
            alert(`Parabéns, você completou o problema ${id} !!!`);
          }
        });
        td.appendChild(input);
        row.appendChild(td);
      }
    }
    table.appendChild(row);
  }
  return table;
}

function createMatchTableCard(id, question, answerTable) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.setAttribute('id', id);
  const questionP = document.createElement('p');
  questionP.style.textAlign = 'justify';
  questionP.innerHTML = `${id} - ${question}`;
  card.appendChild(questionP);
  const table = document.createElement('table');
  table.classList.add('propertyTable');
  table.style.backgroundColor = 'grey';
  table.style.width = '80%';
  table.style.padding = '5px';
  table.style.borderRadius = '10px';
  for (let i = 0; i < answerTable.length; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < answerTable[0].length; j++) {
      if (i === 0) {
        const th = document.createElement('th');
        th.style.textAlign = 'center';
        th.textContent = answerTable[i][j];
        row.appendChild(th);
      } else {
        if (j === 0) {
          const td = document.createElement('td');
          const input = document.createElement('input');
          input.setAttribute('id', answerTable[i][j]);
          input.style.textAlign = 'center';
          input.style.backgroundCcolor = 'white';
          input.style.color = 'black';
          input.style.width = '25px';
          input.addEventListener('keyup', () => {
            const card = document.getElementById(id);
            const input = card.querySelector(`#${answerTable[i][j]}`);
            if (input.value === input.getAttribute('id')) {
              input.style.backgroundColor = 'blue';
              input.style.color = 'white';
              input.style.fontWeight = 'bold';
              input.classList.add('correctElement');
            } else {
              input.style.backgroundColor = 'white';
              input.style.color = 'black';
              input.style.fontWeight = 'normal';
              input.classList.remove('correctElement');
            }
            const inputs = card.querySelectorAll('.correctElement');
            if (inputs.length === answerTable.length - 1) {
              alert(
                `Parabéns, você completou o problema ${card.getAttribute(
                  'id'
                )}!!!`
              );
            }
          });
          td.style.textAlign = 'center';
          td.appendChild(input);
          row.appendChild(td);
        } else {
          const td = document.createElement('td');
          td.textContent = answerTable[i][j];
          td.style.textAlign = 'center';
          row.appendChild(td);
        }
      }
    }
    table.appendChild(row);
  }
  card.appendChild(table);
  return card;
}

function createValenceShellCard(id, question, elements) {
  const card = document.createElement('card');
  card.classList.add('card');
  const questionP = document.createElement('p');
  questionP.innerHTML = `${id} - ${question}`;
  questionP.style.textAlign = 'justify';
  card.appendChild(questionP);
  const greyBox = document.createElement('div');
  greyBox.style.backgroundColor = 'grey';
  greyBox.style.borderRadius = '10px';
  greyBox.style.width = '80%';
  greyBox.style.display = 'flex';
  greyBox.style.flexDirection = 'column';
  greyBox.style.alignItems = 'center';
  const cvP = document.createElement('p');
  cvP.textContent = 'Camada de Valência';
  greyBox.appendChild(cvP);
  for (let element of elements) {
    const valenceShellDiv = document.createElement('div');
    valenceShellDiv.style.display = 'flex';
    valenceShellDiv.style.alignItems = 'center';
    const symbolP = document.createElement('p');
    symbolP.textContent = `${element.symbol}:`;
    valenceShellDiv.appendChild(symbolP);
    const responseP = document.createElement('p');
    responseP.textContent = 'OK';
    responseP.style.color = 'orange';
    responseP.style.fontSize = 'bold';
    responseP.style.marginLeft = '5px';
    responseP.style.display = 'none';
    for (let i = 0; i < element.valenceShell.length; i++) {
      const shellDiv = document.createElement('div');
      shellDiv.style.marginLeft = '5px';
      shellDiv.innerHTML = `<input type=text class=${element.valenceShell[i]}> <sup><input type=text class=${element.electrons[i]}></sup>`;
      const inputs = shellDiv.querySelectorAll('input');
      inputs[0].style.width = '25px';
      inputs[1].style.width = '20px';
      inputs[1].style.height = '12px';
      inputs[0].style.textAlign = 'center';
      inputs[1].style.textAlign = 'center';
      valenceShellDiv.appendChild(shellDiv);
      inputs[0].addEventListener('keyup', () => {
        if (inputs[0].value === element.valenceShell[i]) {
          inputs[0].style.backgroundColor = 'blue';
          inputs[0].style.color = 'white';
          inputs[0].style.fontWeight = 'bold';
          inputs[0].classList.add('mark');
        } else {
          inputs[0].style.backgroundColor = 'white';
          inputs[0].style.color = 'black';
          inputs[0].style.fontWeight = 'normal';
          inputs[0].classList.remove('mark');
        }
      });
      inputs[1].addEventListener('keyup', () => {
        if (Number(inputs[1].value) === element.electrons[i]) {
          inputs[1].style.backgroundColor = 'blue';
          inputs[1].style.color = 'white';
          inputs[1].style.fontWeight = 'bold';
          inputs[1].classList.add('mark');
        } else {
          inputs[1].style.backgroundColor = 'white';
          inputs[1].style.color = 'black';
          inputs[1].style.fontWeight = 'normal';
          inputs[1].classList.remove('mark');
        }
      });
    }
    valenceShellDiv.appendChild(responseP);
    valenceShellDiv.addEventListener('keyup', () => {
      const valenceShellInputs = valenceShellDiv.querySelectorAll('.mark');
      if (
        valenceShellInputs.length ===
        element.valenceShell.length + element.electrons.length
      ) {
        responseP.style.display = 'block';
      } else {
        responseP.style.display = 'none';
      }
    });
    greyBox.appendChild(valenceShellDiv);
  }
  card.appendChild(greyBox);
  return card;
}

function createAtomicNumberCard(id, question, elements) {
  const card = document.createElement('div');
  card.classList.add('card');
  const questionP = document.createElement('p');
  questionP.innerHTML = `${id} - ${question}`;
  questionP.style.textAlign = 'justify';
  card.appendChild(questionP);
  const greyBoxZ = document.createElement('div');
  greyBoxZ.style.display = 'flex';
  greyBoxZ.style.flexDirection = 'column';
  greyBoxZ.style.alignItems = 'center';
  greyBoxZ.style.width = '80%';
  greyBoxZ.style.borderRadius = '10px';
  for (let element of elements) {
    const divElement = document.createElement('div');
    divElement.style.display = 'flex';
    divElement.style.alignItems = 'center';
    divElement.innerHTML = `<p> ${element.symbol}:</p> <input type=text class=${element.atomicNumber}>`;
    const response = document.createElement('p');
    response.textContent = 'OK';
    response.style.textAlign = 'center';
    response.style.marginLeft = '5px';
    response.style.color = 'orange';
    response.style.display = 'none';
    divElement.append(response);
    const input = divElement.querySelector('input');
    input.style.textAlign = 'center';
    input.addEventListener('keyup', () => {
      if (Number(input.value) === element.atomicNumber) {
        input.style.backgroundColor = 'blue';
        input.style.color = 'white';
        input.style.fontWeight = 'bold';
        response.style.display = 'block';
      } else {
        input.style.backgroundColor = 'white';
        input.style.color = 'black';
        input.style.fontWeight = 'normal';
        response.style.display = 'none';
      }
    });
    input.style.marginLeft = '10px';
    input.style.width = '25px';

    greyBoxZ.appendChild(divElement);
  }
  card.appendChild(greyBoxZ);

  return card;
}

function createComparisonPropertyCard(id, question, answer) {
  const card = document.createElement('card');
  card.classList.add('card');
  const questionP = document.createElement('p');
  questionP.innerHTML = `${id} - ${question}`;
  questionP.style.textAlign = 'justify';
  card.appendChild(questionP);
  const greatestRDiv = document.createElement('div');
  greatestRDiv.style.display = 'flex';
  greatestRDiv.style.alignItems = 'center';
  greatestRDiv.innerHTML = `<p>Maior R: </p> <input type="text" id=${answer.greatestR}>`;
  const greatestRInput = greatestRDiv.querySelector('input');
  greatestRInput.style.marginLeft = '5px';
  greatestRInput.style.width = '25px';
  greatestRInput.style.height = '15px';
  greatestRInput.style.textAlign = 'center';
  const greatestRResponse = document.createElement('p');
  greatestRResponse.textContent = 'OK';
  greatestRResponse.style.marginLeft = '5px';
  greatestRResponse.style.color = 'orange';
  greatestRResponse.style.fontWeight = 'bold';
  greatestRResponse.style.display = 'none';
  greatestRDiv.appendChild(greatestRResponse);
  greatestRInput.addEventListener('keyup', () => {
    if (greatestRInput.value === greatestRInput.getAttribute('id')) {
      greatestRInput.style.backgroundColor = 'blue';
      greatestRInput.style.color = 'white';
      greatestRInput.style.fontSize = 'bold';
      greatestRResponse.style.display = 'block';
    } else {
      greatestRInput.style.backgroundColor = 'white';
      greatestRInput.style.color = 'black';
      greatestRInput.style.fontSize = 'normal';
      greatestRResponse.style.display = 'none';
    }
  });
  card.appendChild(greatestRDiv);

  const highestEletrDiv = document.createElement('div');
  highestEletrDiv.style.display = 'flex';
  highestEletrDiv.style.alignItems = 'center';
  highestEletrDiv.innerHTML = `<p>Mais Eletr.: </p> <input type="text" id=${answer.highestEletr}>`;
  const highestEletrInput = highestEletrDiv.querySelector('input');
  highestEletrInput.style.marginLeft = '5px';
  highestEletrInput.style.width = '25px';
  highestEletrInput.style.height = '15px';
  highestEletrInput.style.textAlign = 'center';
  const highestEletrResponse = document.createElement('p');
  highestEletrResponse.textContent = 'OK';
  highestEletrResponse.style.marginLeft = '5px';
  highestEletrResponse.style.color = 'orange';
  highestEletrResponse.style.fontWeight = 'bold';
  highestEletrResponse.style.display = 'none';
  highestEletrDiv.appendChild(highestEletrResponse);
  highestEletrInput.addEventListener('keyup', () => {
    if (highestEletrInput.value === highestEletrInput.getAttribute('id')) {
      highestEletrInput.style.backgroundColor = 'blue';
      highestEletrInput.style.color = 'white';
      highestEletrInput.style.fontSize = 'bold';
      highestEletrResponse.style.display = 'block';
    } else {
      highestEletrInput.style.backgroundColor = 'white';
      highestEletrInput.style.color = 'black';
      highestEletrInput.style.fontSize = 'normal';
      highestEletrResponse.style.display = 'none';
    }
  });
  card.appendChild(highestEletrDiv);

  const highestIEDiv = document.createElement('div');
  highestIEDiv.style.display = 'flex';
  highestIEDiv.style.alignItems = 'center';
  highestIEDiv.innerHTML = `<p>Maior EI: </p> <input type="text" id=${answer.highestIE}>`;
  const highestIEInput = highestIEDiv.querySelector('input');
  highestIEInput.style.marginLeft = '5px';
  highestIEInput.style.width = '25px';
  highestIEInput.style.height = '15px';
  highestIEInput.style.textAlign = 'center';
  const highestIEResponse = document.createElement('p');
  highestIEResponse.textContent = 'OK';
  highestIEResponse.style.marginLeft = '5px';
  highestIEResponse.style.color = 'orange';
  highestIEResponse.style.fontWeight = 'bold';
  highestIEResponse.style.display = 'none';
  highestIEDiv.appendChild(highestIEResponse);
  highestIEInput.addEventListener('keyup', () => {
    if (highestIEInput.value === highestIEInput.getAttribute('id')) {
      highestIEInput.style.backgroundColor = 'blue';
      highestIEInput.style.color = 'white';
      highestIEInput.style.fontSize = 'bold';
      highestIEResponse.style.display = 'block';
    } else {
      highestIEInput.style.backgroundColor = 'white';
      highestIEInput.style.color = 'black';
      highestIEInput.style.fontSize = 'normal';
      highestIEResponse.style.display = 'none';
    }
  });
  card.appendChild(highestIEDiv);
  return card;
}

function createPropertyOrderCard(
  id,
  question,
  radiusElements,
  ioEnergyElements,
  eletronegativityElements
) {
  const card = document.createElement('div');
  card.setAttribute('id', id);
  card.classList.add('card');
  card.style.display = 'flex';
  card.style.flexDirection = 'column';
  card.style.alignItems = 'center';
  const questionP = document.createElement('p');
  questionP.innerHTML = `${id} - ${question}`;
  questionP.style.textAlign = 'justify';
  card.appendChild(questionP);

  if (radiusElements) {
    const radiusContainer = document.createElement('div');
    radiusContainer.classList.add('radius-container');
    radiusContainer.style.display = 'flex';
    radiusContainer.style.flexDirection = 'column';
    radiusContainer.style.alignItems = 'center';
    radiusContainer.style.backgroundColor = 'grey';
    radiusContainer.style.borderRadius = '10px';
    radiusContainer.style.width = '70%';
    radiusContainer.style.padding = '5px';

    const radiusP = document.createElement('p');
    radiusP.textContent = 'Ordem Crescente de Raio Atômico:';
    radiusP.textAlign = 'center';
    const radiusDiv = document.createElement('div');
    radiusDiv.style.display = 'flex';
    radiusDiv.style.alignItems = 'center';
    const radiusResponse = document.createElement('p');
    radiusResponse.classList.add('radiusResponse');
    radiusResponse.textContent = 'OK';
    radiusResponse.style.color = 'orange';
    radiusResponse.style.fontWeight = 'bold';
    radiusResponse.style.margin = '5px';
    radiusResponse.style.display = 'none';
    for (let element of radiusElements) {
      const inputElement = document.createElement('input');
      inputElement.setAttribute('id', element);
      inputElement.style.width = '20px';
      inputElement.style.height = '15px';
      inputElement.style.textAlign = 'center';
      radiusDiv.appendChild(inputElement);
      if (element !== radiusElements[radiusElements.length - 1]) {
        const greaterP = document.createElement('p');
        greaterP.style.margin = '5px';
        greaterP.textContent = '<';
        radiusDiv.appendChild(greaterP);
      }
      inputElement.addEventListener('keyup', () => {
        if (inputElement.value === inputElement.getAttribute('id')) {
          inputElement.classList.add('radiusMarked');
          inputElement.style.backgroundColor = 'blue';
          inputElement.style.color = 'white';
          inputElement.style.fontWeight = 'bold';
        } else {
          inputElement.style.backgroundColor = 'white';
          inputElement.style.color = 'black';
          inputElement.style.fontWeight = 'normal';
          inputElement.classList.remove('marked');
        }
        const card = document.getElementById(id);
        const inputs = card.querySelectorAll('.radiusMarked');
        if (inputs.length === radiusElements.length) {
          radiusResponse.style.display = 'block';
        } else {
          radiusResponse.style.display = 'none';
        }
      });
    }

    radiusDiv.appendChild(radiusResponse);
    radiusContainer.appendChild(radiusP);
    radiusContainer.appendChild(radiusDiv);
    card.appendChild(radiusContainer);
  }

  if (ioEnergyElements) {
    const ioEnergyContainer = document.createElement('div');
    ioEnergyContainer.classList.add('ioEnergy-container');
    ioEnergyContainer.style.display = 'flex';
    ioEnergyContainer.style.flexDirection = 'column';
    ioEnergyContainer.style.alignItems = 'center';
    ioEnergyContainer.style.backgroundColor = 'grey';
    ioEnergyContainer.style.borderRadius = '10px';
    ioEnergyContainer.style.width = '70%';
    ioEnergyContainer.style.padding = '5px';
    ioEnergyContainer.style.margin = '10px';

    const ioEnergyP = document.createElement('p');
    ioEnergyP.textContent = 'Ordem Crescente de Energia de Ionização:';
    ioEnergyP.style.textAlign = 'center';
    const ioEnergyDiv = document.createElement('div');
    ioEnergyDiv.style.display = 'flex';
    ioEnergyDiv.style.alignItems = 'center';
    const ioEnergyResponse = document.createElement('p');
    ioEnergyResponse.classList.add('ioEnergyResponse');
    ioEnergyResponse.textContent = 'OK';
    ioEnergyResponse.style.color = 'orange';
    ioEnergyResponse.style.fontWeight = 'bold';
    ioEnergyResponse.style.margin = '5px';
    ioEnergyResponse.style.display = 'none';

    for (let element of ioEnergyElements) {
      const inputElement = document.createElement('input');
      inputElement.setAttribute('id', element);
      inputElement.style.width = '20px';
      inputElement.style.height = '15px';
      inputElement.style.textAlign = 'center';
      ioEnergyDiv.appendChild(inputElement);
      if (element !== ioEnergyElements[ioEnergyElements.length - 1]) {
        const greaterP = document.createElement('p');
        greaterP.style.margin = '5px';
        greaterP.textContent = '<';
        ioEnergyDiv.appendChild(greaterP);
      }
      inputElement.addEventListener('keyup', () => {
        if (inputElement.value === inputElement.getAttribute('id')) {
          inputElement.classList.add('ioEnergyMarked');
          inputElement.style.backgroundColor = 'blue';
          inputElement.style.color = 'white';
          inputElement.style.fontWeight = 'bold';
        } else {
          inputElement.style.backgroundColor = 'white';
          inputElement.style.color = 'black';
          inputElement.style.fontWeight = 'normal';
          inputElement.classList.remove('marked');
        }
        const card = document.getElementById(id);
        const inputs = card.querySelectorAll('.ioEnergyMarked');
        if (inputs.length === ioEnergyElements.length) {
          ioEnergyResponse.style.display = 'block';
        } else {
          ioEnergyResponse.style.display = 'none';
        }
      });
    }

    ioEnergyDiv.appendChild(ioEnergyResponse);
    ioEnergyContainer.appendChild(ioEnergyP);
    ioEnergyContainer.appendChild(ioEnergyDiv);
    card.appendChild(ioEnergyContainer);
  }

  if (eletronegativityElements) {
    const eletronegativityContainer = document.createElement('div');
    eletronegativityContainer.classList.add('ioEnergy-container');
    eletronegativityContainer.style.display = 'flex';
    eletronegativityContainer.style.flexDirection = 'column';
    eletronegativityContainer.style.alignItems = 'center';
    eletronegativityContainer.style.backgroundColor = 'grey';
    eletronegativityContainer.style.borderRadius = '10px';
    eletronegativityContainer.style.width = '70%';
    eletronegativityContainer.style.padding = '5px';

    const eletronegativityP = document.createElement('p');
    eletronegativityP.textContent = 'Ordem Crescente de Eletronegatividade:';
    eletronegativityP.style.textAlign = 'center';
    const eletronegativityDiv = document.createElement('div');
    eletronegativityDiv.style.display = 'flex';
    eletronegativityDiv.style.alignItems = 'center';
    const eletronegativityResponse = document.createElement('p');
    eletronegativityResponse.classList.add('ioEnergyResponse');
    eletronegativityResponse.textContent = 'OK';
    eletronegativityResponse.style.color = 'orange';
    eletronegativityResponse.style.fontWeight = 'bold';
    eletronegativityResponse.style.margin = '5px';
    eletronegativityResponse.style.display = 'none';

    for (let element of eletronegativityElements) {
      const inputElement = document.createElement('input');
      inputElement.setAttribute('id', element);
      inputElement.style.width = '20px';
      inputElement.style.height = '15px';
      inputElement.style.textAlign = 'center';
      eletronegativityDiv.appendChild(inputElement);
      if (
        element !==
        eletronegativityElements[eletronegativityElements.length - 1]
      ) {
        const greaterP = document.createElement('p');
        greaterP.style.margin = '5px';
        greaterP.textContent = '<';
        eletronegativityDiv.appendChild(greaterP);
      }
      inputElement.addEventListener('keyup', () => {
        if (inputElement.value === inputElement.getAttribute('id')) {
          inputElement.classList.add('eletronegativityMarked');
          inputElement.style.backgroundColor = 'blue';
          inputElement.style.color = 'white';
          inputElement.style.fontWeight = 'bold';
        } else {
          inputElement.style.backgroundColor = 'white';
          inputElement.style.color = 'black';
          inputElement.style.fontWeight = 'normal';
          inputElement.classList.remove('marked');
        }
        const card = document.getElementById(id);
        const inputs = card.querySelectorAll('.eletronegativityMarked');
        if (inputs.length === eletronegativityElements.length) {
          eletronegativityResponse.style.display = 'block';
        } else {
          eletronegativityResponse.style.display = 'none';
        }
      });
    }

    eletronegativityDiv.appendChild(eletronegativityResponse);
    eletronegativityContainer.appendChild(eletronegativityP);
    eletronegativityContainer.appendChild(eletronegativityDiv);
    card.appendChild(eletronegativityContainer);
  }

  return card;
}

function createPeriodicTableCard2(id, question, answer) {
  const card = document.createElement('div');
  card.classList.add('card');
  const questionP = document.createElement('p');
  questionP.innerHTML = `${id} - ${question}`;
  questionP.style.textAlign = 'justify';
  card.appendChild(questionP);
  const table = createPeriodicTable2(id, answer);
  card.appendChild(table);
  return card;
}

function createPeriodicTable2(id, answer) {
  const table = document.createElement('table');
  table.classList.add('periodicTable');
  const columnIndexRow = document.createElement('tr');
  for (let k = 1; k <= 18; k++) {
    const td = document.createElement('td');
    td.textContent = k;
    td.style.textAlign = 'center';
    td.style.fontWeight = 'bold';
    td.style.fontSize = '0.7rem';
    td.style.backgroundColor = 'green';
    columnIndexRow.appendChild(td);
  }
  table.appendChild(columnIndexRow);
  const absent = [
    { row: 0, cols: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16] },
    { row: 1, cols: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
    { row: 2, cols: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
  ];

  for (let i = 0; i < 5; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < 18; j++) {
      if (absent[i] && absent[i].cols.includes(j)) {
        const td = document.createElement('td');
        td.setAttribute('class', 'cell');
        td.style.backgroundColor = 'green';
        row.appendChild(td);
      } else {
        const td = document.createElement('td');
        td.setAttribute('class', 'cell');
        const input = document.createElement('input');
        input.style.fontSize = '0.7rem';
        input.style.backgroundColor = 'white';
        input.style.width = '100%';
        input.style.heigth = '100%';
        input.style.textAlign = 'center';
        input.addEventListener('keyup', () => {
          if (i === answer.ca.row && j === answer.ca.col) {
            if (input.value === 'Ca') {
              input.classList.add('marked');
              input.style.backgroundColor = 'blue';
              input.style.color = 'white';
              input.style.fontWeight = 'bold';
            } else {
              input.style.backgroundColor = 'white';
              input.style.color = 'black';
              input.style.fontWeight = 'normal';
              input.classList.remove('marked');
            }
          } else if (i === answer.i.row && j === answer.i.col) {
            if (input.value === 'I') {
              input.classList.add('marked');
              input.style.backgroundColor = 'blue';
              input.style.color = 'white';
              input.style.fontWeight = 'bold';
            } else {
              input.style.backgroundColor = 'white';
              input.style.color = 'black';
              input.style.fontWeight = 'normal';
              input.classList.remove('marked');
            }
          } else if (i === answer.k.row && j === answer.k.col) {
            if (input.value === 'K') {
              input.classList.add('marked');
              input.style.backgroundColor = 'blue';
              input.style.color = 'white';
              input.style.fontWeight = 'bold';
            } else {
              input.style.backgroundColor = 'white';
              input.style.color = 'black';
              input.style.fontWeight = 'normal';
              input.classList.remove('marked');
            }
          }
          const markedInputs = document.querySelectorAll('.marked');
          if (markedInputs.length === 3) {
            alert(`Parabéns, você completou o problema ${id} !!!`);
          }
        });
        td.appendChild(input);
        row.appendChild(td);
      }
    }
    table.appendChild(row);
  }
  return table;
}

function createEICard(id, question, image, stmts) {
  const card = document.createElement('div');
  card.classList.add('card');
  const questionP = document.createElement('p');
  questionP.innerHTML = `${id} - ${question}`;
  card.appendChild(questionP);
  questionP.style.textAlign = 'justify';
  const img = document.createElement('img');
  img.setAttribute('src', `${image}`);
  card.appendChild(img);
  img.style.width = '300px';
  img.style.borderRadius = '10px';
  const statements = document.createElement('div');
  statements.style.display = 'flex';
  statements.style.flexDirection = 'column';
  statements.style.alignItems = 'flex-start';

  for (let i = 0; i < stmts.length; i++) {
    const statement = document.createElement('div');
    statement.style.display = 'flex';
    statement.style.alignItems = 'center';
    const input = document.createElement('input');
    input.style.width = '25px';
    input.style.height = '15px';
    input.style.backgroundColor = 'white';
    input.style.color = 'black';
    input.style.marginRight = '10px';
    input.style.textAlign = 'center';
    const phrase = document.createElement('p');
    phrase.textContent = stmts[i].statement;
    phrase.style.textAlign = 'justify';
    input.classList.add(stmts[i].evaluation);
    input.addEventListener('keyup', () => {
      if (input.className === input.value) {
        input.style.backgroundColor = 'blue';
        input.style.color = 'white';
        input.style.fontweight = 'bold';
        input.setAttribute('id', 'marked');
      } else {
        input.style.backgroundColor = 'white';
        input.style.color = 'black';
        input.style.fontweight = 'normal';
        input.removeAttribute('id');
      }
      const inputs = card.querySelectorAll('#marked');
      if (inputs.length === stmts.length) {
        alert(`Parabéns, você completou corretamente o exercício ${id} !!!`);
      }
    });
    statement.appendChild(input);
    statement.appendChild(phrase);
    statements.appendChild(statement);
  }
  card.appendChild(statements);

  return card;
}
