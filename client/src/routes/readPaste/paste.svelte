<script>
    import { onMount } from 'svelte';
    import Divider from '../../components/Divider.svelte';
    import Prism from './prism.min.js';
    import './prism.min.css';

    export let paste = null;

    onMount(() => {
        Prism.highlightAll()
    })
</script>

<h1 class="font-bold text-2xl">{paste.title}</h1>
<div>
    <p><b>Views:</b> {paste.views}</p>
    <p><b>Format:</b> {paste.format}</p>
    <p><b>Created at:</b> {new Date(paste.createdAt).toString()}</p>
    {#if paste.expiresAt}
        <p><b>Expires at:</b> {new Date(paste.expiresAt).toString()}</p>
    {/if}
</div>
<pre class="line-numbers"><code class="language-{paste.format}">{paste.content}</code></pre>
<Divider title="Raw Paste Data"/>
<textarea readonly rows=12 class="w-full focus:outline-none">{paste.content}</textarea>