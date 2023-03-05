//https://www.codewars.com/kata/541c8630095125aba6000c00

function digitalRoot(n: number): number {
    let digits: string[] = n.toString().split('');
    let sum: number = 0;

    for (let i = 0; i < digits.length; i++) {
        sum += parseInt(digits[i]);
    }

    if (sum >= 10) {
        return digitalRoot(sum);
    } else {
        return sum;
    }
}

console.log(digitalRoot(16)); // 7
console.log(digitalRoot(942)); // 6
console.log(digitalRoot(132189)); // 6
console.log(digitalRoot(493193)); // 2

(window as any).digitalRoot = digitalRoot;

export {};
