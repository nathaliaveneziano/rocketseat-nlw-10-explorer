import data from './data.json' assert { type: 'json' };

const { partidas, oitavas, quartas, semifinal, final } = data;

// console.log(partidas, oitavas, quartas, semifinais, final);

function convertCharacters(string) {
  const text = string.replaceAll(' ', '_').toLowerCase();
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function createGame(games) {
  console.log(games);
  let list_games = '';
  for (const {
    player1,
    goals_player1,
    hour,
    goals_player2,
    player2,
  } of games) {
    list_games += `
    <li>
      <img src="./assets/icons/${convertCharacters(
        player1
      )}.svg" alt="Bandeira do ${player1}" />
      <span>${goals_player1}</span>
      <strong>${hour}</strong>
      <span>${goals_player2}</span>
      <img src="./assets/icons/${convertCharacters(
        player2
      )}.svg" alt="Bandeira da ${player2}" />
    </li>
  `;
  }

  return list_games;
}

function createCard(array_games) {
  let delay = -0.4;
  let list_games = '';
  for (const { date, day_week, games } of array_games) {
    delay += 0.4;
    list_games += `
      <div class="card" style="animation-delay: ${delay}s">
        <h2>${date} <span>${day_week}</span></h2>
        <ul>
          ${createGame(games)}
        </ul>
      </div>
    `;
  }

  return list_games;
}

document.querySelector('#partidas').innerHTML = createCard(partidas);
document.querySelector('#oitavas').innerHTML = createCard(oitavas);
document.querySelector('#quartas').innerHTML = createCard(quartas);
document.querySelector('#semifinal').innerHTML = createCard(semifinal);
document.querySelector('#final').innerHTML = createCard(final);

// createGame('Catar', '16:00')
