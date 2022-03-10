<script>
	let logo = "./images/logo.svg";
	let menu = "./icons/menu-open.svg";
	let close = "./icons/menu-close.svg";

	let isOpen = false;
	let innerWidth = 0;
</script>

<svelte:window bind:innerWidth />

<nav class="px-4 py-4 shadow-md">
	<!-- Navbar -->
	<div class="flex flex-wrap justify-between max-w-screen-xl mx-auto">
		<!-- Logo -->
		<div class="w-1/2 sm:w-1/4">
			<img class="h-8 mt-1 w-auto" src={logo} alt="logo"/>
		</div>

		<!-- (Mobile) Open/Close Menu -->
		<div class="w-1/2 sm:hidden">
			<button class="float-right rounded-sm border-0 bg-neutral-100 p-1" on:click={() => isOpen = !isOpen}>
				{#if isOpen}
					<img class="inline-block h-6" src={close} alt="close"/>
				{:else}
					<img class="inline-block h-6" src={menu} alt="menu"/>
				{/if}
			</button>
		</div>

		<!-- Navbar Menu -->
		{#if isOpen || innerWidth >= 640}
			<ul class="max-w-screen-xl">
				<li class="sm:inline-block">
					<button class="border-teal-600 rounded-md border-2 px-8 py-1">
						<span class="text-teal-600 font-bold text-lg">New Paste</span>
					</button>
				</li>
			</ul>
		{/if}
	</div>
</nav>