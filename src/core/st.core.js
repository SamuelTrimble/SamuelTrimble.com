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
}
