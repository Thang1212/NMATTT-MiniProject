import html from '../core.js';
import { connect } from '../store.js';

import Header from './Header.js';
import HeroSection from './HeroSection.js';
import FeaturesSection from './FeaturesSection.js';
import AboutSection from './AboutSection.js';
import Footer from './Footer.js';

function App({ filterSection }) {
	return html`
		${Header()}

		<main class="container col-xxl-8 px-4 py-2">
			${filterSection === 'hero' && HeroSection()}
			${filterSection === 'about' && AboutSection()}
			${filterSection === 'features' && FeaturesSection()}
  		</main>

		${Footer()}
	`;
}

export default connect()(App);
