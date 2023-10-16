const bombPlacment = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  const bombsQuantity = 8
  const bombsPlaced = 0

  while(bombPlacment < bombsQuantity) {
    
  }

  function generateGrid(x,y) {
    return Array(y).fill().map(()=>Array(x).fill(0))
    
   
  }

 function setBombPlacment(x,y,totalBombs) {
    const grid = generateGrid(x,y)
   
    for(let i = 0; i < totalBombs;){
        const bombX = Math.floor(Math.random() * x);
        const bombY = Math.floor(Math.random() * y);
        console.log(bombX)
        console.log(bombY)
        if(grid[bombY][bombX] != -1) {
            grid[bombY][bombX] = -1;
            for(let  j = Math.max(bombY - 1, 0); j <= Math.min(bombY + 1, y -1); j++) {
                for(let k = Math.max(bombX - 1, 0); k <= Math.min(bombX + 1, x -1); k++) {
                    if (grid[j][k] >=0 && grid[j][k] != -1) {
                    console.log(j ,k)

                    grid[j][k] ++
                    }
                }
            }
            i++;
        }

    }
    return grid
 }