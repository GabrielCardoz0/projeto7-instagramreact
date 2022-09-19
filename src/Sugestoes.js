
const arr = [
    { img: "assets/img/bad.vibes.memes.svg", user: "bad.vibes.memes", razao: "Segue você" },
    { img: "assets/img/chibirdart.svg", user: "chibirdart", razao: "Segue você" },
    { img: "assets/img/razoesparaacreditar.svg", user: "razoesparaacreditar", razao: "Novo no Instagram" },
    { img: "assets/img/adorable_animals.svg", user: "adorable_animals", razao: "Segue você" },
    { img: "assets/img/smallcutecats.svg", user: "smallcutecats", razao: "Segue você" }
]

export default function Sugestoes() {

    function sugest(s) {
        return (
            <div class="sugestao">
                <div class="usuario">
                    <img src={s.img} />
                    <div class="texto">
                        <div class="nome">{s.user}</div>
                        <div class="razao">{s.razao}</div>
                    </div>
                </div>
                <div class="seguir">Seguir</div>
            </div>
        )
    }

    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {arr.map(sugest)}
        </div>
    )
}