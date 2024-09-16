const questions = [
  {
    id: 1,
    question:
      '<span class="enum">(Concentração Comum)</span> Em 5 L de uma solução aquosa de cloreto de sódio há 50 g deste soluto. Calcule a concentração desta solução em g / L. Em seguida determine: i) a massa de cloreto de sódio em 400 mL de solução. ii) que volume de solução, em mL, contém 2 g de soluto.',
    answers: [
      {
        variable: 'C',
        formula: 'NaCl',
        answer: 10,
        unit: 'g / L',
      },
      {
        variable: 'm',
        formula: 'NaCl',
        answer: 4,
        unit: 'g',
      },
      {
        variable: 'V',
        formula: 'NaCl',
        answer: 200,
        unit: 'mL',
      },
    ],
    image: '',
  },
  {
    id: 2,
    question:
      '<span class="enum">(Concentração Comum)</span> Em 2 L de uma solução aquosa de hidróxido de sódio há 16 g deste soluto. Calcule a concentração desta solução em g / L. Em seguida: a) determine a massa de hidróxido de sódio em 200 mL de solução. b) que volume, em mL, de solução contém 4 g deste soluto.',
    answers: [
      {
        variable: 'C',
        formula: 'NaOH',
        answer: 8,
        unit: 'g / L',
      },
      {
        variable: 'm',
        formula: 'NaOH',
        answer: 1.6,
        unit: 'g',
      },
      {
        variable: 'V',
        formula: 'NaOH',
        answer: 500,
        unit: 'mL',
      },
    ],
    image: '',
  },
  {
    id: 3,
    question:
      '<span class="enum">(Concentração Comum)</span> Considere uma solução estoque de nitrato de amônio de concentração igual a 80 g / L. I) Precisa-se de 10 g de nitrato de amônio. Portanto, que volume de solução, em mL, deve-se retirar da solução estoque? II) Determine qual seria a massa (Kg) deste soluto em 50 L de solução.',
    answers: [
      {
        variable: 'V',
        formula: 'NH4NO3',
        answer: 125,
        unit: 'mL',
      },
      {
        variable: 'm',
        formula: 'NH4NO3',
        answer: 4,
        unit: 'Kg',
      },
    ],
    image: '',
  },
  {
    id: 4,
    question:
      '<span class="enum">(Concentração Comum)</span> Considere uma solução de sulfato de sódio na concentração de 20 g / L. I) Que volume, em mL, de solução contém 1 g de soluto? II) Que massa de soluto está presente em 200 mL de solução?',
    answers: [
      {
        variable: 'V',
        formula: 'Na2SO4',
        answer: 50,
        unit: 'mL',
      },
      {
        variable: 'm',
        formula: 'Na2SO4',
        answer: 4,
        unit: 'g',
      },
    ],
    image: '',
  },
  {
    id: 5,
    question:
      '<span class="enum">(Concentração Comum)</span> Que massa de permanganato de potássio é necessária para se preparar 500 mL de solução aquosa na concentração de 5 g / L?',
    answers: [
      {
        variable: 'm',
        formula: 'KMnO4',
        answer: 2.5,
        unit: 'g',
      },
    ],
    image: '',
  },
  {
    id: 6,
    question:
      '<span class="enum">(Concentração Comum)</span> Que massa de cloreto de cálcio, em mg, é necessária para se preparar 200 mL de solução aquosa na concentração de 2,5 g / L? Dados: 1g - 1000mg.',
    answers: [
      {
        variable: 'm',
        formula: 'CaCl2',
        answer: 500,
        unit: 'mg',
      },
    ],
    image: '',
  },
  {
    id: 7,
    question:
      '<span class="enum">(Molaridade)</span> Uma solução de hidróxido de sódio foi preparada dissolvendo-se 8 g deste soluto em certo volume de água. Esta porção foi transferida para um balão volumétrico de 500 mL, então este volume foi completado com água. I) Calcule a molaridade desta solução (mol / L). II) Determine a quantidade de soluto em 3 L de solução. Dados: Massa Molar do Hidróxido de Sódio = 40 g / mol.',
    answers: [
      {
        variable: 'M',
        formula: 'NaOH',
        answer: 0.4,
        unit: 'mol / L',
      },
      {
        variable: 'n',
        formula: 'NaOH',
        answer: 1.2,
        unit: 'mol',
      },
    ],
    image: '',
  },
  {
    id: 8,
    question:
      '<span class="enum">(Molaridade)</span> Uma permanganato de potássio foi preparada dissolvendo-se 7,9 g deste soluto em certo volume de água. Esta porção foi transferida para um balão volumétrico de 250 mL, então este volume foi completado com água. I) Calcule a molaridade desta solução (mol / L). II) Determine a quantidade de soluto em 20 mL de solução. Dados: Massa Molar do Permanganato de Potássio = 158 g / mol.',
    answers: [
      {
        variable: 'M',
        formula: 'KMnO4',
        answer: 0.2,
        unit: 'mol / L',
      },
      {
        variable: 'n',
        formula: 'KMnO4',
        answer: 0.004,
        unit: 'mol',
      },
    ],
    image: '',
  },
  {
    id: 9,
    question:
      '<span class="enum">(Molaridade)</span> Determine a massa de glicose, em mg, em 200 mL de solução 0,02M. Dados: C = 12u, H = 1u, O = 16u.',
    answers: [
      {
        variable: 'm',
        formula: 'C6H12O6',
        answer: 720,
        unit: 'mg',
      },
    ],
    image: '',
  },
  {
    id: 10,
    question:
      '<span class="enum">(Molaridade)</span> Determine a massa de nitrato de amônio em 2 L de solução 0,4M. Dados: Massa Molar do Nitrato de Amônio = 80 g / mol.',
    answers: [
      {
        variable: 'm',
        formula: 'NH4NO3',
        answer: 64,
        unit: 'g',
      },
    ],
    image: '',
  },
  {
    id: 11,
    question:
      '<span class="enum">(Molaridade - Preparo de Soluções)</span> Determine a massa de hidróxido de sódio necessária para preparar 500 mL de solução na concentração de 0,5 mol / L. Dados: Pureza do hidróxido de sódio = 80%; Massa Molar do hidróxido de sódio = 40 g / mol.',
    answers: [
      {
        variable: 'm',
        formula: 'NaOH',
        answer: 12.5,
        unit: 'g',
      },
    ],
    image: '',
  },
  {
    id: 12,
    question:
      '<span class="enum">(Molaridade - Preparo de Soluções)</span> Determine a massa de permanganato de potássio necessária para preparar 300 mL de solução na concentração de 0,3 mol / L. Dados: Pureza do permanganato de potássio = 90%; Massa Molar do permanganato de potássio = 158 g / mol.',
    answers: [
      {
        variable: 'm',
        formula: 'KMnO4',
        answer: 15.8,
        unit: 'g',
      },
    ],
    image: '',
  },
  {
    id: 13,
    question:
      '(Fuvest-SP-modificado) A concentração de íons fluoreto em uma água de uso doméstico é de 5,0 · 10<sup>–5</sup> mol/litro. Se uma pessoa tomar 3,0 litros dessa água por dia, ao fim de um dia, que massa de fluoreto, em miligramas, essa pessoa ingeriu? Dados: massa molar do fluoreto: 19,0 g / mol.',
    answers: [
      {
        variable: 'm',
        formula: 'F',
        answer: 2.85,
        unit: 'mg',
      },
    ],
    image: '',
  },
  {
    id: 14,
    question:
      '<span class="enum">(Molaridade - Preparo de Soluções - Diluição)</span> Que volume, em mL, deve ser retirado de uma solução de hidróxido de potássio 2M para preparar 250 mL de solução na concentração de 0,1M',
    answers: [
      {
        variable: 'V',
        formula: 'KOH',
        answer: 12.5,
        unit: 'mL',
      },
    ],
    image: '',
  },
  {
    id: 15,
    question:
      '<span class="enum">(Molaridade - Preparo de Soluções - Diluição)</span> (UESPI-mod) Na preparação de 200 ml de uma solução aquosa 1 M de ácido clorídrico, um estudante dispõe de uma solução aquosa 5 M desse ácido. Qual o volume da solução inicial que será utilizado?',
    answers: [
      {
        variable: 'V',
        formula: 'HCl',
        answer: 40,
        unit: 'mL',
      },
    ],
    image: '',
  },
  {
    id: 16,
    question:
      'Um fertilizante de larga utilização é o nitrato de amônio, de fórmula NH<sub>4</sub>NO<sub>3</sub>. Para uma determinada cultura, o fabricante recomenda a aplicação de 1 L de solução de nitrato de amônio de concentração 0,5 mol.L<sup>-1</sup> por m<sup>2</sup> de plantação. Que massa de nitrato de amônio, em quilogramas, o agricultor deverá empregar para fertilizar sua cultura, de acordo com a recomendação do fabricante?',
    answers: [
      {
        variable: 'm',
        formula: 'NH4NO3',
        answer: 120,
        unit: 'Kg',
      },
    ],
    image: './public/images/figure.png',
  },
  {
    id: 17,
    question:
      '(ENEM-2017-mod) A ingestão de vitamina C (ou ácido ascórbico; massa molar igual a 176 g/mol) é recomendada para evitar o escorbuto, além de contribuir para a saúde de dentes e gengivas e auxiliar na absorção de ferro pelo organismo. Uma das formas de ingerir ácido ascórbico é por meio dos comprimidos efervescentes, os quais contêm cerca de 0,006 mol de ácido ascórbico por comprimido. Outra possibilidade é o suco de laranja, que contém cerca de 0,07 g de ácido ascórbico para cada 200 mL de suco. Determine o número de litros de suco de laranja que corresponde à quantidade de ácido ascórbico presente em um comprimido efervescente. (Resposta deve ser o número inteiro mais próximo)',
    answers: [
      {
        variable: 'V',
        formula: 'C6H8O6',
        answer: 3,
        unit: 'L',
      },
    ],
    image: '',
  },
];

function createCard(question) {
  const card = document.createElement('div');
  card.setAttribute('class', 'card');
  card.setAttribute('id', question.id);
  const checkParagraph = document.createElement('p');
  checkParagraph.setAttribute('class', 'checkParagraph');
  const p = document.createElement('p');
  p.setAttribute('class', 'questionParagraph');
  p.innerHTML = `${question.id} - ${question.question}`;
  card.appendChild(checkParagraph);
  card.appendChild(p);
  if (question.image) {
    const image = document.createElement('img');
    image.setAttribute('src', `${question.image}`);
    card.appendChild(image);
  }
  const divAnswers = document.createElement('div');
  divAnswers.setAttribute('class', 'answers');
  for (let i = 0; i < question.answers.length; i++) {
    const divAnswer = document.createElement('div');
    divAnswer.setAttribute('class', 'answer');
    const p = document.createElement('p');
    const input = document.createElement('input');
    const label = document.createElement('label');
    p.innerHTML =
      question.answers[i].variable +
      `<sub>${changeToSubscript(question.answers[i].formula)}</sub>` +
      ' = ';
    label.textContent = question.answers[i].unit;
    divAnswer.appendChild(p);
    divAnswer.appendChild(input);
    divAnswer.appendChild(label);
    divAnswers.appendChild(divAnswer);
  }
  card.appendChild(divAnswers);
  const button = document.createElement('button');
  button.textContent = 'Checar Resposta';
  button.addEventListener('click', () => {
    const card = document.getElementById(`${question.id}`);
    const userInputs = card.querySelectorAll('input');
    const checkParagraph = card.querySelector('.checkParagraph');
    for (let j = 0; j < question.answers.length; j++) {
      let answer = userInputs[j].value;
      if (answer.includes(',')) {
        answer = answer.replace(',', '.');
      }
      if (Number(answer) !== question.answers[j].answer) {
        checkParagraph.innerHTML =
          '&#128577;' + ' NO, NO, NO.  WRONG ANSWER! DO IT AGAIN!!!';
        return;
      }
    }
    checkParagraph.innerHTML =
      '&#128538;' + ' CORRECT!!! YOU DESERVE A KISS!!!';
    return;
  });
  card.appendChild(button);
  return card;
}

const main = document.querySelector('main');
for (let question of questions) {
  const card = createCard(question);
  main.appendChild(card);
}

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

document.querySelector(
  'footer'
).innerHTML = `<p>Copyright &copy; Danilo Morais Itokagi. All rights reserved. ${new Date().getFullYear()}</p>`;
