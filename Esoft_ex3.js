function isValid(s) {
    let stack = [];
    let map = new Map();
    map.set('(', ')');
    map.set('[', ']');
    map.set('{', '}');

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (map.has(char)) {
            stack.push(char);
        } else {
            let last = stack.pop();
            if (map.get(last) != char) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

console.log(isValid("()([]){(){}[]}")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(])")); // false
console.log(isValid("([)]")); // false
console.log(isValid("{[({[]})]}")); // true
