<template>
	<div class="st_gridRow">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'GridRow'
};
</script>

<style lang="scss">
@import "../../styles/_globals";

.st_gridRow {
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	grid-column-gap: $grid-col-gap;
	grid-row-gap: $grid-row-gap;
	position: relative;
	width: 100%;
}
</style>
