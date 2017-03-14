/**
 * Created by yan on 14/03/2017.
 */
seajs.use(['http://wx.indoorun.com/indoorun/app/yanli/indoorun/sdk/modules/pathRoute/PathSearch'], function (PathSearch) {

    var RegionPath = {"carPath":{"matrix":[[{"length":0,"proIndex":0},{"length":489.53,"proIndex":3},{"length":100,"proIndex":0},{"length":389.53,"proIndex":2}],[null,{"length":0,"proIndex":1},null,null],[null,{"length":389.53,"proIndex":3},{"length":0,"proIndex":2},{"length":289.53,"proIndex":2}],[null,{"length":100,"proIndex":3},{"length":289.53,"proIndex":3},{"length":0,"proIndex":3}]],"positions":[{"floorIndex":0,"pos":{"x":260,"y":486},"unitId":"14835160966201284","unitTypeId":5},{"floorIndex":0,"pos":{"x":1078,"y":271},"unitId":"14835160966201283","unitTypeId":7},{"floorIndex":1,"pos":{"x":496,"y":241},"unitId":"14818664733538407","unitTypeId":7},{"floorIndex":1,"pos":{"x":634,"y":151},"unitId":"14829773297182286","unitTypeId":5}]},"floorPath":[{"lines":[{"endPointOne":{"x":662.5,"y":82.5},"endPointTwo":{"x":822.5,"y":82.5}},{"endPointOne":{"x":102.5,"y":82.5},"endPointTwo":{"x":662.5,"y":82.5}},{"endPointOne":{"x":102.5,"y":82.5},"endPointTwo":{"x":102.5,"y":222.5}},{"endPointOne":{"x":102.5,"y":222.5},"endPointTwo":{"x":102.5,"y":362.5}},{"endPointOne":{"x":102.5,"y":362.5},"endPointTwo":{"x":202.5,"y":362.5}},{"endPointOne":{"x":102.5,"y":222.5},"endPointTwo":{"x":342.5,"y":222.5}},{"endPointOne":{"x":342.5,"y":222.5},"endPointTwo":{"x":662.5,"y":222.5}},{"endPointOne":{"x":662.5,"y":222.5},"endPointTwo":{"x":912.5,"y":222.5}},{"endPointOne":{"x":342.5,"y":362.5},"endPointTwo":{"x":342.5,"y":492.5}},{"endPointOne":{"x":342.5,"y":222.5},"endPointTwo":{"x":342.5,"y":362.5}},{"endPointOne":{"x":662.5,"y":82.5},"endPointTwo":{"x":662.5,"y":222.5}},{"endPointOne":{"x":912.5,"y":152.5},"endPointTwo":{"x":912.5,"y":222.5}},{"endPointOne":{"x":1002.5,"y":152.5},"endPointTwo":{"x":1002.5,"y":222.5}},{"endPointOne":{"x":1072.5,"y":152.5},"endPointTwo":{"x":1072.5,"y":222.5}},{"endPointOne":{"x":1002.5,"y":152.5},"endPointTwo":{"x":912.5,"y":152.5}},{"endPointOne":{"x":1072.5,"y":152.5},"endPointTwo":{"x":1002.5,"y":152.5}},{"endPointOne":{"x":1002.5,"y":222.5},"endPointTwo":{"x":912.5,"y":222.5}},{"endPointOne":{"x":512.5,"y":362.5},"endPointTwo":{"x":342.5,"y":362.5}}],"matrix":[[{"length":0,"proIndex":0},{"length":140,"proIndex":0},{"length":280,"proIndex":1},{"length":380,"proIndex":2},{"length":380,"proIndex":1},{"length":520,"proIndex":4},{"length":650,"proIndex":5},{"length":690,"proIndex":5},{"length":560,"proIndex":0},{"length":700,"proIndex":8},{"length":720,"proIndex":8},{"length":1020,"proIndex":12},{"length":950,"proIndex":9},{"length":1110,"proIndex":11},{"length":1040,"proIndex":12},{"length":1180,"proIndex":13},{"length":1250,"proIndex":15}],[{"length":140,"proIndex":1},{"length":0,"proIndex":1},{"length":140,"proIndex":1},{"length":240,"proIndex":2},{"length":240,"proIndex":1},{"length":380,"proIndex":4},{"length":510,"proIndex":5},{"length":550,"proIndex":5},{"length":700,"proIndex":0},{"length":560,"proIndex":4},{"length":860,"proIndex":8},{"length":880,"proIndex":12},{"length":810,"proIndex":9},{"length":970,"proIndex":11},{"length":900,"proIndex":12},{"length":1040,"proIndex":13},{"length":1110,"proIndex":15}],[{"length":280,"proIndex":1},{"length":140,"proIndex":2},{"length":0,"proIndex":2},{"length":100,"proIndex":2},{"length":380,"proIndex":1},{"length":520,"proIndex":4},{"length":650,"proIndex":5},{"length":690,"proIndex":5},{"length":840,"proIndex":0},{"length":700,"proIndex":4},{"length":1000,"proIndex":8},{"length":1020,"proIndex":12},{"length":950,"proIndex":9},{"length":1110,"proIndex":11},{"length":1040,"proIndex":12},{"length":1180,"proIndex":13},{"length":1250,"proIndex":15}],[{"length":380,"proIndex":1},{"length":240,"proIndex":2},{"length":100,"proIndex":3},{"length":0,"proIndex":3},{"length":480,"proIndex":1},{"length":620,"proIndex":4},{"length":750,"proIndex":5},{"length":790,"proIndex":5},{"length":940,"proIndex":0},{"length":800,"proIndex":4},{"length":1100,"proIndex":8},{"length":1120,"proIndex":12},{"length":1050,"proIndex":9},{"length":1210,"proIndex":11},{"length":1140,"proIndex":12},{"length":1280,"proIndex":13},{"length":1350,"proIndex":15}],[{"length":380,"proIndex":1},{"length":240,"proIndex":4},{"length":380,"proIndex":1},{"length":480,"proIndex":2},{"length":0,"proIndex":4},{"length":140,"proIndex":4},{"length":270,"proIndex":5},{"length":310,"proIndex":5},{"length":460,"proIndex":9},{"length":320,"proIndex":4},{"length":620,"proIndex":8},{"length":640,"proIndex":12},{"length":570,"proIndex":9},{"length":730,"proIndex":11},{"length":660,"proIndex":12},{"length":800,"proIndex":13},{"length":870,"proIndex":15}],[{"length":520,"proIndex":1},{"length":380,"proIndex":4},{"length":520,"proIndex":1},{"length":620,"proIndex":2},{"length":140,"proIndex":5},{"length":0,"proIndex":5},{"length":130,"proIndex":5},{"length":170,"proIndex":5},{"length":600,"proIndex":9},{"length":460,"proIndex":4},{"length":760,"proIndex":8},{"length":780,"proIndex":12},{"length":710,"proIndex":9},{"length":870,"proIndex":11},{"length":800,"proIndex":12},{"length":940,"proIndex":13},{"length":1010,"proIndex":15}],[{"length":650,"proIndex":1},{"length":510,"proIndex":4},{"length":650,"proIndex":1},{"length":750,"proIndex":2},{"length":270,"proIndex":5},{"length":130,"proIndex":6},{"length":0,"proIndex":6},{"length":300,"proIndex":5},{"length":730,"proIndex":9},{"length":590,"proIndex":4},{"length":890,"proIndex":8},{"length":910,"proIndex":12},{"length":840,"proIndex":9},{"length":1000,"proIndex":11},{"length":930,"proIndex":12},{"length":1070,"proIndex":13},{"length":1140,"proIndex":15}],[{"length":690,"proIndex":1},{"length":550,"proIndex":4},{"length":690,"proIndex":1},{"length":790,"proIndex":2},{"length":310,"proIndex":5},{"length":170,"proIndex":7},{"length":300,"proIndex":5},{"length":0,"proIndex":7},{"length":770,"proIndex":9},{"length":630,"proIndex":4},{"length":930,"proIndex":8},{"length":950,"proIndex":12},{"length":880,"proIndex":9},{"length":1040,"proIndex":11},{"length":970,"proIndex":12},{"length":1110,"proIndex":13},{"length":1180,"proIndex":15}],[{"length":560,"proIndex":8},{"length":700,"proIndex":0},{"length":840,"proIndex":1},{"length":940,"proIndex":2},{"length":460,"proIndex":9},{"length":600,"proIndex":4},{"length":730,"proIndex":5},{"length":770,"proIndex":5},{"length":0,"proIndex":8},{"length":140,"proIndex":8},{"length":160,"proIndex":8},{"length":460,"proIndex":12},{"length":390,"proIndex":9},{"length":550,"proIndex":11},{"length":480,"proIndex":12},{"length":620,"proIndex":13},{"length":690,"proIndex":15}],[{"length":700,"proIndex":8},{"length":560,"proIndex":4},{"length":700,"proIndex":1},{"length":800,"proIndex":2},{"length":320,"proIndex":9},{"length":460,"proIndex":4},{"length":590,"proIndex":5},{"length":630,"proIndex":5},{"length":140,"proIndex":9},{"length":0,"proIndex":9},{"length":300,"proIndex":8},{"length":320,"proIndex":12},{"length":250,"proIndex":9},{"length":410,"proIndex":11},{"length":340,"proIndex":12},{"length":480,"proIndex":13},{"length":550,"proIndex":15}],[{"length":720,"proIndex":8},{"length":860,"proIndex":0},{"length":1000,"proIndex":1},{"length":1100,"proIndex":2},{"length":620,"proIndex":9},{"length":760,"proIndex":4},{"length":890,"proIndex":5},{"length":930,"proIndex":5},{"length":160,"proIndex":10},{"length":300,"proIndex":8},{"length":0,"proIndex":10},{"length":620,"proIndex":12},{"length":550,"proIndex":9},{"length":710,"proIndex":11},{"length":640,"proIndex":12},{"length":780,"proIndex":13},{"length":850,"proIndex":15}],[{"length":1020,"proIndex":8},{"length":880,"proIndex":4},{"length":1020,"proIndex":1},{"length":1120,"proIndex":2},{"length":640,"proIndex":9},{"length":780,"proIndex":4},{"length":910,"proIndex":5},{"length":950,"proIndex":5},{"length":460,"proIndex":9},{"length":320,"proIndex":12},{"length":620,"proIndex":8},{"length":0,"proIndex":11},{"length":70,"proIndex":11},{"length":90,"proIndex":11},{"length":160,"proIndex":12},{"length":160,"proIndex":13},{"length":230,"proIndex":15}],[{"length":950,"proIndex":1},{"length":810,"proIndex":4},{"length":950,"proIndex":1},{"length":1050,"proIndex":2},{"length":570,"proIndex":9},{"length":710,"proIndex":4},{"length":840,"proIndex":5},{"length":880,"proIndex":5},{"length":390,"proIndex":9},{"length":250,"proIndex":12},{"length":550,"proIndex":8},{"length":70,"proIndex":12},{"length":0,"proIndex":12},{"length":160,"proIndex":11},{"length":90,"proIndex":12},{"length":230,"proIndex":13},{"length":300,"proIndex":15}],[{"length":1110,"proIndex":1},{"length":970,"proIndex":4},{"length":1110,"proIndex":1},{"length":1210,"proIndex":2},{"length":730,"proIndex":9},{"length":870,"proIndex":4},{"length":1000,"proIndex":5},{"length":1040,"proIndex":5},{"length":550,"proIndex":9},{"length":410,"proIndex":12},{"length":710,"proIndex":8},{"length":90,"proIndex":13},{"length":160,"proIndex":11},{"length":0,"proIndex":13},{"length":70,"proIndex":13},{"length":70,"proIndex":13},{"length":140,"proIndex":15}],[{"length":1040,"proIndex":8},{"length":900,"proIndex":4},{"length":1040,"proIndex":1},{"length":1140,"proIndex":2},{"length":660,"proIndex":9},{"length":800,"proIndex":4},{"length":930,"proIndex":5},{"length":970,"proIndex":5},{"length":480,"proIndex":9},{"length":340,"proIndex":12},{"length":640,"proIndex":8},{"length":160,"proIndex":12},{"length":90,"proIndex":14},{"length":70,"proIndex":14},{"length":0,"proIndex":14},{"length":140,"proIndex":13},{"length":210,"proIndex":15}],[{"length":1180,"proIndex":8},{"length":1040,"proIndex":4},{"length":1180,"proIndex":1},{"length":1280,"proIndex":2},{"length":800,"proIndex":9},{"length":940,"proIndex":4},{"length":1070,"proIndex":5},{"length":1110,"proIndex":5},{"length":620,"proIndex":9},{"length":480,"proIndex":12},{"length":780,"proIndex":8},{"length":160,"proIndex":13},{"length":230,"proIndex":11},{"length":70,"proIndex":15},{"length":140,"proIndex":13},{"length":0,"proIndex":15},{"length":70,"proIndex":15}],[{"length":1250,"proIndex":8},{"length":1110,"proIndex":4},{"length":1250,"proIndex":1},{"length":1350,"proIndex":2},{"length":870,"proIndex":9},{"length":1010,"proIndex":4},{"length":1140,"proIndex":5},{"length":1180,"proIndex":5},{"length":690,"proIndex":9},{"length":550,"proIndex":12},{"length":850,"proIndex":8},{"length":230,"proIndex":13},{"length":300,"proIndex":11},{"length":140,"proIndex":15},{"length":210,"proIndex":13},{"length":70,"proIndex":16},{"length":0,"proIndex":16}]],"positions":[{"x":102.5,"y":82.5},{"x":102.5,"y":222.5},{"x":102.5,"y":362.5},{"x":202.5,"y":362.5},{"x":342.5,"y":222.5},{"x":342.5,"y":362.5},{"x":342.5,"y":492.5},{"x":512.5,"y":362.5},{"x":662.5,"y":82.5},{"x":662.5,"y":222.5},{"x":822.5,"y":82.5},{"x":912.5,"y":152.5},{"x":912.5,"y":222.5},{"x":1002.5,"y":152.5},{"x":1002.5,"y":222.5},{"x":1072.5,"y":152.5},{"x":1072.5,"y":222.5}]},{"lines":[{"endPointOne":{"x":108.85,"y":344.17},"endPointTwo":{"x":108.85,"y":190.17}},{"endPointOne":{"x":108.85,"y":190.17},"endPointTwo":{"x":108.85,"y":18.1}},{"endPointOne":{"x":18.84,"y":344.17},"endPointTwo":{"x":63.85,"y":344.17}},{"endPointOne":{"x":63.85,"y":344.17},"endPointTwo":{"x":108.85,"y":344.17}},{"endPointOne":{"x":108.85,"y":190.17},"endPointTwo":{"x":246.16,"y":190.17}},{"endPointOne":{"x":733.13,"y":125.17},"endPointTwo":{"x":496.13,"y":125.17}},{"endPointOne":{"x":733.13,"y":190.17},"endPointTwo":{"x":496.13,"y":190.17}},{"endPointOne":{"x":733.13,"y":255.17},"endPointTwo":{"x":496.13,"y":255.17}},{"endPointOne":{"x":496.13,"y":125.17},"endPointTwo":{"x":246.13,"y":125.17}},{"endPointOne":{"x":496.13,"y":190.17},"endPointTwo":{"x":246.16,"y":190.17}},{"endPointOne":{"x":246.13,"y":255.17},"endPointTwo":{"x":246.16,"y":190.17}},{"endPointOne":{"x":246.16,"y":190.17},"endPointTwo":{"x":246.13,"y":125.17}},{"endPointOne":{"x":733.13,"y":255.17},"endPointTwo":{"x":733.13,"y":190.17}},{"endPointOne":{"x":733.13,"y":190.17},"endPointTwo":{"x":733.13,"y":125.17}},{"endPointOne":{"x":496.13,"y":255.17},"endPointTwo":{"x":496.13,"y":190.17}},{"endPointOne":{"x":496.13,"y":190.17},"endPointTwo":{"x":496.13,"y":125.17}},{"endPointOne":{"x":496.13,"y":255.17},"endPointTwo":{"x":246.13,"y":255.17}}],"matrix":[[{"length":0,"proIndex":0},{"length":45.01,"proIndex":0},{"length":416.08,"proIndex":3},{"length":244.01,"proIndex":4},{"length":90.01,"proIndex":1},{"length":446.32,"proIndex":7},{"length":446.32,"proIndex":7},{"length":381.32,"proIndex":3},{"length":696.29,"proIndex":9},{"length":631.29,"proIndex":7},{"length":696.29,"proIndex":9},{"length":933.29,"proIndex":8},{"length":868.29,"proIndex":9},{"length":933.29,"proIndex":10}],[{"length":45.01,"proIndex":1},{"length":0,"proIndex":1},{"length":371.07,"proIndex":3},{"length":199,"proIndex":4},{"length":45,"proIndex":1},{"length":401.31,"proIndex":7},{"length":401.31,"proIndex":7},{"length":336.31,"proIndex":3},{"length":651.28,"proIndex":9},{"length":586.28,"proIndex":7},{"length":651.28,"proIndex":9},{"length":888.28,"proIndex":8},{"length":823.28,"proIndex":9},{"length":888.28,"proIndex":10}],[{"length":416.08,"proIndex":1},{"length":371.07,"proIndex":4},{"length":0,"proIndex":2},{"length":172.07,"proIndex":2},{"length":326.07,"proIndex":3},{"length":374.38,"proIndex":7},{"length":374.38,"proIndex":7},{"length":309.38,"proIndex":3},{"length":624.35,"proIndex":9},{"length":559.35,"proIndex":7},{"length":624.35,"proIndex":9},{"length":861.35,"proIndex":8},{"length":796.35,"proIndex":9},{"length":861.35,"proIndex":10}],[{"length":244.01,"proIndex":1},{"length":199,"proIndex":4},{"length":172.07,"proIndex":3},{"length":0,"proIndex":3},{"length":154,"proIndex":3},{"length":202.31,"proIndex":7},{"length":202.31,"proIndex":7},{"length":137.31,"proIndex":3},{"length":452.28,"proIndex":9},{"length":387.28,"proIndex":7},{"length":452.28,"proIndex":9},{"length":689.28,"proIndex":8},{"length":624.28,"proIndex":9},{"length":689.28,"proIndex":10}],[{"length":90.01,"proIndex":1},{"length":45,"proIndex":4},{"length":326.07,"proIndex":3},{"length":154,"proIndex":4},{"length":0,"proIndex":4},{"length":356.31,"proIndex":7},{"length":356.31,"proIndex":7},{"length":291.31,"proIndex":3},{"length":606.28,"proIndex":9},{"length":541.28,"proIndex":7},{"length":606.28,"proIndex":9},{"length":843.28,"proIndex":8},{"length":778.28,"proIndex":9},{"length":843.28,"proIndex":10}],[{"length":446.32,"proIndex":1},{"length":401.31,"proIndex":4},{"length":374.38,"proIndex":3},{"length":202.31,"proIndex":7},{"length":356.31,"proIndex":3},{"length":0,"proIndex":5},{"length":130,"proIndex":7},{"length":65,"proIndex":5},{"length":250,"proIndex":5},{"length":314.97,"proIndex":7},{"length":379.97,"proIndex":9},{"length":487,"proIndex":8},{"length":551.97,"proIndex":9},{"length":616.97,"proIndex":10}],[{"length":446.32,"proIndex":1},{"length":401.31,"proIndex":4},{"length":374.38,"proIndex":3},{"length":202.31,"proIndex":7},{"length":356.31,"proIndex":3},{"length":130,"proIndex":7},{"length":0,"proIndex":6},{"length":65,"proIndex":6},{"length":379.97,"proIndex":9},{"length":314.97,"proIndex":7},{"length":250,"proIndex":6},{"length":616.97,"proIndex":8},{"length":551.97,"proIndex":9},{"length":487,"proIndex":10}],[{"length":381.32,"proIndex":1},{"length":336.31,"proIndex":4},{"length":309.38,"proIndex":3},{"length":137.31,"proIndex":7},{"length":291.31,"proIndex":3},{"length":65,"proIndex":7},{"length":65,"proIndex":7},{"length":0,"proIndex":7},{"length":314.97,"proIndex":9},{"length":249.97,"proIndex":7},{"length":314.97,"proIndex":9},{"length":551.97,"proIndex":8},{"length":486.97,"proIndex":9},{"length":551.97,"proIndex":10}],[{"length":696.29,"proIndex":1},{"length":651.28,"proIndex":4},{"length":624.35,"proIndex":3},{"length":452.28,"proIndex":7},{"length":606.28,"proIndex":3},{"length":250,"proIndex":8},{"length":379.97,"proIndex":7},{"length":314.97,"proIndex":9},{"length":0,"proIndex":8},{"length":65,"proIndex":8},{"length":130,"proIndex":9},{"length":237,"proIndex":8},{"length":302,"proIndex":9},{"length":367,"proIndex":10}],[{"length":631.29,"proIndex":1},{"length":586.28,"proIndex":4},{"length":559.35,"proIndex":3},{"length":387.28,"proIndex":7},{"length":541.28,"proIndex":3},{"length":314.97,"proIndex":7},{"length":314.97,"proIndex":7},{"length":249.97,"proIndex":9},{"length":65,"proIndex":9},{"length":0,"proIndex":9},{"length":65,"proIndex":9},{"length":302,"proIndex":8},{"length":237,"proIndex":9},{"length":302,"proIndex":10}],[{"length":696.29,"proIndex":1},{"length":651.28,"proIndex":4},{"length":624.35,"proIndex":3},{"length":452.28,"proIndex":7},{"length":606.28,"proIndex":3},{"length":379.97,"proIndex":7},{"length":250,"proIndex":10},{"length":314.97,"proIndex":9},{"length":130,"proIndex":9},{"length":65,"proIndex":10},{"length":0,"proIndex":10},{"length":367,"proIndex":8},{"length":302,"proIndex":9},{"length":237,"proIndex":10}],[{"length":933.29,"proIndex":1},{"length":888.28,"proIndex":4},{"length":861.35,"proIndex":3},{"length":689.28,"proIndex":7},{"length":843.28,"proIndex":3},{"length":487,"proIndex":8},{"length":616.97,"proIndex":7},{"length":551.97,"proIndex":9},{"length":237,"proIndex":11},{"length":302,"proIndex":8},{"length":367,"proIndex":9},{"length":0,"proIndex":11},{"length":65,"proIndex":11},{"length":130,"proIndex":12}],[{"length":868.29,"proIndex":1},{"length":823.28,"proIndex":4},{"length":796.35,"proIndex":3},{"length":624.28,"proIndex":7},{"length":778.28,"proIndex":3},{"length":551.97,"proIndex":7},{"length":551.97,"proIndex":7},{"length":486.97,"proIndex":9},{"length":302,"proIndex":9},{"length":237,"proIndex":12},{"length":302,"proIndex":9},{"length":65,"proIndex":12},{"length":0,"proIndex":12},{"length":65,"proIndex":12}],[{"length":933.29,"proIndex":1},{"length":888.28,"proIndex":4},{"length":861.35,"proIndex":3},{"length":689.28,"proIndex":7},{"length":843.28,"proIndex":3},{"length":616.97,"proIndex":7},{"length":487,"proIndex":10},{"length":551.97,"proIndex":9},{"length":367,"proIndex":9},{"length":302,"proIndex":10},{"length":237,"proIndex":13},{"length":130,"proIndex":12},{"length":65,"proIndex":13},{"length":0,"proIndex":13}]],"positions":[{"x":18.84,"y":344.17},{"x":63.85,"y":344.17},{"x":108.85,"y":18.1},{"x":108.85,"y":190.17},{"x":108.85,"y":344.17},{"x":246.13,"y":125.17},{"x":246.13,"y":255.17},{"x":246.16,"y":190.17},{"x":496.13,"y":125.17},{"x":496.13,"y":190.17},{"x":496.13,"y":255.17},{"x":733.13,"y":125.17},{"x":733.13,"y":190.17},{"x":733.13,"y":255.17}]}],"footPath":{"matrix":[[{"length":0,"proIndex":0},{"length":309,"proIndex":5},{"length":740.2000069230766,"proIndex":3},{"length":680.2000069230766,"proIndex":4},{"length":10,"proIndex":0},{"length":249,"proIndex":4}],[{"length":309,"proIndex":4},{"length":0,"proIndex":1},{"length":484.8046182597558,"proIndex":1},{"length":544.8046182597558,"proIndex":2},{"length":299,"proIndex":5},{"length":60,"proIndex":1}],[{"length":740.2000069230766,"proIndex":4},{"length":484.8046182597558,"proIndex":2},{"length":0,"proIndex":2},{"length":60,"proIndex":2},{"length":730.2000069230766,"proIndex":3},{"length":544.8046182597558,"proIndex":1}],[{"length":680.2000069230766,"proIndex":4},{"length":544.8046182597558,"proIndex":2},{"length":60,"proIndex":3},{"length":0,"proIndex":3},{"length":670.2000069230766,"proIndex":3},{"length":604.8046182597558,"proIndex":1}],[{"length":10,"proIndex":4},{"length":299,"proIndex":5},{"length":730.2000069230766,"proIndex":3},{"length":670.2000069230766,"proIndex":4},{"length":0,"proIndex":4},{"length":239,"proIndex":4}],[{"length":249,"proIndex":4},{"length":60,"proIndex":5},{"length":544.8046182597558,"proIndex":1},{"length":604.8046182597558,"proIndex":2},{"length":239,"proIndex":5},{"length":0,"proIndex":5}]],"positions":[{"floorIndex":0,"pos":{"x":262,"y":313},"unitId":"14835160966201285","unitTypeId":2},{"floorIndex":0,"pos":{"x":637,"y":322},"unitId":"14835160966201282","unitTypeId":9},{"floorIndex":0,"pos":{"x":828,"y":132},"unitId":"14835160966201281","unitTypeId":9},{"floorIndex":1,"pos":{"x":20,"y":345},"unitId":"14818664733538404","unitTypeId":9},{"floorIndex":1,"pos":{"x":447,"y":241},"unitId":"14818664733538412","unitTypeId":2},{"floorIndex":1,"pos":{"x":515,"y":142},"unitId":"14818664733538411","unitTypeId":9}]}};

    console.log(RegionPath.floorPath)

    var pathSearch = new PathSearch()

    console.log(pathSearch)
});