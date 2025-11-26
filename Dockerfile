# Estágio 1: Definir a imagem base
# Usamos uma imagem oficial e leve do Nginx para servir nosso conteúdo estático.
FROM nginx:alpine

# Define o diretório de trabalho dentro do contêiner.
# Este é o diretório padrão onde o Nginx procura por arquivos para servir.
WORKDIR /usr/share/nginx/html

# Copia os arquivos do projeto para o diretório de trabalho no contêiner.
# O arquivo .dockerignore garantirá que arquivos desnecessários não sejam copiados.
COPY . .

# Expõe a porta 80, que é a porta padrão do Nginx.
EXPOSE 80

# O comando padrão da imagem nginx já inicia o servidor.
# Este comando é adicionado por clareza para rodar o Nginx em primeiro plano.
CMD ["nginx", "-g", "daemon off;"]