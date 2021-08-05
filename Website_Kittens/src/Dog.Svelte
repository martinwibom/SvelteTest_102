<script>
import { onMount } from "svelte";
import { activeState, refreshState} from './store/stores';


let hasError = false;
let currentState;

const imgSrc = [];

// Keeps track of the current state
activeState.subscribe(value => {
    currentState = value
});


// Checkes if refresh has been pressed, if so get new images
refreshState.subscribe(value => {
    if(currentState === 'dogs') fetchImage();
})


// Recieves images from dog API and puts them in an array to be displayed
function fetchImage() {
    hasError = false;
    fetch('https://dog.ceo/api/breeds/image/random/50')
    .then(response => response.json())
    .then(object => { for (let i = 0; i < object.message.length; i++) {
        imgSrc[i] = object.message[i];
    }})
    .catch(error => {
        hasError = true;

    });
}

// Loads dog pictures when component is initialized
onMount (() => {
    fetchImage();
});

</script>

<main>

    {#each imgSrc as image}
    <img src={image} alt="Dog" title="Dog">
    {/each}


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