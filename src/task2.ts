//https://www.codewars.com/kata/585d7d5adb20cf33cb000235


function findUniq(arr: number[]): number {
    arr.sort((a, b) => a - b);

    if (arr[0] !== arr[1]) {
        return arr[0];
    }

    return arr[arr.length - 1];
}

console.log(findUniq([1, 1, 1, 2, 1, 1])); // 2
console.log(findUniq([0, 0, 0.55, 0, 0])); // 0.55

(window as any).findUnig = findUniq;

export {};