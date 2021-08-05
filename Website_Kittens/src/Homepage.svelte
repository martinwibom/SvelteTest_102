<script>
import { activeState } from './store/stores';

const updateState = (newState) => {activeState.set(newState)};

</script>

<main>
    <div class="wrapper">
        <div class="content">
            <h1> Welcome to Kittens n Dogs!</h1>   
            <div class="same-line">
                <p>Find all the pictures of random things that you might like here.</p> <p id="smalltext">*Only cats and dogs</p>
            </div>
            <button on:click={() => updateState('random')}>Load random images</button>  
        </div>
    </div>
</main>

<style>
    main{
        background-color: #242526;
        padding-left: 220px;
        padding-right: 110px;
        padding-top: 60px; 
        max-width: 100vw - 440px;
        height: 100vh;
    }

    .same-line {
        justify-content: center;
        display: flex;
    }
    
    #smalltext{
        font-size: 7px;
        align-self: center;
    }

    h1 {
        font-size: 3rem;
    }

    .wrapper {
        color: white;
        display: flex;
        justify-content: center;
    }
    
    .content{
        text-align: center;
        padding-top: 150px;
        width: 680px;
    }

    .content button {
        margin-top: 50px;
        width: 200px;
        height: 75px;
        font-weight: bold;
        background-color: #18191A; 
        border-radius: 30px;
        color: white;
        border: none;
    }
    .content button:hover {
        background-color: #101010;
        cursor: pointer
    }

</style>