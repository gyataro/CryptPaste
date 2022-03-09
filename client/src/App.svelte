<script>
	import Style from './components/Style.svelte';
	import Navbar from './components/Navbar.svelte';
	import PasteForm from './components/PasteForm.svelte';
	export let name;
</script>


<!--
<main>
	<h1 class="py-8 px-4 font-extrabold border border-indigo-900 shadow-lg">Hello, {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>
-->

<main>
	<Navbar />
</main>

<style>
	:global(body) {
		padding: 0;
	}
</style>