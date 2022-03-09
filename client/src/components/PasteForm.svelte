<script>
    import Divider from "./Divider.svelte";
</script>

<form class="px-4 py-4 max-w-screen-xl mx-auto">

    <Divider title="New Paste"/>

    <textarea class="w-full focus:outline-none"/>
    
    <Divider title="Paste Settings"/>

    <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
        <label class="float-left block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
            Title
        </label>
        </div>
        <div class="md:w-2/3">
        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500" id="inline-full-name" type="text" value="Jane Doe">
        </div>
    </div>

    <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
        <label class="float-left block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
            Expiration
        </label>
        </div>
        <div class="md:w-2/3">
        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500" id="inline-full-name" type="text" value="Jane Doe">
        </div>
    </div>

    <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
        <label class="float-left block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
            Visibility
        </label>
        </div>
        <div class="md:w-2/3">
        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500" id="inline-full-name" type="text" value="Jane Doe">
        </div>
    </div>

    <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3"></div>
        <label class="md:w-2/3 block text-gray-500 font-bold">
        <input class="mr-2 leading-tight" type="checkbox">
        <span class="text-sm">
            Burn after reading
        </span>
        </label>
    </div>

    <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3"></div>
        <label class="md:w-2/3 block text-gray-500 font-bold">
        <input class="mr-2 leading-tight" type="checkbox">
        <span class="text-sm">
            Set password
        </span>
        </label>
    </div>

    <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
        <label class="float-left block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
            Password
        </label>
        </div>
        <div class="md:w-2/3">
        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500" id="inline-password" type="password" placeholder="******************">
        </div>
    </div>

    <div class="md:flex md:items-center">
        <div class="md:w-1/3"></div>
        <div class="md:w-2/3">
        <button class="w-full shadow bg-teal-800 hover:bg-teal-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
            Sign Up
        </button>
        </div>
    </div>
</form>