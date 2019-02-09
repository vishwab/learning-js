function hide(e, reflow) {			// Hide the element by scripting its style
	if (reflow) {				// if 2nd argument is true
		e.style.display = "none";	// hide element and use its space
	} else {				// Otherwise
		e.style.visibility = "hidden";	// make e invisible, but leave its space
	}
}
