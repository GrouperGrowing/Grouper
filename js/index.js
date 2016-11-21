var $ = require("jquery");
//require("../node_modules/browser-es-module-loader/dist/babel-browser-build.js");
var css = require("!style!css!sass!../sass/index.scss");

var groups = require("../data/groups.js");
var tmpls= require("../js/templating.js");

$(function(){
	//render groups
	var triGroups= groupBy3(groups);
 	$(".content").html(tmpls.tmplGroup(triGroups));

 	$(".group").click(function(e){
 		var groupId= e.target.parentElement.dataset.group;
 		alert("group id: " + groupId);
 	});

 	$(".addGroup").click(function(e){
 		var addGroupTmpl = ` <div class="addGroupForm">
			
 			<div class="step1">
				<div class="groupImagePreview"></div>
				<div class="uploadGroupImage">Upload Group Image</div>
				
				<div class="groupNameContainer">
					<input id="groupNameInp" type="text" placeholder="Group name"/>
				</div>

 			</div>

 			<div class="navigation"></div>

 		</div>
 		`;
 		$(".content").html(addGroupTmpl);
 		$(".bottombar").hide();
 	});
});


function groupBy3(groups){
	var triGroups=[];
	var subGroup= [];
	for(let i=0; i < groups.length; i++){
		if(i%3 === 0 && i > 0){
			triGroups.push(subGroup);
			subGroup= [];
		}
		subGroup.push(groups[i]);
		if(i === groups.length-1){
			triGroups.push(subGroup);
		}
	}
	return triGroups;
}