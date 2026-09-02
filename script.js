// Base de dados simulada contendo as partidas de vôlei masculino
const partidas = [
    {
        id: 1,
        status: "proximo",
        statusTexto: "Próximo Jogo",
        data: "Hoje às 20:30",
        campeonato: "Superliga Masculina • Rodada 10",
        timeA: "Olympus Volley",
        timeB: "Capital Vôlei",
        setsA: "-",
        setsB: "-",
        parciaisA: [],
        parciaisB: []
    },
    {
        id: 2,
        status: "encerrados",
        statusTexto: "Encerrado",
        data: "Ontem",
        campeonato: "Superliga Masculina • Rodada 9",
        timeA: "Titan Titans",
        timeB: "Apex Clube",
        setsA: "3",
        setsB: "1",
        parciaisA:,
        parciaisB: [18, 25, 20, 19]
    },
    {
        id: 3,
        status: "proximo",
        statusTexto: "Amanhã às 18:00",
        data: "03 Set 2026",
        campeonato: "Copa Ouro Masculina",
        timeA: "Litoral Esportes",
        timeB: "Olympus Volley",
        setsA: "-",
        setsB: "-",
        parciaisA: [],
        parciaisB: []
    }
];

// Função para renderizar os cards na tela
function renderizarJogos(filtro = "todos") {
    const gridJogos = document.getElementById("grid-jogos");
    if (!gridJogos) return; // Evita erros se o elemento não existir na página
    
    gridJogos.innerHTML = ""; 

    const partidasFiltradas = partidas.filter(partida => {
        if (filtro === "todos") return true;
        return partida.status === filtro;
    });

    partidasFiltradas.forEach(jogo => {
        let htmlParciaisA = "";
        let htmlParciaisB = "";

        // Verifica se existem parciais de sets e gera o HTML delas
        if (jogo.parciaisA && jogo.parciaisA.length > 0) {
            jogo.parciaisA.forEach(p => htmlParciaisA += `<span class="set-regular">${p}</span>`);
            jogo.parciaisB.forEach(p => htmlParciaisB += `<span class="set-regular">${p}</span>`);
        }

        const card = document.createElement("div");
        card.className = "card-jogo";
        card.innerHTML = `
            <span class="status-tag ${jogo.status}">${jogo.statusTexto}</span>
            <div class="info-jogo">
                <div><i class="fa-regular fa-calendar"></i> ${jogo.data}</div>
                <div>${jogo.campeonato}</div>
            </div>
            <div class="placar-container">
                <div class="time-linha">
                    <div class="time-nome">
                        <i class="fa-solid fa-shield-halved color-gold"></i>
                        <span>${jogo.timeA}</span>
                    </div>
                    <div class="sets-pontos">
                        ${htmlParciaisA}
                        <span class="set-total">${jogo.setsA}</span>
                    </div>
                </div>
                <div class="time-linha">
                    <div class="time-nome">
                        <i class="fa-solid fa-shield-halved color-silver"></i>
                        <span>${jogo.timeB}</span>
                    </div>
                    <div class="sets-pontos">
                        ${htmlParciaisB}
                        <span class="set-total">${jogo.setsB}</span>
                    </div>
                </div>
            </div>
        `;
        gridJogos.appendChild(card);
    });
}

// Configuração dos eventos de clique nos botões de filtro
document.querySelectorAll(".filter-btn").forEach(botao => {
    botao.addEventListener("click", (e) => {
        // Remove a classe ativa de todos os botões e adiciona no clicado
        document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
        e.target.classList.add("active");

        // Filtra os jogos com base no atributo data-filter
        const categoria = e.target.getAttribute("data-filter");
        renderizarJogos(categoria);
    });
});

// Inicializa a renderização quando o documento estiver totalmente carregado
document.addEventListener("DOMContentLoaded", () => {
    renderizarJogos("todos");
});
