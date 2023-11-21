// import storage from './util/storage.js';
import sha1 from './js/sha1.js';
import md5 from './js/md5.js';

// https://drive.google.com/uc?export=view&id=

const init = {
	filterSection: 'hero',

	sha1Obj: {
		value: null,
		hashValue: null,
	},

	md5Obj: {
		value: null,
		hashValue: null,
	},

	img: {
		logo: {
			src: './img/logo.jpeg',
			link: 'https://drive.google.com/uc?export=view&id=1pUYPJ2jJXIvr6Wv34yIwoorXQVu1Ys6E'
		}, 

		heroPanel: {
			src: '../img/thumbnail2.jpeg',
			link: 'https://drive.google.com/uc?export=view&id=1ZUoxCKsdvKJOrBmvxC3NPdZGb9YRZfv-'
		},

		sha1Thumbnail: {
			src: '../img/sha1.jpeg',
			link: 'https://drive.google.com/uc?export=view&id=15M4D-edjzoGhTMfmvu9tjW6EPU7l_57T'
		},
		
		md5Thumbnail: {
			src: '../img/md5.png',
			link: 'https://drive.google.com/uc?export=view&id=1mkCst1Qz8RKHlW_oie6QRI5eDTQZd1WK'
		}
	}
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

	hashPasswordBySHA1(state, passVal) {
		state.sha1Obj.value = passVal;
		state.sha1Obj.hashValue = sha1(passVal);
	},

	hashPasswordByMD5(state, passVal) {
		state.md5Obj.value = passVal;
		state.md5Obj.hashValue = md5(passVal);
	},

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
