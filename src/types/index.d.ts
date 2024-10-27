declare module Global {
	interface TreeElement {
		id: number
		locale: Record<string, { cg_name: string; link: string }>
		path_to_top: number[]
		childs: TreeElement[]
	}
}
