<script>
	import Style from './lib/components/Style.svelte';
	import Navbar from './lib/components/Navbar.svelte';
	import Paste from './routes/readPaste/index.svelte';
	import PasteForm from './routes/createPaste/index.svelte';
	import { Route } from 'tinro';
</script>

<main class="font-mono">
	<Navbar />
	<Route path="/"><PasteForm /></Route>
	<Route path="/:id"><Paste /></Route>
</main>

<style>
	:global(body) {
		padding: 0;
	}
</style>