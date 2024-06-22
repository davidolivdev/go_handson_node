# Full Cycle Rocks - Desafio Nginx com Node.js e MySQL

Este projeto é um desafio proposto pelo curso Full Cycle, onde a ideia principal é configurar um ambiente com Nginx atuando como proxy reverso para uma aplicação Node.js, que interage com um banco de dados MySQL. O objetivo é que, ao acessar o Nginx, ele faça uma chamada para a aplicação Node.js, que adiciona um registro no banco de dados e retorna uma mensagem e uma lista de nomes cadastrados.

## Estrutura do Projeto


Aqui está um arquivo README.md para o seu projeto, explicando os passos para configurar e executar o projeto:

markdown
Copiar código
# Full Cycle Rocks - Desafio Nginx com Node.js e MySQL

Este projeto é um desafio proposto pelo curso Full Cycle, onde a ideia principal é configurar um ambiente com Nginx atuando como proxy reverso para uma aplicação Node.js, que interage com um banco de dados MySQL. O objetivo é que, ao acessar o Nginx, ele faça uma chamada para a aplicação Node.js, que adiciona um registro no banco de dados e retorna uma mensagem e uma lista de nomes cadastrados.

## Estrutura do Projeto

project
├── app
│ ├── Dockerfile
│ ├── package.json
│ ├── package-lock.json
│ └── index.js
├── nginx
│ └── default.conf
└── docker-compose.yml


## Acesse a Aplicação
Abra o navegador e vá para http://localhost:8080. Você deverá ver a mensagem "Full Cycle Rocks!" e a lista de nomes cadastrados no banco de dados.

Observações
Certifique-se de que o Docker e o Docker Compose estão instalados e funcionando corretamente em seu sistema.
Se encontrar problemas ao executar o projeto, verifique os logs dos contêineres com docker-compose logs.

Observações
Certifique-se de que o Docker e o Docker Compose estão instalados e funcionando corretamente em seu sistema.
Se encontrar problemas ao executar o projeto, verifique os logs dos contêineres com docker-compose logs.