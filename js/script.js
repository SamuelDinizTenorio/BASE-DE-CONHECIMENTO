let data = [];

async function startSearch() {
    try {
        let response = await fetch("data.json");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Não foi possível carregar os dados:", error);
    }
}