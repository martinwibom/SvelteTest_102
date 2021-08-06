<script>
    import { activeState, refreshState, storeMessage } from './store/stores';

    const updateState = (newState) => {activeState.set(newState)};

    let searchValue = "";
    let defaultText = 'Try "dog"'
    let searchDog = ['dogs', 'Dogs',  'DOGS', 'puppies', 'dog', 'Dog', 'DOG', 'Puppies'];
    let searchCat = ['kittens', 'cat', 'cats', 'Cat',  'Cats', 'CAT', 'CATS', 'Kittens'];
    let searchRandom = ['random', 'randoms', 'RANDOM', 'RANDOMS'];

    let icon = '../build/favicon.png';
    let home_icon ='../build/home_white_2.png';
    let favorite_icon = '../build/favorite_white_2.png';
    let dashboard_icon = '../build/dashboard_white_2.png';
    let refresh_icon = '../build/refresh_white_2.png';
    let admin_panel_icon = '../build/admin_panel_white_2.png';
    let bookmark_icon = '../build/bookmark_white_2.png';
    let watch_later_icon = '../build/watch_later_white_2.png';
    let logout_icon = '../build/logout_white_2.png';
    let ppc_icon = '../build/ppc.png';

    // Refreshes main content 
    const refresh = () => {
        refreshState.update(value => value + 1);
    };

    $: console.log(searchValue);

    // Simple search function that allows for some keyword searching 
    const search = () => {
        if (searchDog.indexOf(searchValue) >= 0) return activeState.set('dogs');
        else if (searchCat.indexOf(searchValue) >= 0) return activeState.set('cats');
        else if (searchRandom.indexOf(searchValue) >= 0) return activeState.set('random');
        else {defaultText = 'Try something else', searchValue = ''};
    }

</script>

<main>
    <div class="content">

        <div class="left-content">
            <img src={icon} alt="icon" class="nav-icon" on:click={() => updateState('home')}>
            <div id="search">
                <input type='text' placeholder={defaultText} id='searchText' bind:value={searchValue} />
                <button id='searchSubmit' on:click={() => search()}>Search</button>
            </div>
        </div>

        <div class="middle-content">
                <!-- Middle content was moved out to the sides  -->
        </div>

        <div class="right-content">
            <div class="account" title="Account" id="not-working">
                <img src={ppc_icon} alt="profile" class="ppc">
                <p>John</p>
            </div>
            <div class="icon-wrapper">
                <img src={refresh_icon} alt="refresh" title="Refresh" on:click={() => refresh()}>
            </div>
            <div class="icon-wrapper" id="not-working">
                <img src={watch_later_icon} alt="History" title="History">
            </div>
            <div class="icon-wrapper" id="not-working">
                <img src={logout_icon} alt="Logout" title="Logout" >
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
        background-color: #18191A;
        width: 100vw;
        height: 60px;
        display: flex;
        justify-content: space-between;
        
    }
    .left-content{
        width: 600px;
        display: flex;
        align-items: center;
    }

    .nav-icon {
        margin: 0px 10px 0px 25px;
        height: 50px;
    }
    
    .nav-icon:hover {
        cursor: pointer
    }

    #searchText {
        margin: 0px 0px 0px 25px;
        border: none;
        height: 50px;
        width: 220px;
        background-color: #252525;
        font-weight: 600;
        border-radius: 10px;
    }

    #search {
        display: flex;
        align-items: center;
    }

    #searchSubmit {
        margin-left: 5px;
        margin-top: 7px;
        border: none;
        height: 50px;
        background-color: #252525;
        font-weight: 600;
        border-radius: 10px;
    }

    #searchSubmit:hover {
        background-color: #101010;
        cursor: pointer
    }
    #search button {
        color: white;
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
        cursor: pointer
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
        cursor: pointer
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

    #not-working:hover {
        cursor: not-allowed;
    }
</style>