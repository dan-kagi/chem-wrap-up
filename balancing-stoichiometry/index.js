const questions = [
  {
    id: 1,
    question:
      'Realize o balanceamento da equação química abaixo e determine a quantidade de gás carbônico formada a partir da combustão de 0,45 mol de etanol.',
    substances: [
      {
        reagents: [
          { name: 'ethanol', formula: 'C2H6O', coef: 1 },
          { name: 'oxygen', formula: 'O2', coef: 3 },
        ],
      },
      {
        products: [
          { name: 'carbonDioxide', formula: 'CO2', coef: 2 },
          { name: 'water', formula: 'H2O', coef: 3 },
        ],
      },
    ],
    coefs: [1, 3, 2, 3],
    asking: [{ name: 'carbonDioxide', substance: 'CO2', answer: 0.9 }],
    isBalanced: false,
  },
  {
    id: 2,
    question:
      'A equação química abaixo não está balanceada. Realize o balanceamento e calcule a quantidade de peróxido de hidrogênio que deve ser decomposta na formação de 3 mol de oxigênio molecular. Para esta decomposição, determine ainda a quantidade de água formada.',
    substances: [
      {
        reagents: [{ name: 'hydrogenPeroxide', formula: 'H2O2', coef: 2 }],
      },
      {
        products: [
          { name: 'molecularOxygen', formula: 'O2', coef: 1 },
          { name: 'water', formula: 'H2O', coef: 2 },
        ],
      },
    ],
    coefs: [2, 1, 2],
    asking: [
      { name: 'hydrogenPeroxide', substance: 'H2O2', answer: 6.0 },
      { name: 'water', substance: 'H2O', answer: 6.0 },
    ],
    isBalanced: false,
  },
  {
    id: 3,
    question:
      'O carbonato de sódio reage com ácido clorídrico formando cloreto de sódio, gás carbônico e água, como mostrado na equação química não balanceada abaixo. Em um experimento 5 mol de ácido clorídrico reagiram, logo qual foi a quantidade de carbonato de sódio consumida e a quantidade de gás carbônico formada?',
    substances: [
      {
        reagents: [
          { name: 'sodiumCarbonate', formula: 'Na2CO3', coef: 1 },
          { name: 'hidrogenChloride', formula: 'HCl', coef: 2 },
        ],
      },
      {
        products: [
          { name: 'sodiumChloride', formula: 'NaCl', coef: 2 },
          { name: 'carbonDioxide', formula: 'CO2', coef: 1 },
          { name: 'water', formula: 'H2O', coef: 1 },
        ],
      },
    ],
    coefs: [1, 2, 2, 1, 1],
    asking: [
      { name: 'sodiumCarbonate', substance: 'Na2CO3', answer: 2.5 },
      { name: 'carbonDioxide', substance: 'CO2', answer: 2.5 },
    ],
    isBalanced: false,
  },
  {
    id: 4,
    question:
      'Em uma reação do carbonato de férrico com ácido sulfúrico houve liberação de 3,6 mol de gás carbônico. Portanto nesta reação quais foram as quantidades de carbonato férrico e de ácido sulfúrico que reagiram? E qual a quantidade de água formada?',
    substances: [
      {
        reagents: [
          { name: 'ironCarbonate', formula: 'Fe2(CO3)3', coef: 1 },
          { name: 'sulfuricAcid', formula: 'H2SO4', coef: 3 },
        ],
      },
      {
        products: [
          { name: 'ironSulphate', formula: 'Fe2(SO4)3', coef: 1 },
          { name: 'water', formula: 'H2O', coef: 3 },
          { name: 'carbonDioxide', formula: 'CO2', coef: 3 },
        ],
      },
    ],
    coefs: [1, 3, 1, 3, 3],
    asking: [
      { name: 'ironCarbonate', substance: 'Fe2(CO3)3', answer: 1.2 },
      { name: 'sulfuricAcid', substance: 'H2SO4', answer: 3.6 },
      { name: 'water', substance: 'H2O', answer: 3.6 },
    ],
    isBalanced: false,
  },
  {
    id: 5,
    question:
      'O alumínio reage com o ácido sulfúrico para produzir sulfato de alumínio e gás hidrogênio. Qual é a quantidade de ácido sulfúrico em mol necessária para reagir com 18 mol de alumínio? Nesta reação qual será a quantidade de sulfato de alumínio formada?',
    substances: [
      {
        reagents: [
          { name: 'aluminum', formula: 'Al', coef: 2 },
          { name: 'sulfuricAcid', formula: 'H2SO4', coef: 3 },
        ],
      },
      {
        products: [
          { name: 'aluminiumSulphate', formula: 'Al2(SO4)3', coef: 1 },
          { name: 'hydrogenMolecular', formula: 'H2', coef: 3 },
        ],
      },
    ],
    coefs: [2, 3, 1, 3],
    asking: [
      { name: 'sulfuricAcid', substance: 'H2SO4', answer: 27 },
      { name: 'aluminiumSulphate', substance: 'Al2(SO4)3', answer: 9 },
    ],
    isBalanced: false,
  },
];

function createCard(question) {
  //card creation
  const card = document.createElement('div');
  card.setAttribute('class', 'card');
  card.setAttribute('id', question.id);
  //paragraph creation
  const p = document.createElement('p');
  p.textContent = question.id + ' - ' + question.question;
  card.appendChild(p);
  //div balanceamento
  const balDiv = document.createElement('div');
  balDiv.setAttribute('class', 'balanceamento');
  //form balanceamento
  const balForm = document.createElement('form');
  balForm.setAttribute('id', 'balanceamento');

  const amountOfReagents = question.substances[0].reagents.length;
  for (let i = 0; i < amountOfReagents; i++) {
    const input = document.createElement('input');
    input.setAttribute('name', question.substances[0].reagents[i].name);
    input.setAttribute('id', question.substances[0].reagents[i].name);
    balForm.appendChild(input);
    const label = document.createElement('label');
    label.setAttribute('for', question.substances[0].reagents[i].name);
    if (i === amountOfReagents - 1) {
      label.innerHTML =
        changeToSubscript(question.substances[0].reagents[i].formula) +
        ' &rarr; ';
    } else {
      label.innerHTML =
        changeToSubscript(question.substances[0].reagents[i].formula) + ' + ';
    }
    balForm.appendChild(label);
  }

  const amountOfProducts = question.substances[1].products.length;
  for (let i = 0; i < amountOfProducts; i++) {
    const input = document.createElement('input');
    input.setAttribute('name', question.substances[1].products[i].name);
    input.setAttribute('id', question.substances[1].products[i].name);
    balForm.appendChild(input);
    const label = document.createElement('label');
    label.setAttribute('for', question.substances[1].products[i].name);
    if (i === amountOfProducts - 1) {
      label.innerHTML = changeToSubscript(
        question.substances[1].products[i].formula
      );
    } else {
      label.innerHTML =
        changeToSubscript(question.substances[1].products[i].formula) + ' + ';
    }

    balForm.appendChild(label);
  }
  balDiv.appendChild(balForm);
  const checkBalButton = document.createElement('button');
  checkBalButton.textContent = 'Checar Balanceamento';
  checkBalButton.classList.add('buttonStyle');
  checkBalButton.addEventListener('click', (event) => {
    const card_id = document.getElementById(question.id);
    const inputs = card_id.querySelectorAll('.balanceamento input');
    let insertedCoefs = [];
    for (let input of inputs) {
      insertedCoefs.push(input.value);
    }
    const correctCoefs = question.coefs;
    if (validateCoefs(insertedCoefs)) {
      const checking = checkCoefs(insertedCoefs, correctCoefs);
      if (checking) {
        questions[question.id - 1].isBalanced = true;
        alert(`Q${question.id} - ` + checking);
      } else {
        alert(`Q${question.id} - Errado, realize o balanceamento novamente!`);
      }
    } else {
      alert(
        `Q${question.id} - Coeficientes Inválidos! Insira números inteiros maiores do que zero.`
      );
      questions[question.id - 1].isBalanced = false;
    }
    event.preventDefault();
  });

  const divBalButton = document.createElement('div');
  divBalButton.appendChild(checkBalButton);
  balForm.appendChild(divBalButton);
  card.appendChild(balDiv);

  //div stoichiometry
  const stoichDiv = document.createElement('div');
  stoichDiv.setAttribute('class', 'stoichiometry');
  //form stoichiometry
  const stoichForm = document.createElement('form');
  stoichForm.setAttribute('id', 'stoichiometry');
  const amountOfAnswers = question.asking.length;
  for (let i = 0; i < amountOfAnswers; i++) {
    // div answer
    const answer = document.createElement('div');
    answer.setAttribute('class', 'answer');
    const label = document.createElement('label');
    label.setAttribute('for', question.asking[i].name);
    label.innerHTML = changeToSubscript(question.asking[i].substance) + ':';
    const input = document.createElement('input');
    input.setAttribute('name', question.asking[i].name);
    input.setAttribute('placeholder', 'mol');
    answer.appendChild(label);
    answer.appendChild(input);
    stoichForm.appendChild(answer);
  }
  const buttonDiv = document.createElement('div');
  const checkStoichButton = document.createElement('button');
  checkStoichButton.textContent = 'Checar Resposta';
  checkStoichButton.classList.add('buttonStyle');
  checkStoichButton.addEventListener('click', (event) => {
    if (questions[question.id - 1].isBalanced) {
      //ficar de olho aqui
      const card_id = document.getElementById(question.id); //ficar de olho nisto aqui
      const inputs = card_id.querySelectorAll('.stoichiometry input');
      for (let j = 0; j < inputs.length; j++) {
        if (convertToEnglish(inputs[j].value) !== question.asking[j].answer) {
          alert(`Q${question.id} - Resposta(s) errada(s)! Refaça o exercício!`);
          event.preventDefault();
          return;
        }
      }
      alert(`Q${question.id} - Parabéns, resposta(s) correta(s)!!!`);
      event.preventDefault();
    } else {
      alert(
        `Q${question.id} - Realize primeiramente o balanceamento da equação química!`
      );
      event.preventDefault();
    }
  });

  buttonDiv.appendChild(checkStoichButton);
  stoichForm.appendChild(buttonDiv);
  stoichDiv.appendChild(stoichForm);
  card.appendChild(stoichDiv);
  return card;
}

for (let question of questions) {
  const card = createCard(question);
  document.querySelector('main').appendChild(card);
}

document.querySelector(
  'footer'
).innerHTML = `<p>Copyright &copy; Danilo Morais Itokagi. All rights reserved. ${new Date().getFullYear()}</p>`;

function changeToSubscript(word) {
  const arrWord = [...word];
  newWord = '';
  for (let i = 0; i < arrWord.length; i++) {
    if (isNaN(arrWord[i]) === false) {
      newWord += '<sub>';
      newWord += arrWord[i];
      newWord += '</sub>';
    } else {
      newWord += arrWord[i];
    }
  }
  return newWord;
}

function convertToEnglish(floatNumber) {
  if (floatNumber.includes(',')) {
    floatNumber = floatNumber.replace(',', '.');
  }
  const number = Number(floatNumber);
  if (isNaN(number)) {
    return false;
  }
  return number;
}

function validateCoefs(coeficients) {
  let isValid = true;
  for (let coef of coeficients) {
    if (
      isNaN(coef) ||
      !coef ||
      Number(coef) <= 0 ||
      !Number.isInteger(Number(coef))
    ) {
      isValid = false;
      return isValid;
    }
  }
  return isValid;
}

function checkCoefs(insertedCoefs, correctCoefs) {
  const size = correctCoefs.length;
  let msg = 'Parabéns, coeficientes ' + insertedCoefs[0];
  let ratio = Number(insertedCoefs[0]) / correctCoefs[0];
  for (let i = 1; i < size; i++) {
    msg += ' ' + insertedCoefs[i];
    let newRatio = Number(insertedCoefs[i]) / correctCoefs[i];
    if (newRatio !== ratio) {
      return false;
    }
  }
  msg += ' estão corretos. Agora resolva o problema estequiométrico.';
  return msg;
}
