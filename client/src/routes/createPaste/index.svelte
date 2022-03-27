<script>
    import Divider from "../../components/Divider.svelte";
    import Input from "../../components/Input.svelte";
    import constants from "./constants.js";
    import pasteService from "../../service/paste.js";
  
    let hasSecret = false;

    const handleSubmit = async (e) => {
        const formData = new FormData(e.target);
        const data = {};
        
        for (let field of formData) {
            const [key, value] = field;
            
            if(key == "expireAt") 
                data[key] = Date.now() + parseInt(value, 10);
            else if(key == "isBurned")
                data[key] = true;
            else
                data[key] = value;
        }

        console.log(data)

        await pasteService.createPaste(data)
            .then(res => console.log(res))
            .catch(err => console.log(err.response.data))
    }
</script>

<form on:submit|preventDefault={handleSubmit} class="px-4 py-4 max-w-screen-xl mx-auto">

    <Divider title="New Paste"/>
    
    <Input label="Content" id="content" type="textarea" />
    
    <Divider title="Paste Settings"/>

    <Input label="Title" id="title" type="text" value="" placeholder={constants.placeholder.title} />

    <Input label="Expiration" id="expireAt" type="select" value={constants.expiration} />

    <Input label="Visibility" id="visibility" type="select" value={constants.visibility} />

    <Input label="Syntax Highlighting" id="format" type="select" value={constants.syntax} />

    <Input label="Burn after reading" id="isBurned" type="checkbox" />

    <Input label="Set Password" id="hasSecret" type="checkbox" bind:value={hasSecret} />

    {#if hasSecret}
        <Input label="Password" id="secret" type="password" value="" placeholder={constants.placeholder.secret} />
    {/if}

    <Input label="Create Paste" type="submit" />
</form>