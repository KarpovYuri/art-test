<template>
	<select
		v-model="localization"
		class="w-24 border border-slate-500 outline-none mb-4 rounded text-black text-lg"
	>
		<option>ru</option>
		<option>en</option>
		<option>fr</option>
	</select>
	<ul class="flex flex-col gap-2">
		<tree-element
			v-for="element in treeElements"
			:key="`element-${element.id}`"
			:element="element"
		/>
	</ul>
</template>

<script setup lang="ts">
import jsonData from '@/utils/task.json'
import TreeElement from '@/components/TreeElement.vue'

const treeElements = jsonData as unknown as Global.TreeElement[]
const localization = ref('ru')
</script>
