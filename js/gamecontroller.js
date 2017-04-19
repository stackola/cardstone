var gameController={
    heropower:function(table, player, target){
        if (player != table.currentPlayer ){
            console.log("not players turn.");
            return;
        }
        if (player.mana()<2){
            console.log("player does not have enough mana");
            return;
        }
        player.spend(2);
        player.hero.hp();
        
    }
}