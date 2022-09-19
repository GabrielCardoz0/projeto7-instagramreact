
import React from "react";

export default function Usuario(props) {

    const [imgUser, setImgUser] = React.useState("assets/img/catanacomics.svg");
    const [userNamer, setUserName] = React.useState(props.name);

    function mudarNome(){
        const novoNome = prompt("favor, insira o novo nome do perfil")
        
        if(novoNome !=="" || novoNome !== null ){
            setUserName(novoNome);
        }
        console.log(novoNome)
    }

    function mudarImagem(){
        const novaImagem = prompt("favor, insira o novo link para a imagem do perfil")
        
        if(novaImagem !=="" || novaImagem !== null ){
            setImgUser(novaImagem);
        }
    }

    return (
        <div class="usuario">
            <img src={imgUser} onClick={mudarImagem}/>
            <div class="texto">
                <strong>{props.user}</strong>
                <span>
                    {userNamer}
                    <ion-icon name="pencil" onClick={mudarNome}></ion-icon>
                </span>
            </div>
        </div>
    )
}