const questions = [
  {
    id: 1,
    question:
      'Determine o calor envolvido no aumento da temperatura de <strong>540,6 g</strong> de uma amostra de <strong>Fe</strong> de <strong>20,0 °C para 84,3 °C</strong>? Calor específico do ferro = <strong>0,450 J / g °C</strong>. Arrendonde o resultado para duas casas decimais. Caso a parte esteja certa, a caixinha ficará azul.',
    mass: 540.6,
    initialTemp: 20,
    finalTemp: 84.3,
    specificHeat: 0.45,
    unit: 'kJ',
    substance: 'Fe',
    createCard: function () {
      const card = heatCard(
        this.id,
        this.question,
        this.substance,
        this.mass,
        this.specificHeat,
        this.initialTemp,
        this.finalTemp,
        this.unit
      );
      return card;
    },
  },
  {
    id: 2,
    question:
      'Que calor deve ser absorvido por uma amostra de <strong>100,0 g</strong> de Cu para elevar a temperatura de <strong>35,0 °C para 45,0 °C</strong>? Calor específico do cobre = <strong>0,380 J / g °C</strong>. Arrendonde o resultado para duas casas decimais. Caso a parte esteja certa, a caixinha ficará azul.',
    mass: 100,
    initialTemp: 35,
    finalTemp: 45,
    specificHeat: 0.38,
    unit: 'kJ',
    substance: 'Cu',
    createCard: function () {
      const card = heatCard(
        this.id,
        this.question,
        this.substance,
        this.mass,
        this.specificHeat,
        this.initialTemp,
        this.finalTemp,
        this.unit
      );
      return card;
    },
  },
  {
    id: 3,
    question:
      'Qual é a energia envolvida no processo de resfriamento de uma amostra de <strong>100,0 g</strong> de água, com mudança de temperatura de <strong>100,0 °C para 25,0 °C</strong>? Calor específico do água = <strong>4,18 J / g °C</strong>. Arrendonde o resultado para duas casas decimais. Caso a parte esteja certa, a caixinha ficará azul.',
    mass: 100,
    initialTemp: 100,
    finalTemp: 25,
    specificHeat: 4.18,
    unit: 'kJ',
    substance: 'água',
    createCard: function () {
      const card = heatCard(
        this.id,
        this.question,
        this.substance,
        this.mass,
        this.specificHeat,
        this.initialTemp,
        this.finalTemp,
        this.unit
      );
      return card;
    },
  },
  {
    id: 3,
    question:
      'Qual é o calor transferido para as vizinhanças no processo de resfriamento de uma barra de alumínio, de <strong>2,0 Kg</strong>, com mudança de temperatura de <strong>200,0 °C para 80,0 °C</strong>? Calor específico do Al = <strong>0,9 J / g °C</strong>. Arrendonde o resultado para duas casas decimais. Caso a parte esteja certa, a caixinha ficará azul.',
    mass: 2000,
    initialTemp: 200,
    finalTemp: 80,
    specificHeat: 0.9,
    unit: 'kJ',
    substance: 'Al',
    createCard: function () {
      const card = heatCard(
        this.id,
        this.question,
        this.substance,
        this.mass,
        this.specificHeat,
        this.initialTemp,
        this.finalTemp,
        this.unit
      );
      return card;
    },
  },
  {
    id: 5,
    question:
      '<strong>(equilíbrio térmico)</strong> Em uma xícara contendo 150 ml de chá a 70 ºC, adiciona-se 50 ml de água a 10 ºC. Considerando que a xícara tenha capacidade térmica desprezível e que não ocorrem trocas de calor entre o líquido e o ar, determine o calor envolvido no processo de troca e a temperatura de equilíbrio do sistema. <strong>Calor específico da água = 4,18 J / g . <sup>0</sup>C. Densidade da água = 1 g / mL</strong>. Arrendonde o resultado para duas casas decimais. Caso a parte esteja certa, a caixinha ficará azul. ',
    corps: [
      { name: 'chá', m: 150, specificHeat: 4.18, ti: 70, tf: null },
      { name: 'água', m: 50, specificHeat: 4.18, ti: 10, tf: null },
    ],
    tempUnit: '<sup>0</sup>C',
    heatUnit: 'joules',
    createCard: function () {
      const card = createHeatTransferCard(
        this.id,
        this.question,
        this.corps,
        this.tempUnit,
        this.heatUnit
      );
      return card;
    },
  },
  {
    id: 6,
    question:
      '<strong>(equilíbrio térmico)</strong> Suponhoa que você despeje 0,250 kg de água, que está a 20,0 °C, em uma panela de alumínio de 0,500 kg que acabou de sair do forno que estava em uma temperatura de 150 °C. Assuma que nenhuma transferência de calor ocorra em outro lugar: a panela de alumínio é colocada em uma manta isolante, e a transferência de calor para o ar é negligenciada no curto período de tempo necessário para atingir equilíbrio térmico. Assuma também que a quantidade de água que evapora é negligenciável. Qual será a temperatura da água após alcançado o equilíbrio térmico? Determine também o calor envolvido neste processo. <strong>Calor específico da água = 4,18 J / g . <sup>0</sup>C; Calor específico do alumínio = 0,90 J / g . <sup>0</sup>C</strong>. Arrendonde o resultado para duas casas decimais. Caso a parte esteja certa, a caixinha ficará azul. ',
    corps: [
      { name: 'água', m: 250, specificHeat: 4.18, ti: 20, tf: null },
      { name: 'panela de Al', m: 500, specificHeat: 0.9, ti: 150, tf: null },
    ],
    tempUnit: '<sup>0</sup>C',
    heatUnit: 'joules',
    createCard: function () {
      const card = createHeatTransferCard(
        this.id,
        this.question,
        this.corps,
        this.tempUnit,
        this.heatUnit
      );
      return card;
    },
  },
  {
    id: 7,
    question:
      '<strong>(equilíbrio térmico) (UNESP - SP - mod)</strong> Clarice colocou em uma xícara 100 mL de leite a 50 °C e, para cuidar de sua forma física, adoçou com 2 mL de adoçante líquido a 20 °C. Sabe-se que o calor específico do leite vale 0,9 cal/(g.°C) e do adoçante vale 2 cal/(g.°C) e que a capacidade térmica da xícara é desprezível. Considerando que as densidades do leite e do adoçante sejam iguais à 1 g / mL e que a perda de calor para a atmosfera é desprezível, depois de atingido o equilíbrio térmico, determine a temperatura final da bebida de Clarisse, e o calor envolvido no processo. Arrendonde o resultado para duas casas decimais. Caso a parte esteja certa, a caixinha ficará azul. ',
    corps: [
      { name: 'leite', m: 100, specificHeat: 0.9, ti: 50, tf: null },
      { name: 'adoçante', m: 2, specificHeat: 2, ti: 20, tf: null },
    ],
    tempUnit: '<sup>0</sup>C',
    heatUnit: 'cal',
    createCard: function () {
      const card = createHeatTransferCard(
        this.id,
        this.question,
        this.corps,
        this.tempUnit,
        this.heatUnit
      );
      return card;
    },
  },
];

for (let question of questions) {
  const card = question.createCard();
  document.querySelector('main').appendChild(card);
}

function heatCard(
  id,
  question,
  substance,
  mass,
  specificHeat,
  initialTemp,
  finalTemp,
  unit
) {
  const card = document.createElement('div');
  card.classList.add('card');
  const questionP = document.createElement('p');
  questionP.innerHTML = `${id} - ${question}`;
  questionP.style.textAlign = 'justify';
  card.appendChild(questionP);
  const answerBox = document.createElement('div');
  answerBox.classList.add('greyBox');
  answerBox.style.backgroundColor = 'grey';
  answerBox.style.width = '50%';
  answerBox.style.display = 'flex';
  answerBox.style.justifyContent = 'center';
  answerBox.style.alignItems = 'center';
  answerBox.style.borderRadius = '10px';
  const substanceP = document.createElement('p');
  substanceP.innerHTML = `Q<sub>${substance}</sup> =`;
  substanceP.style.marginRight = '5px';
  const input = document.createElement('input');
  input.style.width = '50px';
  input.style.height = '15px';
  input.style.textAlign = 'center';
  const unitP = document.createElement('p');
  unitP.style.fontWeight = 'bold';
  const response = document.createElement('p');
  response.innerText = 'OK';
  response.style.marginLeft = '10px';
  response.style.color = 'orange';
  response.style.fontWeight = 'bold';
  response.style.display = 'none';
  (unitP.style.color = 'black'), (unitP.textContent = unit);
  unitP.style.marginLeft = '5px';
  input.addEventListener('keyup', () => {
    let userInput = input.value;
    if (input.value.includes(',')) {
      userInput = input.value.replace(',', '.');
    }
    const answer = (mass * (finalTemp - initialTemp) * specificHeat) / 1000;
    userInput = Number(userInput).toFixed(2);
    if (userInput === answer.toFixed(2)) {
      input.style.backgroundColor = 'blue';
      input.style.color = 'white';
      response.style.display = 'block';
    } else {
      input.style.backgroundColor = 'white';
      input.style.color = 'black';
      response.style.display = 'none';
    }
  });
  answerBox.appendChild(substanceP);
  answerBox.appendChild(input);
  answerBox.appendChild(unitP);
  answerBox.appendChild(response);
  card.appendChild(answerBox);
  return card;
}

function createHeatTransferCard(id, question, corps, tempUnit, heatUnit) {
  const card = document.createElement('div');
  card.classList.add('card');
  const questionP = document.createElement('p');
  questionP.innerHTML = `${id} - ${question}`;
  questionP.style.textAlign = 'justify';
  card.appendChild(questionP);
  const greyBox = document.createElement('div');
  greyBox.classList.add('greyBox');
  greyBox.style.display = 'flex';
  greyBox.style.flexDirection = 'column';
  greyBox.style.alignItems = 'center';
  greyBox.style.backgroundColor = 'grey';
  greyBox.style.borderRadius = '10px';
  greyBox.style.padding = '5px';

  const tempBox = document.createElement('div');
  tempBox.style.display = 'flex';
  tempBox.style.alignItems = 'center';
  const tempP = document.createElement('p');
  tempP.textContent = 'Temperatura Final = ';
  tempP.style.marginRight = '5px';
  const tempInput = document.createElement('input');
  tempInput.style.marginRight = '5px';
  tempInput.style.width = '50px';
  tempInput.style.height = '15px';
  tempInput.style.textAlign = 'center';
  const tUnit = document.createElement('p');
  tUnit.style.marginRight = '5px';
  tUnit.innerHTML = tempUnit;
  tUnit.style.color = 'black';
  tUnit.style.fontWeight = 'bold';
  const tempResponse = document.createElement('p');
  tempResponse.textContent = 'OK';
  tempResponse.style.color = 'orange';
  tempResponse.style.fontWeight = 'bold';
  tempResponse.style.display = 'none';
  tempInput.addEventListener('keyup', () => {
    const ratio =
      (corps[0].m * corps[0].specificHeat) /
      (corps[1].m * corps[1].specificHeat);
    let finalTemp = (ratio * corps[0].ti + corps[1].ti) / (ratio + 1);
    finalTemp = finalTemp.toFixed(2);

    let userTempInput = tempInput.value;
    if (userTempInput.includes(',')) {
      userTempInput = userTempInput.replace(',', '.');
    }
    userTempInput = Number(userTempInput).toFixed(2);
    if (userTempInput === finalTemp) {
      tempInput.style.backgroundColor = 'blue';
      tempInput.style.color = 'white';
      tempInput.style.fontWeight = 'bold';
      tempResponse.style.display = 'block';
      corps[0].tf = userTempInput;
      corps[1].tf = userTempInput;
    } else {
      tempInput.style.backgroundColor = 'white';
      tempInput.style.color = 'black';
      tempInput.style.fontWeight = 'normal';
      tempResponse.style.display = 'none';
      corps[0].tf = null;
      corps[1].tf = null;
    }
  });
  tempBox.appendChild(tempP);
  tempBox.appendChild(tempInput);
  tempBox.appendChild(tUnit);
  tempBox.appendChild(tempResponse);
  greyBox.appendChild(tempBox);

  for (let corp of corps) {
    const heatBox = document.createElement('div');
    heatBox.style.display = 'flex';
    heatBox.style.alignItems = 'center';
    const heatP = document.createElement('p');
    heatP.innerHTML = `Q<sub>${corp.name}</sub> =`;
    heatP.style.marginRight = '5px';
    const heatInput = document.createElement('input');
    heatInput.style.marginRight = '5px';
    heatInput.style.width = '60px';
    heatInput.style.height = '15px';
    heatInput.style.textAlign = 'center';
    const hUnit = document.createElement('p');
    hUnit.style.marginRight = '5px';
    hUnit.innerHTML = heatUnit;
    hUnit.style.color = 'black';
    hUnit.style.fontWeight = 'bold';
    const heatResponse = document.createElement('p');
    heatResponse.textContent = 'OK';
    heatResponse.style.color = 'orange';
    heatResponse.style.fontWeight = 'bold';
    heatResponse.style.display = 'none';
    heatInput.addEventListener('keyup', () => {
      if (!corp.tf) {
        alert(`${id} - Primeiro insira a temperatura final do sistema!!`);
      } else {
        let q = corp.m * corp.specificHeat * (corp.tf - corp.ti);
        q = q.toFixed(2);
        let userHeatInput = heatInput.value;
        if (userHeatInput.includes(',')) {
          userHeatInput = userHeatInput.replace(',', '.');
        }
        userHeatInput = Number(userHeatInput).toFixed(2);
        if (userHeatInput < q + 2 && userHeatInput > q - 2) {
          heatInput.style.backgroundColor = 'blue';
          heatInput.style.color = 'white';
          heatInput.style.fontWeight = 'bold';
          heatResponse.style.display = 'block';
        } else {
          heatInput.style.backgroundColor = 'white';
          heatInput.style.color = 'black';
          heatInput.style.fontWeight = 'normal';
          heatResponse.style.display = 'none';
        }
      }
    });
    heatBox.appendChild(heatP);
    heatBox.appendChild(heatInput);
    heatBox.appendChild(hUnit);
    heatBox.appendChild(heatResponse);
    greyBox.appendChild(heatBox);
  }

  card.appendChild(greyBox);

  return card;
}
document.querySelector(
  'footer'
).innerHTML = `<p>Copyright &copy; Danilo Morais Itokagi. All rights reserved. ${new Date().getFullYear()}</p>`;
