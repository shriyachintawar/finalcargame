class Form {

  constructor() {
    this.input = createInput("").attribute("placeholder","Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton('RESET');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2 - 50, 0);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.reset.position(displayWidth-300,20);
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });
    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
      location.reload();//to reload page automatically
      Player.updateCarsAtEnd(0);
      var playerInfoRef = database.ref('players');
            playerInfoRef.remove();

    });

  }
  displayRank(){
    background(rank);
    var message1 = createElement('h3');
    message1.html("Congratulations "+player.name  + " on participating in race");
    message1.position(600,displayHeight/2-180);

    var message2 = createElement('h2');
    message2.html("Your Rank is "+ player.rank);
    message2.position(displayWidth/2-40,displayHeight/2-20);
  }
}
