<script>
    import Aandoening from "./Aandoening.svelte";
    export let aandoeningen;
    export let aandoeninggroepen;
    export let antibioticas;
    export let selectedTopic;
    export let selectedSubgroup;
    export let selectedDoelgroep;

    let showAandoening = false;
    let selectedAandoening = "";
    let selectedAntibioticas = [];

    function getAntibioticas(aandoening) {
        aandoeningen.forEach((a) => {
            if (a.name === aandoening) {
                selectedAntibioticas = a.antibiotica;
            }
        });
    }

    function show(aandoening) {
        getAntibioticas(aandoening);
        selectedAandoening = aandoening;
        showAandoening = !showAandoening;
    }
</script>

<style>
    .card {
        display: block;
        width: calc(33.3% - 15px * 2);
        margin: 15px;
        border: 2px solid #e9f1fc;
    }
    .card-title {
        color: #1e64c8;
        font-size: 1.5rem;
        font-weight: 700;
        background-color: #e9f1fc;
        padding: 1rem;
    }
    .card-content {
        display: flex;
    }
    .card-content-list {
        padding: 1rem;
    }
    .card-content-list li a {
        text-decoration: none;
        font-size: 1.2rem;
        word-break: break-all;
        color: #565656;
    }
</style>

<section class="App-section">
    <div class="App-container App-container--xl">
        {#each aandoeninggroepen as a}
            <div>
                {#if a.doelgroep === selectedDoelgroep && a.topics.includes(selectedTopic) && a.subgroups.includes(selectedSubgroup)}
                    <div class="card">
                        <div class="card-title">{a.name}</div>
                        <div class="card-content">
                            <ul class="card-content-list">
                                {#each a.aandoeningen as aandoening}
                                    <li>
                                        <a on:click={() => show(aandoening)}>{aandoening}</a>
                                    </li>
                                {/each}
                            </ul>
                        </div>
                    </div>
                {/if}
            </div>
        {/each}
    </div>
    <div >
        {#if showAandoening}
        <Aandoening {selectedAandoening} bind:showAandoening={showAandoening} {selectedAntibioticas} {antibioticas}/>
        {/if}
    </div>
</section>
