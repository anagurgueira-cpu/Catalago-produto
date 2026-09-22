
const produtos = [
    ['ruby rose', 'rosa', 'blush', 100.00],
    ['melu', 'rose', 'blush', 150.00],
    ['sophia', 'verde', 'blush', 200.00],
    ['Franciny', 'lipbunny', 'Gloss', 250.00],
    ['Luna', 'luna', 'Gloss', 300.00],
    ['Bruna Tavares', 'Base Liquida', 'Base', 300.00],
    ['Dior', 'Base Liquida', 'Base', 500.00],
    ['Bruna Tavares', 'Gloss parceria brigerton', 'Gloss', 83.00],
    ['Mari Maria', 'gloss mari maria lip juice', 'Gloss', 56.00],
    ['Too Faced', 'sombra em stick too faced quickie queen', 'Sombra', 150.00],
    ['Guerlain', 'paleta de sombras guerlain ombres g', 'Sombra', 573.00],
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
                nomeProduto.textContent = produto[0];

                const especificacaoProduto = document.createElement('p');
                especificacaoProduto.textContent = `Especificação: ${produto[1]}`;

                const categoriaProduto = document.createElement('p');
                categoriaProduto.textContent = `Categoria: ${produto[2]}`;

                const precoProduto = document.createElement('p');
                precoProduto.textContent = `Preço: R$ ${produto[3].toFixed(2)}`;

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
                produto[2].toLowerCase().includes(valorBusca) ||
                produto[0].toLowerCase().includes(valorBusca) ||
                produto[1].toLowerCase().includes(valorBusca)
            );

            renderizarProdutos(filtrados);
        }

        formulario.addEventListener('submit', function(event) {
            event.preventDefault();
            filtrarProdutos();
        });

        renderizarProdutos(produtos);