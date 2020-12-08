<script>
    import Logo_uz from '../img/logo-uz.svelte';
    import Logo_u_gent from'../img/logo-u-gent.svelte';

    export let selectedDoelgroep;

    let volwassenenIsClicked = false;
    let kinderenIsClicked = false;

    function setDoelgroep(doelgroep){
        if( doelgroep === "kinderen"){
            volwassenenIsClicked = false;
            kinderenIsClicked = true;
        };
        if( doelgroep === "volwassenen"){
            volwassenenIsClicked = true;
            kinderenIsClicked = false;
        };
        selectedDoelgroep = doelgroep;
    };
</script>

<style>
    .header__section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .header__section--img {
        height: 1.6rem;
        margin-right: 1.4rem;
    }

    .header__section--mid h1 {
        margin: 1rem 0;
    }

    .header__section--mid ul {
        text-transform: uppercase;
        font-size: 1rem;
        font-weight: 500;
        color: #1e64c8;
        margin: 0 2rem;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .header__section--right {
        display: none;
    }

    @media screen and (min-width: 576px) {
        .header__section {
            flex-direction: row;
            justify-content: space-between;
        }
        .header__section--left {
            flex-basis: 30%;
            text-align: left;
        }
        .header__section--mid {
            flex-basis: 40%;
            text-align: center;
        }
        .header__section--mid ul {
            display: flex;
            justify-content: center;
        }
        .header__section--mid ul li:first-child {
            margin-right: 2rem;
        }
        .header__section--right {
            display: flex;
            flex-basis: 30%;
            justify-content: flex-end;
        }
        .header__section--right ul {
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
        }
        .header__section--right ul li:first-child {
            margin-right: 0.6rem;
        }
    }

    @media screen and (min-width: 769px) {
        .header__section--img {
            height: 3.2rem;
        }
    }
</style>

<header class="App-header">
    <section class="App-section">
        <div class="App-container App-container--xl">
            <div class="header__section">
                <div claa="header__section--left">
                    
                        <Logo_u_gent />
                        <Logo_uz />
                </div>
                <div class="header__section--mid">
                    <h1>Antibioticagids</h1>
                    <ul>
                        <li id="kinderen" class="{kinderenIsClicked === true ? 'App-is-selected' : ''}">
                            <div
                                class="clickable"
                                on:click={() => setDoelgroep('kinderen')}>
                                Kinderen
                            </div>
                        </li>
                        
                        <li id="volwassenen" class="{volwassenenIsClicked === true ? 'App-is-selected' : ''}">
                            <div
                                class="clickable"
                                on:click={() => setDoelgroep('volwassenen')}>
                                Volwassenen
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="header__section--right">
                    <ul>
                        <li>
                            <a
                                href="https://www.bvikm.org/documenten"
                                target="_blank"
                                rel="noreferrer">IGGI</a>
                        </li>
                        <li>
                            <a
                                href="https://www.uzgent.be/nl/zorgaanbod/mdspecialismen/OPAT/Paginas/default.aspx"
                                target="_blank"
                                rel="noreferrer">OPAT</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</header>
