<script>
    import { createEventDispatcher } from "svelte";
    let dispatch = createEventDispatcher();

    let icon = '../build/favicon.png';
    let home_icon ='../build/home_white_2.png';
    let favorite_icon = '../build/favorite_white_2.png';
    let dashboard_icon = '../build/dashboard_white_2.png';
    let refresh_icon = '../build/refresh_white_2.png';
    let admin_panel_icon = '../build/admin_panel_white_2.png';
    let bookmark_icon = '../build/bookmark_white_2.png';
    let watch_later_icon = '../build/watch_later_white_2.png';
    let logout_icon = '../build/logout_white_2.png';
    let ppc_icon = '../build/ppc_chevy.jpg';

    const refreshContent = () => {
    console.log("Refresh contennt sent from navbar");
    dispatch('refreshContent');
}

</script>

<main>
    <div class="content">

        <div class="left-content">
            <img src={icon} alt="icon" class="nav-icon">
            <input type="text" class="nav-search">
        </div>

        <div class="middle-content">
            <div class="mid-opt home">
                <img src={home_icon} alt="home" title="Home">
            </div>
            <div class="mid-opt option2">
                <img src={favorite_icon} alt="favorite" title="Favorite">
            </div>
            <!-- <div class="mid-opt option3">
                <img src={refresh_icon} alt="refresh" title="Refresh">
            </div> -->
            <!-- <div class="mid-opt option4">
                <img src={admin_panel_icon} alt="admin panel" title="Admin Panel">
            </div> -->
        </div>

        <div class="right-content">
            <div class="account" title="Account">
                <img src={ppc_icon} alt="profile" class="ppc">
                <p>John</p>
            </div>
            <div class="icon-wrapper">
                <img src={refresh_icon} alt="refresh" title="Refresh">
            </div>
            <div class="icon-wrapper">
                <img src={watch_later_icon} alt="Watch later" title="Watch later">
            </div>
            <div class="icon-wrapper">
                <img src={logout_icon} alt="Logout" title="Logout">
            </div>

        </div>

    </div>
</main>

<style>

    main {
        color: white;
        position: fixed;
    }

    .content{
        background-color: #131313;
        /* position: fixed; */
        width: 1920px;
        height: 60px;
        display: flex;
        /* grid-template-columns: 1fr 1fr 1fr; */
        justify-content: space-between;
        
    }
    .left-content{
        width: 600px;
        display: flex;
        align-items: center;
    }

    .nav-icon {
        margin: 0px 10px 0px 10px;
        height: 50px;
    }

    .nav-search {
        margin: 0px 0px 0px 25px;
        border: none;
        height: 50px;
        width: 220px;
        background-color: #252525;
        font-weight: 600;
        border-radius: 10px;
    }
    
    input {
        outline: none;
        color: white;
    }

    .middle-content {
        justify-items: middle;
        align-items: center;
        justify-content: center;
        display: flex;
        width: 500px;
    }
    
    .mid-opt {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100px;
        /* background-color: #151515; */
    }

    .mid-opt:hover {
        background-color: #202020;
    }

    .mid-opt img {
        height: 40px;
    }


    .home {
        background-color: #202020;
        border-bottom: 2px solid lightblue;
    }

    .right-content {
        width: 500px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        font-weight: 500;
        margin-right: 20px;
    }

    .account {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 30px;
        width: 100px;
    }

    .account:hover {
        background-color: #303030;
    }



    .icon-wrapper {
        height: 50px;
        width: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 30px;
    }

    .icon-wrapper:hover {
        background-color: #303030;
    }


    .right-content img {
        height: 25px;
        width: auto;
    }

    .account img {
        height: 35px;
        border-radius: 30px;
        margin-right: 10px;

    }
</style>