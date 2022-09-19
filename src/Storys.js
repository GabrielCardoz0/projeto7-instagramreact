
const arr = [
    { imagem: 'assets/img/9gag.svg', usuario: '9gag' },
    { imagem: 'assets/img/meowed.svg', usuario: 'meowed' },
    { imagem: 'assets/img/barked.svg', usuario: 'barked' },
    { imagem: 'assets/img/nathanwpylestrangeplanet.svg', usuario: 'nathanwpylestrangeplanet' },
    { imagem: 'assets/img/wawawicomics.svg', usuario: 'wawawicomics' },
    { imagem: 'assets/img/respondeai.svg', usuario: 'respondeai' },
    { imagem: 'assets/img/filomoderna.svg', usuario: 'filomoderna' },
    { imagem: 'assets/img/memeriagourmet.svg', usuario: 'memeriagourmet' }
];


export default function Stories() {

    function story(sto) {
        return (
            <div class="story">
                <div class="imagem">
                    <img src={sto.imagem} />
                </div>
                <div class="usuario">
                    {sto.usuario}
                </div>
            </div>
        )
    }

    const listaSotrys = arr.map(story);

    return (
        <div class="stories">
            {listaSotrys}
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}

{

    /* <div class="story">
                <div class="imagem">
                    <img src="assets/img/9gag.svg" />
                </div>
                <div class="usuario">
                    9gag
                </div>
            </div>

            <div class="story">
                <div class="imagem">
                    <img src="assets/img/meowed.svg" />
                </div>
                <div class="usuario">
                    meowed
                </div>
            </div>

            <div class="story">
                <div class="imagem">
                    <img src="assets/img/barked.svg" />
                </div>
                <div class="usuario">
                    barked
                </div>
            </div>

            <div class="story">
                <div class="imagem">
                    <img src="assets/img/nathanwpylestrangeplanet.svg" />
                </div>
                <div class="usuario">
                    nathanwpylestrangeplanet
                </div>
            </div>

            <div class="story">
                <div class="imagem">
                    <img src="assets/img/wawawicomics.svg" />
                </div>
                <div class="usuario">
                    wawawicomics
                </div>
            </div>

            <div class="story">
                <div class="imagem">
                    <img src="assets/img/respondeai.svg" />
                </div>
                <div class="usuario">
                    respondeai
                </div>
            </div>

            <div class="story">
                <div class="imagem">
                    <img src="assets/img/filomoderna.svg" />
                </div>
                <div class="usuario">
                    filomoderna
                </div>
            </div>

            <div class="story">
                <div class="imagem">
                    <img src="assets/img/memeriagourmet.svg" />
                </div>
                <div class="usuario">
                    memeriagourmet
                </div>
            </div> */}