
/**
 * @param {string} input
 * @return {number}
 */
var numberOfWays = function (input) {
    const groupSize = 3;
    return numberOfWaysWithAnyGroupSize(input, groupSize);
};

/**
 * @param {string} input
 * @param {number} groupSize
 * @return {number}
 */
function numberOfWaysWithAnyGroupSize(input, groupSize) {
    const ascii_zero = 48;
    const inputSize = input.length;
    const groups = Array.from(new Array(groupSize), () => new Array(2).fill(0));

    for (let i = 0; i < inputSize; i++) {
        const index = input.codePointAt(i) - ascii_zero;

        groups[0][index]++;
        for (let j = 1; j < groupSize; j++) {
            groups[j][index] += groups[j - 1][Math.abs(index - 1)];
        }
    }
    return groups[groupSize - 1][0] + groups[groupSize - 1][1];
}
