const rows = 9984;
const cols = 6336;
let grid = [...Array(rows)].map(e => Array(cols).fill(0));

// KEY:
// 0 - move map
// 1 - move player
// 2 - don't move
// 3 - shift map


// map 0: on castle drawbridge, turn gate into door ==> map change
for (let i = 3720; i < 3780; i++) {
    for (let j = 1416; j < 1428; j++) {
        grid[i][j] = 3;
    }
}


// map 0: on castle drawbridge, move link ==> map change
for (let i = 3720; i < 3780; i++){
    for (let j = 1428; j < 1542; j++) {
        grid[i][j] = 1;
    }
}

// map 1: top hedge border
for (let i = 3482; i < 4030; i++) {
    for (let j = 714; j < 766; j++) {
        grid[i][j] = 2;
    }
}

// map 1: on castle steps, move link ==> map change
for (let i = 3284; i < 4200; i++) {
    for (let j = 1072; j < 1226; j++) {
        grid[i][j] = 1;
    }
}


const movement = function(x, y) {
    return grid[x][y];
}
