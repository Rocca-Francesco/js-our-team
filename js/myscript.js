const teams = [
    {
        Foto: "../img/wayne-barnett-founder-ceo.jpg",
        Nome: "Wayne Barnett",
        Ruolo: "Founder & CEO"
    },
    {
        Foto: "../img/angela-caroll-chief-editor.jpg",
        Nome: "Angela Caroll",
        Ruolo: "Chief Editor"
    },
    {
        Foto: "../img/walter-gordon-office-manager.jpg",
        Nome: "Walter Gordon",
        Ruolo: "Office Manager"
    },
    {
        Foto: "../img/angela-lopez-social-media-manager.jpg",
        Nome: "Angela Lopez",
        Ruolo: "Social Media Manager"
    },
    {
        Foto: "../img/scott-estrada-developer.jpg",
        Nome: "Scott Estrada",
        Ruolo: "Developer"
    },
    {
        Foto: "../img/barbara-ramos-graphic-designer.jpg",
        Nome: "Barbara Ramos",
        Ruolo: "Graphic Designer"
    }
];

// prendo gli oggetti dal mio array
for (team of teams) {
    // prendo le caratteristiche degli oggetti
    for (man in team) {
        // SE ho un foto, carico la foto
        if (man == "Foto") {
            const img = document.getElementById("ourTeam").innerHTML += `<img src="${team[man]}" alt="man-team">`;
            console.log(img);
        } else {
            // scrivo in html
            document.getElementById("ourTeam").innerHTML += `<br>${man}: ${team[man]}<br>`;
        }
    };
};