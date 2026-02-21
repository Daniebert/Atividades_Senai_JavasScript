# Exercícios de Map - JavaScript

---

## **Básicos**

1. **Adicione um sufixo às palavras**
    
    Dado um array de palavras, use `map` para adicionar o sufixo `"!!!"` a cada uma.
    
    ```jsx
    const palavras = ["olá", "mundo", "javascript"];
    const enfatizadas = palavras.map(palavra => palavra + "!!!");
    console.log(enfatizadas); // ["olá!!!", "mundo!!!", "javascript!!!"]
    
    ```
    
2. Adicione o prefixo “Colaborador: “ às palavras
    
    ```jsx
    const nomes = ["ana", "bruno", "carla"];
    const nomesMaiusculos = ??? // Colocar o código aqui
    console.log(nomesMaiusculos); // ["Colaborador: ana", "Colaborador: bruno", "Colaborador: carla"]
    ```
    

---

## **Intermediários** (Aplicações Práticas)

1. **Extraindo nomes de objetos**
    
    Dado um array de objetos representando pessoas, crie um novo array contendo apenas os nomes.
    
    ```jsx
    const pessoas = [
      { nome: "João", idade: 25 },
      { nome: "Maria", idade: 30 },
      { nome: "Carlos", idade: 28 }
    ];
    const nomes = pessoas.map(pessoa => pessoa.nome);
    console.log(nomes); // ["João", "Maria", "Carlos"]
    
    ```
    
2. **Calculando áreas de círculos**
    
    Você tem um array de raios e precisa calcular as áreas dos círculos correspondentes (Área = π * r²).
    
    ```jsx
    const raios = [3, 5, 7];
    const areas = raios.map(raio => Math.PI * Math.pow(raio, 2));
    console.log(areas); // [28.27, 78.54, 153.94] (valores aproximados)
    
    ```
    
3. **Formatando preços**
    
    Você tem um array de preços em reais e deseja formatá-los como string no formato `R$ xx,xx`.
    
    ```jsx
    const precos = [10, 25.5, 3.99, 7];
    const precosFormatados = precos.map(preco => `R$ ${preco.toFixed(2).replace('.', ',')}`);
    console.log(precosFormatados); // ["R$ 10,00", "R$ 25,50", "R$ 3,99", "R$ 7,00"]
    
    ```
    

---

## **Avançados** (Desafios Mais Complexos)

1. **Transformando notas escolares**
    
    Dado um array de notas de alunos (0 a 100), converta para um conceito (`A`, `B`, `C`, `D`, `F`).
    
    ```jsx
    const notas = [95, 82, 74, 63, 49];
    const conceitos = notas.map(nota => {
      if (nota >= 90) return "A";
      if (nota >= 80) return "B";
      if (nota >= 70) return "C";
      if (nota >= 60) return "D";
      return "F";
    });
    console.log(conceitos); // ["A", "B", "C", "D", "F"]
    
    ```
    
2. **Gerando slugs para URLs**
    
    Você tem um array de títulos de artigos e quer convertê-los em slugs para URLs (tudo minúsculo e espaços substituídos por `-`).
    
    ```jsx
    const titulos = ["Aprenda JavaScript", "Método Map em JS", "Dicas de Programação"];
    const slugs = titulos.map(titulo => titulo.toLowerCase().replace(/\s+/g, "-"));
    console.log(slugs); // ["aprenda-javascript", "metodo-map-em-js", "dicas-de-programacao"]
    
    ```
    
3. **Transformando array de objetos**
    
    Você tem um array de produtos e deseja retornar um novo array apenas com nomes e preços formatados.
    
    ```jsx
    const produtos = [
      { id: 1, nome: "Celular", preco: 1999.99 },
      { id: 2, nome: "Notebook", preco: 3999.99 },
      { id: 3, nome: "Tablet", preco: 899.99 }
    ];
    const catalogo = produtos.map(produto => ({
      nome: produto.nome,
      precoFormatado: `R$ ${produto.preco.toFixed(2).replace('.', ',')}`
    }));
    console.log(catalogo);
    /*
    [
      { nome: "Celular", precoFormatado: "R$ 1999,99" },
      { nome: "Notebook", precoFormatado: "R$ 3999,99" },
      { nome: "Tablet", precoFormatado: "R$ 899,99" }
    ]
    */
    ```




    