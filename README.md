
<div align="center"">
    <img style="margin: auto;" src="./assets/nodedotjs.svg" alt="nodejs" width="100">
</div>

<h1 align="center"">API Bidirecional</h1>

<p>Construida em cima da arquitetura "Model View Controller. foi construida para ser bidirecional, atualizando todos os usuário logados"</p>

<h2>Regras de negócio</h2>

- Apenas usuário identificados tem acesso a aplicação

<h2>Requisitos funcionais</h2>

- O usuário deve poder entrar na aplicação apenas escrevendo um nome
- O usuário deve poder ver todas as peças que foram solicitadas
- O usuário deve poder solicitar uma peça
- O usuário deve poder atualizar uma peça
- O usuário deve poder marcar peça como vista, e horário em que desceu
- Deve ter um chat para a comunicação de todos os usuários logados

<h2>Requisitos não funcionais</h2>

- A aplicação deve ser fácil de usar
- A aplicação deve suportar usuários simultaneos
- A aplicação deve ser fácil de realizar manutenções no código e implementações de features novas

<h2>Tecnologias</h2>

- [Node.js](https://nodejs.org/en)
- [Express.js](https://expressjs.com/pt-br/)
- [Socket.io](https://socket.io/)

<h2>Como rodar a aplicação</h2>

```
// bash
cd ~

mkdir projects

git clone https://github.com/FelipePinheiroRegina/api-pallet-rack.git

cd api-pallet-rack

npm install 

npm run dev // development

pm2 start ./src/server.js // production --- para rodar com pm2, você precisará instalar globalmente
```
<h2 align='center'>Deploy</h2>
O projeto roda em um Ubuntu server na empresa, acessivel apenas para a rede local. utilizei bash para configurar o apache e o firewall.

<h2 align='center'>Desenvolvedor</h2>

<img src="./assets/feGreen.jpeg" alt="Minha imagem" width="48">

<strong>Felipe Pinheiro Regina</strong>

[LinkedIn](https://www.linkedin.com/in/felipe-pinheiro-002427250/)

[Interfaces da aplicação](https://github.com/FelipePinheiroRegina/front-pallet-rack)

