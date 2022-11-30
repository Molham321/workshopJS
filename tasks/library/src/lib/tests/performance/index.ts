/* eslint-disable no-console */

export function avaTime(arr: number[]) {
    const sum = arr.reduce((total, current) => total + current, 0);
    return sum / arr.length;
}

export function faster (MethodeNameA: string, a: number, MethodeNameB: string, b: number) {
    console.log(`${MethodeNameA}: ${a}`);
    console.log(`${MethodeNameB}: ${b}`);
    (a > b) ? console.log(MethodeNameB + " is faster " + b) : console.log(MethodeNameA + " is faster " + a);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function tester(func: any) {
    const timeArr = [];
    for(let i=0; i<1000; i++) {
        timeArr.push(func());
    }
    return timeArr;
}