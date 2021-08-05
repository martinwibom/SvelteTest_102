<script>
import { createEventDispatcher } from "svelte";
let dispatch = createEventDispatcher();

let ppc_icon = '../build/ppc_chevy.jpg';

const loadContent = (content) => {
    console.log(content + " from sideBar is sent");
    dispatch('recieveContent', content);
}

</script>

<main>
    <div class="content">
        <div class="sidebar-content ">
            <img src={ppc_icon} alt="profile pic">
            <h3>John Doe</h3>  
        </div>

        <div class="sidebar-content ">
            <h3>Friends</h3>  
        </div>

        <div class="sidebar-content" on:click={() =>loadContent("dogs")}>
            <h3>Dogs</h3>  
        </div>

        <div class="sidebar-content " on:click={() =>loadContent("cats")}>
            <h3>Cats</h3>  
        </div>

        <div class="sidebar-content ">
            <h3>Frogs</h3>  
        </div>

        <div class="sidebar-content ">
            <h3>Turtles</h3>  
        </div>

        <div class="sidebar-content ">
            <h3>Boats</h3>  
        </div>

        <div class="sidebar-content ">
            <h3>Cars</h3>  
        </div>

        <div class="sidebar-content ">
            <h3>Motorcycles</h3>  
        </div>

        <div class="sidebar-content ">
            <h3>Show more</h3>  
        </div>

    </div>
</main>

<style>

    main {
        position: fixed;
        margin-top: 60px;
        /* border-bottom: 20px solid #535353; */
    }

    .content{
        height: 100vh;
        width: 320px;
        background-color: #131313;
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
</style>