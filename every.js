let carrinho = [
    { produto: "celular", preco: 1800 },
    { produto: "Fones de ouvido", preco: 90 },
    { produto: "Capinha de celular", preco: 40 }
  ];
  
  let Precinho = carrinho.every(item => item.preco < 100);
  console.log(Precinho);
  