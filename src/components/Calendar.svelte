<script>
import VirtualList from '@sveltejs/svelte-virtual-list/VirtualList.svelte';
import Month from '../components/Month.svelte'
import createMonthsArr from '../utils/monthsArr.js';

const monthsArr = createMonthsArr(2019, 2050);

let start, end, currentMonth;

function monthInView (entries) {
	// if (entries[0].isIntersecting) {
	// 	currentMonth = month.month
	// }
	console.log("It's working!")
}

let observer = new IntersectionObserver(monthInView, {
    root: document.getElementsByClassName("calendar")[0],
    rootMargin: "0px",
    threshold: 0.5
});
</script>

<div class="calendar">
	<VirtualList items={monthsArr} let:item bind:start bind:end>
		<Month month={item} {observer}/>
	</VirtualList>	
</div>
<p>showing {start}-{end} of {monthsArr.length} rows</p>
<!-- <p>Current month: {currentMonth}</p> -->


<style>
	.calendar {
		height: 75vh;
		margin-left: auto;
		margin-right: auto;
		width: 100%;
	}
</style>