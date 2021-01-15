// Given a 2-D matrix with M rows and N columns, find the number of ways to reach cell with coordinates (i,j) from starting cell (0,0) under the condition that you can only travel one step right or one step down.

//traveller(0,1) = 0
//traaveller (1,0) = 0
//traveller (1,1) = 1

function traveller(row, column, temp = {}){
    
    var key = `${row}-${column}`

    if(key in temp) return temp[key]

    if ( row == 0 || column==0 ) return 0;

    if(row ==1 && column == 1) return 1;
    
    temp[key] =  traveller(row-1, column, temp) + traveller(row, column-1, temp);
    return temp[key]
}


console.log(traveller(3,2));
console.log(traveller(5,5));
console.log(traveller(18,18));
 