
#include <string>
#include <vector>
using namespace std;

class Solution {
    
public:
    long long numberOfWays(string input) {
        const size_t groupSize = 3;
        return numberOfWaysWithAnyGroupSize(input, groupSize);
    }

private:
    long long numberOfWaysWithAnyGroupSize(const string& input, const size_t groupSize) {
        const size_t inputSize = input.length();
        vector<vector<long long>> groups(groupSize, vector<long long>(2));

        for (int i = 0; i < inputSize; i++) {
            const int index = input[i] - '0';

            groups[0][index]++;
            for (int j = 1; j < groupSize; j++) {
                groups[j][index] += groups[j - 1][abs(index - 1)];
            }
        }
        return groups[groupSize - 1][0] + groups[groupSize - 1][1];
    }
};
