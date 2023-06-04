const ul = document.querySelector('ul');

function getApiGitHub() {
  fetch('https://api.github.com/users/Marcos-Gabriell/repos')
    .then(async res => {
      if (!res.ok) {
        throw new Error(res.status);
      }

      var data = await res.json();

      data.map(item => {
        let li = document.createElement('li');
        let repoLink = document.createElement('a');
        repoLink.href = item.html_url;
        repoLink.textContent = item.name.toUpperCase();
        repoLink.target = '_blank'; // Abre o link em uma nova aba

        let repoInfo = document.createElement('span');
        repoInfo.innerHTML = `
          URL: ${item.html_url}<br>
          Data Criação: ${Intl.DateTimeFormat('pt-BR').format(new Date(item.created_at))}
        `;

        li.appendChild(repoLink);
        li.appendChild(repoInfo);

        ul.appendChild(li);
      });
    })
    .catch(e => console.log(e));
}

getApiGitHub();
