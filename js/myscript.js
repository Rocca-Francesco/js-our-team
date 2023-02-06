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
    // creo un elemento del dom dove scirvere i miei dati
    const cardEl = document.createElement("div");
    cardEl.classList.add("col-3", "text-center", "text-secondary", "bg-light", "m-4", "p-0");
    // prendo le caratteristiche degli oggetti
    for (man in team) {
        // SE ho un foto, carico la foto
        if (man == "Foto") {
            cardEl.innerHTML += `<img class="img-fluid" src="${team[man]}" alt="man-team">`;
        } else if (man == "Nome") {
            // scrivo in html
            cardEl.innerHTML += `<h2>${team[man]}</h2>`;
        } else if (man == "Ruolo") {
            // scrivo in html
            cardEl.innerHTML += `<span class="d-block pb-2">${team[man]}</span>`;
        };
        document.getElementById("ourTeam").append(cardEl);
    };
};
