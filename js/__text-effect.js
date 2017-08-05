var marquee = $('div.marquee');
marquee.each(function() {
  var mar = $(this);
  var indent = 100;
  mar.marquee = function() {
    indent--;
    mar.css('text-indent', indent);
    if (indent < -1 * mar.children('div.marquee-text').width()) {
      indent = mar.width();
    }
  };
  mar.data('interval', setInterval(mar.marquee, 800 / 60));
});
