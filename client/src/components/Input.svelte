<script>
    let chevronDown = "/icons/chevron-down.svg";
    let loading = "/icons/loading.svg";

    export let id;
    export let submit = null;
    export let error = null;
    export let label = null;
    export let type = null;
    export let value = null;
    export let placeholder = null;
</script>

{#if ["text", "password"].includes(type)}

    <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
            <label for={id} class="float-left block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                {label}
            </label>
        </div>
        <div class="md:w-2/3">
            <input name={id} {id} {type} {value} {placeholder} class="appearance-none
                bg-gray-100
                {(error)? "border-red-500" : "border-gray-300"}
                border-2 
                rounded 
                w-full
                py-2
                px-4
                text-gray-700
                leading-tight
                focus:bg-white focus:border-teal-500 focus:outline-none">
            {#if error}<p class="text-red-500 font-bold">{error}</p>{/if}
        </div>
    </div>

{:else if type == "checkbox"}

    <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3"></div>
        <div class="md:w-2/3">
            <input name={id} {id} type="checkbox" bind:checked={value} class="float-left w-6 h-6 mr-2 leading-tight accent-teal-500">
            <label for={id} class="text-gray-500 font-bold">
                {label}
            </label>
        </div>
    </div>

{:else if type == "select"}

    <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
            <label for={id} class="float-left block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                {label}
            </label>
        </div>
        <div class="md:w-2/3">
            <select name={id} {id} class="appearance-none
                w-full
                py-2
                px-4
                text-gray-700
                bg-gray-100
                {(error)? "border-red-500" : "border-gray-300"}
                border-2
                rounded
                transition
                ease-in-out
                leading-tight 
                focus:bg-white focus:border-teal-500 focus:outline-none">
                <option selected>(Select)</option>
                {#each value as i}
                    <option value={i.value}>{i.label}</option>
                {/each}
            </select>
            <img src={chevronDown} class="float-right -mt-8 mr-4 z-2 relative" alt="dropdown" />
            {#if error}<p class="text-red-500 font-bold">{error}</p>{/if}
        </div>
    </div>

{:else if type == "textarea"}

    <textarea name={id} {id} aria-label={label} rows=12 class="w-full focus:outline-none border-2 {(error)? "border-red-500" : "border-gray-300"}"/>
    {#if error}<p class="text-red-500 font-bold">{error}</p>{/if}

{:else if type == "submit"}

    <div class="md:flex md:items-center">
        <div class="md:w-1/3"></div>
        <div class="md:w-2/3">
        <button type="submit" disabled={submit} class="w-full shadow bg-teal-800 disabled:bg-neutral-600 disabled:hover:bg-neutral-600 disabled:text-white hover:bg-teal-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
            {#if submit}
            Submitting
            <img src={loading} class="inline-block ml-2 w-5" alt="spinner" />
            {:else}
            {label}
            {/if}
        </button>
        </div>
    </div>

{:else if type == "confirm"}

    <button type="submit" disabled={submit} class="w-full shadow bg-red-800 disabled:bg-neutral-600 disabled:hover:bg-neutral-600 disabled:text-white hover:bg-red-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
        {#if submit}
        Submitting
        <img src={loading} class="inline-block ml-2 w-5" alt="spinner" />
        {:else}
        {label}
        {/if}
    </button>

{/if}