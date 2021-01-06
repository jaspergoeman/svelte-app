<script>
    export let showAandoening;
    export let selectedAandoening;

    export let selectedAntibioticas ;
    export let antibioticas ;
    let selectedAntibiotica;

    function getAntibiotica(name) {
            antibioticas.forEach((a) => {
            if (a.name === name) {
                selectedAntibiotica = a;
            }
        });
        return selectedAntibiotica;
    }
    function close() {
        showAandoening = false;
        console.log(showAandoening);
    }
</script>

<style>
    .box {
        position: absolute;
        padding: 20rem calc(40vw / 2);
        background: rgba(0, 0, 0, 0.7);
        top: 0;
        overflow: hidden;
        background-size: cover;
    }
    .box-title {
        position: relative;
        background-color: #fff;
        width: 60vw;
        text-align: center;
        color: #1e64c8;
        text-transform: uppercase;
        font-size: 1.4rem;
        padding: 1rem 0;
    }
    .box-title h2 {
        margin: 0;
    }
    .box-content {
        background-color: #fff;
        width: 60vw;
        box-sizing: border-box;
        padding: 5rem 2rem;
        outline: 2px solid #649ae8;
        outline-offset: -2rem;
    }
    .box-columns {
        display: flex;
        justify-content: space-between;
        margin-left: 2rem;
        margin-right: 4rem;
    }
    .box-subtitle {
        font-size: 1.4rem;
        color: #707070;
    }
    .box-content-title {
        margin-top: -3.1rem;
        margin-left: -0.1rem;
        margin-right: -0.1rem;
        height: 4rem;
        background-color: #649ae8;
        display: flex;
        align-content: center;
    }
    .box-content-title h4 {
        margin: 0;
        font-size: 1.4rem;
        margin-top: 1.3rem;
        margin-left: 2rem;
    }
    .box-item {
        margin-bottom: 2rem;
    }
    .box-item:last-child {
        margin-bottom: 0;
    }

    .item-name {
        font-weight: 500;
    }
    .item-remark {
        font-style: italic;
        color: goldenrod;
    }
    .item-dosis {
        font-weight: 300;
    }

    .close {
        display: flex;
        justify-content: flex-end;
        padding-right: 1.4rem;
        padding-top: 0.6rem;
        background: #fff;
    }
</style>

<div class="box">
    <div class="close"><a on:click={() => close()}>close X</a></div>
    <div class="box-title">
        <h2>{selectedAandoening}</h2>
    </div>
    <div class="box-content">
        <div class="box-content-title">
            <h4>Variant 2</h4>
        </div>
        <div class="box-columns">
            <div class="box-first">
                <div class="box-subtitle">
                    <h5>Eerste keuze</h5>
                </div>
                <div class="box-item">
                    {#each selectedAntibioticas as a}
                        <ul >
                            <li class="item-name">
                                {getAntibiotica(a).name}
                            </li>
                            <li class="item-dosis">
                                {getAntibiotica(a).dosis}
                            </li>
                            <li class="item-remark">
                                {getAntibiotica(a).remark}
                            </li>
                        </ul>
                    {/each}
                </div>
            </div>
            <div class="box-second">
                <div class="box-subtitle">
                    <h5>Tweede keuze</h5>
                </div>
            </div>
            <div class="box-third">
                <div class="box-subtitle">
                    <h5>Alergie</h5>
                </div>
            </div>
        </div>
    </div>
</div>
