<script>
import { activeState } from './store/stores';

// Update the Store.js to keep the new state when its clicked from the sidebar, which in return changes out the main content
const updateState = (newState) => {activeState.set(newState)};


let ppc_icon = '../build/ppc.png';






</script>

<main>
    <div class="content">
        <div class="sidebar-content " id="not-working">
            <img src={ppc_icon} alt="profile pic" >
            <h3>John</h3>  
        </div>

        <div class="sidebar-content" id="not-working">
            <h3>Friends</h3>  
        </div>
        <div class="sidebar-content" on:click={() => updateState('dogs')}>
            <h3>Dogs</h3>  
        </div>

        <div class="sidebar-content " on:click={() =>updateState("cats")}>
            <h3>Cats</h3>  
        </div>

        <div class="sidebar-content " id="not-working">
            <h3>Frogs</h3>  
        </div>

        <div class="sidebar-content " id="not-working">
            <h3>Turtles</h3>  
        </div>

        <div class="sidebar-content " id="not-working">
            <h3>Boats</h3>  
        </div>

        <div class="sidebar-content " id="not-working">
            <h3>Cars</h3>  
        </div>

        <div class="sidebar-content " id="not-working">
            <h3>Motorcycles</h3>  
        </div>

        <div class="sidebar-content " id="not-working">
            <h3>Show more</h3>  
        </div>

    </div>
</main>

<style>

    main {
        position: fixed;
        margin-top: 60px;
    }

    .content{
        height: 100vh;
        width: 220px;
        background-color: #18191A;
        padding-top: 10px;
        display: fixed;
    }

    .sidebar-content{
        margin-left: 5px;
        margin-right: 5px;
        padding-left: 20px;
        display: flex;
        justify-content: right;
        border-radius: 15px;
        height: 55px;
        align-items: center;
    }

    .sidebar-content:hover {
        background-color: #202020;
        cursor: pointer
    }

    .sidebar-content img {
        height: 42px;
        margin-right: 10px;
        border-radius: 100px;
    }

    .sidebar-content h3 {
        color: white;
        font-size: 16px;
    }

    #not-working:hover {
        cursor: not-allowed;
    }
</style>