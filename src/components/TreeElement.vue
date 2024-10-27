<template>
	<li class="flex flex-col">
		<div class="flex gap-2 items-center text-lg">
			<base-button
				v-if="element.childs && element.childs.length > 0"
				class="w-5 h-5"
				:class="isExpanded ? 'bg-minus' : 'bg-plus'"
				:color="isExpanded ? 'slate' : 'sky'"
				@click="isExpanded = !isExpanded"
			/>
			<nuxt-link
				:to="categoryLink"
				target="_blank"
				class="hover:text-sky-500"
				:class="{ 'ms-7': !element.childs || element.childs.length === 0 }"
			>
				{{ categoryName }}
			</nuxt-link>
		</div>
		<div class="ms-7 text-xs text-gray-400">{{ breadcrumbs }}</div>
	</li>
	<ul
		v-if="element.childs && element.childs.length > 0 && isExpanded"
		class="flex flex-col gap-2 ms-5"
	>
		<tree-element
			v-for="child in element.childs"
			:key="`child-${child.id}`"
			:element="child"
			:localization="localization"
		/>
	</ul>
</template>

<script setup lang="ts">
import jsonData from '@/utils/task.json'

const { element, localization } = defineProps({
	element: { type: Object as () => Global.TreeElement, required: true },
	localization: { type: String as () => 'ru' | 'en' | 'fr', required: true },
})

const isExpanded = ref(false)

const getFirstLocaleKey = (node: Global.TreeElement = element) => {
	return (
		Object.keys(node.locale).forEach((key) => {
			if (Object.keys(node.locale[key]).length > 0) {
				return key
			}
		}) ?? 'ru'
	)
}

const language = computed(() => {
	if (Object.keys(element.locale[localization]).length > 0) {
		return localization
	} else {
		return getFirstLocaleKey()
	}
})

const categoryName = computed(() => {
	return element.locale[language.value].cg_name
})

const categoryLink = computed(() => {
	return element.locale[language.value].link + element.id
})

const breadcrumbs = computed(() => {
	let tempElement = jsonData as unknown as Global.TreeElement[]
	return [...element.path_to_top]
		.reverse()
		.map((id) => {
			const foundElement = tempElement.find((e) => e.id === id)
			if (foundElement) {
				tempElement = foundElement.childs
				return (
					foundElement.locale[localization].cg_name ??
					foundElement.locale[getFirstLocaleKey(foundElement)].cg_name
				)
			}
		})
		.join(' -> ')
})
</script>
