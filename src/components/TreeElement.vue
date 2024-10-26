<template>
	<li class="flex gap-2 items-center text-lg">
		<base-button
			v-if="element.childs && element.childs.length > 0"
			class="w-5 h-5"
			:class="isExpanded ? 'bg-minus' : 'bg-plus'"
            :color="isExpanded ? 'slate' : 'sky'"
			@click="isExpanded = !isExpanded"
		/>
		<p :class="{ 'ms-7': !element.childs || element.childs.length === 0 }">
			{{ element.locale.ru.cg_name }}
		</p>
	</li>
	<ul
		v-if="element.childs && element.childs.length > 0 && isExpanded"
		class="flex flex-col gap-2 ms-5"
	>
		<tree-element
			v-for="child in element.childs"
			:key="`child-${child.id}`"
			:element="child"
		/>
	</ul>
</template>

<script setup lang="ts">

const { element } = defineProps({
	element: { type: Object as () => Global.TreeElement, required: true },
})

const isExpanded = ref(false)
</script>
