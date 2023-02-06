const teams = [
    {
        foto: "../img/wayne-barnett-founder-ceo.jpg",
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO"
    },
    {
        foto: "../img/angela-caroll-chief-editor.jpg",
        nome: "Angela Caroll",
        ruolo: "Chief Editor"
    },
    {
        foto: "../img/walter-gordon-office-manager.jpg",
        nome: "Walter Gordon",
        ruolo: "Office Manager"
    },
    {
        foto: "../img/angela-lopez-social-media-manager.jpg",
        nome: "Angela Lopez",
        ruolo: "Social Media Manager"
    },
    {
        foto: "../img/scott-estrada-developer.jpg",
        nome: "Scott Estrada",
        ruolo: "Developer"
    },
    {
        foto: "../img/barbara-ramos-graphic-designer.jpg",
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer"
    }
];

// prendo gli oggetti dal mio array
for (team of teams) {
    // prendo le caratteristiche degli oggetti
    for (man in team) {
        // scrivo in html
        console.log(man + ": " + team[man]);
        document.getElementById("ourTeam").innerHTML += man + ": " + team[man];
    };
};