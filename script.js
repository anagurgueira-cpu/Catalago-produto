const produtos = [
    ['CAROLINA HERRERA', 'blush líquido carolina herrera good girl blusher', 'blush', 300.00, 'img/BlushCarolinaherrera.jpg'],
    ['RARE BEAUTY', 'blush líquido rare beauty soft pinch', 'blush', 150.00, 'img/BlushRareBeauty.jpg'],
    ['BRUNA TAVARES', 'blush contorno bruna tavares bt blush', 'blush', 66.00, 'img/BlushBruna.jpg'],
    ['BRUNA TAVARES', 'blush em stick bruna tavares coca-cola', 'blush', 90.00, 'img/Blushcoca.jpg'],
    ['KIKO MILANO', 'lipbunny', 'Gloss', 99.90, 'img/GlossKiko.jpg'],
    ['FRAN BY FRANCINY EHLKE', 'gloss labial fran by franciny ehlke franboesa', 'Gloss', 70.00, 'img/GlossfranFramboesa.jpg'],
    ['BRUNA TAVARES', 'gloss labial bruna tavares ice', 'Gloss', 70.00, 'img/Glossiced.jpg'],
    ['BRUNA TAVARES', 'Gloss parceria brigerton', 'Gloss', 83.00, 'img/BTbrigerton.jpg'],
    ['MARI MARIA', 'gloss mari maria lip juice', 'Gloss', 56.00, 'img/GlossMariMaria.jpg'],
    ['Too Faced', 'sombra em stick too faced quickie queen', 'Sombra', 150.00, 'img/SombraTooFaced.jpg'],
    ['Guerlain', 'paleta de sombras guerlain ombres g', 'Sombra', 573.00, 'img/SombraGuerlain.jpg'],
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

        // Criação e configuração da imagem
        const imagemProduto = document.createElement('img');
        imagemProduto.src = produto[4]; // O índice 4 contém o caminho da imagem
        imagemProduto.alt = produto[1];  // Texto alternativo com a especificação
        imagemProduto.width = 150;      // (Opcional) Você pode ajustar o tamanho pelo CSS também

        const nomeProduto = document.createElement('h2');
        nomeProduto.textContent = produto[0];

        const especificacaoProduto = document.createElement('p');
        especificacaoProduto.textContent = `Especificação: ${produto[1]}`;

        const categoriaProduto = document.createElement('p');
        categoriaProduto.textContent = `Categoria: ${produto[2]}`;

        const precoProduto = document.createElement('p');
        precoProduto.textContent = `Preço: R$ ${produto[3].toFixed(2)}`;

        // Adicionando os elementos na div do produto (a ordem define onde a foto aparece)
        produtoDiv.appendChild(imagemProduto);
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