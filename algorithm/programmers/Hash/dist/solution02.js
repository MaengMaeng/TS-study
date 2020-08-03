"use strict";
function solution2(clothes) {
    var cloth = [], clothCount = [], clothesLength = clothes.length;
    var currentCloth, clothIndex;
    for (var i = 0; i < clothesLength; i++) {
        currentCloth = clothes[i];
        clothIndex = cloth.indexOf(currentCloth[1]);
        if (clothIndex === -1) {
            cloth.push(currentCloth[1]);
            clothCount.push(1);
        }
        else {
            clothCount[clothIndex]++;
        }
    }
    return clothCount.reduce(function (a, c) { return a * (c + 1); }, 1) - 1;
}
