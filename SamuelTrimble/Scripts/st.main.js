class ST_HexGrid {
	constructor(ele) {
		this.HEX_ANGLE = 0.523598776; //30 degrees in radians

		this._canvasEle = ele;
		this._context = this._canvasEle.getContext('2d');

		//Init default hex grid values
		this.hexSideLength = 100;
		this.hexHeight = Math.sin(this.HEX_ANGLE) * this.hexSideLength;
		this.hexRadius = Math.cos(this.HEX_ANGLE) * this.hexSideLength;
		this.hexRectHeight = this.hexSideLength + (2 * this.hexHeight);
		this.hexRectWidth = 2 * this.hexRadius;

		//Init default cursor values
		this.cursorMoved = false;
		this.cursorPosX = 0;
		this.cursorPosY = 0;
		this.glowOuterSize = 400;

		//Size the grid and resize when needed
		this.ResizeHexGrid();
		window.addEventListener('resize', this.ResizeHexGrid.bind(this));

		//Watch mouse movement
		window.addEventListener('mousemove', this.UpdateMousePos.bind(this));

		//Kick off drawing
		requestAnimationFrame(this.RenderHexGrid.bind(this));
	}

	UpdateMousePos(evt) {
		this.cursorMoved = true;
		this.cursorPosX = evt.clientX;
		this.cursorPosY = evt.clientY;
	}

	ResizeHexGrid() {
		//Use bigger hexes and larger glow for bigger screens
		if (window.innerWidth > 1920) {
			this.hexSideLength = 100;
			this.glowOuterSize = 400;
		} else if (window.innerWidth > 1200) {
			this.hexSideLength = 60;
			this.glowOuterSize = 200;
		} else {
			this.hexSideLength = 20;
			this.glowOuterSize = 80;
		}

		this.hexHeight = Math.sin(this.HEX_ANGLE) * this.hexSideLength;
		this.hexRadius = Math.cos(this.HEX_ANGLE) * this.hexSideLength;
		this.hexRectHeight = this.hexSideLength + (2 * this.hexHeight);
		this.hexRectWidth = 2 * this.hexRadius;
	}

	RenderHexGrid() {
		let w = this._canvasEle.width = window.innerWidth;
		let h = this._canvasEle.height = window.innerHeight;
		let centerX = 0;
		let centerY = 0;
		let row = 0;

		this._context.fillStyle = "#000000";
		this._context.fillRect(0, 0, w, h);

		//Only draw cursor glow lighting if the cursor has been moved
		if (this.cursorMoved) {
			let gradient = this._context.createRadialGradient(this.cursorPosX, this.cursorPosY, 10, this.cursorPosX, this.cursorPosY, this.glowOuterSize);
			gradient.addColorStop(0, "#276CB9");
			gradient.addColorStop(1, "#000000");

			this._context.fillStyle = gradient;
			this._context.fillRect(0, 0, w, h);
		}

		this._context.fillStyle = "#262626";
		while (centerY < (h + this.hexRectHeight)) {
			while (centerX < (w + this.hexRectWidth)) {
				this.RenderHex(centerX, centerY);

				centerX += this.hexRectWidth + 1;
			}

			row++;
			centerX = ((row % 2) ? -(this.hexRectWidth / 2) : 0);
			centerY += this.hexRectHeight - this.hexHeight + 1;
		}

		requestAnimationFrame(this.RenderHexGrid.bind(this));
	}
	RenderHex(centerX, centerY) {
		let x = centerX - this.hexRadius;
		let y = centerY - this.hexRadius;

		this._context.beginPath();
		this._context.moveTo(x + this.hexRadius, y);
		this._context.lineTo(x + this.hexRectWidth, y + this.hexHeight);
		this._context.lineTo(x + this.hexRectWidth, y + this.hexHeight + this.hexSideLength);
		this._context.lineTo(x + this.hexRadius, y + this.hexRectHeight);
		this._context.lineTo(x, y + this.hexHeight + this.hexSideLength);
		this._context.lineTo(x, y + this.hexHeight);
		this._context.closePath();
		this._context.fill();
	}
}

class ST_Main {
	constructor() {
		this._body = document.getElementsByTagName("body")[0];
		this._hexGridCanvas = document.getElementById("st_hexContainer");

		this.hexGrid = new ST_HexGrid(this._hexGridCanvas);
	}
}

let ST = null;
document.addEventListener('DOMContentLoaded', (() => {
	//When everything is done loading, start the main class that runs everything
	ST = new ST_Main();
}));