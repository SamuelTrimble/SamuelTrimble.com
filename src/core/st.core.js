const Core = class ST_Core {
	constructor() {
		//eslint-disable-next-line
		if (!!ST_Core.instance) {
			return ST_Core.instance;
		}

		ST_Core.instance = this;

		this.App = null;
		this.CurView = null;

		return this;
	}

	//Vue plugin registration hook
	install(vue) {
		vue.prototype.$st = this;
	}

	//Log messages to the console when not in production environment (can 'force' msgs in production)
	log(msg, force) {
		if ((force) || (process.env.NODE_ENV !== 'production')) {
			//eslint-disable-next-line
			console.log(msg);
		}
	}

	//Throttles event listeners that fire rapid events like 'resize', 'mousemove', etc...
	//so that they only fire a maximum of once every <delay>ms.
	/*
	Example use: (processes the 'mousemove' event a maximum of once every 200ms)
	document.addEventListener('mousemove', Throttle((evt) => {
		//do stuff with evt.x & evt.y
	}, 200));
	*/
	throttle(func, delay) {
		let prev = Date.now() - delay;
		return (...args) => {
			let cur = Date.now();
			if (cur - prev >= delay) {
				prev = cur;
				func.apply(null, args);
			}
		};
	}
};

export default new Core;
