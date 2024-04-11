$(".next").click(function() {

  var img = $('#project-img');
  var number = Number(img.attr("name"));
  
  var fileNum = Number(img.attr("max"));
  number = (number + 1) % fileNum;
  if (number == 0) {
    ++number;
  }

  const prefixIndex = $('#project-img').attr("src").indexOf("-") + 1;
  const prefix = $('#project-img').attr("src").substring(0,prefixIndex);
  const fileName = prefix + number + ".jpg";
  
  img.attr("src",fileName);
  img.attr("name", number);  
  img.addClass("hidden");  
  setTimeout(function() {
    img.removeClass("hidden");
  }, 10);  
})

$(".prev").click(function() {
  var img = $('#project-img');
  var number = Number(img.attr("name"));  

  var fileNum = Number(img.attr("max"));
  number = (number - 1);
  if (number == 0) {
    number = fileNum - 1;
  }

  const prefixIndex = $('#project-img').attr("src").indexOf("-") + 1;
  const prefix = $('#project-img').attr("src").substring(0,prefixIndex);
  const fileName = prefix + number + ".jpg";
  img.attr("src",fileName);
  img.attr("name", number);  
  img.addClass("hidden");  
  setTimeout(function() {
    img.removeClass("hidden");
  }, 10);   
})