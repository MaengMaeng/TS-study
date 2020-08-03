"use strict";
function solution1(participant, completion) {
    var answer = participant.slice();
    var comp = completion.slice();
    answer.sort();
    comp.sort();
    var a, b;
    while (answer.length > 0) {
        if ((a = answer.pop()) !== (b = comp.pop())) {
            return a;
        }
    }
    return answer.pop();
}
