<template>
	<div>
		<ScreenSize />
		<Jury />
	</div>
</template>

<script setup lang="ts">

import Jury from '~/components/Jury.vue'
import ScreenSize from '~/components/dev/ScreenSize.vue'

</script>

<style lang="scss">

body {
	font-family: theme('fontFamily.sans');
}

</style>
