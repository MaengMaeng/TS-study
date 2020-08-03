function solution2(clothes: string[][]): number{
    let cloth: string[] = [], clothCount: number[] = [], clothesLength: number = clothes.length;

    let currentCloth: string[], clothIndex: number;
    for(let i = 0; i < clothesLength; i++){
        currentCloth = clothes[i];
        clothIndex = cloth.indexOf(currentCloth[1]);

        if(clothIndex === -1){
            cloth.push(currentCloth[1]);
            clothCount.push(1);
        }
        else{
            clothCount[clothIndex]++;
        }
    }

    return clothCount.reduce((a, c) => a * (c + 1), 1) - 1;
}