//https://www.codewars.com/kata/581bc0629ad9ff9873000316


function calculate(expression: string): number | string {
    const tokens = tokenize(expression);

    console.log(tokens);
    if (tokens.length === 0) {
        return 'Некорретное выражение';
    }

    let result = evaluate(tokens);

    if (result === Infinity) {
        return 'Деление на ноль';
    }

    return result;
}

function tokenize(expression: string): (number | string)[] {
    const tokens: (number | string)[] = [];
    let currentToken = '';

    for (let i = 0; i < expression.length; i++) {
        const char = expression[i];

        if (/[.0-9]/.test(char)) {
            currentToken += char;
        } else if (/[+\-*$]/.test(char)) {
            if (currentToken !== '') {
                tokens.push(parseFloat(currentToken));
                currentToken = '';
            }
            tokens.push(char);
        } else {
            return [];
        }
    }

    if (currentToken !== '') {
        tokens.push(parseFloat(currentToken));
    }

    return tokens;
}

function evaluate(tokens: (number | string)[]): number {

    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] === '$') {
            const leftOperand = tokens[i - 1] as number;
            const rightOperand = tokens[i + 1] as number;
            const result = leftOperand / rightOperand;
            if (!isFinite(result)) {
                return Infinity;
            }
            tokens.splice(i - 1, 3, result);
            i--;
        }
    }

    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] === '*') {
            const leftOperand = tokens[i - 1] as number;
            const rightOperand = tokens[i + 1] as number;
            const result = leftOperand * rightOperand;
            tokens.splice(i - 1, 3, result);
            i--;
        }
    }

    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] === '-') {
            const leftOperand = tokens[i - 1] as number;
            const rightOperand = tokens[i + 1] as number;
            const result = leftOperand - rightOperand;
            tokens.splice(i - 1, 3, result);
            i--;
        }
    }

    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] === '+') {
            const leftOperand = tokens[i - 1] as number;
            const rightOperand = tokens[i + 1] as number;
            const result = leftOperand + rightOperand;
            tokens.splice(i - 1, 3, result);
            i--;
        }
    }

    return tokens[0] as number;
}

(window as any).calculate = calculate;

export {};