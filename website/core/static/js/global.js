$(function(){


  var el = $("#hero");
  if(el.length < 1) return;
  
  var img = el.find('img.photo');
  var r = img.width() / img.height();

  var setHeaderPhoto = function() {
    var w = el.width();
    var h = w / r;
    if(h < el.height()) {
      h = el.height();
      w = h * r;
    }

    var left = w > el.width() ? -1 *  Math.round( (w - el.width()) /2 ) : 0;
    img.css("width", w + "px").css("height", h + "px").css("left", left + "px");
  };


  $(window).resize(setHeaderPhoto);
  setHeaderPhoto();
  img.load(function() {
    setHeaderPhoto();
  });
});
