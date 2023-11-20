// import storage from './util/storage.js';
import sha1 from './js/sha1.js';
import md5 from './js/md5.js';

const init = {
	filterSection: 'hero',
	sha1Arr: [null, null],
	md5Arr: [null, null],
	// todos: storage.get(),
	// filter: 'all',
	// filters: {
	// 	all: () => true,
	// 	active: todo => !todo.completed,
	// 	completed: todo => todo.completed
	// },
	// editIndex: null
};

const actions = {
	changeAboutSection(state) {
		state.filterSection = 'about';
	},
	
	changeHomeSection(state) {
		state.filterSection = 'hero';
	},

	changeFeaturesSection(state) {
		state.filterSection = 'features';
	},

	hashPassBySHA1(state, passVal) {
		state.sha1Arr[0] = passVal;
		state.sha1Arr[1] = sha1(passVal);
	},

	hashPassByMD5(state, passVal) {
		state.md5Arr[0] = passVal;
		state.md5Arr[1] = md5(passVal);
	}

	// add({ todos }, title) {
	// 	if (title) {
	// 		todos.push({ title, completed: false });
	// 		storage.set(todos);
	// 	}
	// },

	// toggle({ todos }, index) {
	// 	const todo = todos[index];
	// 	todo.completed = !todo.completed;
	// 	storage.set(todos);
	// },

	// toggleAll({ todos }, completed) {
	// 	todos.forEach(todo => todo.completed = completed);
	// 	storage.set(todos);
	// },

	// destroy({ todos }, index) {
	// 	todos.splice(index, 1);
	// 	storage.set(todos);
	// },

	// switchFilter(state, filter) {
	// 	state.filter = filter;
	// },

	// clearCompleted(state) {
	// 	state.todos = state.todos.filter(state.filters.active);
	// 	storage.set(state.todos);
	// },

	// startEdit(state, index) {
	// 	state.editIndex = index;
	// },

	// endEdit(state, title) {
	// 	if (state.editIndex !== null) {
	// 		if (title) {
	// 			state.todos[state.editIndex].title = title;
	// 			storage.set(state.todos);
	// 		} else {
	// 			this.destroy(state, state.index);
	// 		}
			
	// 		// Exit startEdit mode
	// 		state.editIndex = null;
	// 	}
	// },

	// cancelEdit(state) {
	// 	state.editIndex = null;
	// }
};

export default function reducer(state = init, action, args) {
	actions[action] && actions[action](state, ...args);
	return state;
};
