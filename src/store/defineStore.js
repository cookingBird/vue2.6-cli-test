import Store from './index';
import { mapState,mapGetters,mapMutations,mapActions } from 'vuex';

export function defineStore (name,options) {
	options = {
		...options,
		namespaced: true,
	}
	if (!Store.hasModule(name)) {
		Store.registerModule(name,options);
	}
	return function useStore (ctx,isUnRegister = true) {
		if (isUnRegister && ctx) {
			ctx.$on('hook:beforeDestory',() => { Store.unregisterModule(name) })
		}
		return {
			state: Store.state[name],
			$state: function (state) { return Store.state[name][state] },
			getters: Object.keys(Store.getters).filter(key => key.startsWith(name))
				.map(getter => ({ rowName: getter,name: getter.split('/')[1] }))
				.reduce((pre,cur) => {
					return {
						...pre,
						[cur.name]: (filed) => (
							filed
								? Store.getters[cur.rowName][filed]
								: Store.getters[cur.rowName]
						)
					}
				},{}),
			$getters: function (getterName) { return Store.getters[name + '/' + getterName] },
			commit (mutation,payload) { return Store.commit(name + '/' + mutation,payload) },
			$commit: Object.keys(Store._mutations).filter(key => key.startsWith(name))
				.map(mut => ({ rowName: mut,name: mut.split('/')[1] }))
				.reduce((pre,cur) => {
					return {
						...pre,
						[cur.name]: Store._mutations[cur.rowName][0]
					}
				},{}),
			dispatch (action,payload) { return Store.dispatch(name + '/' + action,payload) },
			$dispatch: Object.keys(Store._actions).filter(key => key.startsWith(name))
				.map(mut => ({ rowName: mut,name: mut.split('/')[1] }))
				.reduce((pre,cur) => {
					return {
						...pre,
						[cur.name]: () => Store._actions[cur.rowName][0]
					}
				},{}),
			$reset: () => {
				Store.state[name] = options.state
			},
			$unmount: () => {
				Store.unregisterModule(name)
			},
			mapState: (option) => (mapState(name,option)),
			mapGetters: (option) => (mapGetters(name,option)),
			mapMutations: (option) => (mapMutations(name,option)),
			mapActions: (option) => (mapActions(name,option)),
		};
	}
}
