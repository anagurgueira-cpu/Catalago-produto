
const produtos = [
    { nome: 'ruby rose', especificacao: 'rosa', categoria: 'blush', preco: 100.00 },
    { nome: 'melu', especificacao: 'rose', categoria: 'blush', preco: 150.00 },
    { nome: 'sophia', especificacao: 'verde', categoria: 'blush', preco: 200.00 },
    { nome: 'Franciny', especificacao: 'lipbunny', categoria: 'Gloss', preco: 250.00 },
    { nome: 'Luna', especificacao: 'luna', categoria: 'Gloss', preco: 300.00 },
    { nome: 'Bruna Tavares', especificacao: 'Base Liquida', categoria: 'Base', preco: 300.00 },
    { nome: 'Dior', especificacao: 'Base Liquida', categoria: 'Base', preco: 500.00 },
    { nome: 'Bruna Tavares', especificacao: 'Gloss parceria brigerton', categoria: 'Gloss', preco: 83.00 },
    { nome: 'Mari Maria', especificacao: 'gloss mari maria lip juice', categoria: 'Gloss', preco: 56.00 },
    { nome: 'Too Faced', especificacao: 'sombra em stick too faced quickie queen', categoria: 'Sombra', preco: 150.00 },
    { nome: 'Guerlai', especificacao: 'paleta de sombras guerlain ombres g', categoria: 'Sombra', preco: 573.00 },
];

    const divProdutos = document.getElementById("produtosContainer");
    const campoCategoria = document.getElementById("inputField");
    const formulario = document.getElementById("filtroForm");

    function renderizarProdutos(listaProdutos) {
        divProdutos.innerHTML = "";

        if (listaProdutos.length === 0) {
            const vazio = document.createElement('p');
            vazio.textContent = 'Nenhum produto encontrado para essa categoria.';
            divProdutos.appendChild(vazio);
            return;
        }

            listaProdutos.forEach((produto) => {
                const produtoDiv = document.createElement('div');
                produtoDiv.classList.add('produto');

                const nomeProduto = document.createElement('h2');
                nomeProduto.textContent = produto.nome;

                const especificacaoProduto = document.createElement('p');
                especificacaoProduto.textContent = `Especificação: ${produto.especificacao}`;

                const categoriaProduto = document.createElement('p');
                categoriaProduto.textContent = `Categoria: ${produto.categoria}`;

                const precoProduto = document.createElement('p');
                precoProduto.textContent = `Preço: R$ ${produto.preco.toFixed(2)}`;

                produtoDiv.appendChild(nomeProduto);
                produtoDiv.appendChild(especificacaoProduto);
                produtoDiv.appendChild(categoriaProduto);
                produtoDiv.appendChild(precoProduto);

                divProdutos.appendChild(produtoDiv);
            });
        }

        function filtrarProdutos() {
            const valorBusca = campoCategoria.value.trim().toLowerCase();

            if (!valorBusca) {
                renderizarProdutos(produtos);
                return;
            }

            const filtrados = produtos.filter((produto) =>
                produto.categoria.toLowerCase().includes(valorBusca) ||
                produto.nome.toLowerCase().includes(valorBusca) ||
                produto.especificacao.toLowerCase().includes(valorBusca)
            );

            renderizarProdutos(filtrados);
        }

        formulario.addEventListener('submit', function(event) {
            event.preventDefault();
            filtrarProdutos();
        });

        renderizarProdutos(produtos);