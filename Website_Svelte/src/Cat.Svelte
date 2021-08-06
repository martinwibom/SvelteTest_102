<script>
    import { onMount } from "svelte";
    import LoadingContent from './Loading.svelte';
    import { activeState, refreshState} from './store/stores';

    
    let hasError = false;

    let catImages = [];
    let currentState;
    let timeOut = true;

// Gets images from cat API and put them in array for displaying
    function fetchImage() {
        timeOut = true;
        setTimeout(function(){timeOut=false}, 2000)
        for (let index = 0; index < 25; index++) {
        hasError = false;
        fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => response.json())
        .then(object => {catImages[index] = object[0].url})
        .catch(error => {
            hasError = true;
        });
        }
    }

// The cat API is slow and takes up to 10seconds to load pictures. Added a loading circle to show that something is happening
    async function loadTimeout()  {
        timeOut = true;
        return new Promise(resolve => {
            
        })
    }

// Keeps track of the current state
    activeState.subscribe(value => {
        currentState = value
    });

// Checkes if refresh has been pressed, if so get new images
    refreshState.subscribe(value => {
        if(currentState === 'cats') fetchImage();
    })

// Loads cat pictures when component is initialized
    onMount (() => {
        fetchImage();
    });
    
    </script>
    
    <main>

        <!-- If the component is not put on timeout for loading new images, then it will display cat images -->
        {#if !timeOut}
            {#each catImages as image}
            <img src={image} alt="Cat" title="Cat">
            {/each}
        {:else}
        <LoadingContent/>
        {/if}

    </main>
    
    <style>
    
    main{
        padding-top: 60px;
        padding-left: 340px;
        padding-right: 100px;
    }
    
    main img {
        max-height: 250px;
        width: auto;
    }
    </style>