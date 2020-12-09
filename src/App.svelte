<script>
	import Beam from "./components/Beam.svelte";
	import Header from "./components/Header.svelte";
	export let topics;
	export let subgroups;
	let selectedTopic = "";
	let selectedSubgroup = "";
	let selectedDoelgroep = "";
</script>

<style>
	@font-face {
  font-family: 'Arboria-Book';
  src: local('Arboria'), url(./fonts/Arboria-Medium.otf) format('truetype');
}
:global(body){
	font-family: 'Arboria', sans-serif;
  font-weight: 500;
}
	:global(h1) {
		color: #1e64c8;
		text-transform: uppercase;
		font-size: 2.2rem;
	}

	:global(ul) {
		margin-inline: 0;
		padding-inline: 0;
		margin-block: 0;
	}

	:global(li) {
		list-style-type: none;
	}

	:global(a) {
		text-decoration: none;
		color: #1ebfc8;
		cursor: pointer;
	}

	:global(.clickable) {
		cursor: pointer;
	}

	:global(.clickable:hover) {
		color: #1ebfc8;
	}

	:global(.App-container) {
		position: relative;
		margin: 0 auto;
		padding: 0 30px;
	}

	:global(.App-section) {
		padding: 30px 0;
	}

	:global(.App-section--primary) {
		color: white;
		background: #1e64c8;
	}

	:global(.App-section--secondary) {
		color: white;
		background: #649ae8;
	}

	:global(.App-is-selected) {
		color: #1ebfc8;
		border-bottom: 2px solid #1ebfc8;
		padding-bottom: 0.4rem;
	}

	@media (min-width: 576px) {
		:global(.App-container--xl) {
			max-width: 680px;
		}
	}

	@media (min-width: 769px) {
		:global(.App-container--xl) {
			max-width: 720px;
		}
		:global(.App-section) {
			padding: 30px 0;
		}
	}

	@media (min-width: 992px) {
		:global(.App-container--xl) {
			max-width: 1140px;
		}
	}

	@media (min-width: 1425px) {
		:global(.App-container--xl) {
			max-width: 1200px;
		}
	}
</style>

<Header bind:selectedDoelgroep={selectedDoelgroep}/>
<main>
	
<Beam {topics} {subgroups} bind:selectedTopic={selectedTopic} bind:selectedSubgroup={selectedSubgroup}/>
<h1>{selectedTopic}</h1>
<h1>{selectedSubgroup}</h1>
<h1>{selectedDoelgroep}</h1>
</main>
