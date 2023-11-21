import './js/sha1.js';
import md5 from './js/md5.js';
import './js/rsa.js';

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

	rsaObj: {
		receiverPublicKey: null,
		receiverPrivateKey: null,
		message: null,
		encryptedMessage: null
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
		},

		rsaThumbnail: {
			src: '../img/rsathumbnail.jpg',
			link: 'https://drive.google.com/uc?export=view&id=1mtEweiGBv3Ve04tlP_K_LSTqFnmqYW5O' 
		}
	}
};

let crypt = new JSEncrypt();

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
		if (passVal !== '') {
			state.sha1Obj.value = passVal;
			state.sha1Obj.hashValue = sha1(passVal);
		}
	},

	hashPasswordByMD5(state, passVal) {
		if (passVal !== '') {
			state.md5Obj.value = passVal;
			state.md5Obj.hashValue = md5(passVal);
		}
	},

	generateNewRSAKeys(state) {
		state.rsaObj.receiverPublicKey = crypt.getPublicKey();
		state.rsaObj.receiverPrivateKey = crypt.getPrivateKey();
	},

	encryptedMessageByRSA(state, messageValue) {
		if (messageValue !== '' && state.rsaObj.receiverPublicKey !== null && state.rsaObj.receiverPrivateKey !== null) {
			crypt.setKey(state.rsaObj.receiverPublicKey);

			state.rsaObj.encryptedMessage = crypt.encrypt(messageValue);

			console.log('value: ', state.rsaObj.encryptedMessage)
		}
	}
};

export default function reducer(state = init, action, args) {
	actions[action] && actions[action](state, ...args);
	return state;
};
