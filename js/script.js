function moveSelected(elem){
  if(elem == "next"){
    var selected = $(".selected").next();
  }else if(elem == "prev"){
    var selected = $(".selected").prev();
  }else {
    return;
  }

  var next = $(selected).next();
  var prev=$(selected).prev();

  var nextRight=$(next).next();
  var prevLeft=$(prev).prev();

  $(selected).removeClass().addClass("selected");

  $(next).removeClass().addClass("next");
  $(prev).removeClass().addClass("prev");

  $(nextRight).removeClass().addClass("next-right");
  $(prevLeft).removeClass().addClass("prev-left");

  $(nextRight).nextAll().removeClass().addClass("hideRight");
  $(prevLeft).prevAll().removeClass().addClass("hideLeft");

}

$('#car-prev').click(function(){
  moveSelected('prev');
});

$('#car-next').click(function(){
  moveSelected('next');
});
  