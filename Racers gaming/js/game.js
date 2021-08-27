  class Game {
    constructor(){}
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();

        car1 = createSprite(100,200,50,50);
        car2 = createSprite(300,200,50,50);
        car3 = createSprite(500,200,50,50);
        car4 = createSprite(700,200,50,50);
        cars = [car1,car2,car3,car4];
      }
    }

    play(){
      form.hide()
      //textSize(30)
      //text("Game Started", 150,200)
    
      if(keyIsDown (UP_ARROW) && player.index !== null){
      player.distance= player.distance +100;
      player.update();
      }
     Player.getPlayerInfo();
      //var ypos = 170;

      var x=0;
      var y;
      var index = 0;
      for(var dummy in allPlayers){
        //ypos = ypos +30;
        //textSize (15);
        //text(allPlayers[dummy].name + "="+ allPlayers[dummy].distance, 170,ypos );
        backgroundImage("blue");
        index =  index+1;
        x = x+200;
        y = displayHeight - allPlayers[dummy].distance;

        cars[index-1].x=x;
        cars[index-1].y = y;
        
        if(index ===  player.index ){
          cars[index-1].shapeColor = "red";
        }
          //else
         //{ fill("black");
        
       // }
      }
    drawSprites()
  
  }
  
  
  }
  