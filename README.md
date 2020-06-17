# Desafio Técnico


# Execução
Para rodar a aplicação pela primeira vez digite os seguintes comandos:

  - npm install;
  - npm start

Após instalar as dependências apenas rode npm start para iniciar a aplicação
# Funcionamento da aplicação

  

### Libs utilizadas


* Material - UI: Para fornecer componentes limpos, iconografia e um sistema de JSS;
* APISauce(Axios): Garantindo uma comunicação mais fácil com a API;
* React Router: Navegação entre as telas;
* React Piechart: Utilizar os dados fornecidos pela API para gerar gráficos de setores;
* React Share: Botões de compartilhar em redes sociais.



### Funcionamento Básico

O site possui telas que distribuem os componentes ao longo de sua extensão. Esses componentes que são responsáveis por executar as requisições na api, funcionando da seguinte maneira: 
* Ao ser criado na tela uma função assíncrona é chamada, realizando a requisição;
* Após isso o retorno dessa requisição é armazenado e o componente sai do estado neutro(campos vazios);
* Então é possível visualizar os dados retornados pela API, passando pelas necessárias manipulações

A lib react-router faz com que seja possível navegar entre páginas e em um caso especial colabora na requisição de dados de um estado específico, passando a sigla(UF) por meio de props para o estado selecionado, e a partir dessa sigla o componente executa uma requisição específica.


### Hospedagem
A aplicação está hospedada no serviço Netlify no seguinte link:
https://covid-19brazil.netlify.app/


