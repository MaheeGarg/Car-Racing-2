  class Form {
    constructor() {
      this.input = createInput("Name:");
      this.button = createButton("Play");
      this.greeting = createElement('h3');
      this.title = createElement('h2')
    }

    

    hide(){
      this.input.hide()
      this.button.hide()
      this.greeting.hide()
      this.title.hide()
    }
  
  
    display(){
     // var title = createElement('h2')
      this.title.html("Multiplayer Car Racing Game");
      this.title.position(350, 100);

      

      this.input.position(450, 200);
      this.button.position(480, 230);
  
      this.button.mousePressed(()=>{
        this.input.hide()
        this.button.hide()
  
        player.name = this.input.value();
        
        playerCount =playerCount +1 ;
        player.index = playerCount
        player.update(name)
        player.updateCount(playerCount);
        
        this.greeting.html("Hello " + player.name )
        this.greeting.position(450, 160)
      });
  
    }

   
    
  }
  
  