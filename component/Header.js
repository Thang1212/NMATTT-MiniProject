import html from '../core.js';
import { connect } from '../store.js';

				// <li class="nav-item"><a href="#" class="nav-link">FAQs</a></li>
function Header({ filterSection }) {
    return html`
		<header class="container d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
			<a 
				href="#" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
				onClick="dispatch('changeHomeSection')"
			>
				<img class="me-2 img-fluid rounded-3" width="40" height="32" src="./img/logo.jpeg" />	
				<span class="fs-4">Mini project</span>
			</a>

			<ul class="nav nav-pills">
				<li class="nav-item">
					<a 
						href="#" class="nav-link ${filterSection === 'hero' && 'active'}"
						onClick="dispatch('changeHomeSection')"
					>
						Home
					</a>
				</li>
				<li class="nav-item">
					<a 
						href="#" class="nav-link ${filterSection === 'features' && 'active'}"
						onClick="dispatch('changeFeaturesSection')"
					>
						Features
					</a>
				</li>
				<li class="nav-item">
					<a 
						href="#" class="nav-link ${filterSection === 'about' && 'active'}"
						onClick="dispatch('changeAboutSection')"
					>
						About
					</a>
				</li>
			</ul>
		</header>
    `;
}

export default connect()(Header);
