function solution(genres: string[], plays: string[]): number[] {
    let answer: number[] = [];
    let obj1:any = {}, obj2:any = {};

    for(let i = 0; i < genres.length; i++){
        obj1[genres[i]] = (obj1[genres[i]] || 0) + plays[i];

        obj2[genres[i]] = (obj2[genres[i]] || []);
        obj2[genres[i]].push({'num':i, 'plays':plays[i]});
    }

    let arr = Object.keys(obj1).map((key) => {return {"genre":key, "plays":obj1[key]}});
    arr.sort((a, b) => {
        return a["plays"] < b["plays"] ? 1 : a["plays"] > b["plays"] ? -1 : 0;
    })

    for(let i = 0; i < arr.length; i++){
        obj2[arr[i]["genre"]].sort((a:any, b:any) => {
            return a["plays"] < b["plays"] ? 1 : a["plays"] > b["plays"] ? -1 : 0;
        })

        for(let j = 0; j < Math.min(obj2[arr[i]["genre"]].length, 2); j++){
            answer.push(obj2[arr[i]["genre"]][j]["num"]);
        }
    }

    return answer;
}