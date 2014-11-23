

$( document ).ready(function(){
createGrid();
$(".container > div > div").mouseenter(function(){
    $(this).addClass("selected");

});

});


function createGrid(){
  max = 20
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
  append = "<div class=\"row\" id = " + "'row" + id + "'" + "></div>";

  //row before number
  before = id - 1;
  // row before html
  rowBefore = "'#row" + before +"'";

  if(id == 0){
    $(append).appendTo(".container");
  }else if(id >= 1){
    $(append).appendTo('.container');
    //$(rowBefore).after(append);
  }
}

function newCol(row, col){
  //column that already exists to append to
  beforeNum = col - 1
  beforeNum = beforeNum.toString();
  // <div id= {column[0-15]}></div>
  append = "<div id ='" + col.toString() + "'></div>";
  // current col to add to html
  colNumber = "'#" + col.toString() + "'";
  // current col - 1 to add subsequent columns to the one before.
  colDiff = "\"#" + beforeNum  + "'";
  // current row setup for css selector
  currentRow = "\"#row" + row.toString() + "\"";

  if(row == 0 ){
    $(append).appendTo("#row0");
  }else if(row >= 1){
    $(append).appendTo("#row" + row);
  }
}
