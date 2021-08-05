<script>
    import { onMount } from "svelte";
    import App from './App.svelte';

    
    let hasError = false;

    let catImages = [];
        
    function fetchImage() {
        for (let index = 0; index < 25; index++) {
        hasError = false;
        fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => response.json())
        .then(object => {catImages[index] = object[0].url, console.log('Hello')})
        .catch(error => {
            hasError = true;
        });
        }
    }
    
    onMount (() => {
        fetchImage();
    });
    
    </script>
    
    <main>
        
        {#each catImages as image}
        <img src={image} alt="Cat" title="Cat">
        {/each}

    </main>
    
    <style>
    
    main{
        padding-top: 60px;
        padding-left: 340px;
        width: 100% - 340px;
        height: 100%;
        /* background-color: lightblue; */
    }
    
    main img {
        max-height: 250px;
        width: auto;
    }
    </style>