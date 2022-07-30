$(".next").click(function() {

  var img = $('#project-img');
  var src = img.attr("src");
  var number = Number(img.attr("name"));
  

  console.log(src);
  var fileNum = Number(img.attr("max"));
  number = (number + 1) % fileNum;
  if (number == 0) {
    ++number;
  }

  const fileName = "images/project/img-" + number + ".jpg";
  
  img.attr("src",fileName);
  img.attr("name", number);  
  img.addClass("hidden");  
  setTimeout(function() {
    img.removeClass("hidden");
  }, 10);  
})

$(".prev").click(function() {
  var img = $('#project-img');
  var src = img.attr("src");
  var number = Number(img.attr("name"));  

  console.log(src);
  var fileNum = Number(img.attr("max"));
  number = (number - 1);
  if (number == 0) {
    number = fileNum - 1;
  }

  const fileName = "images/project/img-" + number + ".jpg";
  img.attr("src",fileName);
  img.attr("name", number);  
  img.addClass("hidden");  
  setTimeout(function() {
    img.removeClass("hidden");
  }, 10);   
})