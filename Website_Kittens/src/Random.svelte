<script>
    import { onMount } from "svelte";
    import { activeState, refreshState} from './store/stores';
    import LoadingContent from './Loading.svelte';

    
    let hasError = false;

    let catImages = [];
    let dogImages = [];
    let imgSrc = [];
    let currentState;
    let timeout = true;

    // Gets 25 cat pictures and put them last in an array. 
    function fetchCatImage() {
        for (let index = 24; index < 50; index++) {
        hasError = false;
        fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => response.json())
        .then(object => {imgSrc[index] = object[0].url})
        .catch(error => {
            hasError = true;
        });
        }
    }

    // Gets 25 dog pictures and put them first in an array
    function fetchDogImage() {
        hasError = false;
        fetch('https://dog.ceo/api/breeds/image/random/25')
        .then(response => response.json())
        .then(object => { for (let i = 0; i < object.message.length; i++) {
            imgSrc[i] = object.message[i];
        }})
        .catch(error => {
            hasError = true;

        });
    }

    // Takes the array with cat and dog pictures and randomize the list
    function randomizeList () {

        // imgSrc = catArray.concat(dogArray);
        var currentIndex = imgSrc.length,  randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [imgSrc[currentIndex], imgSrc[randomIndex]] = [
            imgSrc[randomIndex], imgSrc[currentIndex]];
        }

        return imgSrc;
    }

    // Runs the functions to get dog and cat pictures, waits 5sec before randomizing the array so cat API got time to load.
    // Then displays the pictures as content
    const fetchImage = () => {
        timeout = true;
        fetchCatImage();
        fetchDogImage();
        setTimeout(() => {
            randomizeList();
            timeout = false; 
        }, 5000);
    }

    activeState.subscribe(value => {
        currentState = value
    });


    refreshState.subscribe(value => {
        if(currentState === 'random') fetchImage();
    })
    
    onMount (() => {
        fetchImage();
    });
    
    </script>
    
    <main>
        
        {#if !timeout}
            {#each imgSrc as image}
            <img src={image} alt="Nice" title="Nice">
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