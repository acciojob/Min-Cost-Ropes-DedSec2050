function mincost(ropes)
{ 
//write your code here
// return the min cost
	if(ropes.length<2){
		return 0;
	}
	arr = [...ropes]
	let totalCost = 0;
	while (arr.length > 1) {
    arr.sort((a, b) => a - b);

    const first = arr.shift();
    const second = arr.shift();

    const currentCost = first + second;
    totalCost += currentCost;

    arr.push(currentCost);
  }

  return totalCost;
	
}

module.exports=mincost;
