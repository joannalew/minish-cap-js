const rows = 9984;
const cols = 6336;
let grid = [...Array(rows)].map(e => Array(cols).fill(0));

// KEY:
// 0 - move map
// 1 - move player
// 2 - don't move
// 3 - shift map


// map 0: door on castle drawbridge (top) ==> map change
for (let i = 3718; i < 3780; i++) {
    for (let j = 1416; j < 1428; j++) {
        grid[i][j] = 3;
    }
}

// map 0: on castle drawbridge, move link ==> map change
for (let i = 3718; i < 3780; i++){
    for (let j = 1500; j < 1542; j++) {
        grid[i][j] = 1;
    }
}

// map 0: left drawbridge border
for (let i = 3690; i < 3708; i++) {
    for (let j = 1394; j < 1512; j++) {
        grid[i][j] = 2;
    }
}

// map 0: gate left border
for (let i = 3706; i < 3718; i++) {
    for (let j = 1260; j < 1420; j++) {
        grid[i][j] = 2;
    }
}

// map 0: right drawbridge border
for (let i = 3782; i < 3808; i++) {
    for (let j = 1400; j < 1510; j++) {
        grid[i][j] = 2;
    }
}

// map 0: gate right border
for (let i = 3780; i < 3790; i++) {
    for (let j = 1266; j < 1418; j++) {
        grid[i][j] = 2;
    }
}

// map 1: top hedge border
for (let i = 3482; i < 4030; i++) {
    for (let j = 714; j < 766; j++) {
        grid[i][j] = 2;
    }
}

// map 1: left long flowerbed
for (let i = 3572; i < 3664; i++) {
    for (let j = 890; j < 1130; j++) {
        grid[i][j] = 2;
    }
}

// map1: right long flowerbed
for (let i = 3824; i < 3920; i++) {
    for (let j = 890; j < 1130; j++) {
        grid[i][j] = 2;
    }
}

// map 1: left fountain
for (let i = 3572; i < 3666; i++) {
    for (let j = 776; j < 882; j++) {
        grid[i][j] = 2;
    }
}

// map 1: right fountain
for (let i = 3824; i < 3922; i++) {
    for (let j = 776; j < 882; j++) { 
        grid[i][j] = 2;
    }
}

// map 1: left top bush
for (let i = 3470; i < 3568; i++) {
    for (let j = 840; j < 920; j++) {
        grid[i][j] = 2;
    }
}

// map 1: left bottom bush
for (let i = 3470; i < 3568; i++) {
    for (let j = 940; j < 1020; j++) {
        grid[i][j] = 2;
    }
}

// map 1: right top bush
for (let i = 3924; i < 4022; i++) {
    for (let j = 840; j < 920; j++) {
        grid[i][j] = 2;
    }
}

// map 1: right bottom bush
for (let i = 3924; i < 4022; i++) {
    for (let j = 940; j < 1020; j++) {
        grid[i][j] = 2;
    }
}

// map 1: left-bottom castle wall (closest to gate)
for (let i = 3552; i < 3712; i++) {
    for (let j = 1190; j < 1264; j++) {
        grid[i][j] = 2;
    }
}

// map1: right-bottom castle wall (closest to gate)
for (let i = 3794; i < 3934; i++) {
    for (let j = 1190; j < 1264; j++) {
        grid[i][j] = 2;
    }
}

// map 1: left-bottom castle wall (inner sunken section)
for (let i = 3362; i < 3552; i++) {
    for (let j = 1222; j < 1240; j++) {
        grid[i][j] = 2;
    }
}

// map 1: right-bottom castle wall (inner sunken section)
for (let i = 3934; i < 4182; i++) {
    for (let j = 1222; j < 1240; j++) {
        grid[i][j] = 2;
    }
}

// map 1: left-bottom castle wall (left corner)
for (let i = 3260; i < 3362; i++) {
    for (let j = 1190; j < 1264; j++) {
        grid[i][j] = 2;
    }
}

// map 1: right-bottom castle wall (right corner)
for (let i = 4124; i < 4204; i++) {
    for (let j = 1190; j < 1264; j++) {
        grid[i][j] = 2;
    }
}

// map 1: left castle wall (inner sunken section)
for (let i = 3206; i < 3300; i++) {
    for (let j = 1116; j < 1190; j++) {
        grid[i][j] = 2;
    }
}

// map 1: right castle wall (inner sunken section)
for (let i = 4188; i < 4270; i++) {
    for (let j = 1116; j < 1190; j++) {
        grid[i][j] = 2;
    }
}

// map 1: left castle wall
for (let i = 3242; i < 3332; i++) {
    for (let j = 994; j < 1180; j++) {
        grid[i][j] = 2;
    }
}

// map 1: right castle wall
for (let i = 4156; i < 4268; i++) {
    for (let j = 994; j < 1180; j++) {
        grid[i][j] = 2;
    }
}

// map 1: left solo bottom hedge
for (let i = 3330; i < 3464; i++) {
    for (let j = 1062; j < 1150; j++) {
        grid[i][j] = 2;
    }
}

// map 1: right solo bottom hedge
for (let i = 4026; i < 4156; i++) {
    for (let j = 1062; j < 1150; j++) {
        grid[i][j] = 2;
    }
}

// map 1: left guard
for (let i = 3330; i < 3370; i++) {
    for (let j = 964; j < 1064; j++) {
        grid[i][j] = 2;
    }
}

// map 1: right guard
for (let i = 4122; i < 4208; i++) {
    for (let j = 964; j < 1064; j++) {
        grid[i][j] = 2;
    }
}

// map 1: bottom left hedge border
for (let i = 3322; i < 3462; i++) {
    for (let j = 962; j < 1054; j++) {
        grid[i][j] = 2;
    }
}

// map 1: bottom right hedge border
for (let i = 4026; i < 4172; i++) {
    for (let j = 962; j < 1054; j++) {
        grid[i][j] = 2;
    }
}

// map 1: left hedge border
for (let i = 3382; i < 3462; i++) {
    for (let j = 708; j < 1054; j++) {
        grid[i][j] = 2;
    }
}

// map 1: right hedge border
for (let i = 4026; i < 4112; i++) {
    for (let j = 708; j < 1054; j++) {
        grid[i][j] = 2;
    }
}

// map 1: upper left hedge border (top left corner)
for (let i = 3462; i < 3530; i++) {
    for (let j = 766; j < 832; j++) {
        grid[i][j] = 2;
    }
}

// map 1: upper right hedge border (top right corner)
for (let i = 3962; i < 4026; i++) {
    for (let j = 766; j < 800; j++) {
        grid[i][j] = 2;
    }
}

// map 1: on castle steps, move link ==> map change
for (let i = 3694; i < 3784; i++) {
    for (let j = 1100; j < 1226; j++) {
        grid[i][j] = 1;
    }
}

// map 1: door on castle gate (bottom) ==> map change
for (let i = 3710; i < 3782; i++) {
    for (let j = 1210; j < 1230; j++) {
        grid[i][j] = 3;
    }
}

const movement = function(x, y) {
    return grid[x][y];
}
