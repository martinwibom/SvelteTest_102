<script>
	import { activeState} from './store/stores';

	import Sidebar from './SideBar.svelte';
	import Navbar from './Navbar.svelte';
	import DogContent from './Dog.svelte';
	import CatContent from './Cat.svelte';
	import HomeContent from './Homepage.svelte';
	import RandomContent from './Random.svelte';
	
	// Is run when state is updated in stores. Changes main content
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

	// Recieves updated state from store.js
	activeState.subscribe(value => {
		updateState(value);
	})

	let activeTab = HomeContent;


</script>

<main>
	<Navbar/>
	<Sidebar/>

	<!-- Decide what content to be displayed -->
	<svelte:component this={activeTab} />

</main>

<style>

</style>