<script>
	import { createEventDispatcher } from "svelte";
	import { activeState} from './store/stores';
	let dispatch = createEventDispatcher();

	import Sidebar from './SideBar.svelte';
	import Navbar from './Navbar.svelte';
	import DogContent from './Dog.svelte';
	import CatContent from './Cat.svelte';
	import HomeContent from './Homepage.svelte';
	import RandomContent from './Random.svelte';

	let dogs = false;
	let cats = false;
	let random = false;
	let state;

	

	const updateState = (e) => {
		if(e === "dogs"){
			activeTab = DogContent;
		} else if (e === "cats"){
			activeTab = CatContent;
		} else if (e === "random"){
			activeTab = RandomContent;
		} else if (e === 'home') {
			activeTab = HomeContent;
		}
	}

	activeState.subscribe(value => {
		updateState(value);
	})

	let activeTab = HomeContent;


	const unLoadContent = () => {
		cats = false;
		dogs = false;
		random = false;
	}

	const recieveContent = (e) => {
		if(e.detail === "dogs"){
			activeTab = DogContent;
		} else if (e.detail === "cats"){
			activeTab = CatContent;
		} else if (e.detail === "random"){
			activeTab = RandomContent;
		} else if (e.detail === 'home') {
			activeTab = HomeContent;
		}
	}

	const refreshContent = () => {
		if (dogs) {dispatch('refreshContentDogs')}
		if (cats) {dispatch('refreshContentCats')}
	}

</script>

<main>
	<Navbar on:refreshContent={refreshContent} on:goHome={recieveContent}  />
	<Sidebar on:recieveContent={recieveContent}  />

	<svelte:component this={activeTab} />
	
	<!-- {#if dogs}
		<DogContent/>
	{:else if cats}
		<CatContent/>
	{:else if random}
		<RandomContent/>
	{:else}
		<HomeContent on:randomContent={recieveContent}/>
	{/if} -->

</main>

<style>

	main {
		background-color: #131313;
	}

</style>