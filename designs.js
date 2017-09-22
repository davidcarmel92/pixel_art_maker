
$(function(){
  /*
    This function declares the button as the input, and after being clicked clears the
    canvas and calles the makeGrid and selectColor functions.
  */
  let button =$('#input_button');
  button.on("click", function(){
    let canvas = $('#pixel_canvas');
    canvas.empty();
    makeGrid(canvas);
    selectColor();
  });
});

function makeGrid(canvas) {
  /*
  This function creates the canvas based upon the height and width user selections.
  */
  const table = document.getElementById("pixel_canvas");
  let height = $('#input_height').val();
  let width = $('#input_width').val();
  for(i=0; i<height; i++){
    const row = table.insertRow(i);
    for(j=0; j<width; j++){
      const cell = row.insertCell(j);
    };
  };
};

function selectColor(){
  /*
  This function selects changes the color of the individual cell that is clicked upon,
  based on the input value of the colorPikcer input.
  */
  $('td').click(function(){
    let current_color =  $(this).css('background-color');
    let new_color = $('#colorPicker').val();
    if (new_color === current_color){
      $(this).css('background-color', "white");
    }
    else{
      $(this).css('background-color', new_color);
    }
  });
};
