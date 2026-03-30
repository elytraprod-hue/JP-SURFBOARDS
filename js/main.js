// EDITADO: Rotas ajustadas paras as novas pastas de 'home page' e 'models'.
const productsLocalDB = [
    { 
        id: 'black-buffalo', 
        name: 'Black Buffalo', 
        type: 'Performance', 
        desc: 'Desempenho máximo e resposta imediata esculpida pra ondas cavadas.', 
        homeImage: './assets/images/home page/black-buffalo-home.jpg', 
        modelImage: './assets/images/models/black-buffalo-model.jpg',
        baseDims: "5’10” x 19” x 2 5/16”", 
        specs: "Indicada para surfistas avançados/pro. Prancha de resposta rápida e controle crítico.", 
        indication: "Ondas boas, fortes e tubulares de 1 a 2 metros." 
    },
    { 
        id: 'phantom-shark', 
        name: 'Phantom Shark', 
        type: 'Alternative Fish', 
        desc: 'Velocidade altíssima nas marolas com um outline impecável.', 
        homeImage: './assets/images/home page/phantom-shark-home.jpg', 
        modelImage: './assets/images/logo/logo.png', // Fallback
        baseDims: "5’6” x 20” x 2 1/2”", 
        specs: "Outline largo com rabeta swallow. Extremamente veloz em zonas flat.", 
        indication: "Ondas pequenas, mexidas, fundo de areia brasileiro." 
    },
    { 
        id: 'white-tiger', 
        name: 'White Tiger', 
        type: 'Evolution Mid', 
        desc: 'Evolução e estabilidade na remada com fluxo espetacular.', 
        homeImage: './assets/images/logo/logo.png', // Fallback
        modelImage: './assets/images/logo/logo.png', // Fallback
        baseDims: "6’8” x 21 1/2” x 2 3/4”", 
        specs: "O midlength perfeito para transição ou para quem busca paz de espírito.", 
        indication: "Surfistas intermediários ou avançados nos dias cheios." 
    },
    { 
        id: 'silver-bullet', 
        name: 'Silver Bullet', 
        type: 'Daily Driver', 
        desc: 'Agressividade sob medida para o surf do dia a dia.', 
        homeImage: './assets/images/logo/logo.png', // Fallback
        modelImage: './assets/images/logo/logo.png', // Fallback
        baseDims: "5’11” x 19 1/4” x 2 3/8”", 
        specs: "Um step down ideal. Encaixa no pocket da onda sem afundar nas seções gordas.", 
        indication: "Surf diário de meio metrinho a 1 metro." 
    }
];

// O helper renderiza de forma estrita o card HTML unificado na Vitrine
function renderProductCard(p) {
    return `
        <div class="group cursor-pointer flex flex-col h-full bg-white border border-zinc-100 shadow-sm hover:shadow-2xl transition-all duration-300" onclick="window.location.href='modelo-detalhe.html?model=${p.id}'">
            <div class="p-6 flex-grow">
                <div class="w-full aspect-square md:aspect-[4/5] overflow-hidden bg-transparent mb-6 relative flex items-center justify-center p-2 md:p-4 border-b border-zinc-100">
                    <!-- EDITADO: object-contain para redimensionar proporções sem distorcer (Prioridade 1 do card da home) -->
                    <img 
                        src="${p.homeImage}" 
                        loading="lazy"
                        alt="Prancha ${p.name}" 
                        class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-[1.5s] mix-blend-multiply drop-shadow-md" 
                        onerror="this.src='./assets/images/logo/logo.png'; this.classList.remove('object-contain', 'mix-blend-multiply'); this.classList.add('object-contain', 'p-8', 'opacity-30');"
                    >
                </div>
                <!-- Area de Dados do Card Vitrine (Adicionado baseDims) -->
                <h3 class="text-2xl font-bold tracking-tighter uppercase text-black mb-1">${p.name}</h3>
                <span class="text-[10px] tracking-widest uppercase text-zinc-500 font-bold mb-4 block">${p.type}</span>
                
                <p class="opacity-80 text-sm font-light leading-relaxed mb-6">${p.desc}</p>
            </div>

            <!-- Dimensões Padrão Base Exposta antes do clique -->
            <div class="px-6 py-4 bg-zinc-50 border-t border-zinc-100">
                <span class="block text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">Padrão da Prateleira</span>
                <span class="block text-sm font-medium tracking-tight text-black">${p.baseDims}</span>
            </div>
            
            <div class="border-t border-zinc-100">
                <a href="modelo-detalhe.html?model=${p.id}" class="bg-black text-white w-full flex items-center justify-center h-14 text-[11px] font-bold uppercase tracking-widest hover:bg-zinc-800 transition-colors">
                    Ver Detalhes e Medidas
                </a>
            </div>
        </div>
    `;
}

// Navbar Universal
function handleScrollNav() {
    const header = document.getElementById("mainHeader");
    if(!header) return;

    window.addEventListener("scroll", () => {
        if(window.scrollY > 50) {
            header.classList.remove("bg-transparent", "text-white", "mix-blend-difference");
            header.classList.add("bg-white/95", "backdrop-blur-md", "text-black", "border-black/10", "shadow-sm");
        } else {
            if(header.dataset.theme !== "light") {
                header.classList.add("bg-transparent", "text-white", "mix-blend-difference");
                header.classList.remove("bg-white/95", "backdrop-blur-md", "text-black", "border-black/10", "shadow-sm");
            }
        }
    });

    if(header.dataset.theme === "light") {
         header.classList.remove("bg-transparent", "text-white", "mix-blend-difference");
         header.classList.add("bg-white/95", "text-black", "border-black/10");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    handleScrollNav();
});
