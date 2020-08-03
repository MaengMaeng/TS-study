function solution1(participant: string[], completion: string[]): string{
    let answer: string[] = participant.slice();
    let comp: string[] = completion.slice();

    answer.sort();
    comp.sort();

    let a: string, b: string;
    while(answer.length > 0){
        if((a = answer.pop()!) !== (b = comp.pop()!)){
            return a;
        }
    }

    return answer.pop()!;
}