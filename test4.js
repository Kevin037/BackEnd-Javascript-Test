/**
 * Direction:
 * Find missing number from the list
 *
 * Expected Result:
 * 8
 */
const numbers = [9, 6, 4, 2, 3, 5, 7, 0, 1];

  function result(numbers) {
  let count = 9;
  let hilang=[];
	for(let i=0;i<=count;i++)
	{
    	if (numbers.indexOf(i) === -1) 
      	{
      	hilang.push(i)
  		}  
	}
  return hilang;
}

console.log(result(numbers));



