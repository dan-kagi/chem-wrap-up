const firstYearTopics = [
  {
    title: 'Lavoisier - Proust',
    link: './lavoisier-proust/index.html',
    additional: ['Lei da Conservação de Massas', 'Lei das Proporções Fixas'],
  },
  {
    title: 'Balanceamento de Equações Químicas',
    link: './balancing/index.html',
    additional: null,
  },
  {
    title: 'Modelos Atômicos',
    link: './atomic-models/index.html',
    additional: ['Dalton, Thomson, Rutherford e Böhr'],
  },
  {
    title: 'Subpartículas',
    link: './subparticles/index.html',
    additional: ['Prótons, Nêutrons e Elétrons'],
  },
  {
    title: 'Subpartículas com Tabela Periódica',
    link: './not-so-easy-subparticles/index.html',
    additional: ['Prótons, Nêutrons e Elétrons'],
  },
];

const secondYearTopics = [
  {
    title: 'Massa Molar',
    link: './molar-mass/index.html',
    additional: null,
  },
  {
    title: 'Estequiometria',
    link: './stoichiometry/index.html',
    additional: null,
  },
  {
    title: 'Estequiometria com Balanceamento',
    link: './balancing-stoichiometry/index.html',
    additional: null,
  },
  {
    title: 'Estequiometria com Dados de Massa',
    link: './stoichiometry-mass/index.html',
    additional: ['Rendimento'],
  },
  {
    title: 'Concentração',
    link: './concentrations/index.html',
    additional: ['Concentração Comum', 'Concentração Molar'],
  },
];

const thirdYearTopics = null;

const hasShown = {
  firstYear: false,
  secondYear: false,
  thirdYear: false,
};

function showCards(principalId, periodTitle, topics) {
  const divPeriod = document.createElement('div');
  divPeriod.setAttribute('id', principalId);
  divPeriod.setAttribute('class', 'square');

  const titleParagraph = document.createElement('p');
  titleParagraph.textContent = periodTitle;
  divPeriod.appendChild(titleParagraph);

  const buttonsDiv = document.createElement('div');
  buttonsDiv.setAttribute('class', 'anchorButtons');
  if (topics) {
    for (let i = 0; i < topics.length; i++) {
      const anchor = document.createElement('a');
      anchor.setAttribute('href', topics[i].link);
      const cardTitle = document.createElement('p');
      cardTitle.setAttribute('class', 'anchorTitle');
      cardTitle.textContent = topics[i].title;
      anchor.appendChild(cardTitle);
      if (topics[i].additional) {
        for (let j = 0; j < topics[i].additional.length; j++) {
          const additionalParagraph = document.createElement('p');
          additionalParagraph.textContent = topics[i].additional[j];
          anchor.appendChild(additionalParagraph);
        }
      }
      buttonsDiv.appendChild(anchor);
    }
  }
  divPeriod.appendChild(buttonsDiv);
  return divPeriod;
}
const button1 = document.getElementById('first');
const button2 = document.getElementById('second');
const button3 = document.getElementById('third');

button1.addEventListener('click', () => {
  if (!hasShown.firstYear) {
    const firstYearQuestions = showCards(
      'firstYear',
      'Primeiros Anos',
      firstYearTopics
    );
    const square = document.querySelector('.square');
    if (!square) {
      document.querySelector('main').appendChild(firstYearQuestions);
    } else {
      const main = document.querySelector('main');
      main.insertBefore(firstYearQuestions, square);
    }

    hasShown.firstYear = true;
    button1.classList.add('isActive');
  } else {
    document.getElementById('firstYear').remove();
    hasShown.firstYear = false;
    button1.classList.remove('isActive');
  }
});

button2.addEventListener('click', () => {
  if (!hasShown.secondYear) {
    const secondYearQuestions = showCards(
      'secondYear',
      'Segundos Anos',
      secondYearTopics
    );
    const square = document.querySelector('.square');
    if (!square) {
      document.querySelector('main').appendChild(secondYearQuestions);
    } else {
      const main = document.querySelector('main');
      main.insertBefore(secondYearQuestions, square);
    }

    hasShown.secondYear = true;
    button2.classList.add('isActive');
  } else {
    document.getElementById('secondYear').remove();
    hasShown.secondYear = false;
    button2.classList.remove('isActive');
  }
});

button3.addEventListener('click', () => {
  if (!hasShown.thirdYear) {
    const thirdYearQuestions = showCards(
      'thirdYear',
      'Terceiros Anos',
      thirdYearTopics
    );
    const square = document.querySelector('.square');
    if (!square) {
      document.querySelector('main').appendChild(thirdYearQuestions);
    } else {
      const main = document.querySelector('main');
      main.insertBefore(thirdYearQuestions, square);
    }

    hasShown.thirdYear = true;
    button3.classList.add('isActive');
  } else {
    document.getElementById('thirdYear').remove();
    hasShown.thirdYear = false;
    button3.classList.remove('isActive');
  }
});
