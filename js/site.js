document.getElementById('year').textContent = new Date().getFullYear();

//Embed SVGs for dynamic styling
(() => {
	let svgsToEmbed = document.querySelectorAll('img.svg-embed');

	async function embedSVG(imgEle) {
		let id = imgEle.getAttribute('id');
		let src = imgEle.getAttribute('src');
		let classes = imgEle.getAttribute('class');

		try {
			//Get the 'svg' code from the passed in 'img' tag's 'src' attribute
			let response = await fetch(src, {
				method: 'GET'
			});
			let result = await response.text();
			//Insert the straight 'svg' code after the passed in 'img' tag
			imgEle.insertAdjacentHTML('afterend', result);
			let newEle = imgEle.nextElementSibling;

			//Remove the old img tag
			imgEle.remove();

			//Copy old 'id' & 'class' attributes to the new 'svg' tag
			if (id !== null) {
				newEle.setAttribute('id', id);
			}
			if (classes !== null) {
				classes += " ";
			} else {
				classes = "";
			}
			classes += "embedded-svg";
			newEle.setAttribute('class', classes);
		} catch (err) {
			console.error(err);
		}
	}

	svgsToEmbed.forEach((e) => {
		embedSVG(e);
	});
})();

//Theme toggling and persistence
(() => {
	let root = document.documentElement;
	let toggle = document.querySelectorAll('.theme-toggle');

	function setTheme(theme) {
		if (theme === 'dark') {
			root.setAttribute('data-theme', 'dark');
		} else {
			root.removeAttribute('data-theme');
		}
		localStorage.setItem('theme', theme);
		toggle.forEach(function(t) {
			t.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
		});
	}

	toggle.forEach(function(t) {
		t.addEventListener('click', function () {
			let current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
			setTheme(current === 'dark' ? 'light' : 'dark');
		});
	});

	setTheme(root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');
})();

//Navigation link highlighting based on section visibility
(() => {
	let navLinks = document.querySelectorAll('.nav-link');
	let linkMap = {};
	navLinks.forEach(function (link) {
		if (link.hasAttribute('href')) {
			linkMap[link.getAttribute('href').slice(1)] = link;
		}
	});

	let observer = new IntersectionObserver(function (entries) {
		entries.forEach(function (entry) {
			let link = linkMap[entry.target.id];
			if (!link || !entry.isIntersecting) return;
			navLinks.forEach(function (l) { l.classList.remove('is-active'); });
			link.classList.add('is-active');
		});
	}, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

	document.querySelectorAll('main section').forEach(function (section) {
		observer.observe(section);
	});
})();

//Animate in content when visible
(() => {
	let contents = document.querySelectorAll('.content-show');

	let observer = new IntersectionObserver((entries, obs) => {
		entries.forEach((ele) => {
			if (ele.isIntersecting) {
				obs.unobserve(ele.target);

				ele.target.classList.add('show');

				ele.target.addEventListener('animationend', () => {
					ele.target.classList.add('show-finished');
				}, { once: true });
			}
		});
	}, { root: null, rootMargin: '0px', threshold: 0.25 });

	contents.forEach((c) => {
		observer.observe(c);
	});
})();
