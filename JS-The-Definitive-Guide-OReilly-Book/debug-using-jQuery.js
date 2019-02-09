function debug(msg) {
	var log = $("#debuglog");	// Find the debuglog element to display msg in
	if (log.length == 0) {		// If it doesn't exist yet, create it...
		log = $("<div id='debuglog'><h1>Debug Log</h1></div>");
		log.append(document.body);	// and insert it at the end of the body
	}
	log.append($("<pre/>").text(msg));	// wrap msg in <pre> and append it to log
}
