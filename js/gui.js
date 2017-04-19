var gui={
    drawTable:function(table){
        $('#game').html("");
        $('#game').append("Player: "+table.playerA.name);
        $('#game').append("<br>");        
        $('#game').append("Health: "+table.playerA.health);    
        $('#game').append("<br>");
        $('#game').append("Mana: "+table.playerA.mana());

        $('#game').append("<br>"); 
        $('#game').append("<br>"); 
        $('#game').append("<br>"); 

        $('#game').append("Player: "+table.playerB.name);
        $('#game').append("<br>");        
        $('#game').append("Health: "+table.playerB.health);    
        $('#game').append("<br>");
        $('#game').append("Mana: "+table.playerB.mana());
    }
}