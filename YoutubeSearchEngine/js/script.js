//Search Bar Handler


$(function(){
	var searchField = $('#query');
	var icon = $('#search-button');

	//Focus Event Handler

	$(searchField).on('focus',function(){
		$(this).animate({
			width:'100%'
		},400);

		$(icon).animate({
			right:'10px'
		},400);
	});

	// Blur Event Handler

	$(searchField).on('blur',function(){
		if(searchField.val()==""){
			$(searchField).animate({
				width:'50%'
			},400,function(){});

			$(icon).animate({
				right:'360px'
			},400,function(){});
		}

		
	});

	$('search-form').submit(function(e){
		e.preventDefault();
	});
})


function search(){
	// clear everything

	
	$('#results').html('');
	$('#buttons').html('');

	//Get form input
	var q = $('#query').val();


	//Run GET request on API
	$.get(
		"https://www.googleapis.com/youtube/v3/search",{
		part:'snippet, id',
		q: q,
		type:'video',
		key:'AIzaSyB9bY8mGf59vf0LOPrNLw8H9a-hJCLDQ-M'},
		function(data){
			var nextPageToken=data.nextPageToken;
			var prevPageToken=data.prevPageToken;

			console.log(data);

			$.each(data.item,function(i,item){
				var output = getOutput(item);

				// display results

				$("#results").append(output);
			})
		}
	);
}



	var token = $('#next-button').data('token'); 

	$('#results').html('');
	$('#buttons').html('');

	//Get form input
	var q = $('#query').val();


	//Run GET request on API
	$.get(
		"https://www.googleapis.com/youtube/v3/search",{
		part:'snippet, id',
		q: q,
		type:'video',
		key:'AIzaSyB9bY8mGf59vf0LOPrNLw8H9a-hJCLDQ-M'},
		function(data){
			var nextPageToken=data.nextPageToken;
			var prevPageToken=data.prevPageToken;

			console.log(data);

			$.each(data.item,function(i,item){
				var output = getOutput(item);

				// display results

				$("#results").append(output);
			})
		}
	);

}

function getOutput(item){
	var videoID = item.id.videoID;
	var title = item.snippet.title;
	var description = item.snippet.description;
	var thumb = item.snippet.thumbnail.high.url;
	var channelTitle = item.snippet.channelTitle;
	var date = item.snippet.publisedAd;

	//Build Output Stirng

	var output="<li>" +
	'<div class="list-left">' +
	'<img-src="'+ thumb +'">' +
	"</div>" +
	'div class="list-right">' +
	"<h3>"+title+"</h3>"
	'<small> By <span class="ctitle">'+channelTitle+'</span> on '+date+'</small>' +
	"<p>" + description + "</p>" +
	"</div>" + 
	"</li>" +
	'<div class="clearfix"></div>'+
	"";

	return output;

}