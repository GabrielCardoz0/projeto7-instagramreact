import React from "react"

const arr = [
    { img: "assets/img/meowed.svg", user: "meowed", content: "assets/img/gato-telefone.svg", likeFor: "assets/img/respondeai.svg", likeForUser: "respondeai", likes: 101.523 },

    { img: "assets/img/barked.svg", user: "barked", content: "assets/img/dog.svg", likeFor: "assets/img/adorable_animals.svg", likeForUser: "adorable_animals", likes: 99.159 },

    { img: "assets/img/barked.svg", user: "barked", content: "assets/img/dog.svg", likeFor: "assets/img/adorable_animals.svg", likeForUser: "Gabriel_Cardozo", likes: 99.159 }
]

export default function Posts() {

    const heartEmpty = <ion-icon onClick={curtida} name="heart-outline"></ion-icon>
    const heartSharp = <ion-icon class="red" onClick={curtida} name="heart-sharp"></ion-icon>

    const [bookmarkType, setBookmarkType] = React.useState('bookmark-outline')

    const [heartType, setHeartType] = React.useState(heartEmpty)

    


    function salvarPost() {
        setBookmarkType('bookmark-sharp')
    }

    function curtida() {
        setHeartType(heartSharp);
    }



    function post(p) {
        return (
            <div class="post">
                <div class="topo">
                    <div class="usuario">
                        <img src={p.img} />
                        {p.user}
                    </div>
                    <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div class="conteudo">
                    <img src={p.content} />
                </div>

                <div class="fundo">
                    <div class="acoes">
                        <div>
                            {heartType}
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon name={bookmarkType} onClick={salvarPost}></ion-icon>
                        </div>
                    </div>

                    <div class="curtidas">
                        <img src={p.likeFor} />
                        <div class="texto">
                            Curtido por <strong>{p.likeForUser}</strong> e <strong>outras {p.likes} pessoas</strong>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div class="posts">

            {arr.map(post)}

        </div>
    )
}