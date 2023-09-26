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

module.exports = {normalBrelshaza, hardBrelshaza};