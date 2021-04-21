/*------------------------------------------------------------------------------
  BOARD GAME
------------------------------------------------------------------------------*/

function BoardGame(h,w){
  this.heigth = h
  this.width = w
  this.mapString = ''
  this.rowSeparator = '|'
  this.map=[]

}

BoardGame.prototype.addLine = function(line){
  this.mapString+= this.mapString == '' ? line : this.sepRow + line
}

BoardGame.prototype.getPosition = function(x,y){
  if(x<0 || x>this.width || y<0 || y>this.heigth){ console.error('error the position is not exist')}
  var pos = this.map[y][x]
  return this.map[y][x]
}

BoardGame.prototype.getRow = function(numRow){

}

BoardGame.prototype.getColumn = function(numCol){

}



BoardGame.prototype.print = function(){
  console.log('--------------------------map--------------------------')
  var rows=this.mapString.split(this.rowSeparator)
  for(var i=0;i<rows.length;++i){
    console.log(rows[i])
  }
}

BoardGame.prototype.init = function(){
  var map=[]
  var id=0
  var rows = this.mapString.split('|')
  for(var i=0;i<rows.length;++i){
    var row = []
    for(var j=0;j<rows[i].length;++j){
      row.push(new Position(id,j,i,rows[i][j]))
      id++
    }
    map.push(row)
  }
  this.map=map
}

BoardGame.prototype.setMap = function(map){
  var conform=true
  var mapTab = map.split('|')
  //vérification du nb de lignes
  if(mapTab.length!=this.heigth){
    console.error('error in setMap. The map specify not have ' + this.heigth + ' rows')
    conform=false
  }
  //vérification du nb de colonnes
  mapTab.forEach(e=>{
    if(e.length!=this.width){
      console.error('error in setMap. The map specify not have ' + this.width + ' columns')
      conform=false
    }
  })
  if(conform){ this.mapString = map }
}

/*------------------------------------------------------------------------------
  POSITION
------------------------------------------------------------------------------*/

function Position(id,x,y,value){
  this.id=id
  this.x=x
  this.y=y
  this.value=value
}

Position.prototype.getAdj = function(map){
  //down
  if(this.y<map.length){ this.down=map[this.y+1][this.x] }
  //up
  if(this.y>0){ this.up=map[0][this.x] }
  //left
  if(this.x>0){ this.left=map[this.y][0] }
  //right
  if(this.x<map[0].length){ this.right=map[this.y][this.x+1] }
}



/*------------------------------------------------------------------------------
  MAIN
------------------------------------------------------------------------------*/
var boardMap = ''
boardMap+="#...|"
boardMap+="#...|"
boardMap+="....|"
boardMap+="....|"
boardMap+="...."

var board = new BoardGame(5,4)
board.setMap(boardMap)
board.init()
var pos = board.getPosition(1,1)
pos.getAdj(board.map)
console.log(pos.down.id)
board.print()
