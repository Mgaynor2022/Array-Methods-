var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];



function arrayExercise (){
    vegetables.pop();
    console.log("vegetables", vegetables);

    fruit.shift();
    console.log("fruit", fruit);

   const indexOfOrange = fruit.indexOf("orange");
    console.log(indexOfOrange);

    fruit.push(5);
    console.log("fruit",fruit);

   const vegetablesLength =  vegetables.length
    console.log(vegetablesLength);

    vegetables.push(6);
    console.log("vegetables", vegetables);

   const food = fruit.concat(vegetables);
    console.log("food", food);

    const sliceFoodArray = food.slice(4,6);
    console.log(sliceFoodArray);

     food.reverse();
    console.log("food", food);

    const allTogether = food.join(",");
    console.log(allTogether);
    
};



    