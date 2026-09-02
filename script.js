/* =========================================================
   VÔLEI ARENA
   SCRIPT.JS

   IMPORTANTE:
   Os dados abaixo são DEMONSTRATIVOS.

   Para utilizar dados reais, substitua a função
   fetchLiveData() por uma integração com uma API esportiva.

   Exemplos de dados que uma API poderia fornecer:
   - partidas
   - placares
   - equipes
   - jogadores
   - competições
   - estatísticas
========================================================= */


/* =========================================================
   DADOS DEMONSTRATIVOS
========================================================= */

const matches = [

    {
        id: 1,
        gender: "feminino",
        type: "selecoes",
        dateType: "hoje",
        date: "Hoje",
        time: "19:30",
        competition: "VNL — Demonstração",
        team1: "Brasil",
        flag1: "🇧🇷",
        team2: "Itália",
        flag2: "🇮🇹",
        location: "Arena Internacional"
    },

    {
        id: 2,
        gender: "masculino",
        type: "selecoes",
        dateType: "amanha",
        date: "Amanhã",
        time: "16:00",
        competition: "Mundial — Demonstração",
        team1: "Brasil",
        flag1: "🇧🇷",
        team2: "Polônia",
        flag2: "🇵🇱",
        location: "Ginásio Principal"
    },

    {
        id: 3,
        gender: "feminino",
        type: "clubes",
        dateType: "semana",
        date: "Quinta-feira",
        time: "20:00",
        competition: "Clubes — Demonstração",
        team1: "Minas",
        flag1: "🇧🇷",
        team2: "Praia Clube",
        flag2: "🇧🇷",
        location: "Arena Minas"
    },

    {
        id: 4,
        gender: "masculino",
        type: "clubes",
        dateType: "semana",
        date: "Sexta-feira",
        time: "21:00",
        competition: "Superliga — Demonstração",
        team1: "Sada Cruzeiro",
        flag1: "🇧🇷",
        team2: "Taubaté",
        flag2: "🇧🇷",
        location: "Arena Nacional"
    },

    {
        id: 5,
        gender: "feminino",
        type: "selecoes",
        dateType: "semana",
        date: "Sábado",
        time: "14:00",
        competition: "VNL — Demonstração",
        team1: "Japão",
        flag1: "🇯🇵",
        team2: "Brasil",
        flag2: "🇧🇷",
        location: "Tokyo Arena"
    },

    {
        id: 6,
        gender: "masculino",
        type: "selecoes",
        dateType: "semana",
        date: "Domingo",
        time: "18:30",
        competition: "VNL — Demonstração",
        team1: "França",
        flag1: "🇫🇷",
        team2: "Itália",
        flag2: "🇮🇹",
        location: "Paris Arena"
    }

];


const liveMatches = [

    {
        team1: "Brasil",
        flag1: "🇧🇷",
        team2: "Turquia",
        flag2: "🇹🇷",
        score1: 2,
        score2: 1,
        currentSet: "4º SET",
        setScore: "18 — 15",
        attack1: 62,
        attack2: 57,
        blocks1: 8,
        blocks2: 6,
        aces1: 5,
        aces2: 4,
        errors1: 11,
        errors2: 13
    },

    {
        team1: "Itália",
        flag1: "🇮🇹",
        team2: "Polônia",
        flag2: "🇵🇱",
        score1: 1,
        score2: 1,
        currentSet: "3º SET",
        setScore: "12 — 14",
        attack1: 58,
        attack2: 61,
        blocks1: 5,
        blocks2: 7,
        aces1: 3,
        aces2: 6,
        errors1: 9,
        errors2: 8
    }

];


const results = [

    {
        team1: "Brasil",
        flag1: "🇧🇷",
        team2: "Japão",
        flag2: "🇯🇵",
        score1: 3,
        score2: 1,
        sets: ["25-20", "21-25", "25-18", "25-19"],
        mvp: "Demonstração",
        topScorer: "Demonstração",
        competition: "VNL — Demonstração"
    },

    {
        team1: "Itália",
        flag1: "🇮🇹",
        team2: "França",
        flag2: "🇫🇷",
        score1: 3,
        score2: 2,
        sets: ["25-22", "20-25", "25-21", "22-25", "15-12"],
        mvp: "Demonstração",
        topScorer: "Demonstração",
        competition: "Mundial — Demonstração"
    },

    {
        team1: "Polônia",
        flag1: "🇵🇱",
        team2: "Estados Unidos",
        flag2: "🇺🇸",
        score1: 3,
        score2: 0,
        sets: ["25-18", "25-21", "25-22"],
        mvp: "Demonstração",
        topScorer: "Demonstração",
        competition: "VNL — Demonstração"
    }

];


const competitions = [

    {
        name: "Volleyball Nations League",
        icon: "🌎",
        country: "Internacional",
        status: "Em andamento",
        date: "Temporada demonstrativa"
    },

    {
        name: "Campeonato Mundial",
        icon: "🏆",
        country: "Internacional",
        status: "Programado",
        date: "Calendário demonstrativo"
    },

    {
        name: "Campeonatos Continentais",
        icon: "🌍",
        country: "Continental",
        status: "Programado",
        date: "Calendário demonstrativo"
    },

    {
        name: "Competições de Clubes",
        icon: "🏐",
        country: "Clubes",
        status: "Em andamento",
        date: "Temporada demonstrativa"
    },

    {
        name: "Competições de Base",
        icon: "⭐",
        country: "Base",
        status: "Programado",
        date: "Calendário demonstrativo"
    },

    {
        name: "Vôlei de Praia",
        icon: "🏖️",
        country: "Internacional",
        status: "Em andamento",
        date: "Temporada demonstrativa"
    }

];


const teams = [

    {
        name: "Brasil",
        flag: "🇧🇷",
        country: "Brasil",
        ranking: 1
    },

    {
        name: "Itália",
        flag: "🇮🇹",
        country: "Itália",
        ranking: 2
    },

    {
        name: "Polônia",
        flag: "🇵🇱",
        country: "Polônia",
        ranking: 3
    },

    {
        name: "Japão",
        flag: "🇯🇵",
        country: "Japão",
        ranking: 4
    },

    {
        name: "França",
        flag: "🇫🇷",
        country: "França",
        ranking: 5
    },

    {
        name: "Turquia",
        flag: "🇹🇷",
        country: "Turquia",
        ranking: 6
    },

    {
        name: "Estados Unidos",
        flag: "🇺🇸",
        country: "Estados Unidos",
        ranking: 7
    },

    {
        name: "Argentina",
        flag: "🇦🇷",
        country: "Argentina",
        ranking: 8
    }

];


const players = [

    {
        name: "Gabi",
        country: "Brasil",
        flag: "🇧🇷",
        position: "Ponteira",
        photo: "🏐",
        points: 248,
        aces: 22,
        blocks: 19,
        attacks: 207,
        efficiency: "61%"
    },

    {
        name: "Jogadora Demo",
        country: "Itália",
        flag: "🇮🇹",
        position: "Oposta",
        photo: "🏐",
        points: 232,
        aces: 19,
        blocks: 27,
        attacks: 194,
        efficiency: "58%"
    },

    {
        name: "Jogador Demo",
        country: "Polônia",
        flag: "🇵🇱",
        position: "Central",
        photo: "🏐",
        points: 219,
        aces: 17,
        blocks: 34,
        attacks: 168,
        efficiency: "64%"
    },

    {
        name: "Jogadora Demo",
        country: "Japão",
        flag: "🇯🇵",
        position: "Líbero",
        photo: "🏐",
        points: 178,
        aces: 11,
        blocks: 9,
        attacks: 151,
        efficiency: "72%"
    }

];


const ranking = [

    ["Brasil", "🇧🇷", 8, 7, 1, 21, "22:7", "+15"],
    ["Itália", "🇮🇹", 8, 6, 2, 18, "20:10", "+10"],
    ["Polônia", "🇵🇱", 8, 6, 2, 18, "19:11", "+8"],
    ["Japão", "🇯🇵", 8, 5, 3, 16, "18:12", "+6"],
    ["França", "🇫🇷", 8, 4, 4, 13, "15:14", "+1"],
    ["Turquia", "🇹🇷", 8, 4, 4, 12, "14:15", "-1"]
];


const news = [

    {
        category: "selecoes",
        label: "SELEÇÕES",
        icon: "🇧🇷",
        date: "02 SET 2026",
        title: "Brasil se prepara para novo desafio internacional",
        summary: "Conteúdo demonstrativo para representar uma notícia esportiva."
    },

    {
        category: "jogadores",
        label: "JOGADORES",
        icon: "🏐",
        date: "01 SET 2026",
        title: "Estrelas do vôlei ganham destaque nas estatísticas",
        summary: "Análise demonstrativa de desempenho individual."
    },

    {
        category: "competicoes",
        label: "COMPETIÇÕES",
        icon: "🏆",
        date: "31 AGO 2026",
        title: "Temporada de competições promete grandes confrontos",
        summary: "Informação demonstrativa sobre calendário esportivo."
    },

    {
        category: "clubes",
        label: "CLUBES",
        icon: "🏟️",
        date: "30 AGO 2026",
        title: "Clubes intensificam preparação para a temporada",
        summary: "Conteúdo demonstrativo relacionado ao vôlei de clubes."
    },

    {
        category: "selecoes",
        label: "SELEÇÕES",
        icon: "🌎",
        date: "29 AGO 2026",
        title: "Seleções entram na reta decisiva da preparação",
        summary: "Notícia demonstrativa da plataforma."
    },

    {
        category: "jogadores",
        label: "JOGADORES",
        icon: "⭐",
        date: "28 AGO 2026",
        title: "Ranking individual ganha nova atualização",
        summary: "Ranking demonstrativo criado para o projeto."
    }

];


/* =========================================================
   ESTADO
========================================================= */

let favorites = JSON.parse(localStorage.getItem("voleiFavorites")) || [];

let globalScore =
    Number(localStorage.getItem("voleiGlobalScore")) || 0;

let currentQuiz = 0;
let quizScore = 0;

let reflexStart = 0;
let reflexTimer = null;


/* =========================================================
   DOM
========================================================= */

const loadingScreen =
    document.getElementById("loadingScreen");

const modalOverlay =
    document.getElementById("modalOverlay");

const modalContent =
    document.getElementById("modalContent");


/* =========================================================
   INICIALIZAÇÃO
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    createParticles();

    renderLiveMatches();
    renderMatches();
    renderResults();
    renderCompetitions();
    renderRanking();
    renderTeams();
    renderPlayers();
    renderIndividualRankings();
    renderNews();

    updateFavoriteCount();
    updateGlobalScore();

    initializeTheme();
    initializeFilters();
    initializeSearch();
    initializeHeader();

    animateCounters();

    if (window.lucide) {
        lucide.createIcons();
    }

    setTimeout(() => {
        loadingScreen.classList.add("hide");
    }, 900);

});


/* =========================================================
   HEADER
========================================================= */

function initializeHeader() {

    const header = document.getElementById("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 30) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    });

    const menuButton =
        document.getElementById("menuButton");

    const nav =
        document.getElementById("nav");

    menuButton.addEventListener("click", () => {
        nav.classList.toggle("open");
    });

    nav.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {
            nav.classList.remove("open");
        });

    });

}


/* =========================================================
   PARTICLES
========================================================= */

function createParticles() {

    const container =
        document.getElementById("particles");

    for (let i = 0; i < 35; i++) {

        const particle =
            document.createElement("span");

        particle.className = "particle";

        particle.style.left =
            `${Math.random() * 100}%`;

        particle.style.animationDuration =
            `${8 + Math.random() * 15}s`;

        particle.style.animationDelay =
            `${Math.random() * 10}s`;

        particle.style.opacity =
            `${0.15 + Math.random() * .4}`;

        container.appendChild(particle);
    }
}


/* =========================================================
   LIVE MATCHES
========================================================= */

function renderLiveMatches() {

    const container =
        document.getElementById("liveMatches");

    container.innerHTML =
        liveMatches.map(match => `

            <article class="live-card">

                <div class="live-top">

                    <span class="live-label">
                        <span class="live-dot"></span>
                        LIVE — DEMO
                    </span>

                    <span class="match-time">
                        Atualização simulada
                    </span>

                </div>

                <div class="teams-score">

                    <div class="team-live">
                        <span class="team-flag">${match.flag1}</span>
                        <span>${match.team1}</span>
                    </div>

                    <div class="score">
                        ${match.score1} — ${match.score2}
                    </div>

                    <div class="team-live">
                        <span class="team-flag">${match.flag2}</span>
                        <span>${match.team2}</span>
                    </div>

                </div>

                <div class="set-info">
                    <strong>${match.currentSet}</strong>
                    <span>${match.setScore}</span>
                </div>

                <div class="live-stats">

                    ${quickStat("Ataque", `${match.attack1}% / ${match.attack2}%`)}
                    ${quickStat("Bloqueios", `${match.blocks1} / ${match.blocks2}`)}
                    ${quickStat("Aces", `${match.aces1} / ${match.aces2}`)}
                    ${quickStat("Erros", `${match.errors1} / ${match.errors2}`)}

                </div>

                <button
                    class="track-button"
                    onclick="showLiveDetails('${match.team1}', '${match.team2}')"
                >
                    ACOMPANHAR PARTIDA
                </button>

            </article>

        `).join("");
}


function quickStat(label, value) {

    return `
        <div class="quick-stat">
            <strong>${value}</strong>
            <span>${label}</span>
        </div>
    `;
}


/* =========================================================
   MATCHES
========================================================= */

let currentMatchFilter = "todos";

function renderMatches(
    gender = currentMatchFilter,
    dateFilter = document.getElementById("dateFilter")?.value || "todos"
) {

    const container =
        document.getElementById("matchesContainer");

    let filtered = [...matches];

    if (
        gender !== "todos" &&
        !["selecoes", "clubes"].includes(gender)
    ) {
        filtered =
            filtered.filter(match => match.gender === gender);
    }

    if (
        gender === "selecoes" ||
        gender === "clubes"
    ) {
        filtered =
            filtered.filter(match => match.type === gender);
    }

    if (dateFilter !== "todos") {

        filtered =
            filtered.filter(match =>
                match.dateType === dateFilter
            );

    }

    if (!filtered.length) {

        container.innerHTML = `
            <div class="empty-search">
                <p>Nenhuma partida encontrada.</p>
            </div>
        `;

        return;
    }

    container.innerHTML =
        filtered.map(match => `

            <article class="match-card">

                <div class="match-card-top">

                    <span class="competition-name">
                        ${match.competition}
                    </span>

                    <span class="match-date">
                        ${match.date}
                    </span>

                </div>

                <div class="match-teams">

                    <div class="match-team">
                        <span>${match.flag1}</span>
                        <b>${match.team1}</b>
                    </div>

                    <div class="vs">
                        ${match.time}
                        <br>
                        VS
                    </div>

                    <div class="match-team">
                        <span>${match.flag2}</span>
                        <b>${match.team2}</b>
                    </div>

                </div>

                <div class="match-info">

                    <span>📍 ${match.location}</span>

                    <strong>
                        ${match.gender === "feminino"
                            ? "Feminino"
                            : "Masculino"}
                    </strong>

                </div>

            </article>

        `).join("");
}


/* =========================================================
   MATCH FILTERS
========================================================= */

function initializeFilters() {

    document.querySelectorAll(".filter")
        .forEach(button => {

            button.addEventListener("click", () => {

                document.querySelectorAll(".filter")
                    .forEach(btn =>
                        btn.classList.remove("active")
                    );

                button.classList.add("active");

                currentMatchFilter =
                    button.dataset.filter;

                renderMatches();

            });

        });

    document
        .getElementById("dateFilter")
        .addEventListener("change", () => {
            renderMatches();
        });

}


/* =========================================================
   RESULTS
========================================================= */

function renderResults() {

    const container =
        document.getElementById("resultsContainer");

    container.innerHTML =
        results.map((result, index) => `

            <article class="result-card">

                <div class="result-head">
                    <small>${result.competition}</small>
                    <span class="result-status">FINALIZADO</span>
                </div>

                <div class="result-teams">

                    <div class="result-team">
                        <span>${result.flag1}</span>
                        <strong>${result.team1}</strong>
                    </div>

                    <div class="result-score">
                        ${result.score1} × ${result.score2}
                    </div>

                    <div class="result-team">
                        <span>${result.flag2}</span>
                        <strong>${result.team2}</strong>
                    </div>

                </div>

                <div class="sets">

                    ${result.sets.map(set => `
                        <span class="set">${set}</span>
                    `).join("")}

                </div>

                <div class="result-highlights">

                    <div>
                        <span>🏆 Vencedor</span>
                        <strong>
                            ${result.score1 > result.score2
                                ? result.team1
                                : result.team2}
                        </strong>
                    </div>

                    <div>
                        <span>⭐ MVP</span>
                        <strong>${result.mvp}</strong>
                    </div>

                    <div>
                        <span>🔥 Maior pontuador</span>
                        <strong>${result.topScorer}</strong>
                    </div>

                </div>

                <button
                    class="track-button"
                    onclick="showResultDetails(${index})"
                >
                    VER DETALHES
                </button>

            </article>

        `).join("");
}


/* =========================================================
   COMPETITIONS
========================================================= */

function renderCompetitions() {

    const container =
        document.getElementById("competitionsContainer");

    container.innerHTML =
        competitions.map((competition, index) => `

            <article class="competition-card">

                <div>

                    <div class="competition-icon">
                        ${competition.icon}
                    </div>

                    <h3>${competition.name}</h3>

                    <p>${competition.country}</p>

                </div>

                <div>

                    <div class="competition-meta">
                        <span>● ${competition.status}</span>
                        <span>📅 ${competition.date}</span>
                    </div>

                    <button
                        class="competition-button"
                        onclick="showCompetition(${index})"
                    >
                        VER COMPETIÇÃO →
                    </button>

                </div>

            </article>

        `).join("");
}


/* =========================================================
   RANKING
========================================================= */

function renderRanking() {

    const container =
        document.getElementById("rankingTable");

    container.innerHTML =
        ranking.map((team, index) => `

            <tr>

                <td>
                    <span class="position-number">
                        ${index + 1}
                    </span>
                </td>

                <td>

                    <div class="table-team">

                        <span>${team[1]}</span>

                        <strong>${team[0]}</strong>

                    </div>

                </td>

                <td>${team[2]}</td>
                <td>${team[3]}</td>
                <td>${team[4]}</td>

                <td>
                    <strong>${team[5]}</strong>
                </td>

                <td>${team[6]}</td>

                <td>${team[7]}</td>

            </tr>

        `).join("");
}


/* =========================================================
   TEAMS
========================================================= */

function renderTeams() {

    const container =
        document.getElementById("teamsContainer");

    container.innerHTML =
        teams.map((team, index) => `

            <article class="team-card">

                <div class="team-logo">
                    ${team.flag}
                </div>

                <h3>${team.name}</h3>

                <span class="team-country">
                    ${team.country}
                </span>

                <div class="team-ranking">
                    Ranking
                    <strong>#${team.ranking}</strong>
                </div>

                <button onclick="toggleFavorite('team', '${team.name}')">
                    ${isFavorite("team", team.name)
                        ? "★ FAVORITADO"
                        : "☆ FAVORITAR"}
                </button>

            </article>

        `).join("");
}


/* =========================================================
   PLAYERS
========================================================= */

function renderPlayers() {

    const container =
        document.getElementById("playersContainer");

    container.innerHTML =
        players.map((player, index) => `

            <article class="player-card">

                <div class="player-photo">
                    ${player.photo}
                </div>

                <div class="player-info">

                    <small>
                        ${player.flag} ${player.country}
                    </small>

                    <h3>${player.name}</h3>

                    <p>${player.position}</p>

                    <div class="player-stats">

                        <div class="player-stat">
                            <strong>${player.points}</strong>
                            <span>PONTOS</span>
                        </div>

                        <div class="player-stat">
                            <strong>${player.aces}</strong>
                            <span>ACES</span>
                        </div>

                        <div class="player-stat">
                            <strong>${player.blocks}</strong>
                            <span>BLOQ.</span>
                        </div>

                        <div class="player-stat">
                            <strong>${player.efficiency}</strong>
                            <span>EFIC.</span>
                        </div>

                    </div>

                    <button
                        class="track-button"
                        onclick="toggleFavorite('player', '${player.name}')"
                    >
                        ${isFavorite("player", player.name)
                            ? "★ FAVORITADO"
                            : "☆ FAVORITAR"}
                    </button>

                </div>

            </article>

        `).join("");
}


/* =========================================================
   INDIVIDUAL RANKINGS
========================================================= */

function renderIndividualRankings() {

    const scorerContainer =
        document.getElementById("scorerRanking");

    const blockContainer =
        document.getElementById("blockRanking");

    const aceContainer =
        document.getElementById("aceRanking");


    const scorers =
        [...players]
            .sort((a,b) => b.points - a.points)
            .slice(0,3);

    const blockers =
        [...players]
            .sort((a,b) => b.blocks - a.blocks)
            .slice(0,3);

    const aces =
        [...players]
            .sort((a,b) => b.aces - a.aces)
            .slice(0,3);


    scorerContainer.innerHTML =
        createPlayerRanking(scorers, "points");

    blockContainer.innerHTML =
        createPlayerRanking(blockers, "blocks");

    aceContainer.innerHTML =
        createPlayerRanking(aces, "aces");

}


function createPlayerRanking(list, property) {

    return list.map((player,index) => `

        <div class="rank-person">

            <span class="rank-number">
                0${index + 1}
            </span>

            <span class="rank-avatar">
                ${player.flag}
            </span>

            <div class="rank-person-info">

                <strong>${player.name}</strong>

                <span>${player.position}</span>

            </div>

            <span class="rank-value">
                ${player[property]}
            </span>

        </div>

    `).join("");
}


/* =========================================================
   NEWS
========================================================= */

function renderNews(category = "todos") {

    const container =
        document.getElementById("newsContainer");

    let filtered = news;

    if (category !== "todos") {
        filtered =
            news.filter(item =>
                item.category === category
            );
    }

    container.innerHTML =
        filtered.map((item,index) => `

            <article class="news-card">

                <div class="news-image">

                    ${item.icon}

                    <span class="news-category">
                        ${item.label}
                    </span>

                </div>

                <div class="news-content">

                    <span class="news-date">
                        ${item.date}
                    </span>

                    <h3>${item.title}</h3>

                    <p>${item.summary}</p>

                    <button
                        class="news-button"
                        onclick="showNews(${news.indexOf(item)})"
                    >
                        LER NOTÍCIA
                        →
                    </button>

                </div>

            </article>

        `).join("");
}


document.querySelectorAll(".news-filter-button")
    .forEach(button => {

        button.addEventListener("click", () => {

            document
                .querySelectorAll(".news-filter-button")
                .forEach(btn =>
                    btn.classList.remove("active")
                );

            button.classList.add("active");

            renderNews(button.dataset.newsFilter);

        });

    });


/* =========================================================
   FAVORITOS
========================================================= */

function isFavorite(type, name) {

    return favorites.some(item =>
        item.type === type &&
        item.name === name
    );

}


function toggleFavorite(type, name) {

    const index =
        favorites.findIndex(item =>
            item.type === type &&
            item.name === name
        );

    if (index >= 0) {

        favorites.splice(index,1);

        showNotification(
            `${name} removido dos favoritos.`
        );

    } else {

        favorites.push({
            type,
            name
        });

        showNotification(
            `${name} adicionado aos favoritos! ⭐`
        );

    }

    localStorage.setItem(
        "voleiFavorites",
        JSON.stringify(favorites)
    );

    updateFavoriteCount();

    renderTeams();
    renderPlayers();
}


function updateFavoriteCount() {

    document.getElementById("favoriteCount")
        .textContent = favorites.length;

}


document
    .getElementById("favoriteButton")
    .addEventListener("click", showFavorites);


/* =========================================================
   FAVORITES MODAL
========================================================= */

function showFavorites() {

    if (!favorites.length) {

        openModal(`
            <div class="quiz-score">
                <div style="font-size:55px">⭐</div>
                <h2>Meus Favoritos</h2>
                <p>
                    Você ainda não adicionou nenhum item aos favoritos.
                </p>
            </div>
        `);

        return;
    }

    openModal(`

        <span class="eyebrow">PERSONALIZAÇÃO</span>

        <h2 style="margin:8px 0 25px">
            ⭐ Meus Favoritos
        </h2>

        ${favorites.map(item => `

            <div class="search-result">

                <div class="search-result-icon">
                    ${item.type === "team"
                        ? "🏐"
                        : item.type === "player"
                            ? "⭐"
                            : "🏆"}
                </div>

                <div>

                    <small>
                        ${item.type.toUpperCase()}
                    </small>

                    <strong>
                        ${item.name}
                    </strong>

                </div>

            </div>

        `).join("")}

    `);

}


/* =========================================================
   THEME
========================================================= */

function initializeTheme() {

    const savedTheme =
        localStorage.getItem("voleiTheme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
    }

    updateThemeIcon();

    document
        .getElementById("themeButton")
        .addEventListener("click", toggleTheme);

}


function toggleTheme() {

    document.body.classList.toggle("dark");

    localStorage.setItem(
        "voleiTheme",
        document.body.classList.contains("dark")
            ? "dark"
            : "light"
    );

    updateThemeIcon();

}


function updateThemeIcon() {

    const button =
        document.getElementById("themeButton");

    if (!button) return;

    button.innerHTML =
        document.body.classList.contains("dark")
            ? `<i data-lucide="sun"></i>`
            : `<i data-lucide="moon"></i>`;

    if (window.lucide) {
        lucide.createIcons();
    }

}


/* =========================================================
   SEARCH
========================================================= */

function initializeSearch() {

    const searchButton =
        document.getElementById("searchButton");

    const closeSearch =
        document.getElementById("closeSearch");

    const overlay =
        document.getElementById("searchOverlay");

    const input =
        document.getElementById("globalSearch");

    searchButton.addEventListener("click", () => {

        overlay.classList.add("open");

        setTimeout(() => input.focus(), 200);

    });

    closeSearch.addEventListener("click", () => {
        overlay.classList.remove("open");
    });

    overlay.addEventListener("click", event => {

        if (event.target === overlay) {
            overlay.classList.remove("open");
        }

    });

    input.addEventListener("input", () => {

        performSearch(input.value);

    });

}


function performSearch(query) {

    const container =
        document.getElementById("searchResults");

    query =
        query.trim().toLowerCase();

    if (!query) {

        container.innerHTML = `
            <div class="empty-search">
                <i data-lucide="search"></i>
                <p>Digite algo para pesquisar.</p>
            </div>
        `;

        if (window.lucide) {
            lucide.createIcons();
        }

        return;
    }


    const resultsSearch = [];


    teams.forEach(team => {

        if (
            team.name.toLowerCase()
                .includes(query)
        ) {

            resultsSearch.push({
                type: "TIME",
                name: team.name,
                icon: team.flag
            });

        }

    });


    players.forEach(player => {

        if (
            player.name.toLowerCase()
                .includes(query) ||
            player.country.toLowerCase()
                .includes(query)
        ) {

            resultsSearch.push({
                type: "JOGADOR",
                name: player.name,
                icon: player.flag
            });

        }

    });


    competitions.forEach(competition => {

        if (
            competition.name.toLowerCase()
                .includes(query)
        ) {

            resultsSearch.push({
                type: "COMPETIÇÃO",
                name: competition.name,
                icon: competition.icon
            });

        }

    });


    matches.forEach(match => {

        if (
            match.team1.toLowerCase().includes(query) ||
            match.team2.toLowerCase().includes(query)
        ) {

            resultsSearch.push({
                type: "JOGO",
                name:
                    `${match.team1} × ${match.team2}`,
                icon: "🏐"
            });

        }

    });


    news.forEach(item => {

        if (
            item.title.toLowerCase()
                .includes(query)
        ) {

            resultsSearch.push({
                type: "NOTÍCIA",
                name: item.title,
                icon: item.icon
            });

        }

    });


    if (!resultsSearch.length) {

        container.innerHTML = `
            <div class="empty-search">
                <div style="font-size:40px">🔎</div>
                <p>Nenhum resultado encontrado.</p>
            </div>
        `;

        return;
    }


    container.innerHTML =
        resultsSearch.map(result => `

            <div class="search-result">

                <div class="search-result-icon">
                    ${result.icon}
                </div>

                <div>

                    <small>${result.type}</small>

                    <strong>${result.name}</strong>

                </div>

            </div>

        `).join("");

}


/* =========================================================
   MODAL
========================================================= */

function openModal(content) {

    modalContent.innerHTML = content;

    modalOverlay.classList.add("open");

    document.body.style.overflow = "hidden";

    if (window.lucide) {
        lucide.createIcons();
    }

}


function closeModal() {

    modalOverlay.classList.remove("open");

    document.body.style.overflow = "";

}


modalOverlay.addEventListener("click", event => {

    if (event.target === modalOverlay) {
        closeModal();
    }

});


document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        closeModal();
    }

});


/* =========================================================
   LIVE DETAILS
========================================================= */

function showLiveDetails(team1, team2) {

    const match =
        liveMatches.find(item =>
            item.team1 === team1 &&
            item.team2 === team2
        );

    if (!match) return;

    openModal(`

        <span class="eyebrow">AO VIVO — DEMONSTRAÇÃO</span>

        <h2 style="margin:8px 0 30px">
            ${match.team1} ${match.flag1}
            ×
            ${match.team2} ${match.flag2}
        </h2>

        <div class="result-teams">

            <div class="result-team">
                <span>${match.flag1}</span>
                <strong>${match.team1}</strong>
            </div>

            <div class="result-score">
                ${match.score1} — ${match.score2}
            </div>

            <div class="result-team">
                <span>${match.flag2}</span>
                <strong>${match.team2}</strong>
            </div>

        </div>

        <div class="set-info">

            <strong>${match.currentSet}</strong>

            <span>${match.setScore}</span>

        </div>

        <h3 style="margin:25px 0 15px">
            Estatísticas rápidas
        </h3>

        ${modalStat("Ataque", match.attack1, match.attack2)}
        ${modalStat("Bloqueios", match.blocks1, match.blocks2)}
        ${modalStat("Aces", match.aces1, match.aces2)}
        ${modalStat("Erros", match.errors1, match.errors2)}

        <p style="
            margin-top:25px;
            color:var(--gray-600);
            font-size:10px;
        ">
            ⚠️ Dados exibidos apenas para demonstração.
            Nenhuma informação representa um jogo real em tempo real.
        </p>

    `);

}


function modalStat(label, value1, value2) {

    return `
        <div style="
            display:flex;
            justify-content:space-between;
            padding:13px 0;
            border-bottom:1px solid var(--gray-200);
            font-size:11px;
        ">
            <strong>${value1}</strong>
            <span>${label}</span>
            <strong>${value2}</strong>
        </div>
    `;

}


/* =========================================================
   RESULT DETAILS
========================================================= */

function showResultDetails(index) {

    const result = results[index];

    openModal(`

        <span class="eyebrow">
            RESULTADO — DEMONSTRAÇÃO
        </span>

        <h2 style="margin:8px 0 30px">
            ${result.team1} ${result.flag1}
            ×
            ${result.team2} ${result.flag2}
        </h2>

        <div class="result-teams">

            <div class="result-team">
                <span>${result.flag1}</span>
                <strong>${result.team1}</strong>
            </div>

            <div class="result-score">
                ${result.score1} × ${result.score2}
            </div>

            <div class="result-team">
                <span>${result.flag2}</span>
                <strong>${result.team2}</strong>
            </div>

        </div>

        <h3 style="margin:30px 0 12px">
            Sets
        </h3>

        <div class="sets">

            ${result.sets.map(set => `
                <span class="set">${set}</span>
            `).join("")}

        </div>

        <div class="result-highlights">

            <div>
                <span>🏆 Vencedor</span>
                <strong>
                    ${result.score1 > result.score2
                        ? result.team1
                        : result.team2}
                </strong>
            </div>

            <div>
                <span>⭐ MVP</span>
                <strong>${result.mvp}</strong>
            </div>

            <div>
                <span>🔥 Maior pontuador</span>
                <strong>${result.topScorer}</strong>
            </div>

        </div>

        <p style="
            margin-top:25px;
            color:var(--gray-600);
            font-size:10px;
        ">
            ⚠️ Resultado criado exclusivamente para demonstração da interface.
        </p>

    `);

}


/* =========================================================
   COMPETITION MODAL
========================================================= */

function showCompetition(index) {

    const competition =
        competitions[index];

    openModal(`

        <div style="
            font-size:60px;
            margin-bottom:15px;
        ">
            ${competition.icon}
        </div>

        <span class="eyebrow">
            COMPETIÇÃO
        </span>

        <h2 style="margin:8px 0">
            ${competition.name}
        </h2>

        <p style="
            color:var(--gray-600);
            font-size:11px;
            line-height:1.7;
        ">
            Informações demonstrativas sobre esta competição.
        </p>

        <div class="individual-ranking-grid"
             style="margin-top:25px;">

            <div class="ranking-card">
                <strong>🏐 Jogos</strong>
                <p style="font-size:10px;margin-top:8px">
                    Calendário demonstrativo
                </p>
            </div>

            <div class="ranking-card">
                <strong>🏆 Resultados</strong>
                <p style="font-size:10px;margin-top:8px">
                    Placares demonstrativos
                </p>
            </div>

            <div class="ranking-card">
                <strong>📊 Estatísticas</strong>
                <p style="font-size:10px;margin-top:8px">
                    Dados demonstrativos
                </p>
            </div>

        </div>

    `);

}


/* =========================================================
   NEWS MODAL
========================================================= */

function showNews(index) {

    const item = news[index];

    openModal(`

        <div style="
            font-size:65px;
            margin-bottom:10px;
        ">
            ${item.icon}
        </div>

        <span class="eyebrow">
            ${item.label}
        </span>

        <h2 style="margin:8px 0 12px">
            ${item.title}
        </h2>

        <span style="
            color:var(--gray-400);
            font-size:9px;
        ">
            ${item.date}
        </span>

        <p style="
            margin-top:25px;
            color:var(--gray-600);
            font-size:12px;
            line-height:1.8;
        ">
            ${item.summary}
        </p>

        <p style="
            margin-top:20px;
            padding:15px;
            border-radius:12px;
            background:var(--gray-200);
            color:var(--gray-600);
            font-size:9px;
        ">
            ℹ️ Esta notícia é conteúdo demonstrativo.
            Em uma versão conectada à internet, este espaço poderá
            receber notícias reais de uma fonte/API confiável.
        </p>

    `);

}


/* =========================================================
   QUIZ
========================================================= */

const quizQuestions = [

    {
        question:
            "Quantos jogadores de uma equipe ficam em quadra no vôlei de salão?",
        options: [
            "5 jogadores",
            "6 jogadores",
            "7 jogadores",
            "8 jogadores"
        ],
        correct: 1
    },

    {
        question:
            "Qual fundamento é utilizado para iniciar uma jogada?",
        options: [
            "Bloqueio",
            "Manchete",
            "Saque",
            "Levantamento"
        ],
        correct: 2
    },

    {
        question:
            "Qual posição é especializada na defesa?",
        options: [
            "Líbero",
            "Oposto",
            "Central",
            "Levantador"
        ],
        correct: 0
    },

    {
        question:
            "Quantos sets normalmente são necessários para vencer uma partida?",
        options: [
            "2",
            "3",
            "4",
            "5"
        ],
        correct: 2
    },

    {
        question:
            "Qual fundamento é realizado próximo à rede para impedir um ataque?",
        options: [
            "Saque",
            "Bloqueio",
            "Manchete",
            "Defesa"
        ],
        correct: 1
    },

    {
        question:
            "Qual é uma das principais funções do levantador?",
        options: [
            "Defender todos os ataques",
            "Organizar o ataque",
            "Fazer apenas saques",
            "Substituir o líbero"
        ],
        correct: 1
    },

    {
        question:
            "Qual dessas competições é conhecida pela sigla VNL?",
        options: [
            "Volleyball Nations League",
            "Volleyball National League",
            "World Volleyball League",
            "Volleyball National Championship"
        ],
        correct: 0
    },

    {
        question:
            "Qual jogador costuma usar uma camisa diferente?",
        options: [
            "Central",
            "Oposto",
            "Líbero",
            "Ponteiro"
        ],
        correct: 2
    },

    {
        question:
            "Quantos toques uma equipe pode realizar antes de devolver a bola?",
        options: [
            "2",
            "3",
            "4",
            "5"
        ],
        correct: 1
    },

    {
        question:
            "Qual fundamento envolve atacar a bola para o campo adversário?",
        options: [
            "Cortada",
            "Manchete",
            "Recepção",
            "Defesa"
        ],
        correct: 0
    }

];


function openQuiz() {

    currentQuiz = 0;
    quizScore = 0;

    renderQuizQuestion();

    openModal(
        `<div id="quizContainer"></div>`
    );

    renderQuizQuestion();

}


function renderQuizQuestion() {

    const container =
        document.getElementById("quizContainer");

    if (!container) return;

    if (currentQuiz >= quizQuestions.length) {

        finishQuiz();

        return;
    }

    const question =
        quizQuestions[currentQuiz];

    const progress =
        ((currentQuiz) /
            quizQuestions.length) * 100;


    container.innerHTML = `

        <span class="eyebrow">
            QUIZ DO VÔLEI
        </span>

        <h2 style="margin-top:8px">
            Pergunta ${currentQuiz + 1}
            / ${quizQuestions.length}
        </h2>

        <div class="quiz-progress">
            <span style="width:${progress}%"></span>
        </div>

        <h3 class="quiz-question">
            ${question.question}
        </h3>

        <div>

            ${question.options.map(
                (option,index) => `

                    <button
                        class="quiz-option"
                        onclick="answerQuiz(${index})"
                    >
                        ${option}
                    </button>

                `
            ).join("")}

        </div>

        <p style="
            margin-top:20px;
            color:var(--gray-600);
            font-size:9px;
        ">
            ⭐ Cada resposta correta vale 10 pontos.
        </p>

    `;

}


function answerQuiz(selected) {

    const question =
        quizQuestions[currentQuiz];

    const buttons =
        document.querySelectorAll(".quiz-option");

    buttons.forEach(button =>
        button.disabled = true
    );

    if (selected === question.correct) {

        buttons[selected]
            .classList.add("correct");

        quizScore += 10;

        showNotification("Resposta correta! +10 ⭐");

    } else {

        buttons[selected]
            .classList.add("wrong");

        buttons[question.correct]
            .classList.add("correct");

        showNotification("Resposta incorreta.");

    }

    setTimeout(() => {

        currentQuiz++;

        renderQuizQuestion();

    }, 800);

}


function finishQuiz() {

    globalScore += quizScore;

    localStorage.setItem(
        "voleiGlobalScore",
        globalScore
    );

    updateGlobalScore();

    const container =
        document.getElementById("quizContainer");

    if (!container) return;

    container.innerHTML = `

        <div class="quiz-score">

            <div style="font-size:65px">
                🏆
            </div>

            <span class="eyebrow">
                QUIZ FINALIZADO
            </span>

            <h2>Sua pontuação</h2>

            <strong>
                ${quizScore}
            </strong>

            <p>
                Você conquistou ${quizScore / 10}
                de ${quizQuestions.length} possíveis.
            </p>

            <button
                class="primary-button"
                style="margin-top:20px"
                onclick="openQuiz()"
            >
                JOGAR NOVAMENTE
            </button>

        </div>

    `;

}


/* =========================================================
   SERVE GAME
========================================================= */

function openServeGame() {

    let gameScore = 0;
    let attempts = 0;

    openModal(`

        <div class="serve-game">

            <span class="eyebrow">
                DESAFIO DO SAQUE
            </span>

            <h2 style="margin-top:8px">
                Acerte o momento!
            </h2>

            <div class="serve-ball">
                🏐
            </div>

            <div class="serve-meter">

                <div class="serve-zone">
                    <span class="serve-marker"></span>
                </div>

            </div>

            <p style="
                color:var(--gray-600);
                font-size:10px;
            ">
                Clique quando o marcador estiver
                na zona verde.
            </p>

            <button
                id="serveButton"
                class="primary-button"
                style="margin-top:25px"
            >
                🏐 SACAR
            </button>

            <h3 style="margin-top:25px">
                Pontuação:
                <span id="serveScore">0</span>
            </h3>

        </div>

    `);

    const button =
        document.getElementById("serveButton");

    button.addEventListener("click", () => {

        attempts++;

        const marker =
            document.querySelector(".serve-marker");

        const position =
            parseFloat(
                marker.getBoundingClientRect().left
            );

        const meter =
            document
                .querySelector(".serve-meter")
                .getBoundingClientRect();

        const relative =
            ((position - meter.left) / meter.width) * 100;

        let points = 0;

        if (relative >= 65 && relative <= 75) {
            points = 100;
        } else if (relative >= 30 && relative <= 85) {
            points = 50;
        } else {
            points = 10;
        }

        gameScore += points;

        document.getElementById("serveScore")
            .textContent = gameScore;

        showNotification(
            `Saque: +${points} pontos! 🏐`
        );

        if (attempts >= 5) {

            globalScore += gameScore;

            localStorage.setItem(
                "voleiGlobalScore",
                globalScore
            );

            updateGlobalScore();

            button.disabled = true;

            button.textContent =
                "DESAFIO FINALIZADO";

            showNotification(
                `Desafio finalizado! ${gameScore} pontos.`
            );

        }

    });

}


/* =========================================================
   REFLEX GAME
========================================================= */

function openReflexGame() {

    openModal(`

        <span class="eyebrow">
            DESAFIO DE REFLEXO
        </span>

        <h2 style="margin-top:8px">
            Clique no alvo!
        </h2>

        <p style="
            margin-top:8px;
            color:var(--gray-600);
            font-size:10px;
        ">
            Aguarde o alvo aparecer e clique nele.
        </p>

        <div class="reflex-area" id="reflexArea">
        </div>

        <h3 style="margin-top:15px">
            Tempo:
            <span id="reactionTime">
                -- ms
            </span>
        </h3>

        <button
            class="primary-button"
            style="margin-top:15px"
            onclick="startReflexGame()"
        >
            COMEÇAR
        </button>

    `);

}


function startReflexGame() {

    const area =
        document.getElementById("reflexArea");

    const timeElement =
        document.getElementById("reactionTime");

    area.innerHTML = "";

    showNotification("Prepare-se...");

    setTimeout(() => {

        const target =
            document.createElement("button");

        target.className =
            "reflex-target";

        target.textContent = "⚡";

        target.style.left =
            `${Math.random() * 85}%`;

        target.style.top =
            `${Math.random() * 75}%`;

        area.appendChild(target);

        reflexStart =
            performance.now();

        target.addEventListener("click", () => {

            const elapsed =
                Math.round(
                    performance.now() -
                    reflexStart
                );

            timeElement.textContent =
                `${elapsed} ms`;

            globalScore +=
                Math.max(
                    1,
                    Math.round(1000 / elapsed * 10)
                );

            localStorage.setItem(
                "voleiGlobalScore",
                globalScore
            );

            updateGlobalScore();

            target.remove();

            showNotification(
                `Reflexo: ${elapsed} ms! ⚡`
            );

        });

    }, 1000 + Math.random() * 2000);

}


/* =========================================================
   TEAM BUILDER
========================================================= */

function openTeamBuilder() {

    openModal(`

        <span class="eyebrow">
            ESTRATÉGIA
        </span>

        <h2 style="margin-top:8px">
            🏆 Monte seu time
        </h2>

        <p style="
            color:var(--gray-600);
            font-size:10px;
            margin:8px 0 20px;
        ">
            Escolha os jogadores para cada posição.
        </p>

        <div class="team-builder-grid">

            ${createPlayerSelect("Levantador")}
            ${createPlayerSelect("Oposto")}
            ${createPlayerSelect("Ponteiro 1")}
            ${createPlayerSelect("Ponteiro 2")}
            ${createPlayerSelect("Central")}
            ${createPlayerSelect("Líbero")}

        </div>

        <button
            class="primary-button"
            style="margin-top:20px"
            onclick="generateTeam()"
        >
            MONTAR ESCALAÇÃO
        </button>

        <div id="teamPreview"></div>

    `);

}


function createPlayerSelect(position) {

    return `

        <select
            class="player-select"
            data-position="${position}"
        >

            <option value="">
                ${position}
            </option>

            ${players.map(player => `
                <option value="${player.name}">
                    ${player.name}
                </option>
            `).join("")}

        </select>

    `;

}


function generateTeam() {

    const selects =
        document.querySelectorAll(".player-select");

    const preview =
        document.getElementById("teamPreview");

    const positions = [
        {left:"20%",top:"20%"},
        {left:"20%",top:"65%"},
        {left:"45%",top:"20%"},
        {left:"45%",top:"65%"},
        {left:"72%",top:"30%"},
        {left:"72%",top:"60%"}
    ];

    let html = `
        <div class="team-preview">
    `;

    selects.forEach((select,index) => {

        const name =
            select.value || "?";

        html += `

            <div
                class="team-preview-player"
                style="
                    left:${positions[index].left};
                    top:${positions[index].top};
                "
                title="${select.dataset.position}: ${name}"
            >
                🏐
            </div>

        `;

    });

    html += `
        </div>
    `;

    preview.innerHTML = html;

    showNotification(
        "Escalação criada! 🏆"
    );

}


/* =========================================================
   COURT POSITIONS
========================================================= */

function showPosition(number) {

    const positions = {

        1: {
            title: "Levantador",
            description:
                "É o principal responsável por organizar o ataque e distribuir as bolas para os atacantes."
        },

        2: {
            title: "Oposto",
            description:
                "Normalmente atua como uma das principais opções ofensivas da equipe, especialmente nas bolas altas."
        },

        3: {
            title: "Ponteiro",
            description:
                "Participa do ataque e também possui papel importante na recepção e no sistema defensivo."
        },

        4: {
            title: "Central",
            description:
                "Atua principalmente próximo à rede, sendo fundamental nos bloqueios e ataques rápidos."
        },

        5: {
            title: "Líbero",
            description:
                "Especialista em defesa e recepção. Possui regras específicas de atuação."
        },

        6: {
            title: "Ponteiro",
            description:
                "Combina funções ofensivas e defensivas, ajudando tanto no ataque quanto na recepção."
        }

    };

    const data =
        positions[number];

    document
        .querySelectorAll(".position")
        .forEach(position =>
            position.classList.remove("selected")
        );

    document
        .querySelector(`.pos-${number}`)
        .classList.add("selected");

    document.getElementById("positionInfo")
        .innerHTML = `

            <span>POSIÇÃO ${number}</span>

            <h3>🏐 ${data.title}</h3>

            <p>
                ${data.description}
            </p>

        `;

}


/* =========================================================
   COUNTERS
========================================================= */

function animateCounters() {

    const counters =
        document.querySelectorAll("[data-counter]");

    const observer =
        new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting)
                    return;

                const element =
                    entry.target;

                const target =
                    Number(
                        element.dataset.counter
                    );

                let current = 0;

                const duration = 1000;

                const step =
                    target / (duration / 20);

                const timer =
                    setInterval(() => {

                        current += step;

                        if (current >= target) {

                            current = target;

                            clearInterval(timer);

                        }

                        element.textContent =
                            Math.round(current);

                    },20);

                observer.unobserve(element);

            });

        }, {
            threshold: .5
        });


    counters.forEach(counter =>
        observer.observe(counter)
    );

}


/* =========================================================
   GLOBAL SCORE
========================================================= */

function updateGlobalScore() {

    document.getElementById("globalScore")
        .textContent = globalScore;

}


/* =========================================================
   NOTIFICATIONS
========================================================= */

function showNotification(message) {

    const container =
        document.getElementById("toastContainer");

    const toast =
        document.createElement("div");

    toast.className = "toast";

    toast.innerHTML = `
        <span>🏐</span>
        <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {

        toast.style.opacity = "0";
        toast.style.transform =
            "translateX(30px)";

        setTimeout(() => {
            toast.remove();
        },300);

    },2800);

}


/* =========================================================
   SCROLL
========================================================= */

function scrollToSection(id) {

    const section =
        document.getElementById(id);

    if (!section) return;

    section.scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================================================
   API — FUTURA INTEGRAÇÃO
========================================================= */

/*
    ========================================================
    IMPORTANTE
    ========================================================

    Esta função está preparada para futuramente receber
    dados de uma API esportiva real.

    Exemplo conceitual:

    async function fetchLiveData() {

        const response = await fetch(
            "URL_DA_API"
        );

        const data = await response.json();

        // Transformar os dados da API
        // para o formato utilizado pelo site.

        liveMatches = data.matches;

        renderLiveMatches();

    }

    Nunca coloque uma chave secreta diretamente
    neste arquivo em um projeto público.

    Em uma aplicação real, normalmente seria necessário
    um backend/proxy para proteger credenciais da API.
*/


async function fetchLiveData() {

    console.log(
        "API não conectada. Utilizando dados demonstrativos."
    );

    /*
        FUTURO:

        const response = await fetch("URL_DA_API");

        if (!response.ok) {
            throw new Error("Erro ao buscar dados.");
        }

        const data = await response.json();

        matches = data.matches;

        renderMatches();
        renderLiveMatches();
        renderResults();
        renderRanking();
    */

}


/* =========================================================
   ATUALIZAÇÃO DEMONSTRATIVA
========================================================= */

function simulateLiveUpdate() {

    /*
        Apenas demonstra como os dados poderiam
        ser atualizados automaticamente.

        Não representa uma partida real.
    */

    liveMatches.forEach(match => {

        if (Math.random() > .65) {

            const team =
                Math.random() > .5
                    ? "score1"
                    : "score2";

            if (match[team] < 3) {
                match[team]++;
            }

        }

    });

    renderLiveMatches();

}


/*
    Atualização demonstrativa a cada 20 segundos.

    Em produção, substituir por uma chamada à API real.
*/

setInterval(() => {

    simulateLiveUpdate();

}, 20000);


/* =========================================================
   FIM
========================================================= */
