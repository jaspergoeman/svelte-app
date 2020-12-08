<script>
    
    import Icon from "fa-svelte";
    import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
    export let subgroups;
    export let topics;

    export let selectedTopic;
    export let selectedSubgroup;

    function selectTopic(topic) {
        selectedTopic = topic;
    }

    function selectSubgroup(subgroup) {
        selectedSubgroup = subgroup;
    }
    
</script>

<style>
    .beam {
        text-transform: uppercase;
        font-weight: 500;
    }

    .beam ul {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .beam ul li {
        margin-right: 0.4rem;
        margin-bottom: 0.8rem;
        font-size: 0.8rem;
    }

    .beam ul li a {
        color: white;
    }

    .beam__isSelected  {
        text-decoration: overline;
    }

    .beam__div-item {
        display: flex;
    }
    .beam__input {
        display: none;
        background: transparent;
        color: white;
        border: none;
        border-bottom: 3px solid #1ebfc8;
        color: white;
    }

    .beam__input--show {
        display: flex;
    }

    .beam__input:focus {
        outline: none;
    }
    .beam__input::placeholder {
        color: white;
    }
</style>

<section class="App-section App-section--primary">
    <div class="App-container App-container--xl">
        <div class="beam">
            <ul>
                {#each subgroups as subgroup}
                <li id={subgroup} ><a class="{selectedSubgroup === subgroup ? 'beam__isSelected' : ''}" on:click={() => selectSubgroup(subgroup)}>{subgroup}</a> </li>
                {/each}
                <div class="beam__div-item">
                    <input
                    class="beam__input"
                        type="text"
                        placeholder="zoekterm" />
                    <div class="clickable beam__search">
                        <Icon
                            icon={faSearch}
                            onMouseEnter={() => this.showInput()} />
                    </div>
                </div>
            </ul>
        </div>
    </div>
</section>
<section class="App-section App-section--secondary">
    <div class="App-container App-container--xl">
        <div class="beam">
            <ul>
                {#each topics as topic}
                <li id={topic}><a class="{selectedTopic === topic ? 'beam__isSelected' : ''}" on:click={() => selectTopic(topic)}>{topic}</a> </li>
                {/each}
            </ul>
        </div>
    </div>
</section>
