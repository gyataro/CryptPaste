<script>
    import { onMount } from 'svelte';
    import { meta } from 'tinro';
    import Divider from '../../components/Divider.svelte';
    import Input from "../../components/Input.svelte";
    import Paste from './paste.svelte';
    import pasteService from '../../service/paste.js';

    let route = meta();
    let paste = null;
    let error404 = false;
    let error403 = false;
    let errorData = null;

    onMount(async () => {
        await pasteService.readPaste(route.params.id)
            .then(res => { paste = res.data })
            .catch(err => handleError(err))
    })

    const handleError = (err) => {
        const status = err.response.status
        const data = err.response.data

        if(status == 404) {
            error404 = true
        }
        if(status == 403) {
            error403 = true
            errorData = data.message
            console.log(data)
        }
    }

    const handleSubmit = async (e) => {
        const formData = new FormData(e.target);
        const data = {};
        
        for (let field of formData) {
            const [key, value] = field;
            data[key] = value;
        }

        await pasteService.readPaste(route.params.id, true, data.password)
            .then(res => { paste = res.data })
            .catch(err => handleError(err))

        Prism.highlightAll()
    }
</script>

<div class="px-4 py-4 max-w-screen-xl mx-auto">
    {#if paste}

        <Paste paste={paste}/>

    {:else if error404}

        <h1 class="font-bold text-2xl">404 Not Found</h1>
        <p>Page does not exist.</p>

    {:else if error403}

        <h1 class="font-bold text-2xl">Locked Paste</h1>
        <form on:submit|preventDefault={handleSubmit}>
            <Divider/>
            {#if errorData.isBurned}
                <div class="rounded border-2 border-red-600 p-4 mb-6">
                    <h2 class="font-bold text-red-800 text-xl">Burn after read</h2>
                    <p>Once accessed, you can no longer view this paste, it will be <b>permanently removed</b>.</p>
                    <p>You're about to burn this paste: <b>{route.params.id}</b> after reading it.</p>
                </div>
                {#if !errorData.isSecret}
                    <Input label="Continue" type="confirm" />
                {/if}
            {/if}
            {#if errorData.isSecret}
                <Input label="Password" id="password" type="password" value="" />
                <Input label="Confirm" type="submit" />
            {/if}
        </form>

    {/if}
</div>