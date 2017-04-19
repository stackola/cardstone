function cardProto(name, attack, defense, cost){
    this.name=name;
    this.baseAttack = attack;
    this.baseDefense = defense;
    this.baseCost = cost; 
    this.toString=function(){
        return this.name+"("+this.baseAttack+"/"+this.baseDefense+")";
    }
}