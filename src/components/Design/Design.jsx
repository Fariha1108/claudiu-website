import React from 'react';
import './Design.css';

const Design = () => {
    return (
        <div class="figma" role="img" aria-label="Figma icon">
            <div class="figma__bg"></div>
            <div class="figma__shapes">
                <div class="figma__shape figma__shape--a"></div>
                <div class="figma__shape figma__shape--b"></div>
                <div class="figma__shape figma__shape--c"></div>
                <div class="figma__shape figma__shape--d"></div>
                <div class="figma__shape figma__shape--e"></div>
            </div>

            {/* window.addEventListener("DOMContentLoaded",() => {
	const fi = new FigmaIcon(".figma");
});

class FigmaIcon {
	constructor(qs) {
		this.el = document.querySelector(qs);

		this.init();
	}
	init() {
		const isMobile = "ontouchstart" in document.documentElement;
		const event = isMobile ? "touchmove" : "mousemove";

		document.addEventListener(event,this.updatePos.bind(this));

		if (isMobile) {
			document.addEventListener("touchstart",this.updatePos.bind(this));
		}
	}
	updatePos(e) {
		if (this.el) {
			const rect = this.el.getBoundingClientRect();
			const centerX = rect.left + rect.width / 2;
			const centerY = rect.top + rect.height / 2;
			const xDiff = e.pageX - centerX;
			const yDiff = e.pageY - centerY;
			const topDown = 160;
			const xSin = xDiff / Math.sqrt(topDown**2 + xDiff**2);
			const ySin = -yDiff / Math.sqrt(topDown**2 + yDiff**2);
			
			this.el.style.setProperty("--x",+xSin.toFixed(3));
			this.el.style.setProperty("--y",+ySin.toFixed(3));
		}
	}
} */}
        </div>
    )
}

export default Design;