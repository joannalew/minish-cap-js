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

// map 0: right drawbridge border
for (let i = 3782; i < 3808; i++) {
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

// map 0: gate right border
for (let i = 3780; i < 3790; i++) {
    for (let j = 1260; j < 1420; j++) {
        grid[i][j] = 2;
    }
}

// map 0: drawbridge bottom left buckle
for (let i = 3680; i < 3730; i++) {
    for (let j = 1486; j < 1532; j++) {
        grid[i][j] = 2;
    }
}

// map 0: drawbridge bottom right buckle
for (let i = 3758; i < 3790; i++) {
    for (let j = 1486; j < 1532; j++) {
        grid[i][j] = 2;
    }
}

// map 0: two upper pieces of fence on left
for (let i = 3680; i < 3718; i++) {
    for (let j = 1512; j < 1562; j++) {
        grid[i][j] = 2;
    }
}

// map 0: two upper pieces of fence on right
for (let i = 3768; i < 3848; i++) {
    for (let j = 1512; j < 1562; j++) {
        grid[i][j] = 2;
    }
}

// map 0: top inner left fencing (nearest drawbridge)
for (let i = 3638; i < 3702; i++) {
    for (let j = 1500; j < 1664; j++) {
        grid[i][j] = 2;
    }
}

// map 0: top inner right fencing (nearest drawbridge)
for (let i = 3790; i < 3850; i++) {
    for (let j = 1500; j < 1664; j++) {
        grid[i][j] = 2;
    }
}

// map 0: top left fencing
for (let i = 3368; i < 3688; i++) {
    for (let j = 1632; j < 1692; j++) {
        grid[i][j] = 2;
    }
}

// map 0: top right fencing
for (let i = 3804; i < 4204; i++) {
    for (let j = 1632; j < 1692; j++) {
        grid[i][j] = 2;
    }
}

// map 0: left fencing (upper part)
for (let i = 3358; i < 3432; i++) {
    for (let j = 1692; j < 1794; j++) {
        grid[i][j] = 2;
    }
}

// map 0: left signpost
for (let i = 3390; i < 3490; i++) {
    for (let j = 1730; j < 1792; j++) {
        grid[i][j] = 2;
    }
}

// map 0: left tiny fence below signpost
for (let i = 3390; i < 3460; i++) {
    for (let j = 1728; j < 1856; j++) {
        grid[i][j] = 2;
    }
}

// map 0: left fence
for (let i = 3388; i < 3480; i++) {
    for (let j = 1798; j < 2278; j++) {
        grid[i][j] = 2;
    }
}

// map 0: right fence
for (let i = 4106; i < 4164; i++) {
    for (let j = 1630; j < 2148; j++) {
        grid[i][j] = 2;
    }
}

// map 0: left bottom fence
for (let i = 3480; i < 3544; i++) {
    for (let j = 2208; j < 2280; j++) {
        grid[i][j] = 2;
    }
}

// map 0: bottom row trees
for (let i = 3488; i < 4134; i++) {
    for (let j = 2176; j < 2342; j++) {
        grid[i][j] = 2;
    }
}

// map 0: bottom right fence
for (let i = 4054; i < 4134; i++) {
    for (let j = 2082; j < 2176; j++) {
        grid[i][j] = 2;
    }
}


// map 0: top left tree
for (let i = 3510; i < 3690; i++) {
    for (let j = 1730; j < 1884; j++) {
        grid[i][j] = 2;
    }
}

// map 0: top right tree
for (let i = 3802; i < 3976; i++) {
    for (let j = 1730; j < 1884; j++) {
        grid[i][j] = 2;
    }
}

// map 0: bottom left tree
for (let i = 3510; i < 3690; i++) {
    for (let j = 1920; j < 2086; j++) {
        grid[i][j] = 2;
    }
}

// map 0: bottom right tree
for (let i = 3802; i < 3976; i++) {
    for (let j = 1920; j < 2086; j++) {
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
