<script>
	import Style from './components/Style.svelte';
	import Navbar from './components/Navbar.svelte';
	import NotFound from './components/404.svelte';
	import ReadPaste from './routes/readPaste/index.svelte';
	import CreatePaste from './routes/createPaste/index.svelte';
	import { Route } from 'tinro';
</script>

<main class="font-mono">
	<Navbar />
	<div class="px-4 py-4 max-w-screen-xl mx-auto">
		<Route path="/"><CreatePaste /></Route>
		<Route path="/:id"><ReadPaste /></Route>
		<Route fallback><NotFound /></Route>
	</div>
</main>

<style>
	:global(body) {
		padding: 0;
	}
</style>