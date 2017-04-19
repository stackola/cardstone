//these get shuffled into the deck and so on.
//they are also what are in the players hand.
function CardInstance(cardProto){
    //store modifiers, counters eg.
    this.cardProto=cardProto;
    this.attackModifier=10;
    this.defenseModifier=10;
    this.getAttack=function(){
        return this.cardProto.baseAttack+this.attackModifier;
    }
    this.getDefense=function(){
        return this.cardProto.baseDefense+this.defenseModifier;
    }
    this.toString=function(){
        return this.cardProto.name+"("+this.getAttack()+"/"+this.getDefense()+")";
    }
}