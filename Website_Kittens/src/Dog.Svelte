<script>
import { onMount } from "svelte";
import App from './App.svelte';

let hasError = false;

const imgSrc = [];


function fetchImage() {
    hasError = false;
    fetch('https://dog.ceo/api/breeds/image/random/50')
    .then(response => response.json())
    // .then(object => {imgSrc = object.message[0],imgSrcTwo = object.message[1]})
    .then(object => { for (let i = 0; i < object.message.length; i++) {
        imgSrc[i] = object.message[i];
    }})
    .catch(error => {
        hasError = true;

    });
}

// function fetchImage() {
//     hasError = false;
//     fetch('https://dog.ceo/api/breeds/image/random/50')
//     .then(response => response.json())
//     // .then(object => {imgSrc = object.message[0],imgSrcTwo = object.message[1]})
//     .then(object => { for (let i = 0; i < object.message.length; i++) {
//         var img = new Image();
//         if( img.width > img.height ) {imgSrc[i] = object.message[i], console.log("this many pictures")}
//         img.src = object.message[i];}
//     })
//     .catch(error => {
//         hasError = true;

//     });
//     console.log(imgSrc);
// }

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
    width: 100% - 340px;
    height: 100%;
}

main img {
    max-height: 250px;
    width: auto;
}
</style>