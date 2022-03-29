<script>
    export let title = null;
</script>

<div class="relative flex py-5 items-center">
    <div class="flex-grow border-t border-gray-800"></div>
    {#if title}<h1 class="flex-shrink mx-4 font-normal text-lg text-gray-800">{title}</h1>{/if}
    <div class="flex-grow border-t border-gray-800"></div>
</div>