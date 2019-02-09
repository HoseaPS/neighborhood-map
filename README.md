# Neighborhood Map

App que mostra pontos de alimentação em uma região específica. Feito com React, Google Maps API e FourSquare API, como parte do Nanodegree Front-End Avançado da Udacity.

---

## Como executar o app

Clique no botão verde "Clone or Download" e em seguida selecione a opção "Download ZIP" e extraia para o diretório onde você deseja armazenar o app.

Navegue até o diretório e rode o comando

```
npm install
```

ou

```
yarn
```

Depois que todas as dependências tiverem sido instaladas, você poderá iniciar o aplicativo de duas formas:

Para executar o app em **modo de desenvolvimento**, siga as instruções abaixo.<br>

Rode o comando:

```
npm run start
```

ou

```
yarn start
```

Uma nova janela do navegador deve abrir automaticamente exibindo o aplicativo. Se isso não acontecer, navegue para [http://localhost:3000/](http://localhost:3000/) em seu browser.

Para executar o app em **modo de produção**, siga as instruções abaixo.<br>

Rode o comando:

```
npm run build
```

ou

```
yarn build
```

Este comando constroi o app para produção na pasta `build`.

- Usando um **servidor estático**

Para ambientes utilizando [Node](https://nodejs.org/),
a maneira mais fácil de lidar com isso seria instalar [serve](https://github.com/zeit/serve) e deixe-o lidar com o resto. Rode o comando:

```sh
npm install -g serve
serve -s build
```

O último comando acima servirá o projeto na porta 5000 então apenas navegue para [http://localhost:5000](http://localhost:5000) em seu browser.

## Importante

Observe que o **Service Worker** que fornece recursos off-line funciona somente no **modo de produção**.
