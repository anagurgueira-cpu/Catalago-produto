const produtos = [
    ['CAROLINA HERRERA', 'blush líquido carolina herrera good girl blusher', 'blush', 300.00, 'img/BlushCarolinaherrera.jpg'],
    ['RARE BEAUTY', 'blush líquido rare beauty soft pinch', 'blush', 150.00, 'img/BlushRareBeauty.jpg'],
    ['BRUNA TAVARES', 'blush contorno bruna tavares bt blush', 'blush', 66.00, 'img/BlushBruna.jpg'],
    ['BRUNA TAVARES', 'blush em stick bruna tavares coca-cola', 'blush', 90.00, 'img/Blushcoca.jpg'],
    ['FRAN BY FRANCINY EHLKE', 'gloss labial fran by franciny ehlke franboesa', 'Gloss', 70.00, 'img/GlossfranFramboesa.jpg'],
    ['BRUNA TAVARES', 'gloss labial bruna tavares ice', 'Gloss', 70.00, 'img/Glossiced.jpg'],
    ['BRUNA TAVARES', 'Gloss parceria brigerton', 'Gloss', 83.00, 'img/BTbrigerton.jpg'],
    ['MARI MARIA', 'gloss mari maria lip juice', 'Gloss', 56.00, 'img/lipjuice.jpg'],
    ['Too Faced', 'sombra em stick too faced quickie queen', 'Sombra', 150.00, 'img/sombratoofaced.jpg'],
    ['Guerlain', 'paleta de sombras guerlain ombres g', 'Sombra', 573.00, 'img/sombragurlain.jpg'],
    ['DIOR', 'blush dior backstage rosy glow', 'blush', 285.00, 'img/diorblush.jpg'],
    ['NARS', 'blush em pó nars orgasm', 'blush', 249.00, 'img/BlushNars.jpg'],
    ['BENEFIT', 'blush em pó benefit hoola', 'blush', 195.00, 'img/Benefit.jpg'],
    ['MARI MARIA', 'blush compacto mari maria beauty', 'blush', 49.90, 'img/BlushMari.jpg'],
    ['FENTY BEAUTY', 'gloss bomb fenty beauty universal lip luminizer', 'Gloss', 139.00, 'img/GlossFenty.jpg'],
    ['MAC', 'lipglass mac lip gloss', 'Gloss', 119.00, 'img/glossmac.jpg'],
    ['KIKO MILANO', '3d hydra lipgloss kiko milano', 'Gloss', 89.90, 'img/GlossKiko.jpg'],
    ['NATASHA DENONA', 'paleta de sombras natasha denona midi', 'Sombra', 420.00, 'img/sombranatasha.jpg'],
    ['HUDA BEAUTY', 'paleta de sombras huda beauty empower', 'Sombra', 399.00, 'img/hudasombra.jpg'],
    ['TOM FORD', 'quarteto de sombras tom ford eye color quad', 'Sombra', 590.00, 'img/tomsombra.jpg'],
    ['CHARLOTTE TILBURY', 'paleta de sombras charlotte tilbury luxury palette', 'Sombra', 380.00, 'img/sombracharlotye.jpg'],
    ['MARC JACOBS', 'sombra em gel marc jacobs o-mega', 'Sombra', 180.00, 'img/march.jpg'],
    ['MARC JACOBS', 'blush em pó marc jacobs air blush', 'blush', 210.00, 'img/marchblush.jpg']
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

        const imagemProduto = document.createElement('img');
        imagemProduto.src = produto[4]; 
        imagemProduto.alt = produto[1];  
        imagemProduto.width = 150;    

        const nomeProduto = document.createElement('h2');
        nomeProduto.textContent = produto[0];

        const especificacaoProduto = document.createElement('p');
        especificacaoProduto.textContent = `Especificação: ${produto[1]}`;

        const categoriaProduto = document.createElement('p');
        categoriaProduto.textContent = `Categoria: ${produto[2]}`;

        const precoProduto = document.createElement('p');
        precoProduto.textContent = `Preço: R$ ${produto[3].toFixed(2)}`;

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