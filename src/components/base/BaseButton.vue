<template>
	<button
		class="p-2 rounded-md bg-[length:12px_12px] bg-no-repeat bg-center"
		:class="{
			'bg-sky-500': color === 'sky',
			'bg-slate-500': color === 'slate',
		}"
	>
		<slot />
	</button>
</template>

<script setup lang="ts">
const { color } = defineProps({
	color: { type: String as () => 'sky' | 'slate', default: 'sky' },
})
</script>
