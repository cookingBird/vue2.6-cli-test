import { defineStore } from "@/store/defineStore";

export const useStore = defineStore('testStore',{
	state: {
		foo: 0,
		bar: {
			name: 'baz'
		}
	},
	getters: {
		fooGetter: (state) => state.foo,
		bar: (state) => state.bar
	},
	mutations: {
		increment (state) {
			console.log('increment')
			state.foo += 1;
		},
		random (state) {
			state.bar = {
				...state.bar,
				name: Math.floor(Math.random() * 10000)
			}
		}
	}
})
