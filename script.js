$("button").click(function(){
  var yourName=$("input").val();
  var InputTwo=$(".input2").val();
  var InputThree=$(".input3").val();
  
    $("p").text("Hey "+ yourName +" I know that " + InputTwo + " is very interesting." + " But if you keep watching it " + InputThree + " times a week you would watch it " +  parseInt(InputThree) * 80  + " hours. "  );
});

