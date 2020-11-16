const isPerfect = (num) => {
    if (num <= 0) {
        return false;
    }
let result = 0;
    for (let i = 0; i < num; i += 1) {
        if (num % i === 0) {
            result += i;
        }
    }
    if (result === num) {
        return true
    }

    return false;
};

export default isPerfect;