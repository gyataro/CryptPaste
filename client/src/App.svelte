<script>
	import Style from './components/Style.svelte';
	import Navbar from './components/Navbar.svelte';
	import PasteForm from './components/PasteForm/PasteForm.svelte';
	export let name;
</script>

<main class="font-mono">
	<Navbar />
	<PasteForm />
</main>

<style>
	:global(body) {
		padding: 0;
	}
</style>