const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
    ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
    addPotion( newPotion ) {
        for (let potion of this.potions) {
            
            if (potion.name === newPotion.name) {
               return `Error! Potion ${newPotion.name} is already in your inventory!`;
            }    
        
        }
        this.potions.push(newPotion);
        console .table(this.potions)
    },
    
//   removePotion(potionName) {
//     // const potionIndex = this.potions.indexOf(potionName);

//     // if (potionIndex === -1) {
//     //   return `Potion ${potionName} is not in inventory!`;
//     // }

//     // this.potions.splice(potionIndex, 1);
//   },
//   updatePotionName(oldName, newName) {
//     // const potionIndex = this.potions.indexOf(oldName);

//     // if (potionIndex === -1) {
//     //   return `Potion ${oldName} is not in inventory!`;
//     // }

//     // this.potions.splice(potionIndex, 1, newName);
//   },
    };

console. log (atTheOldToad.addPotion({ name: "Dragon ", price: 780}))