declare module Global {
	interface TreeElement {
		id: number
		locale: {
			ru: {
				cg_name: string
				link: string
			}
		}
		path_to_top: number[]
		childs: TreeElement[]
	}
}
