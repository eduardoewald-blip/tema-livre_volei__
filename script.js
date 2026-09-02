// Dados estruturados sem blocos de textos longos descritivos
const bancoDeJogos = [
    {
        categoria: "vivo",
        status: "Ao Vivo • Set 4",
        time1: "Olympus Volley",
        time2: "Titan Titans",
        parciais1:,
        parciais2:,
        setsVencidos1: 2,
        setsVencidos2: 1,
        midia: "SporTV 2",
        local: "Gyn Arena"
    },
    {
        categoria: "proximos",
        status: "Hoje • 21:30",
        time1: "Apex Clube",
        time2: "Capital Vôlei",
        parciais1: [],
        parciais2: [],
        setsVencidos1: "-",
        setsVencidos2: "-",
        midia: "Premium Pass",
        local: "Fase de Grupos"
    },
    {
        categoria: "todos",
        status: "Encerrado",
        time1: "Litoral Esportes",
        time2: "Minas United",
        parciais1:,
        parciais2:,
        setsVencidos1: 3,
        setsVencidos2: 0,
        midia: "Finalizado",
        local: "01 Set 2026"
    }
];

function exibirPartidas(filtro = "todos") {
    const quadra = document.getElementById("quadra-jogos");
    if (!quadra) return;
    
    quadra.innerHTML = "";

    bancoDeJogos.forEach(jogo => {
        // Aplica o filtro de visualização rápido
        if (filtro !== "todos" && jogo.categoria !== filtro) return;

        const classeAoVivo = jogo.categoria === "vivo" ? "ao-vivo" : "";
        
        // Verifica qual time venceu para aplicar o destaque dourado na pontuação final
        const vencedor1 = jogo.setsVencidos1 > jogo.setsVencidos2 ? "winner" : "";
        const vencedor2 = jogo.setsVencidos2 > jogo.setsVencidos1 ? "winner" : "";

        // Renderiza dinamicamente as pontuações parciais se elas existirem
        let stringsParciais1 = "";
        let stringsParciais2 = "";

        if (jogo.parciais1.length > 0) {
            jogo.parciais1.forEach((p, index) => {
                stringsParciais1 += `<span class="set-score">${p}</span>`;
                stringsParciais2 += `<span class="set-score">${jogo.parciais2[index]}</span>`;
            });
        }

        quadra.innerHTML += `
            <div class="card-match">
                <div class="status-box ${classeAoVivo}">${jogo.status}</div>
                
                <div class="teams-container">
                    <div class="team-row">
                        <div class="team-info">
                            <div class="team-logo t1"><i class="fa-solid fa-trophy"></i></div>
                            <span>${jogo.time1}</span>
                        </div>
                        <div class="score-box">
                            ${stringsParciais1}
                            <span class="set-main ${vencedor1}">${jogo.setsVencidos1}</span>
                        </div>
                    </div>
                    <div class="team-row">
                        <div class="team-info">
                            <div class="team-logo t2"><i class="fa-solid fa-shield-halved"></i></div>
                            <span>${jogo.time2}</span>
                        </div>
                        <div class="score-box">
                            ${stringsParciais2}
                            <span class="set-score-container"></span>
                            ${stringsParciais2}
                            <span class="set-main ${vencedor2}">${jogo.setsVencidos2}</span>
                        </div>
                    </div>
                </div>

                <div class="match-meta">
                    <span class="tv-badge">${jogo.midia}</span>
                    <span>${jogo.local}</span>
                </div>
            </div>
        `;
    });
}

// Configuração rápida dos seletores de filtro da barra superior
document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
        document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        e.target.classList.add("active");
        
        const alvo = e.target.getAttribute("data-filter");
        exibirPartidas(alvo);
    });
});

// Inicialização imediata ao carregar o arquivo
document.addEventListener("DOMContentLoaded", () => {
    exibirPartidas("todos");
});
