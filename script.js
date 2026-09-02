/* ============================================================
   VÔLEI ARENA
   JavaScript puro
   ============================================================

   IMPORTANTE:
   Os dados abaixo são DEMONSTRATIVOS.

   Para utilizar dados reais, substitua a função
   fetchLiveData() por uma chamada para sua API esportiva.

   Exemplo futuro:

   async function fetchLiveData() {
       const response = await fetch("URL_DA_API");
       const data = await response.json();

       matches = data.matches;
       results = data.results;

       renderMatches();
       renderResults();
   }

   ============================================================ */


/* ================= DADOS DEMONSTRATIVOS ================= */

const matches = [
    {
        id: 1,
        date: "Hoje",
        time: "19:30",
        competition: "VNL",
        gender: "feminino",
        type: "selecao",
        team1: "Brasil",
        flag1: "🇧🇷",
        team2: "Itália",
        flag2: "🇮🇹",
        location: "Ginásio Internacional"
    },
    {
        id: 2,
        date: "Hoje",
        time: "21:00",
        competition: "VNL",
        gender: "masculino",
        type: "selecao",
        team1: "Brasil",
        flag1: "🇧🇷",
        team2: "Polônia",
        flag2: "🇵🇱",
        location: "Arena Central"
    },
    {
        id: 3,
        date: "Amanhã",
        time: "15:00",
        competition: "Clubes",
        gender: "feminino",
        type: "clubes",
        team1: "Minas",
        flag1: "🇧🇷",
        team2: "Osasco",
        flag2: "🇧🇷",
        location: "Arena Minas"
    },
    {
        id: 4,
        date: "Amanhã",
        time: "18:30",
        competition: "Mundial",
        gender: "masculino",
        type: "clubes",
        team1: "Trentino",
        flag1: "🇮🇹",
        team2: "Sada Cruzeiro",
        flag2: "🇧🇷",
        location: "Palazzo dello Sport"
    },
    {
        id: 5,
        date: "Esta semana",
        time: "20:00",
        competition: "VNL",
        gender: "feminino",
        type: "selecao",
        team1: "Japão",
        flag1: "🇯🇵",
        team2: "Brasil",
        flag2: "🇧🇷",
        location: "Arena Internacional"
    },
    {
        id: 6,
        date: "Esta semana",
        time: "21:30",
        competition: "VNL",
        gender: "masculino",
        type: "selecao",
        team1: "Argentina",
        flag1: "🇦🇷",
        team2: "Brasil",
        flag2: "🇧🇷",
        location: "Arena Nacional"
    }
];


const results = [
    {
        id: 1,
        date: "Ontem",
        competition: "VNL",
        team1: "Brasil",
        flag1: "🇧🇷",
        team2: "Japão",
        flag2: "🇯🇵",
        score: "3 × 1",
        sets: ["25-20", "21-25", "25-18", "25-19"],
        winner: "Brasil",
        mvp: "Gabi",
        points: "25"
    },
    {
        id: 2,
        date: "28 AGO",
        competition: "VNL",
        team1: "Itália",
        flag1: "🇮🇹",
        team2: "Turquia",
        flag2: "🇹🇷",
        score: "3 × 2",
        sets: ["25-23", "21-25", "25-18", "20-25", "15-12"],
        winner: "Itália",
        mvp: "Egonu",
        points: "29"
    },
    {
        id: 3,
        date: "27 AGO",
        competition: "Clubes",
        team1: "Minas",
        flag1: "🇧🇷",
        team2: "Osasco",
        flag2: "🇧🇷",
        score: "3 × 0",
        sets: ["25-19", "25-21", "25-17"],
        winner: "Minas",
        mvp: "Thaisa",
        points: "18"
    }
];


const competitions = [
    {
        id: 1,
        icon: "🌎",
        name: "Volleyball Nations League",
        country: "Internacional",
        status: "ATIVA",
        date: "Temporada 2026"
    },
    {
        id: 2,
        icon: "🏆",
        name: "Campeonato Mundial",
        country: "Internacional",
        status: "EM BREVE",
        date: "Temporada 2026"
    },
    {
        id: 3,
        icon: "🏖️",
        name: "Vôlei de Praia",
        country: "Internacional",
        status: "ATIVA",
        date: "Circuito Mundial"
    },
    {
        id: 4,
        icon: "🇧🇷",
        name: "Superliga",
        country: "Brasil",
        status: "ATIVA",
        date: "Temporada 2026"
    },
    {
        id: 5,
        icon: "🌐",
        name: "Club World Championship",
        country: "Internacional",
        status: "EM BREVE",
        date: "Temporada 2026"
    },
    {
        id: 6,
        icon: "🥇",
        name: "Campeonatos de Base",
        country: "Internacional",
        status: "ATIVA",
        date: "Categorias de base"
    }
];


const teams = [
    {
        id: 1,
        name: "Brasil",
        country: "Seleção",
        flag: "🇧🇷",
        ranking: 1
    },
    {
        id: 2,
        name: "Itália",
        country: "Seleção",
        flag: "🇮🇹",
        ranking: 2
    },
    {
        id: 3,
        name: "Turquia",
        country: "Seleção",
        flag: "🇹🇷",
        ranking: 3
    },
    {
        id: 4,
        name: "Japão",
        country: "Seleção",
        flag: "🇯🇵",
        ranking: 4
    },
    {
        id: 5,
        name: "Minas",
        country: "Clube • Brasil",
        flag: "🇧🇷",
        ranking: 5
    },
    {
        id: 6,
        name: "Osasco",
        country: "Clube • Brasil",
        flag: "🇧🇷",
        ranking: 6
    },
    {
        id: 7,
        name: "Polônia",
        country: "Seleção",
        flag: "🇵🇱",
        ranking: 7
    },
    {
        id: 8,
        name: "EUA",
        country: "Seleção",
        flag: "🇺🇸",
        ranking: 8
    }
];


const players = [
    {
        id: 1,
        name: "Gabi",
        position: "Ponteira",
        country: "🇧🇷 Brasil",
        photo: "🏐",
        points: 25,
        aces: 3,
        blocks: 2,
        attack: 71
    },
    {
        id: 2,
        name: "Paola Egonu",
        position: "Oposta",
        country: "🇮🇹 Itália",
        photo: "🏐",
        points: 29,
        aces: 4,
        blocks: 3,
        attack: 73
    },
    {
        id: 3,
        name: "Thaisa",
        position: "Central",
        country: "🇧🇷 Brasil",
        photo: "🏐",
        points: 18,
        aces: 1,
        blocks: 6,
        attack: 68
    },
    {
        id: 4,
        name: "Zhu Ting",
        position: "Ponteira",
        country: "🇨🇳 China",
        photo: "🏐",
        points: 24,
        aces: 2,
        blocks: 3,
        attack: 70
    }
];


const news = [
    {
        id: 1,
        category: "selecao",
        label: "SELEÇÕES",
        icon: "🇧🇷",
        title: "Brasil se prepara para mais uma rodada internacional",
        date: "02 SET 2026",
        text: "Confira os principais destaques e números da equipe antes da próxima partida."
    },
    {
        id: 2,
        category: "jogadores",
        label: "JOGADORES",
        icon: "⭐",
        title: "Gabi aparece entre os destaques estatísticos",
        date: "01 SET 2026",
        text: "A ponteira aparece entre as atletas com melhor desempenho."
    },
    {
        id: 3,
        category: "competicoes",
        label: "COMPETIÇÕES",
        icon: "🏆",
        title: "Temporada internacional ganha novas partidas",
        date: "31 AGO 2026",
        text: "Novos confrontos movimentam o calendário demonstrativo."
    },
    {
        id: 4,
        category: "clubes",
        label: "CLUBES",
        icon: "🏐",
        title: "Clubes brasileiros entram em nova fase",
        date: "30 AGO 2026",
        text: "As equipes iniciam uma nova etapa da temporada."
    }
];


const ranking = [
    ["Brasil", "🇧🇷", 8, 7, 1, 21, "22:7", "+15"],
    ["Itália", "🇮🇹", 8, 6, 2, 18, "20:10", "+10"],
    ["Turquia", "🇹🇷", 8, 6, 2, 17, "20:11", "+9"],
    ["Japão", "🇯🇵", 8, 5, 3, 15, "18:13", "+5"],
    ["EUA", "🇺🇸", 8, 4, 4, 12, "16:15", "+1"],
    ["Polônia", "🇵🇱", 8, 3, 5, 10, "14:18", "-4"]
];


/* ================= ELEMENTOS ================= */

const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);


/* ================= LOADING ================= */

window.addEventListener("load", () => {

    setTimeout(() => {
        $("#loading-screen").classList.add("hide");
    }, 1700);

    createParticles();
    initialize();
});


/* ================= INICIALIZAÇÃO ================= */

function initialize() {

    renderMatches();
    renderResults();
    renderCompetitions();
    renderTeams();
    renderPlayers();
    renderRanking();
    renderNews();

    setupNavigation();
    setupTheme();
    setupSearch();
    setupFilters();
    setupModals();
    setupGames();
    setupCourt();

    startLiveClock();
    startCounters();
    updateFavoriteCount();
}


/* ================= HEADER ================= */

window.addEventListener("scroll", () => {

    const header = $("#header");

    if (window.scrollY > 30) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


function setupNavigation() {

    $("#menuBtn").addEventListener("click", () => {
        $("#nav").classList.toggle("active");
    });

    $$("#nav a").forEach(link => {

        link.addEventListener("click", () => {
            $("#nav").classList.remove("active");
        });

    });

    $$("[data-scroll]").forEach(button => {

        button.addEventListener("click", () => {

            const target = button.dataset.scroll;

            document.querySelector(target)?.scrollIntoView({
                behavior: "smooth"
            });

        });

    });
}


/* ================= PARTICLES ================= */

function createParticles() {

    const container = $("#particles");

    for (let i = 0; i < 35; i++) {

        const particle = document.createElement("span");

        particle.className = "particle";

        particle.style.left = Math.random() * 100 + "%";
        particle.style.animationDuration =
            4 + Math.random() * 8 + "s";

        particle.style.animationDelay =
            Math.random() * 5 + "s";

        container.appendChild(particle);
    }
}


/* ================= TEMA ================= */

function setupTheme() {

    const savedTheme = localStorage.getItem("volei-theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
        $("#themeBtn").textContent = "☀️";
    }

    $("#themeBtn").addEventListener("click", () => {

        document.body.classList.toggle("dark");

        const dark = document.body.classList.contains("dark");

        localStorage.setItem(
            "volei-theme",
            dark ? "dark" : "light"
        );

        $("#themeBtn").textContent = dark ? "☀️" : "🌙";
    });
}


/* ================= CONTADORES ================= */

function startCounters() {

    $$("[data-counter]").forEach(counter => {

        const target = Number(counter.dataset.counter);
        let current = 0;

        const interval = setInterval(() => {

            current += Math.ceil(target / 40);

            if (current >= target) {
                current = target;
                clearInterval(interval);
            }

            counter.textContent = current;

        }, 35);

    });
}


/* ================= JOGOS ================= */

function renderMatches(filter = "all", date = "all") {

    const container = $("#matchesContainer");

    let filtered = matches;

    if (filter !== "all") {
        filtered = filtered.filter(match =>
            match.gender === filter ||
            match.type === filter
        );
    }

    if (date !== "all") {

        const map = {
            today: "Hoje",
            tomorrow: "Amanhã",
            week: "Esta semana"
        };

        filtered = filtered.filter(match =>
            match.date === map[date]
        );
    }

    container.innerHTML = filtered.map(match => `

        <article class="match-card">

            <div class="match-card-top">
                <span>${match.date} • ${match.competition}</span>
                <span class="match-time">${match.time}</span>
            </div>

            <div class="match-teams">

                <div class="match-team">
                    <div>${match.flag1}</div>
                    ${match.team1}
                </div>

                <span class="match-vs">VS</span>

                <div class="match-team">
                    <div>${match.flag2}</div>
                    ${match.team2}
                </div>

            </div>

            <div class="match-location">
                📍 ${match.location}
            </div>

            <button class="text-btn match-details"
                    data-id="${match.id}"
                    style="margin-top:12px">
                Ver detalhes →
            </button>

        </article>

    `).join("");

    $$(".match-details").forEach(button => {

        button.addEventListener("click", () => {

            const match = matches.find(
                item => item.id == button.dataset.id
            );

            openModal(`
                <span class="section-label">PRÓXIMA PARTIDA</span>
                <h2>${match.team1} ${match.flag1} × ${match.flag2} ${match.team2}</h2>
                <p>
                    ${match.date} às ${match.time}<br>
                    ${match.competition}<br>
                    📍 ${match.location}
                </p>
                <br>
                <div class="demo-badge">DADOS DEMONSTRATIVOS</div>
            `);
        });

    });
}


/* ================= RESULTADOS ================= */

function renderResults() {

    $("#resultsContainer").innerHTML = results.map(result => `

        <article class="result-card">

            <span class="result-date">
                ${result.date} • ${result.competition}
            </span>

            <div class="result-teams">

                <div class="result-team">
                    <div>${result.flag1}</div>
                    <strong>${result.team1}</strong>
                </div>

                <div class="result-score">
                    ${result.score}
                </div>

                <div class="result-team">
                    <div>${result.flag2}</div>
                    <strong>${result.team2}</strong>
                </div>

            </div>

            <div class="result-sets">

                ${result.sets.map(set => `
                    <span>${set}</span>
                `).join("")}

            </div>

            <div class="result-info">
                <span>🏆 ${result.winner}</span>
                <span>⭐ MVP: ${result.mvp}</span>
            </div>

            <button class="result-details" data-id="${result.id}">
                VER DETALHES
            </button>

        </article>

    `).join("");

    $$(".result-details").forEach(button => {

        button.addEventListener("click", () => {

            const result = results.find(
                item => item.id == button.dataset.id
            );

            openModal(`
                <span class="section-label">RESULTADO</span>

                <h2>
                    ${result.team1} ${result.flag1}
                    ${result.score}
                    ${result.flag2} ${result.team2}
                </h2>

                <p>
                    <strong>Sets:</strong>
                    ${result.sets.join(" • ")}
                </p>

                <br>

                <p>
                    🏆 Vencedor: ${result.winner}<br>
                    ⭐ MVP: ${result.mvp}<br>
                    🔥 Maior pontuador: ${result.points} pontos
                </p>

                <br>

                <div class="demo-badge">
                    DADOS DEMONSTRATIVOS
                </div>
            `);

        });

    });
}


/* ================= COMPETIÇÕES ================= */

function renderCompetitions() {

    $("#competitionsContainer").innerHTML =
        competitions.map(competition => `

        <article class="competition-card">

            <span class="competition-status">
                ${competition.status}
            </span>

            <div class="competition-logo">
                ${competition.icon}
            </div>

            <small>${competition.country}</small>

            <h3>${competition.name}</h3>

            <small>${competition.date}</small>

            <br>

            <button class="competition-details"
                    data-id="${competition.id}">
                VER COMPETIÇÃO →
            </button>

        </article>

    `).join("");

    $$(".competition-details").forEach(button => {

        button.addEventListener("click", () => {

            const competition =
                competitions.find(
                    item => item.id == button.dataset.id
                );

            openModal(`

                <div style="font-size:45px">
                    ${competition.icon}
                </div>

                <h2>${competition.name}</h2>

                <p>
                    🌎 ${competition.country}<br>
                    📅 ${competition.date}<br>
                    Status: ${competition.status}
                </p>

                <br>

                <div class="filter-bar">
                    <button class="filter active">
                        JOGOS
                    </button>

                    <button class="filter">
                        RESULTADOS
                    </button>

                    <button class="filter">
                        CLASSIFICAÇÃO
                    </button>

                    <button class="filter">
                        ESTATÍSTICAS
                    </button>
                </div>

                <p>
                    Área preparada para receber os dados
                    completos da competição através de uma
                    futura API esportiva.
                </p>

            `);

        });

    });
}


/* ================= RANKING ================= */

function renderRanking() {

    $("#rankingBody").innerHTML = ranking.map(
        (team, index) => `

        <tr>

            <td>
                <span class="position-number">
                    ${index + 1}
                </span>
            </td>

            <td>
                <div class="team-cell">
                    <span>${team[1]}</span>
                    ${team[0]}
                </div>
            </td>

            <td>${team[2]}</td>
            <td>${team[3]}</td>
            <td>${team[4]}</td>

            <td>
                <strong style="color:var(--cyan)">
                    ${team[5]}
                </strong>
            </td>

            <td>${team[6]}</td>
            <td>${team[7]}</td>

        </tr>

    `).join("");
}


/* ================= TIMES ================= */

function renderTeams() {

    $("#teamsContainer").innerHTML =
        teams.map(team => `

        <article class="team-card">

            <div class="team-card-top">

                <span class="team-flag">
                    ${team.flag}
                </span>

                <button
                    class="favorite"
                    data-team="${team.id}">
                    ★
                </button>

            </div>

            <h3>${team.name}</h3>

            <small>${team.country}</small>

            <div class="team-ranking">
                <span>RANKING</span>
                <strong>#${team.ranking}</strong>
            </div>

        </article>

    `).join("");

    setupTeamFavorites();
}


/* ================= FAVORITOS ================= */

function getFavorites() {

    return JSON.parse(
        localStorage.getItem("volei-favorites") || "[]"
    );
}


function saveFavorites(favorites) {

    localStorage.setItem(
        "volei-favorites",
        JSON.stringify(favorites)
    );

    updateFavoriteCount();
}


function setupTeamFavorites() {

    const favorites = getFavorites();

    $$(".favorite").forEach(button => {

        const id = Number(button.dataset.team);

        if (favorites.includes(id)) {
            button.classList.add("active");
        }

        button.addEventListener("click", () => {

            const current = getFavorites();

            if (current.includes(id)) {

                saveFavorites(
                    current.filter(item => item !== id)
                );

                button.classList.remove("active");

                showToast(
                    "Favoritos",
                    "Time removido dos favoritos."
                );

            } else {

                current.push(id);

                saveFavorites(current);

                button.classList.add("active");

                showToast(
                    "Favoritos",
                    "Time adicionado aos favoritos."
                );
            }

        });

    });
}


function updateFavoriteCount() {

    $("#favoriteCount").textContent =
        getFavorites().length;
}


function showFavorites() {

    const favorites = getFavorites();

    const favoriteTeams = teams.filter(
        team => favorites.includes(team.id)
    );

    if (!favoriteTeams.length) {

        openModal(`
            <h2>⭐ Meus favoritos</h2>
            <p>
                Você ainda não adicionou nenhum time aos favoritos.
                Clique na estrela dos times para começar.
            </p>
        `);

        return;
    }

    openModal(`
        <h2>⭐ Meus favoritos</h2>

        ${favoriteTeams.map(team => `
            <div style="
                padding:15px;
                border-bottom:1px solid var(--border);
                display:flex;
                align-items:center;
                gap:12px;
            ">
                <span style="font-size:30px">
                    ${team.flag}
                </span>

                <div>
                    <strong>${team.name}</strong>
                    <small style="
                        display:block;
                        color:var(--muted);
                    ">
                        ${team.country}
                    </small>
                </div>
            </div>
        `).join("")}
    `);
}


$("#favoriteBtn").addEventListener(
    "click",
    showFavorites
);

$("#favoritesFooter").addEventListener(
    "click",
    showFavorites
);


/* ================= JOGADORES ================= */

function renderPlayers() {

    $("#playersContainer").innerHTML =
        players.map(player => `

        <article class="player-card">

            <div class="player-photo">
                ${player.photo}
            </div>

            <div class="player-info">

                <small>${player.position.toUpperCase()}</small>

                <h3>${player.name}</h3>

                <span class="player-country">
                    ${player.country}
                </span>

                <div class="player-stats">

                    <div>
                        <strong>${player.points}</strong>
                        <span>PONTOS</span>
                    </div>

                    <div>
                        <strong>${player.aces}</strong>
                        <span>ACES</span>
                    </div>

                    <div>
                        <strong>${player.blocks}</strong>
                        <span>BLOQ.</span>
                    </div>

                    <div>
                        <strong>${player.attack}%</strong>
                        <span>ATAQUE</span>
                    </div>

                </div>

            </div>

        </article>

    `).join("");
}


/* ================= NOTÍCIAS ================= */

function renderNews(category = "all") {

    let filtered = news;

    if (category !== "all") {
        filtered = news.filter(
            item => item.category === category
        );
    }

    $("#newsContainer").innerHTML =
        filtered.map(item => `

        <article class="news-card">

            <div class="news-image">
                ${item.icon}
            </div>

            <div class="news-content">

                <span class="news-category">
                    ${item.label}
                </span>

                <h3>${item.title}</h3>

                <p>${item.text}</p>

                <span class="news-date">
                    ${item.date}
                </span>

                <button
                    class="news-read"
                    data-id="${item.id}">
                    LER NOTÍCIA →
                </button>

            </div>

        </article>

    `).join("");

    $$(".news-read").forEach(button => {

        button.addEventListener("click", () => {

            const article =
                news.find(
                    item => item.id == button.dataset.id
                );

            openModal(`
                <span class="section-label">
                    ${article.label}
                </span>

                <h2>${article.title}</h2>

                <p>
                    ${article.text}
                </p>

                <br>

                <small>
                    Publicado em ${article.date}
                </small>

                <br><br>

                <div class="demo-badge">
                    CONTEÚDO DEMONSTRATIVO
                </div>
            `);

        });

    });
}


/* ================= FILTROS ================= */

function setupFilters() {

    $$(".filter").forEach(button => {

        button.addEventListener("click", () => {

            $$(".filter").forEach(
                item => item.classList.remove("active")
            );

            button.classList.add("active");

            const gender =
                button.dataset.gender || "all";

            const date =
                $("#dateFilter").value;

            renderMatches(gender, date);
        });

    });


    $("#dateFilter").addEventListener(
        "change",
        () => {

            const active =
                document.querySelector(
                    ".filter.active"
                );

            renderMatches(
                active?.dataset.gender || "all",
                $("#dateFilter").value
            );

        }
    );


    $$(".news-filter").forEach(button => {

        button.addEventListener("click", () => {

            $$(".news-filter").forEach(
                item => item.classList.remove("active")
            );

            button.classList.add("active");

            renderNews(
                button.dataset.news
            );
        });

    });
}


/* ================= PESQUISA ================= */

function setupSearch() {

    $("#searchBtn").addEventListener("click", () => {

        $("#searchPanel").classList.toggle("active");

        if ($("#searchPanel").classList.contains("active")) {
            $("#globalSearch").focus();
        }

    });


    $("#closeSearch").addEventListener(
        "click",
        () => {
            $("#searchPanel").classList.remove("active");
            $("#globalSearch").value = "";
            $("#searchResults").innerHTML = "";
        }
    );


    $("#globalSearch").addEventListener(
        "input",
        performSearch
    );
}


function performSearch() {

    const query =
        $("#globalSearch").value
            .trim()
            .toLowerCase();

    const container = $("#searchResults");

    if (!query) {
        container.innerHTML = "";
        return;
    }

    const foundTeams = teams.filter(team =>
        team.name.toLowerCase().includes(query)
    );

    const foundPlayers = players.filter(player =>
        player.name.toLowerCase().includes(query) ||
        player.position.toLowerCase().includes(query)
    );

    const foundCompetitions =
        competitions.filter(competition =>
            competition.name.toLowerCase().includes(query)
        );

    const foundMatches =
        matches.filter(match =>
            match.team1.toLowerCase().includes(query) ||
            match.team2.toLowerCase().includes(query)
        );

    let html = "";

    foundTeams.forEach(team => {

        html += `
            <div class="search-result"
                 onclick="scrollToSection('#times')">
                🏐 <strong>${team.name}</strong>
                <small> • Time</small>
            </div>
        `;

    });

    foundPlayers.forEach(player => {

        html += `
            <div class="search-result"
                 onclick="scrollToSection('#jogadores')">
                ⭐ <strong>${player.name}</strong>
                <small> • ${player.position}</small>
            </div>
        `;

    });

    foundCompetitions.forEach(competition => {

        html += `
            <div class="search-result"
                 onclick="scrollToSection('#competicoes')">
                🏆 <strong>${competition.name}</strong>
                <small> • Competição</small>
            </div>
        `;

    });

    foundMatches.forEach(match => {

        html += `
            <div class="search-result"
                 onclick="scrollToSection('#proximos')">
                📅 <strong>${match.team1} × ${match.team2}</strong>
                <small> • ${match.time}</small>
            </div>
        `;

    });

    if (!html) {

        html = `
            <div class="search-result">
                Nenhum resultado encontrado para
                "<strong>${query}</strong>".
            </div>
        `;

    }

    container.innerHTML = html;
}


function scrollToSection(section) {

    document.querySelector(section)?.scrollIntoView({
        behavior: "smooth"
    });

    $("#searchPanel").classList.remove("active");
}


/* ================= MODAL ================= */

function setupModals() {

    $("#modalClose").addEventListener(
        "click",
        closeModal
    );

    $("#modalOverlay").addEventListener(
        "click",
        event => {

            if (event.target === $("#modalOverlay")) {
                closeModal();
            }

        }
    );

    $("#notificationBtn").addEventListener(
        "click",
        testNotification
    );
}


function openModal(content) {

    $("#modalContent").innerHTML = content;

    $("#modalOverlay").classList.add("active");
}


function closeModal() {

    $("#modalOverlay").classList.remove("active");
}


/* ================= NOTIFICAÇÃO ================= */

function testNotification() {

    showToast(
        "🔴 Atualização da Arena",
        "Brasil entrou em quadra!"
    );
}


function showToast(title, message) {

    const toast = $("#toast");

    $("#toastTitle").textContent = title;
    $("#toastMessage").textContent = message;

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3500);
}


/* ================= LIVE CLOCK ================= */

function startLiveClock() {

    let seconds = 0;

    setInterval(() => {

        seconds++;

        const minutes =
            Math.floor(seconds / 60)
                .toString()
                .padStart(2, "0");

        const secs =
            (seconds % 60)
                .toString()
                .padStart(2, "0");

        $("#liveClock").textContent =
            `${minutes}:${secs}`;

    }, 1000);
}


/* ================= CENTRAL DE JOGOS ================= */

function setupGames() {

    $$(".game-card").forEach(card => {

        card.addEventListener("click", () => {

            const game = card.dataset.game;

            if (game === "quiz") {
                startQuiz();
            }

            if (game === "serve") {
                startServeGame();
            }

            if (game === "reflex") {
                startReflexGame();
            }

            if (game === "team") {
                startTeamBuilder();
            }

        });

    });
}


/* ================= QUIZ ================= */

const quizQuestions = [
    {
        question: "Quantos jogadores de uma equipe ficam em quadra no vôlei de salão?",
        options: ["4", "5", "6", "7"],
        answer: 2
    },
    {
        question: "Qual posição normalmente é responsável pela organização das jogadas?",
        options: ["Líbero", "Levantador", "Central", "Oposto"],
        answer: 1
    },
    {
        question: "Quantos sets são necessários para vencer uma partida tradicional de melhor de cinco?",
        options: ["2", "3", "4", "5"],
        answer: 2
    },
    {
        question: "Qual jogador possui uniforme diferente dos demais?",
        options: ["Central", "Oposto", "Líbero", "Ponteiro"],
        answer: 2
    },
    {
        question: "Qual fundamento inicia cada rally?",
        options: ["Bloqueio", "Saque", "Manchete", "Ataque"],
        answer: 1
    },
    {
        question: "Qual é a função principal do bloqueio?",
        options: [
            "Defender ataques",
            "Organizar a recepção",
            "Impedir o ataque adversário",
            "Executar o saque"
        ],
        answer: 2
    },
    {
        question: "Qual fundamento é muito utilizado na recepção do saque?",
        options: ["Manchete", "Bloqueio", "Cortada", "Saque"],
        answer: 0
    },
    {
        question: "Quantos toques uma equipe pode dar antes de enviar a bola?",
        options: ["2", "3", "4", "5"],
        answer: 1
    },
    {
        question: "Qual posição costuma atuar prioritariamente no fundo da quadra?",
        options: ["Líbero", "Central", "Levantador", "Oposto"],
        answer: 0
    },
    {
        question: "Qual fundamento busca colocar a bola no chão adversário?",
        options: ["Ataque", "Recepção", "Levantamento", "Defesa"],
        answer: 0
    }
];


let quizState = {
    current: 0,
    score: 0
};


function startQuiz() {

    quizState = {
        current: 0,
        score: 0
    };

    renderQuiz();
    openModal(document.querySelector("#modalContent").innerHTML);
}


function renderQuiz() {

    const question =
        quizQuestions[quizState.current];

    $("#modalContent").innerHTML = `

        <span class="section-label">
            🧠 QUIZ DO VÔLEI
        </span>

        <h2>
            Pergunta ${quizState.current + 1}
            / ${quizQuestions.length}
        </h2>

        <div class="quiz-progress">
            <span style="
                width:${
                    ((quizState.current + 1) /
                    quizQuestions.length) * 100
                }%">
            </span>
        </div>

        <div class="quiz-question">
            ${question.question}
        </div>

        <div class="quiz-options">

            ${question.options.map(
                (option, index) => `
                    <button
                        class="quiz-option"
                        data-answer="${index}">
                        ${String.fromCharCode(65 + index)}.
                        ${option}
                    </button>
                `
            ).join("")}

        </div>

        <p style="margin-top:20px">
            ⭐ Pontuação:
            <strong>${quizState.score}</strong>
        </p>
    `;

    $("#modalOverlay").classList.add("active");

    $$(".quiz-option").forEach(button => {

        button.addEventListener("click", () => {

            checkQuizAnswer(
                Number(button.dataset.answer)
            );

        });

    });
}


function checkQuizAnswer(answer) {

    const question =
        quizQuestions[quizState.current];

    const options =
        $$(".quiz-option");

    options.forEach(button => {
        button.disabled = true;
    });

    if (answer === question.answer) {

        options[answer].classList.add("correct");

        quizState.score += 10;

        showToast(
            "Resposta correta!",
            "+10 pontos"
        );

    } else {

        options[answer].classList.add("wrong");

        options[question.answer]
            .classList.add("correct");

    }

    setTimeout(() => {

        quizState.current++;

        if (
            quizState.current >=
            quizQuestions.length
        ) {
            finishQuiz();
        } else {
            renderQuiz();
        }

    }, 900);
}


function finishQuiz() {

    const previous =
        Number(
            localStorage.getItem("volei-best-score") || 0
        );

    const isRecord =
        quizState.score > previous;

    if (isRecord) {
        localStorage.setItem(
            "volei-best-score",
            quizState.score
        );
    }

    $("#modalContent").innerHTML = `

        <div style="text-align:center">

            <div style="font-size:60px">
                🏆
            </div>

            <span class="section-label">
                QUIZ FINALIZADO
            </span>

            <h2>Sua pontuação</h2>

            <div style="
                font-size:55px;
                font-weight:900;
                color:var(--blue);
                margin:20px;
            ">
                ${quizState.score}
            </div>

            <p>
                ${
                    isRecord
                    ? "🎉 Novo recorde local!"
                    : "Continue treinando para superar seu recorde."
                }
            </p>

            <br>

            <p>
                Melhor pontuação:
                <strong>
                    ${Math.max(
                        previous,
                        quizState.score
                    )}
                </strong>
            </p>

            <br>

            <button
                class="watch-btn"
                id="restartQuiz">
                JOGAR NOVAMENTE
            </button>

        </div>
    `;

    $("#restartQuiz").addEventListener(
        "click",
        startQuiz
    );
}


/* ================= SAQUE ================= */

let serveInterval;
let servePower = 0;
let serveDirection = 1;


function startServeGame() {

    openModal(`

        <div class="serve-game">

            <span class="section-label">
                🏐 DESAFIO DO SAQUE
            </span>

            <h2>Acerte o alvo!</h2>

            <p>
                Clique em "SACAR" quando a força estiver
                próxima da faixa ideal.
            </p>

            <div class="serve-court">

                <div class="target">
                    🎯
                </div>

                <div class="game-ball">
                    🏐
                </div>

            </div>

            <div class="power-meter">
                <span id="servePower"></span>
            </div>

            <strong>
                FORÇA:
                <span id="powerValue">0</span>%
            </strong>

            <br><br>

            <button class="watch-btn" id="serveButton">
                ⚡ SACAR
            </button>

            <p style="margin-top:15px">
                Pontuação:
                <strong id="serveScore">0</strong>
            </p>

        </div>
    `);

    servePower = 0;
    serveDirection = 1;

    clearInterval(serveInterval);

    serveInterval = setInterval(() => {

        servePower += serveDirection * 3;

        if (servePower >= 100) {
            serveDirection = -1;
        }

        if (servePower <= 0) {
            serveDirection = 1;
        }

        const power =
            $("#servePower");

        const value =
            $("#powerValue");

        if (power && value) {

            power.style.width =
                servePower + "%";

            value.textContent =
                servePower;

        }

    }, 50);


    $("#serveButton").addEventListener(
        "click",
        executeServe
    );
}


function executeServe() {

    clearInterval(serveInterval);

    const difference =
        Math.abs(75 - servePower);

    let points =
        Math.max(0, 100 - difference * 2);

    points = Math.round(points);

    const ball =
        document.querySelector(".game-ball");

    if (ball) {

        ball.style.transition =
            "all .8s ease";

        ball.style.left = "78%";
        ball.style.bottom = "120px";
        ball.style.transform =
            "scale(.7) rotate(360deg)";

    }

    setTimeout(() => {

        openModal(`

            <div style="text-align:center">

                <div style="font-size:55px">
                    ${points >= 80 ? "🎯" : "🏐"}
                </div>

                <h2>
                    ${points >= 80
                        ? "Saque perfeito!"
                        : "Bom saque!"}
                </h2>

                <div style="
                    font-size:50px;
                    font-weight:900;
                    color:var(--blue);
                    margin:20px;
                ">
                    ${points}
                </div>

                <p>
                    Força utilizada:
                    <strong>${servePower}%</strong>
                </p>

                <br>

                <button
                    class="watch-btn"
                    id="restartServe">
                    TENTAR NOVAMENTE
                </button>

            </div>

        `);

        $("#restartServe").addEventListener(
            "click",
            startServeGame
        );

    }, 850);
}


/* ================= REFLEXO ================= */

function startReflexGame() {

    openModal(`

        <div style="text-align:center">

            <span class="section-label">
                ⚡ DESAFIO DE REFLEXO
            </span>

            <h2>Prepare-se...</h2>

            <p>
                Quando o alvo aparecer,
                clique o mais rápido possível.
            </p>

            <div
                id="reflexArea"
                style="
                    position:relative;
                    height:300px;
                    margin-top:20px;
                    border-radius:18px;
                    background:
                    linear-gradient(
                        135deg,
                        #071A35,
                        #0A4380
                    );
                    overflow:hidden;
                ">

                <button
                    id="reflexTarget"
                    style="
                        position:absolute;
                        width:70px;
                        height:70px;
                        border-radius:50%;
                        border:0;
                        background:#DFFF00;
                        font-size:25px;
                        display:none;
                        cursor:pointer;
                        box-shadow:0 0 30px #DFFF00;
                    ">
                    🏐
                </button>

                <div id="reflexMessage"
                     style="
                        display:grid;
                        place-items:center;
                        height:100%;
                        color:white;
                     ">
                    AGUARDE...
                </div>

            </div>

            <p style="margin-top:15px">
                Melhor tempo:
                <strong id="bestReflex">
                    ${getBestReflex()}s
                </strong>
            </p>

        </div>

    `);

    const target =
        $("#reflexTarget");

    const area =
        $("#reflexArea");

    const message =
        $("#reflexMessage");

    let startTime = null;

    const delay =
        1200 + Math.random() * 3000;

    setTimeout(() => {

        message.style.display = "none";

        target.style.display = "grid";

        target.style.left =
            Math.random() *
            (area.clientWidth - 80) + "px";

        target.style.top =
            Math.random() *
            (area.clientHeight - 80) + "px";

        startTime = performance.now();

    }, delay);


    target.addEventListener("click", () => {

        if (!startTime) return;

        const reaction =
            (performance.now() - startTime) / 1000;

        const rounded =
            reaction.toFixed(2);

        const best =
            getBestReflex();

        if (
            best === "—" ||
            reaction < Number(best)
        ) {
            localStorage.setItem(
                "volei-best-reflex",
                reaction
            );
        }

        openModal(`

            <div style="text-align:center">

                <div style="font-size:55px">
                    ⚡
                </div>

                <span class="section-label">
                    RESULTADO
                </span>

                <h2>Seu tempo de reação</h2>

                <div style="
                    font-size:55px;
                    font-weight:900;
                    color:var(--cyan);
                    margin:20px;
                ">
                    ${rounded}s
                </div>

                <p>
                    ${
                        reaction < .4
                        ? "🔥 Reflexos incríveis!"
                        : reaction < .7
                        ? "⚡ Muito rápido!"
                        : "🏐 Continue treinando!"
                    }
                </p>

                <br>

                <button
                    class="watch-btn"
                    id="restartReflex">
                    JOGAR NOVAMENTE
                </button>

            </div>
        `);

        $("#restartReflex").addEventListener(
            "click",
            startReflexGame
        );

    });
}


function getBestReflex() {

    const value =
        localStorage.getItem(
            "volei-best-reflex"
        );

    return value
        ? Number(value).toFixed(2)
        : "—";
}


/* ================= MONTE SEU TIME ================= */

function startTeamBuilder() {

    const positions = [
        "Levantador",
        "Oposto",
        "Ponteiro 1",
        "Ponteiro 2",
        "Central",
        "Líbero"
    ];

    openModal(`

        <span class="section-label">
            🏆 MONTE SEU TIME
        </span>

        <h2>Escolha sua escalação</h2>

        <p>
            Selecione um jogador para cada posição.
        </p>

        <div id="teamSelections"
             style="display:grid;gap:10px;margin-top:20px">

            ${positions.map((position, index) => `

                <label style="
                    display:grid;
                    grid-template-columns:120px 1fr;
                    gap:10px;
                    align-items:center;
                    font-size:10px;
                    font-weight:800;
                ">

                    ${position}

                    <select
                        class="team-player-select"
                        data-position="${position}"
                        style="
                            padding:11px;
                            border-radius:9px;
                            border:1px solid var(--border);
                            background:var(--card);
                            color:var(--text);
                        ">

                        <option value="">
                            Selecionar jogador
                        </option>

                        ${players.map(
                            player => `
                            <option value="${player.name}">
                                ${player.name}
                            </option>
                            `
                        ).join("")}

                    </select>

                </label>

            `).join("")}

        </div>

        <button
            class="watch-btn"
            id="createTeam"
            style="margin-top:20px">
            CRIAR ESCALAÇÃO
        </button>
    `);


    $("#createTeam").addEventListener(
        "click",
        () => {

            const selections =
                [...$$(".team-player-select")];

            const chosen =
                selections
                    .map(select => ({
                        position:
                            select.dataset.position,
                        player:
                            select.value
                    }))
                    .filter(item => item.player);

            if (!chosen.length) {

                showToast(
                    "Escalação",
                    "Escolha pelo menos um jogador."
                );

                return;
            }

            openModal(`

                <span class="section-label">
                    🏐 SUA EQUIPE
                </span>

                <h2>Escalação criada</h2>

                <div style="
                    display:grid;
                    gap:10px;
                    margin-top:20px;
                ">

                    ${chosen.map(item => `

                        <div style="
                            display:flex;
                            justify-content:space-between;
                            padding:13px;
                            background:
                            rgba(20,110,255,.06);
                            border-radius:10px;
                        ">

                            <span>
                                ${item.position}
                            </span>

                            <strong>
                                ${item.player}
                            </strong>

                        </div>

                    `).join("")}

                </div>

                <br>

                <div class="demo-badge">
                    ESCALAÇÃO LOCAL
                </div>

            `);

        }
    );
}


/* ================= QUADRA ================= */

function setupCourt() {

    const positions = {
        1: {
            name: "Levantador",
            description:
                "Responsável por organizar o ataque e distribuir as bolas aos atacantes."
        },
        2: {
            name: "Oposto",
            description:
                "Atacante de potência, normalmente posicionado no lado direito da quadra."
        },
        3: {
            name: "Ponteiro",
            description:
                "Participa da recepção, defesa e ataque pela ponta."
        },
        4: {
            name: "Central",
            description:
                "Especialista em bloqueios e ataques rápidos pelo centro."
        },
        5: {
            name: "Líbero",
            description:
                "Especialista defensivo, com foco em recepção e defesa."
        },
        6: {
            name: "Ponteiro",
            description:
                "Atua no ataque e também auxilia a equipe na recepção."
        }
    };


    $$(".position").forEach(button => {

        button.addEventListener("click", () => {

            $$(".position").forEach(
                item => item.classList.remove("active")
            );

            button.classList.add("active");

            const data =
                positions[button.dataset.position];

            $("#positionInfo").innerHTML = `

                <strong>
                    POSIÇÃO ${button.dataset.position}
                    • ${data.name}
                </strong>

                <span>
                    ${data.description}
                </span>

            `;

        });

    });
}


/* ================= API ================= */

/*
    FUNÇÃO PREPARADA PARA API REAL.

    Não é executada automaticamente para evitar
    fingir que os dados demonstrativos são reais.

    Para conectar uma API:

    1. Escolha uma API esportiva.
    2. Obtenha sua chave.
    3. Faça a requisição dentro desta função.
    4. Transforme os dados recebidos para o formato
       utilizado pelas variáveis matches, results etc.
    5. Execute as funções de renderização novamente.
*/

async function fetchLiveData() {

    /*
    EXEMPLO:

    try {

        const response = await fetch(
            "URL_DA_SUA_API",
            {
                headers: {
                    "Authorization": "Bearer SUA_CHAVE"
                }
            }
        );

        const data = await response.json();

        console.log("Dados reais:", data);

        // Depois:
        // matches = data.matches;
        // results = data.results;

        // renderMatches();
        // renderResults();

    } catch (error) {

        console.error(
            "Erro ao buscar dados:",
            error
        );

    }
    */

    console.info(
        "VÔLEI ARENA: API ainda não conectada. " +
        "Os dados atuais são demonstrativos."
    );
}


/* ================= ESCALAÇÃO RÁPIDA ================= */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        closeModal();
        $("#nav")?.classList.remove("active");
    }

});


/* ================= BOTÃO AO VIVO ================= */

$$("[data-action='live']").forEach(button => {

    button.addEventListener("click", () => {

        openModal(`

            <span class="live-pill">
                ● LIVE
            </span>

            <h2>
                Brasil 🇧🇷 2 × 1 🇹🇷 Turquia
            </h2>

            <p>
                4º SET • 18 × 15
            </p>

            <br>

            <div class="stat-row">
                <span>Ataque</span>
                <div class="dual-bar">
                    <i style="width:76%"></i>
                </div>
                <strong>76%</strong>
            </div>

            <div class="stat-row">
                <span>Bloqueios</span>
                <div class="dual-bar">
                    <i style="width:64%"></i>
                </div>
                <strong>12</strong>
            </div>

            <div class="stat-row">
                <span>Aces</span>
                <div class="dual-bar">
                    <i style="width:48%"></i>
                </div>
                <strong>7</strong>
            </div>

            <br>

            <div class="demo-badge">
                PARTIDA DEMONSTRATIVA
            </div>

        `);

    });

});


/* ================= CONSOLE ================= */

console.log(
    "%c🏐 VÔLEI ARENA",
    "font-size:25px;font-weight:900;color:#146EFF"
);

console.log(
    "Plataforma carregada com sucesso."
);
