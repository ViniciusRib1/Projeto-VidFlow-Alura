const containerVideos = document.querySelector(".videos__container");


async function bucarEmostrarVideos() {
    try{
        const busca = await fetch("http://localhost:3000/videos") //O await vai aguardar que a busca seja feita
        const videos = await busca.json();

            videos.forEach((video) => {
                if (video.categoria == "") {
                    throw new Error('Vídeo não tem categoria');
                }
                containerVideos.innerHTML += ` 
                <li class="videos__item">
                    <iframe src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
                    <div class="descricao-video">
                        <img class="img-canal" src="${video.imagem}" alt="Logo do canal">
                        <h3 class="titulo-video">${video.titulo}</h3>
                        <p class="titulo-canal">${video.descricao}</p> 
                    </div>
                    </li>
                `;


            })
    } catch(error) {
        containerVideos.innerHTML = `<p> Houve um erro ao carregar os vídeos</p> `
    }
    // finally {
    //     alert("Isso sempre vai acontecer! ")
    // } 
    // Ele sempre vai executar idependente se há um erro sim ou não

    //Em JavaScript, um callback é uma função que é passada como argumento para outra função
    //e é executada após a conclusão de uma operação assíncrona ou 
    //evento específico. Os callbacks são amplamente utilizados para lidar com tarefas 
    //assíncronas, como chamadas de API, leitura de arquivos, eventos de usuário e muito mais.
}


bucarEmostrarVideos();