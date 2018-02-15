'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(addProjectDetails);
	// $('#colorBtn').click(randomizeColors);
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();	
	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);
	console.log("User clicked on project ", idNumber);
	loadProject(idNumber);

}

function loadProject(id) {
	console.log("inside of loadProject");
	let url = "/project/" + id;
	console.log("the URL is: ", url);
	
	console.log("the ID is: ", id);
	

	$.get(url, callback);

}

function callback(data, status){
		console.log("this is the data ", data);
		
		let img = `<img src="` +data.image+ `">`;
		let h1 = `<h1>` + data.title + `</h1>`;
		let h2 = `<h2>` +data.date + `</h2>`;
		let summary = data.summary;
		let html = img + h1 + h2 + summary;
		let detailID = "#detailproject" + data.id;
		$(detailID).html(html)
		console.log("this is the html, ", html);


	}