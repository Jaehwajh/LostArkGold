const normalBrelshaza = {
    itemLevel: [1490,1500,1520],
    gate: [1,2,3,4],
    gold: [2000,2500,1500,2500],
    chest: [400,600,800,1500]
};

const hardBrelshaza = {
    itemLevel: [1540,1550,1560],
    gate: [1,2,3,4],
    gold: [2500,3000,2000,3000],
    chest: [700,900,1100,1800]
};

const nmBrelGold = normalBrelshaza.gold.reduce((a,b) => a + b);
const hmBrelGold = hardBrelshaza.gold.reduce((a,b) => a + b);
const hm13nm4 = hardBrelshaza.gold.slice(0,3).reduce((a,b) => a + b) + normalBrelshaza.gold[3];
const hm12nm34 = hardBrelshaza.gold.slice(0,2).reduce((a,b) => a + b) + normalBrelshaza.gold.slice(-2).reduce((a,b) => a + b);
const nm13 = normalBrelshaza.gold.slice(0,3).reduce((a,b) => a + b);
const nm12 = normalBrelshaza.gold.slice(0,2).reduce((a,b) => a + b);

const brelGold = {nmBrelGold, hmBrelGold, hm13nm4, hm12nm34, nm13, nm12};


module.exports = {normalBrelshaza, hardBrelshaza, brelGold};
