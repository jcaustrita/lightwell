const minMouseX = -200, maxMouseX = 200, minMouseY = -200, maxMouseY = 200, minShadowX = -20, maxShadowX = 20, minShadowY = -20, maxShadowY = 20;

export function clamp (num, min, max) {
	return num <= min ? min : num >= max ? max : num
}

export function map (value, low1, high1, low2, high2) {
	return low2 + (high2 - low2) * (value - low1) / (high1 - low1)
}

export function getOffset(element) {
	if (!element.getClientRects().length) {
		return { top: 0, left: 0 }
	}
	const rect = element.getBoundingClientRect()
	const win = element.ownerDocument.defaultView
	return ({
		top: rect.top + win.pageYOffset,
		left: rect.left + win.pageXOffset
	})
}

export function calcElementTextShadow (el, mouseX, mouseY) {
	const elOffset = getOffset(el)
	const centreX = Math.trunc(elOffset.left + (el.offsetWidth / 2));
	const centreY = Math.trunc(elOffset.top + (el.offsetHeight / 2));
	const offsetX = mouseX - centreX;
	const offsetY = mouseY - centreY;
	const clampedOffsetX = clamp(offsetX, minMouseX, maxMouseX);
	const clampedOffsetY = clamp(offsetY, minMouseY, maxMouseY);
	const remappedOffsetX = Math.trunc(map(clampedOffsetX, minMouseX, maxMouseX, minShadowX, maxShadowX));
	const remappedOffsetY = Math.trunc(map(clampedOffsetY, minMouseY, maxMouseY, minShadowY, maxShadowY));
	return `${remappedOffsetX * -1}px ${remappedOffsetY * -1}px 50px #0F0F0F`
}
