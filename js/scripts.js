var PLAYER_TOKEN = "X"
var COMPUTER_TOKEN = "O"


$(document).ready(function(){

  var grid = [
    [" "," "," "],
    [" "," "," "],
    [" "," "," "]
  ];
  function isGameOver(){
     for(var i = 0; i < 3; i++) {
       if (grid[i][0] != " " &&
       grid[i][0] === grid[i][1] &&
       grid[i][0] === grid[i][2]){
         return grid[i][0]
     }
     for(var j = 0; j < 3; i++) {
       if (grid[0][j] != " " &&
       grid[0][j] === grid[1][j] &&
       grid[0][j] === grid[2][j]){
         return grid[0][j]
     }
  }
  }
}


$(".col").click(function(){
  $this = $(this);

  $(this).html(PLAYER_TOKEN);
  var i = $this.data("i");
  var j = $this.data("j");
  grid[i][j] = PLAYER_TOKEN;

  if(isGameOver()) {

  } else {

  }

  });
});
