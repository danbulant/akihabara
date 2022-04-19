
<main class="w-150 h-200 cursor-default select-none flex flex-col">
    <h1>Akihabara - An Otaku Haven</h1>
    <h2>Horké místa:</h2>
    <div class="flex-grow flex flex-col w-full">
        <article class="hover:flex-grow h-30">
            <img src="/hanseibashi2.jpg" alt="">
            <div class="absolute">
                <h3>Manseibashi Station:</h3>
                <p>Manseibashi Station je trh rozpoložený na opuštěné železniční stanici, je odtud pěkný výhled na řeku Kanda!</p>
            </div>
        </article>
        <article class="hover:flex-grow h-30">
            <img src="/maid.png" alt="">
            <div class="absolute">
                <h3>Maid Café:</h3>
                <p>Pokud máte rádi trochu odpočinku s šálkem kávy nebo čaje tak zavítejte do jedné z Maid kaváren! Servírky zde chodí v tradičních oblecích služek, což je také důvod, proč jsou tak oblíbené.</p>
            </div>
        </article>
        <article class="hover:flex-grow h-30">
            <img src="/sega.jpg" alt="">
            <div class="absolute">
                <h3>SEGA game centrum:</h3>
                <p>Mezi další oblíbené destinace také patří místní arkáda. Můžete si zde užít jak staré tak ty nejnovější tituly od společnosti SEGA.</p>
            </div>
        </article>
    </div>
</main>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;1,400&display=swap');
    main {
        background-image: url("/bg.jpg");
        background-size: cover;
        border-radius: 5px;
        margin: auto;
        padding: 10px;
        font-family: 'Roboto', sans-serif;
    }
    article, h1, h2 {
        border-radius: 5px;
        margin: 0;
        transition: all .3s;
        cursor: pointer;
    }
    h1,h2 {
        margin: 5px;
        padding: 5px;
        background: rgba(255,255,255,0.4);
        backdrop-filter: blur(5px);
    }
    h3, p {
        margin: 0;
        padding: 0;
    }
    article {
        position: relative;
        overflow: hidden;
        margin: 5px;
    }
    article div {
        background: rgba(255,255,255,0.4);
        backdrop-filter: blur(5px);
        width: calc(100% - 10px);
        height: calc(100% - 10px);
        padding: 0;
        margin: 0 5px 0 0;
        padding: 5px;
        z-index: 1;
        transition: all .3s;
    }
    article img {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
        width: 100%;
        height: 100%;
        object-fit: contain;
        opacity: 0;
        transition: all .3s;
        border-radius: 5px;
    }
    article:hover img {
        opacity: 1;
    }
    article:hover div {
        opacity: 0;
        background: rgba(255,255,255,0.6);
    }
</style>