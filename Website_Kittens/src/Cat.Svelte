<script>
    import { onMount } from "svelte";
    import LoadingContent from './Loading.svelte';
    import { activeState, refreshState} from './store/stores';

    
    let hasError = false;

    let catImages = [];
    let currentState;
    let timeOut = true;

        
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

    async function loadTimeout()  {
        timeOut = true;
        return new Promise(resolve => {
            
        })
    }

    activeState.subscribe(value => {
        currentState = value
    });


    refreshState.subscribe(value => {
        if(currentState === 'cats') fetchImage();
    })
    
    onMount (() => {
        fetchImage();
    });
    
    </script>
    
    <main>
        
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