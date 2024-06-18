//Creare l’array di oggetti con le informazioni fornite.
const team = [

    { //1
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        foto: ''
    },
    { //2
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: ''
    },
    { //3
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: ''
    },
    { //4
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: ''
    },
    { //5
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: ''
    },
    { //6
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: ''
    }
]

//Dichiarare la variabile per il container del DOM.
let page = document.getElementById('container');

//Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto.

    //Fare un loop che stampi in automatico per ogni oggetto dell'array
    for(let i = 0; i < team.length; i++){

        // Mettere un consoleLog che incrementi ad ogni giro.
        console.log(team[i]);
    }

//Stampare le stesse informazioni su DOM sottoforma di stringhe.
team.forEach(team => {
    const teamDiv = document.createElement('div');
    teamDiv.innerHTML = `
      <h3>${team.nome}</h3>
      <p>Età: ${team.ruolo}</p>
      <p>Occupazione: ${team.foto}</p>
    `;
    container.appendChild(teamDiv);
});
