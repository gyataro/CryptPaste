<script>
    import Divider from "../../components/Divider.svelte";
    import Input from "../../components/Input.svelte";
    import constants from "./constants.js";
    import pasteService from "../../service/paste.js";
    import { router } from 'tinro';
  
    let hasSecret = false;
    let error = {
        content: null,
        title: null,
        expireAt: null,
        visibility: null,
        format: null,
        isBurned: null,
        secret: null
    };

    const handleError = (err) => {
        const status = err.response.status
        const data = err.response.data

        if(status == 400 && data.status == 'fail') {
            error = { error, ...err.response.data.message }
        } else {
            alert("Something went wrong, please contact support!")
        }
    }

    const handleSubmit = async (e) => {
        const formData = new FormData(e.target);
        const data = {};
        
        for (let field of formData) {
            const [key, value] = field;
            
            if(key == "expiresAt") 
                data[key] = Date.now() + parseInt(value, 10);
            else if(key == "isBurned")
                data[key] = true;
            else
                data[key] = value;
        }

        await pasteService.createPaste(data)
            .then(res => router.goto(res.location))
            .catch(err => handleError(err))
    }
</script>

<form on:submit|preventDefault={handleSubmit}>

    <Divider title="New Paste"/>
    
    <Input label="Content" id="content" type="textarea" error={error.content}/>
    
    <Divider title="Paste Settings"/>

    <Input label="Title" id="title" type="text" value="" placeholder={constants.placeholder.title} error={error.title} />

    <Input label="Expiration" id="expireAt" type="select" value={constants.expiresAt} error={error.expiresAt} />

    <Input label="Visibility" id="visibility" type="select" value={constants.visibility} error={error.visibility} />

    <Input label="Syntax Highlighting" id="format" type="select" value={constants.format} error={error.format} />

    <Input label="Burn after reading" id="isBurned" type="checkbox" />

    <Input label="Set Password" id="hasSecret" type="checkbox" bind:value={hasSecret} />

    {#if hasSecret}
        <Input label="Password" id="secret" type="password" value="" placeholder={constants.placeholder.secret} error={error.secret} />
    {/if}

    <Input label="Create Paste" id="submit" type="submit" />
</form>