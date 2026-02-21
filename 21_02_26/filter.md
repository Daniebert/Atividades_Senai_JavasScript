# Exercícios de Filter - JavaScript

---

## **Básicos**

1️⃣ **Filtrar números maiores que 10**

```jsx
const numeros = [5, 8, 12, 15, 3, 20, 7];
const maioresQueDez = numeros.filter(numero => numero > 10);
console.log(maioresQueDez); // Deve retornar [12, 15, 20]

```

2️⃣ **Filtrar nomes que começam com a letra 'A'**

```jsx
const nomes = ["Ana", "João", "Amanda", "Carlos", "Arthur", "Beatriz"];
const nomesComA = nomes.filter(nome => nome.startsWith("A"));
console.log(nomesComA); // Deve retornar ["Ana", "Amanda", "Arthur"]

// Documentação do startsWith em https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
```

---

## **Intermediários**

3️⃣ **Filtrar produtos com preço menor que R$ 50**

```jsx
const produtos = [
  { nome: "Teclado", preco: 120 },
  { nome: "Mouse", preco: 40 },
  { nome: "Fone de ouvido", preco: 80 },
  { nome: "Caderno", preco: 30 }
];
const produtosBaratos = // Use filter aqui
console.log(produtosBaratos); // Deve retornar [{ nome: "Mouse", preco: 40 }, { nome: "Caderno", preco: 30 }]

```

4️⃣ **Filtrar pessoas com idade maior ou igual a 18 anos**

```jsx
const pessoas = [
  { nome: "Carlos", idade: 17 },
  { nome: "Mariana", idade: 22 },
  { nome: "João", idade: 15 },
  { nome: "Fernanda", idade: 30 }
];
const maioresDeIdade = // Use filter aqui
console.log(maioresDeIdade); // Deve retornar [{ nome: "Mariana", idade: 22 }, { nome: "Fernanda", idade: 30 }]

```

5️⃣ **Filtrar palavras que tenham mais de 5 letras**

```jsx
const palavras = ["sol", "mar", "montanha", "rio", "cachoeira", "nuvem"];
const palavrasLongas = // Use filter aqui
console.log(palavrasLongas); // Deve retornar ["montanha", "cachoeira"]

```

---

## **Avançados**

6️⃣ **Filtrar usuários ativos em um sistema**

```jsx
const usuarios = [
  { nome: "Ana", ativo: true },
  { nome: "Carlos", ativo: false },
  { nome: "Beatriz", ativo: true },
  { nome: "João", ativo: false }
];
const usuariosAtivos = // Use filter aqui
console.log(usuariosAtivos); // Deve retornar [{ nome: "Ana", ativo: true }, { nome: "Beatriz", ativo: true }]

```

7️⃣ **Filtrar pedidos entregues de uma lista de pedidos**

```jsx
const pedidos = [
  { id: 1, status: "pendente" },
  { id: 2, status: "entregue" },
  { id: 3, status: "cancelado" },
  { id: 4, status: "entregue" }
];
const pedidosEntregues = // Use filter aqui
console.log(pedidosEntregues); // Deve retornar [{ id: 2, status: "entregue" }, { id: 4, status: "entregue" }]

```

8️⃣ **Filtrar alunos aprovados (nota >= 7)**

```jsx
const alunos = [
  { nome: "Paula", nota: 8 },
  { nome: "Miguel", nota: 5 },
  { nome: "Camila", nota: 9 },
  { nome: "Lucas", nota: 6 }
];
const alunosAprovados = // Use filter aqui
console.log(alunosAprovados); // Deve retornar [{ nome: "Paula", nota: 8 }, { nome: "Camila", nota: 9 }]
```