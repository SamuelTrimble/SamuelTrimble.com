export default class ST_Core {
	constructor() {
		//eslint-disable-next-line
		if (!!ST_Core.instance) {
			return ST_Core.instance;
		}

		ST_Core.instance = this;

		this.App = null;
		this.CurPage = null;

		return this;
	}

	install(vue) {
		vue.prototype.$st = this;
	}

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
}
