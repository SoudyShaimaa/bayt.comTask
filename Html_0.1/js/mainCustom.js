/**
 * jTinder initialization
 */
$("#tinderslide").jTinder({

	animationRevertSpeed: 200,
	animationSpeed: 400,
	threshold: 1,
	likeSelector: '.like',
	dislikeSelector: '.dislike'
});

/**
 * Set button action to trigger jTinder like & dislike.
 */
$('.actions .like, .actions .dislike').click(function(e){
	e.preventDefault();
	$("#tinderslide").jTinder($(this).attr('class'));
});

//overflow

$(document).ready(function(){
  var id;
  $(".more-button").click(function(){

      id = $(this).parent().attr('id')
      currentCard = $(this).parent().children(".card-content")
      $(".screen-body").addClass("tab-open");
      $(".card-details").addClass("tab-visible");
      $(".card-details-content").append($(currentCard));
      return id;
  });
  $(".close").click(function(){
    $(".screen-body").removeClass("tab-open");
    $(".card-details").removeClass("tab-visible");
    $("#" + id).append($(".card-details-content .card-content"));
  });
});
