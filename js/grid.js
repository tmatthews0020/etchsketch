

$( document ).ready(function(){
createGrid();
});


function createGrid(){
  max = 15
  x = 0;
  y = 0;

  for(i = 0; i <= max; i++){
    newRow(i);
    for(k = 0; k <= max; k++){
      newCol(i, k)
    }
  }
}


function newRow(id){


  // create row html
  append = "<div id = " + "'row" + id + "'" + "></div>";

  //row before number
  before = id - 1;
  // row before html
  rowBefore = "'#row" + before +"'";

  if(id == 0){
    $(append).appendTo(".container");
  }else if(id >= 1){
    $(append).appendTo('.container');
    $(rowBefore).after(append);
  }
}

function newCol(row, col){

  append = "<div id =" + "'" + col + "'" + "></div>";
  rowNumber = "'#row" + row + "'";
  afterRow = "'#row" + row - 1 + "'";
  if(row == 0 ){
    $(append).appendTo(rowNumber);
  }else if(row >= 1){
    $(afterRow).after(append);
  }
}
