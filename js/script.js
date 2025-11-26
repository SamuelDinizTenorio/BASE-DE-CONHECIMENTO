/**
 * @file Script principal para a página da Base de Conhecimento.
 * @description Este script carrega dados de um arquivo JSON, renderiza os cards
 * e implementa a funcionalidade de busca em tempo real.
 */

let cardContainer = document.querySelector(".card-container"); // O elemento container onde os cards serão renderizados.
let searchField  = document.querySelector("#searchField"); // O campo de input para a busca de cards.
let cardsData = []; // Armazena os dados carregados do JSON para evitar múltiplas requisições.

const API_ENDPOINT = 'https://api/knowledge'; // URL DA API
const FALLBACK_FILE = 'data.json'; // Arquivo de fallback

// Adiciona um ouvinte de eventos para o campo de busca, acionando a filtragem a cada tecla digitada.
searchField .addEventListener("input", handleSearch);

/**
 * Tenta carregar os dados de um endpoint de API. Se falhar, chama a função de fallback.
 * Carrega os dados de um arquivo JSON externo de forma assíncrona.
 * Após o carregamento, armazena os dados na variável `cardsData` e chama `renderCards`
 * para exibir todos os itens na tela. Em caso de falha, registra um erro no console.
 * @async
 */
async function loadData() {
    try {
        console.log(`Tentando carregar dados de: ${API_ENDPOINT}`);
        const response = await fetch(API_ENDPOINT);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        cardsData = await response.json();
        renderCards(cardsData);
        console.log("Dados carregados com sucesso do endpoint da API.");
    } catch (error) {
        console.warn(`Falha ao carregar dados da API (${API_ENDPOINT}). Acionando fallback.`, error);
        await loadFallbackData();
    }
};

/**
 * Carrega os dados do arquivo JSON local como uma alternativa (fallback).
 * É chamada quando a tentativa de carregar os dados da API principal falha.
 */
async function loadFallbackData() {
    try {
        console.log(`Tentando carregar dados do arquivo local: ${FALLBACK_FILE}`);
        const response = await fetch(FALLBACK_FILE);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        cardsData = await response.json();
        renderCards(cardsData);
        console.log("Dados carregados com sucesso do arquivo de fallback.");
    } catch (fallbackError) {
        console.error("Falha crítica: Não foi possível carregar os dados da API nem do arquivo local.", fallbackError);
    }
};

/**
 * Filtra os dados armazenados em `cardsData` com base no termo inserido no campo de busca.
 * A busca é feita no nome e na descrição dos itens, sem diferenciar maiúsculas/minúsculas.
 * Em seguida, chama `renderCards` para atualizar a exibição com os resultados filtrados.
 */
function handleSearch() {
    const searchTerm = searchField.value.toLowerCase().trim();
    const filteredData = cardsData.filter(item => {
        return item.name.toLowerCase().includes(searchTerm) ||
               item.description.toLowerCase().includes(searchTerm);
    });
    renderCards(filteredData);
}

/**
 * Limpa o container de cards e renderiza um novo conjunto de cards com base nos dados fornecidos.
 * @param {Array<Object>} data - Um array de objetos, onde cada objeto representa um card a ser exibido.
 */
function renderCards(data) {
    cardContainer.innerHTML = ""; // Limpa o container antes de renderizar novos cards
    data.forEach(item => {
        let card = document.createElement("article");
        card.classList.add("card");

        const tagsHtml = item.tags.map(tag => `<span>${tag}</span>`).join('');

        card.innerHTML = `
            <h2>${item.name}</h2>
            <p class="year">Ano de criação: ${item.year_creation}</p>
            <p>${item.description}</p>
            <div class="tags-container">
                ${tagsHtml}
            </div>
            <a href="${item.link}" target="_blank" rel="noopener noreferrer">Saiba mais</a>
        `;

        cardContainer.appendChild(card);
    });
};

loadData(); // Inicia o carregamento dos dados quando o script é executado
