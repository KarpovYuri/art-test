<template>
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
import TreeElement from "@/components/TreeElement.vue";

const treeElements = jsonData as unknown as Global.TreeElement[]
</script>
