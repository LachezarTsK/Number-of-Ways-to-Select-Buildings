
class Solution {

    public long numberOfWays(String input) {
        final int groupSize = 3;
        return numberOfWaysWithAnyGroupSize(input, groupSize);
    }

    private long numberOfWaysWithAnyGroupSize(String input, final int groupSize) {
        final char ascii_zero = 48;
        final int inputSize = input.length();
        long[][] groups = new long[groupSize][2];

        for (int i = 0; i < inputSize; i++) {
            final int index = input.charAt(i) - ascii_zero;

            groups[0][index]++;
            for (int j = 1; j < groupSize; j++) {
                groups[j][index] += groups[j - 1][Math.abs(index - 1)];
            }
        }
        return groups[groupSize - 1][0] + groups[groupSize - 1][1];
    }
}
