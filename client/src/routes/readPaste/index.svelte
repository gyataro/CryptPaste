<script>
    import { onMount } from 'svelte'
    import { meta } from 'tinro'
    import Divider from '../../components/Divider.svelte'
    import Input from '../../components/Input.svelte'
    import NotFound from '../../components/404.svelte'
    import Paste from './paste.svelte'
    import pasteService from '../../service/paste.js'

    let route = meta()
    let paste = null
    let hasSubmit = false
    let error404 = false
    let error403 = false
    let error = null

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
        } else if(status == 403) {
            error403 = true
            error = data.message
        } else {
            alert("Something went wrong, please contact support!")
        }
    }

    const handleSubmit = async (e) => {
        const formData = new FormData(e.target)
        const data = {}

        hasSubmit = true
        
        for (let field of formData) {
            const [key, value] = field
            data[key] = value
        }

        await pasteService.readPaste(route.params.id, true, data.password)
            .then(res => { paste = res.data })
            .catch(err => handleError(err))
            .finally(() => hasSubmit = false)

        Prism.highlightAll()
    }
</script>

<div>
    {#if paste}

        <Paste paste={paste}/>

    {:else if error404}

        <NotFound />

    {:else if error403}

        <h1 class="font-bold text-2xl">Locked Paste</h1>
        <form on:submit|preventDefault={handleSubmit}>
            <Divider />
            {#if error.isBurned}
                <div class="rounded border-2 border-red-600 p-4 mb-6">
                    <h2 class="font-bold text-red-800 text-xl">Burn after read</h2>
                    <p>Once accessed, you can no longer view this paste, it will be <b>permanently removed</b>.</p>
                    <p>You're about to burn this paste: <b>{route.params.id}</b> after reading it.</p>
                </div>
                {#if !error.isSecret}
                    <Input label="Continue" id="confirm" type="confirm" />
                {/if}
            {/if}
            {#if error.isSecret}
                <Input label="Password" id="password" type="password" value="" error={(error.isSecretProvided && !error.isSecretCorrect)? "Incorrect password" : null}/>
                <Input label="Confirm" id="submit" type="submit" submit={hasSubmit} />
            {/if}
        </form>

    {/if}
</div>