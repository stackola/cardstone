var Game= {
   
    cardPool:[],
    addCard:function(cardProto){
        this.cardPool.push(cardProto);
        console.log("Added a card to the pool", cardProto.toString());
    },
    start:function(){
        var playerA=new Player("Peter");
        var playerB=new Player("Hans");
        for (var i = 0; i < Game.cardPool.length; i++){
            playerA.deck.push(new CardInstance(Game.cardPool[i]));
            playerB.deck.push(new CardInstance(Game.cardPool[i]));
        }     
        var table=new Table(playerA, playerB);
       
    }
}

