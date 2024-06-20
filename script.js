const containerVideos = document.querySelector('.videos__container');

async function buscaEMostraVideos() {
    try {
        const busca = await fetch("http://localhost:3000/videos");
        const videos = await busca.json();
        videos.forEach( video => {
                                    containerVideos.innerHTML += `
                                        <li class="videos__item">
                                            <iframe width="100%" height="62%" 
                                                    src="${video.url}" 
                                                    title="${video.title}" 
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    frameborder="0" 
                                                    allowfullscreen>
                                            </iframe>
                                            <div class="descricao-video">
                                                <img class="img-canal" src="${video.imagem}" alt="Logo do Canal">
                                                <h3 class="titulo-video">${video.titulo}</h3>
                                                <p class="titulo-canal">${video.descricao}</p>
                                            </div>

                                        </li>
                                    `;
                                } 
        );
    } catch( error) {
        containerVideos.innerHTML = `<p>Houve um erro ao carregar os vídeos: ${erro}</p>`;
    } finally {
        // sempre acontece
        ;
    };
};

buscaEMostraVideos();

const barraDePesquisa = document.querySelector('.pesquisar__input');

barraDePesquisa.addEventListener( 'input', filtrarPesquisa );

function filtrarPesquisa() {
    const videos = document.querySelectorAll( '.videos_item' );
}



/* 
const api = fetch("http://localhost:3000/videos")
.then( res => res.json() )
.then( videos => 
        videos.forEach( video => 
        {
            containerVideos.innerHTML += `
                <li class="videos__item">
                    <iframe width="100%" height="62%" 
                            src="${video.url}" 
                            title="${video.title}" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            frameborder="0" 
                            allowfullscreen>
                    </iframe>
                    <div class="descricao-video">
                        <img class="img-canal" src="${video.imagem}" alt="Logo do Canal">
                        <h3 class="titulo-video">${video.titulo}</h3>
                        <p class="titulo-canal">${video.descricao}</p>
                    </div>

                </li>
            `;
        })
    )
.catch( (erro) => {
    containerVideos.innerHTML = `<p>Houve um erro ao carregar os vídeos: ${erro}</p>`;
});
*/