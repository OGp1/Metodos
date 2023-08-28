let produtos = [
    { nome: "Camiseta", disponivel: true },
    { nome: "Calça", disponivel: false },
    { nome: "Tênis", disponivel: true }
  ];
  
  let Disponivel = produtos.some(produto => produto.disponivel);
  console.log(Disponivel);
  