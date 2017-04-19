function Player(name){
    this.name=name;
    this.health=30;
    this.armour=0;
    this.hand=[];
    this.deck=[];
    this.table;
    this.manastones=1;
    this.manaspend=0;
    this.overload=0;
    this.hero=new Hero("hunter",function(){alert("Heropower")});

    this.mana=function(){
        return this.manastones-this.manaspend-this.overload;
    }
    this.draw=function(){
        var drawnCard = this.deck.splice(Math.floor(Math.random()*this.deck.length), 1);
        var drawnCardName = drawnCard[0].toString();
        this.table.fireEvent("draw", drawnCardName);
        if (this.hand.length>=10){
            this.table.fireEvent("burn", drawnCardName);
        }
        else{
            this.hand.push(drawnCard);
        }
       
    }
    this.spend=function(num){
        this.manaspend+=num;
    }
}