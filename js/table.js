function Table(playerA, playerB){
    this.events={};
    this.takeTurn=function(player){      
        //draw card.
        this.fireEvent("turnStart", player);
        player.draw();        
        gui.drawTable(this);
        var that=this;
        setTimeout(function(){
            gameController.heropower(that,player);
              gui.drawTable(that);           
        },2000);
    }

    this.fireEvent=function(event,payload){
        console.log("fire event of type "+event+" ("+payload+")");
        if (this.events[event]){
            for (var i = 0; i<this.events[event].length; i++){
                this.events[event][i](payload);
            }
        }
    },
    this.registerListener=function(event, func){
        if (this.events[event]){
            this.events[event].push(func);            
        }
        else
        {
            this.events[event]=[func];
        }
        console.log(this.events);
    },
    this.removeListener=function(event, func){
        if (this.events[event]){
            var index = this.events[event].indexOf(func);
            if (index > -1) {
                this.events[event].splice(index, 1);
                console.log("removed event");
                console.log(this.events);
            }
        }    

    }

    this.heroPower=function(player, target){
        console.log(player.name+ " does HP");
        player.hero.hp();
    }

    function giveManastones(p){        
        p.manastones++;      
        
    }
    this.registerListener("turnStart",giveManastones)


    //init
    this.playerA=playerA;
    this.playerB=playerB;
    
    this.playerA.table=this;
    this.playerB.table=this;
  
    this.fireEvent("gameStart", playerA.name+" vs. "+playerB.name);  

    this.gameRunning=true;
    this.currentPlayer=this.playerA;
    this.upNext=this.playerB;    
    this.takeTurn(this.currentPlayer);




    //register basic events:
  
}