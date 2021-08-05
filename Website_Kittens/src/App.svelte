<script>
	import { createEventDispatcher } from "svelte";
	let dispatch = createEventDispatcher();

	import Sidebar from './SideBar.svelte';
	import Navbar from './Navbar.svelte';
	import DogContent from './Dog.svelte';
	import CatContent from './Cat.svelte';

	let dogs = false;
	let cats = false;

	const unLoadContent = () => {
		cats = false;
		dogs = false;
	}

	const recieveContent = (e) => {
		unLoadContent();
		if(e.detail === "dogs"){
			dogs = true;
		} else if (e.detail === "cats"){
			cats = true;
			console.log(cats);
		}
	}

	const refreshContent = () => {
		if (dogs) {dispatch('refreshContentDogs')}
		if (cats) {dispatch('refreshContentCats')}
	}

</script>

<main>
	<Navbar on:refreshContent={refreshContent}  />
	<Sidebar on:recieveContent={recieveContent}/>

	{#if dogs}
		<DogContent/>
	{:else if cats}
		<CatContent/>
	{/if}

</main>

<style>

	main {
		background-color: #131313;
	}

</style>