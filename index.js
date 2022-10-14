const apiurl = 'https://rickandmortyapi.com/api/character';
const characters = document.querySelector('.charactersList');

const getCharacters = async () => {
  const response = await fetch(apiurl, {
    method: 'GET',
  });

  return await response.json();
};

const text = async () => {
  let { results, info } = await getCharacters();

  document.querySelector('.inputSearch').value = 1;
  document.querySelector('.pages').innerText = info.pages;

  document.querySelector('.inputSearch').addEventListener('change', () => {
    fetch(apiurl + '?page=' + document.querySelector('.inputSearch').value)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        results = res.results;
      });
  });

  const showAllCharacters = () => {
    characters.innerHTML = '';

    results.forEach((res, index) => {
      const characterCard = document.createElement('div');
      const characterName = document.createElement('p');
      const characterIndex = document.createElement('p');

      characterName.innerText = res.name;
      characterIndex.innerText = index + 1;

      characterCard.appendChild(characterName);
      characterCard.appendChild(characterIndex);
      characters.appendChild(characterCard);

      characterName.addEventListener('click', () => {
        const n = document.createElement('p');
        const gender = document.createElement('p');
        const status = document.createElement('p');
        const jpg = document.createElement('img');
        const deleteCharacter = document.createElement('button');
        jpg.width = '100';

        n.innerText = 'imie: ' + results[index].name;
        gender.innerText = 'płeć: ' + results[index].gender;
        status.innerText = 'status: ' + results[index].status;
        jpg.src = results[index].image;
        deleteCharacter.innerText = 'usuń';

        const details = document.querySelector('.displayedCharacters');

        details.append(n, gender, status, jpg, deleteCharacter);

        deleteCharacter.addEventListener('click', () => {
          n.remove();
          gender.remove();
          status.remove();
          jpg.remove();
          deleteCharacter.remove();
        });

        jpg.onclick = () => {
          const dialog = document.createElement('dialog');
          document.body.append(dialog);

          dialog.append(jpg);
          jpg.width = 300;

          dialog.showModal();

          const close = document.createElement('button');

          close.innerText = 'zamknij';

          close.addEventListener('click', () => {
            dialog.close();
          });

          dialog.append(close);
        };
      });
    });
  };

  const showOnlyAlives = () => {
    characters.innerHTML = '';
    const alive = results.filter((character) => character.status === 'Alive');

    alive.forEach((character, index) => {
      const characterCard = document.createElement('div');
      const characterName = document.createElement('p');
      const characterIndex = document.createElement('p');

      characterName.innerText = character.name;
      characterIndex.innerText = index + 1;

      characters.appendChild(characterCard);
      characterCard.appendChild(characterIndex);
      characterCard.appendChild(characterName);

      characterName.addEventListener('click', () => {
        const n = document.createElement('p');
        const gender = document.createElement('p');
        const status = document.createElement('p');
        const jpg = document.createElement('img');
        const deleteCharacter = document.createElement('button');
        jpg.width = '100';

        n.innerText = 'imie: ' + alive[index].name;
        gender.innerText = 'płeć: ' + alive[index].gender;
        status.innerText = 'status: ' + alive[index].status;
        jpg.src = alive[index].image;
        deleteCharacter.innerText = 'usuń';

        const details = document.querySelector('.displayedCharacters');

        details.append(n, gender, status, jpg, deleteCharacter);

        deleteCharacter.addEventListener('click', () => {
          n.remove();
          gender.remove();
          status.remove();
          jpg.remove();
          deleteCharacter.remove();
        });

        jpg.onclick = () => {
          const dialog = document.createElement('dialog');
          document.body.append(dialog);

          dialog.append(jpg);
          jpg.width = 300;

          dialog.showModal();

          const close = document.createElement('button');

          close.innerText = 'zamknij';

          close.addEventListener('click', () => {
            dialog.close();
          });

          dialog.append(close);
        };
      });
    });
  };

  const showDeadsOnly = () => {
    characters.innerHTML = '';
    const dead = results.filter((character) => character.status === 'Dead');

    dead.forEach((character, index) => {
      const characterCard = document.createElement('div');
      const characterName = document.createElement('p');
      const characterIndex = document.createElement('p');

      characterName.innerText = character.name;
      characterIndex.innerText = index + 1;

      characterCard.appendChild(characterName);
      characterCard.appendChild(characterIndex);
      characters.appendChild(characterCard);

      characterName.addEventListener('click', () => {
        const n = document.createElement('p');
        const gender = document.createElement('p');
        const status = document.createElement('p');
        const jpg = document.createElement('img');
        const deleteCharacter = document.createElement('button');
        jpg.width = '100';

        n.innerText = 'imie: ' + dead[index].name;
        gender.innerText = 'płeć: ' + dead[index].gender;
        status.innerText = 'status: ' + dead[index].status;
        jpg.src = dead[index].image;
        deleteCharacter.innerText = 'usuń';

        const details = document.querySelector('.displayedCharacters');

        details.append(n, gender, status, jpg, deleteCharacter);

        deleteCharacter.addEventListener('click', () => {
          n.remove();
          gender.remove();
          status.remove();
          jpg.remove();
          deleteCharacter.remove();
        });

        jpg.onclick = () => {
          const dialog = document.createElement('dialog');
          document.body.append(dialog);

          dialog.append(jpg);
          jpg.width = 300;

          dialog.showModal();

          const close = document.createElement('button');

          close.innerText = 'zamknij';

          close.addEventListener('click', () => {
            dialog.close();
          });

          dialog.append(close);
        };
      });
    });
  };

  all.addEventListener('click', showAllCharacters);
  alive.addEventListener('click', showOnlyAlives);
  dead.addEventListener('click', showDeadsOnly);
};

text();
