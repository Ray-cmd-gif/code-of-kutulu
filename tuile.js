function BoardGame(h,w){
  this.heigth = h
  this.width = w
  this.map = ''
  this.sepRow = '\n'
  this.valuesOfTile = {name:'',value:''}
}

BoardGame.prototype.addLine = function(line){
  this.map+= this.map == '' ? line : this.sepRow + line
}

BoardGame.prototype.print = function(){
  console.log('map : ')
  var rows=this.map.split(this.sepRow)
  for(var i=0;i<rows.length;++i){
    console.log(rows[i])
  }
}

BoardGame.prototype.init = function(){

  for(var i=0;i<this.heigth;++i){
      //var line =
  }
}


var board = new BoardGame(4,4)
board.addLine('....')
board.print()
var line = 'maligne'
