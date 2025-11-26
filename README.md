# Base de Conhecimento de Tecnologias

Um projeto de front-end que exibe uma lista pesquisável de tecnologias. A aplicação é servida via Nginx, totalmente containerizada com Docker e possui um pipeline de CI/CD automatizado com GitHub Actions para build e deploy.

## ✨ Funcionalidades

- **Carregamento Dinâmico**: Os dados são carregados de forma assíncrona a partir de um arquivo JSON.
- **Sistema de Fallback**: Tenta buscar os dados de um endpoint de API e, em caso de falha, carrega os dados de um arquivo `data.json` local para garantir que a aplicação sempre funcione.
- **Busca em Tempo Real**: Filtra as tecnologias instantaneamente conforme o usuário digita no campo de busca. A busca é realizada no nome e na descrição dos itens.
- **Design Responsivo**: A interface se adapta a diferentes tamanhos de tela, de desktops a dispositivos móveis.
- **Estilização com Variáveis CSS**: A paleta de cores é centralizada em variáveis CSS (`:root`), permitindo uma fácil customização e troca de temas.
- **Links Externos**: Cada card possui um link "Saiba mais" que direciona para a página oficial da tecnologia.

## 🚀 Tecnologias Utilizadas

- **HTML5**: Para a estrutura semântica da página.
- **CSS3**: Para a estilização, utilizando Flexbox e um design moderno. As cores são gerenciadas por variáveis CSS para fácil manutenção.
- **JavaScript (ES6+)**: Para a lógica da aplicação, incluindo:
  - Requisições `fetch` assíncronas.
  - Manipulação do DOM para renderizar os cards.
  - Implementação da funcionalidade de busca.
- **Nginx**: Servidor web de alta performance para servir os arquivos estáticos.
- **Docker & Docker Compose**: Para containerizar a aplicação, garantindo um ambiente de execução consistente, seguro e escalável.

## 📂 Estrutura do Projeto

```
BASE-DE-CONHECIMENTO/
├── css/
│   └── style.css         # Folha de estilos principal
├── images/
│   └── ...               # Ícones e imagens utilizados
├── js/
│   └── script.js         # Lógica principal da aplicação
├── data.json             # Banco de dados local com as tecnologias
├── index.html            # Arquivo principal da aplicação
├── Dockerfile            # Define a imagem Docker da aplicação
├── docker-compose.yml    # Orquestra o contêiner da aplicação
├── .dockerignore         # Exclui arquivos do contexto de build do Docker
└── README.md             # Este arquivo
```

- **`index.html`**: A estrutura base da página, contendo o cabeçalho com a barra de busca, a seção principal onde os cards são inseridos e o rodapé.
- **`css/style.css`**: Contém toda a estilização do projeto. É bem-organizado e utiliza variáveis para a paleta de cores.
- **`js/script.js`**: O cérebro da aplicação. Ele é responsável por:
  1. Tentar carregar os dados de uma API.
  2. Se falhar, carregar os dados do `data.json`.
  3. Renderizar os cards na tela.
  4. Gerenciar a lógica de busca em tempo real.
- **`data.json`**: Um arquivo JSON que serve como banco de dados local, contendo a lista de tecnologias e suas informações (nome, descrição, ano, link e tags).

## ⚙️ Como Executar Localmente

Como este é um projeto de front-end puro, você não precisa de um servidor complexo para executá-lo.

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/SamuelDinizTenorio/BASE-DE-CONHECIMENTO
    ```

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd BASE-DE-CONHECIMENTO
    ```

3.  **Abra o arquivo `index.html` no seu navegador de preferência.**
    - Você pode simplesmente clicar duas vezes no arquivo `index.html`.
    - Ou, se tiver a extensão "Live Server" no VS Code, pode clicar com o botão direito no `index.html` e selecionar "Open with Live Server".

## 🤝 Como Contribuir

Contribuições são sempre bem-vindas! Se você quiser adicionar uma nova tecnologia ou corrigir alguma informação:

1.  Faça um **Fork** deste repositório.
2.  Crie uma nova **Branch** (`git checkout -b feature/nova-tecnologia`).
3.  Adicione a nova tecnologia ao arquivo `data.json` seguindo o padrão existente.
4.  Faça o **Commit** das suas alterações (`git commit -m 'Adiciona a tecnologia X'`).
5.  Envie para a sua Branch (`git push origin feature/nova-tecnologia`).
6.  Abra um **Pull Request**.
