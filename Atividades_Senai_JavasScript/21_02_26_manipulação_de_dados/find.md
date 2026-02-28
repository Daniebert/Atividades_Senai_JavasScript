<<<<<<< HEAD
# Exercícios de Find - JavaScript

---

## **Básicos**

1️⃣ Buscar o nome “Amanda”

```jsx
const nomes = ["João", "Carlos", "Amanda", "Arthur", "Beatriz"];
const amanda = nomes.find(nome => nome == "Amanda");
console.log(amanda); // Deve retornar "Amanda"

```

2️⃣ Buscar o usuário que o ID é igual a 2

```jsx
const listaDeUsuarios = [
  { id: 1, nome: "Alice" },
  { id: 2, nome: "Bruno" },
  { id: 3, nome: "Carla" }
];

const usuarioEncontrado = listaDeUsuarios.find(usuario => usuario.id == 2);

console.log(usuarioEncontrado); 
// Deve retornar { id: 2, nome: "Bruno" }

```

---

## **Intermediários**

4️⃣ **Buscar o produto de nome “Fone de ouvido”**

```jsx
const produtos = [
  { nome: "Teclado", preco: 120 },
  { nome: "Mouse", preco: 40 },
  { nome: "Fone de ouvido", preco: 80 },
  { nome: "Caderno", preco: 30 }
];
const produtoBuscado = // Use find aqui
console.log(produtoBarato); // Deve retornar { nome: "Fone de ouvido", preco: 80 }

```

5️⃣ **Descobrir uma pessoa com idade maior ou igual a 18 anos**

```jsx
const pessoas = [
  { nome: "Carlos", idade: 17 },
  { nome: "Mariana", idade: 22 },
  { nome: "João", idade: 15 },
  { nome: "Fernanda", idade: 30 }
];
const maiorDeIdade = // Use find aqui
console.log(maiorDeIdade); // Deve retornar { nome: "Mariana", idade: 22 }

```

6️⃣ **Identificar uma palavra com mais de 5 letras**

```jsx
const palavras = ["sol", "mar", "montanha", "rio", "lua", "nuvem"];
const palavraLonga = // Use find aqui
console.log(palavraLonga); // Deve retornar "montanha"
```

---

## **Avançados**

7️⃣ **Selecionar um usuário ativo no sistema**

```jsx
const usuarios = [
  { nome: "Carlos", ativo: false },
  { nome: "Ana", ativo: true },
  { nome: "Beatriz", ativo: false},
  { nome: "João", ativo: false }
];
const usuarioAtivo = // Use find aqui
console.log(usuarioAtivo); // Deve retornar { nome: "Ana", ativo: true }

```

8️⃣ **Procurar um pedido com status "entregue"**

```jsx
const pedidos = [
  { id: 1, status: "pendente" },
  { id: 2, status: "entregue" },
  { id: 3, status: "cancelado" },
  { id: 4, status: "cancelado" }
];
const pedidoEntregue = // Use find aqui
console.log(pedidoEntregue); // Deve retornar { id: 2, status: "entregue" }

```

9️⃣ **Achar um aluno aprovado (nota >= 7)**

```jsx
const alunos = [
  { nome: "Miguel", nota: 5 },
  { nome: "Paula", nota: 8 },
  { nome: "Camila", nota: 9 },
  { nome: "Lucas", nota: 6 }
];
const alunoAprovado = // Use find aqui
console.log(alunoAprovado); // Deve retornar { nome: "Paula", nota: 8 }

=======
# Exercícios de Find - JavaScript

---

## **Básicos**

1️⃣ Buscar o nome “Amanda”

```jsx
const nomes = ["João", "Carlos", "Amanda", "Arthur", "Beatriz"];
const amanda = nomes.find(nome => nome == "Amanda");
console.log(amanda); // Deve retornar "Amanda"

```

2️⃣ Buscar o usuário que o ID é igual a 2

```jsx
const listaDeUsuarios = [
  { id: 1, nome: "Alice" },
  { id: 2, nome: "Bruno" },
  { id: 3, nome: "Carla" }
];

const usuarioEncontrado = listaDeUsuarios.find(usuario => usuario.id == 2);

console.log(usuarioEncontrado); 
// Deve retornar { id: 2, nome: "Bruno" }

```

---

## **Intermediários**

4️⃣ **Buscar o produto de nome “Fone de ouvido”**

```jsx
const produtos = [
  { nome: "Teclado", preco: 120 },
  { nome: "Mouse", preco: 40 },
  { nome: "Fone de ouvido", preco: 80 },
  { nome: "Caderno", preco: 30 }
];
const produtoBuscado = // Use find aqui
console.log(produtoBarato); // Deve retornar { nome: "Fone de ouvido", preco: 80 }

```

5️⃣ **Descobrir uma pessoa com idade maior ou igual a 18 anos**

```jsx
const pessoas = [
  { nome: "Carlos", idade: 17 },
  { nome: "Mariana", idade: 22 },
  { nome: "João", idade: 15 },
  { nome: "Fernanda", idade: 30 }
];
const maiorDeIdade = // Use find aqui
console.log(maiorDeIdade); // Deve retornar { nome: "Mariana", idade: 22 }

```

6️⃣ **Identificar uma palavra com mais de 5 letras**

```jsx
const palavras = ["sol", "mar", "montanha", "rio", "lua", "nuvem"];
const palavraLonga = // Use find aqui
console.log(palavraLonga); // Deve retornar "montanha"
```

---

## **Avançados**

7️⃣ **Selecionar um usuário ativo no sistema**

```jsx
const usuarios = [
  { nome: "Carlos", ativo: false },
  { nome: "Ana", ativo: true },
  { nome: "Beatriz", ativo: false},
  { nome: "João", ativo: false }
];
const usuarioAtivo = // Use find aqui
console.log(usuarioAtivo); // Deve retornar { nome: "Ana", ativo: true }

```

8️⃣ **Procurar um pedido com status "entregue"**

```jsx
const pedidos = [
  { id: 1, status: "pendente" },
  { id: 2, status: "entregue" },
  { id: 3, status: "cancelado" },
  { id: 4, status: "cancelado" }
];
const pedidoEntregue = // Use find aqui
console.log(pedidoEntregue); // Deve retornar { id: 2, status: "entregue" }

```

9️⃣ **Achar um aluno aprovado (nota >= 7)**

```jsx
const alunos = [
  { nome: "Miguel", nota: 5 },
  { nome: "Paula", nota: 8 },
  { nome: "Camila", nota: 9 },
  { nome: "Lucas", nota: 6 }
];
const alunoAprovado = // Use find aqui
console.log(alunoAprovado); // Deve retornar { nome: "Paula", nota: 8 }

>>>>>>> 733eb1295806a4bedd3cec9c9bdb7ccaefdd55d6
```