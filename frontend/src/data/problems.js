export const PROBLEMS = {
  "two-sum": {
    id: "two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    category: "Array • Hash Table",
    description: {
      text: "Given an array of integers nums and an integer target, return indices of the two numbers in the array such that they add up to target.",
      notes: [
        "You may assume that each input would have exactly one solution, and you may not use the same element twice.",
        "You can return the answer in any order.",
      ],
    },
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
      },
      {
        input: "nums = [3,3], target = 6",
        output: "[0,1]",
      },
    ],
    constraints: [
      "2 ≤ nums.length ≤ 10⁴",
      "-10⁹ ≤ nums[i] ≤ 10⁹",
      "-10⁹ ≤ target ≤ 10⁹",
      "Only one valid answer exists",
    ],
    starterCode: {
      javascript: `function twoSum(nums, target) {
  // Write your solution here
  
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Expected: [1, 2]
console.log(twoSum([3, 3], 6)); // Expected: [0, 1]`,
      python: `def twoSum(nums, target):
    # Write your solution here
    pass

# Test cases
print(twoSum([2, 7, 11, 15], 9))  # Expected: [0, 1]
print(twoSum([3, 2, 4], 6))  # Expected: [1, 2]
print(twoSum([3, 3], 6))  # Expected: [0, 1]`,
      java: `import java.util.*;

class Solution {
    public static int[] twoSum(int[] nums, int target) {
        // Write your solution here
        
        return new int[0];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(twoSum(new int[]{2, 7, 11, 15}, 9))); // Expected: [0, 1]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 2, 4}, 6))); // Expected: [1, 2]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 3}, 6))); // Expected: [0, 1]
    }
}`,
cpp: `#include <bits/stdc++.h>
using namespace std;

vector<int> twoSum(vector<int>& nums, int target) {
    // Write your solution here
    
}

int main() {
    vector<int> a = {2, 7, 11, 15};
    vector<int> b = {3, 2, 4};
    vector<int> c = {3, 3};

    for (int x : twoSum(a, 9))
        cout << x << " ";
    cout << endl;

    for (int x : twoSum(b, 6))
        cout << x << " ";
    cout << endl;

    for (int x : twoSum(c, 6))
        cout << x << " ";
    cout << endl;
}`,
    },
    expectedOutput: {
      javascript: "[0,1]\n[1,2]\n[0,1]",
      python: "[0, 1]\n[1, 2]\n[0, 1]",
      java: "[0, 1]\n[1, 2]\n[0, 1]",
      cpp: "0 1\n1 2\n0 1",
    },
  },



  "move-zeroes": {
  id: "move-zeroes",
  title: "Move Zeroes",
  difficulty: "Easy",
  category: "Array • Two Pointers",
  description: {
    text: "Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.",
    notes: [
      "You must modify the array in-place.",
      "The relative order of non-zero elements should remain unchanged.",
    ],
  },
  examples: [
    {
      input: "nums = [0,1,0,3,12]",
      output: "[1,3,12,0,0]",
      explanation: "All non-zero elements remain in their original order and the zeroes are moved to the end.",
    },
    {
      input: "nums = [0]",
      output: "[0]",
    },
    {
      input: "nums = [1,0,2,0,3]",
      output: "[1,2,3,0,0]",
    },
  ],
  constraints: [
    "1 ≤ nums.length ≤ 10⁴",
    "-2³¹ ≤ nums[i] ≤ 2³¹ - 1",
  ],
  starterCode: {
    javascript: `function moveZeroes(nums) {
  // Write your solution here
  
}

// Test cases
console.log(moveZeroes([0, 1, 0, 3, 12])); // Expected: [1, 3, 12, 0, 0]
console.log(moveZeroes([0])); // Expected: [0]
console.log(moveZeroes([1, 0, 2, 0, 3])); // Expected: [1, 2, 3, 0, 0]`,

    python: `def moveZeroes(nums):
    # Write your solution here
    pass

# Test cases
print(moveZeroes([0, 1, 0, 3, 12]))  # Expected: [1, 3, 12, 0, 0]
print(moveZeroes([0]))  # Expected: [0]
print(moveZeroes([1, 0, 2, 0, 3]))  # Expected: [1, 2, 3, 0, 0]`,

    java: `import java.util.*;

class Solution {
    public static void moveZeroes(int[] nums) {
        // Write your solution here
    }

    public static void main(String[] args) {
        int[] a = {0, 1, 0, 3, 12};
        int[] b = {0};
        int[] c = {1, 0, 2, 0, 3};

        moveZeroes(a);
        moveZeroes(b);
        moveZeroes(c);

        System.out.println(Arrays.toString(a));
        System.out.println(Arrays.toString(b));
        System.out.println(Arrays.toString(c));
    }
}`,

    cpp: `#include <bits/stdc++.h>
using namespace std;

void moveZeroes(vector<int>& nums) {
    // Write your solution here
}

int main() {
    vector<int> a = {0, 1, 0, 3, 12};
    vector<int> b = {0};
    vector<int> c = {1, 0, 2, 0, 3};

    moveZeroes(a);
    moveZeroes(b);
    moveZeroes(c);

    for (int x : a)
        cout << x << " ";
    cout << endl;

    for (int x : b)
        cout << x << " ";
    cout << endl;

    for (int x : c)
        cout << x << " ";
    cout << endl;

    return 0;
}`,
  },

  expectedOutput: {
    javascript: "[1,3,12,0,0]\n[0]\n[1,2,3,0,0]",
    python: "[1, 3, 12, 0, 0]\n[0]\n[1, 2, 3, 0, 0]",
    java: "[1, 3, 12, 0, 0]\n[0]\n[1, 2, 3, 0, 0]",
    cpp: "1 3 12 0 0\n0\n1 2 3 0 0",
  },
},




"move-zeroes": {
  id: "move-zeroes",
  title: "Move Zeroes",
  difficulty: "Easy",
  category: "Array • Two Pointers",
  description: {
    text: "Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.",
    notes: [
      "You must modify the array in-place.",
      "The relative order of non-zero elements should remain unchanged.",
    ],
  },
  examples: [
    {
      input: "nums = [0,1,0,3,12]",
      output: "[1,3,12,0,0]",
      explanation: "All non-zero elements remain in their original order and the zeroes are moved to the end.",
    },
    {
      input: "nums = [0]",
      output: "[0]",
    },
    {
      input: "nums = [1,0,2,0,3]",
      output: "[1,2,3,0,0]",
    },
  ],
  constraints: [
    "1 ≤ nums.length ≤ 10⁴",
    "-2³¹ ≤ nums[i] ≤ 2³¹ - 1",
  ],
  starterCode: {
    javascript: `function moveZeroes(nums) {
  // Write your solution here
  
}

// Test cases
console.log(moveZeroes([0, 1, 0, 3, 12])); // Expected: [1, 3, 12, 0, 0]
console.log(moveZeroes([0])); // Expected: [0]
console.log(moveZeroes([1, 0, 2, 0, 3])); // Expected: [1, 2, 3, 0, 0]`,

    python: `def moveZeroes(nums):
    # Write your solution here
    pass

# Test cases
print(moveZeroes([0, 1, 0, 3, 12]))  # Expected: [1, 3, 12, 0, 0]
print(moveZeroes([0]))  # Expected: [0]
print(moveZeroes([1, 0, 2, 0, 3]))  # Expected: [1, 2, 3, 0, 0]`,

    java: `import java.util.*;

class Solution {
    public static void moveZeroes(int[] nums) {
        // Write your solution here
    }

    public static void main(String[] args) {
        int[] a = {0, 1, 0, 3, 12};
        int[] b = {0};
        int[] c = {1, 0, 2, 0, 3};

        moveZeroes(a);
        moveZeroes(b);
        moveZeroes(c);

        System.out.println(Arrays.toString(a));
        System.out.println(Arrays.toString(b));
        System.out.println(Arrays.toString(c));
    }
}`,

    cpp: `#include <bits/stdc++.h>
using namespace std;

void moveZeroes(vector<int>& nums) {
    // Write your solution here
}

int main() {
    vector<int> a = {0, 1, 0, 3, 12};
    vector<int> b = {0};
    vector<int> c = {1, 0, 2, 0, 3};

    moveZeroes(a);
    moveZeroes(b);
    moveZeroes(c);

    for (int x : a)
        cout << x << " ";
    cout << endl;

    for (int x : b)
        cout << x << " ";
    cout << endl;

    for (int x : c)
        cout << x << " ";
    cout << endl;

    return 0;
}`,
  },

  expectedOutput: {
    javascript: "[1,3,12,0,0]\n[0]\n[1,2,3,0,0]",
    python: "[1, 3, 12, 0, 0]\n[0]\n[1, 2, 3, 0, 0]",
    java: "[1, 3, 12, 0, 0]\n[0]\n[1, 2, 3, 0, 0]",
    cpp: "1 3 12 0 0\n0\n1 2 3 0 0",
  },
},

"single-number": {
  id: "single-number",
  title: "Single Number",
  difficulty: "Easy",
  category: "Array • Bit Manipulation",
  description: {
    text: "Given a non-empty array of integers nums, every element appears twice except for one. Find and return the element that appears only once.",
    notes: [
      "Every element appears exactly twice except one element.",
      "You must find the element that appears only once.",
      "Your solution should run in O(n) time and use O(1) extra space.",
    ],
  },
  examples: [
    {
      input: "nums = [2,2,1]",
      output: "1",
      explanation: "The number 1 appears only once.",
    },
    {
      input: "nums = [4,1,2,1,2]",
      output: "4",
      explanation: "The number 4 appears only once.",
    },
    {
      input: "nums = [1]",
      output: "1",
      explanation: "The only element appears once.",
    },
  ],
  constraints: [
    "1 ≤ nums.length ≤ 3 × 10⁴",
    "-3 × 10⁴ ≤ nums[i] ≤ 3 × 10⁴",
    "Every element appears twice except for one element.",
  ],
  starterCode: {
    javascript: `function singleNumber(nums) {
  // Write your solution here
  
}

// Test cases
console.log(singleNumber([2, 2, 1])); // Expected: 1
console.log(singleNumber([4, 1, 2, 1, 2])); // Expected: 4
console.log(singleNumber([1])); // Expected: 1`,

    python: `def singleNumber(nums):
    # Write your solution here
    pass

# Test cases
print(singleNumber([2, 2, 1]))  # Expected: 1
print(singleNumber([4, 1, 2, 1, 2]))  # Expected: 4
print(singleNumber([1]))  # Expected: 1`,

    java: `import java.util.*;

class Solution {
    public static int singleNumber(int[] nums) {
        // Write your solution here
        
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(singleNumber(new int[]{2, 2, 1})); // Expected: 1
        System.out.println(singleNumber(new int[]{4, 1, 2, 1, 2})); // Expected: 4
        System.out.println(singleNumber(new int[]{1})); // Expected: 1
    }
}`,

    cpp: `#include <bits/stdc++.h>
using namespace std;

int singleNumber(vector<int>& nums) {
    // Write your solution here
    
    return 0;
}

int main() {
    vector<int> a = {2, 2, 1};
    vector<int> b = {4, 1, 2, 1, 2};
    vector<int> c = {1};

    cout << singleNumber(a) << endl;
    cout << singleNumber(b) << endl;
    cout << singleNumber(c) << endl;

    return 0;
}`,
  },

  expectedOutput: {
    javascript: "1\n4\n1",
    python: "1\n4\n1",
    java: "1\n4\n1",
    cpp: "1\n4\n1",
  },
},



"valid-parentheses": {
  id: "valid-parentheses",
  title: "Valid Parentheses",
  difficulty: "Easy",
  category: "String • Stack",
  description: {
    text: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
    notes: [
      "An opening bracket must be closed by the same type of bracket.",
      "Opening brackets must be closed in the correct order.",
      "Every closing bracket must have a corresponding opening bracket.",
    ],
  },
  examples: [
    {
      input: 's = "()"',
      output: "true",
      explanation: "The parentheses are correctly matched.",
    },
    {
      input: 's = "()[]{}"',
      output: "true",
      explanation: "All brackets are correctly matched.",
    },
    {
      input: 's = "(]"',
      output: "false",
      explanation: "The opening parenthesis is closed by the wrong bracket.",
    },
  ],
  constraints: [
    "1 ≤ s.length ≤ 10⁴",
    "s consists only of parentheses, brackets, and braces.",
  ],
  starterCode: {
    javascript: `function isValid(s) {
  // Write your solution here
  
}

// Test cases
console.log(isValid("()")); // Expected: true
console.log(isValid("()[]{}")); // Expected: true
console.log(isValid("(]")); // Expected: false`,

    python: `def isValid(s):
    # Write your solution here
    pass

# Test cases
print(isValid("()"))  # Expected: True
print(isValid("()[]{}"))  # Expected: True
print(isValid("(]"))  # Expected: False`,

    java: `import java.util.*;

class Solution {
    public static boolean isValid(String s) {
        // Write your solution here
        
        return false;
    }

    public static void main(String[] args) {
        System.out.println(isValid("()")); // Expected: true
        System.out.println(isValid("()[]{}")); // Expected: true
        System.out.println(isValid("(]")); // Expected: false
    }
}`,

    cpp: `#include <bits/stdc++.h>
using namespace std;

bool isValid(string s) {
    // Write your solution here
    
    return false;
}

int main() {
    cout << boolalpha << isValid("()") << endl;
    cout << boolalpha << isValid("()[]{}") << endl;
    cout << boolalpha << isValid("(]") << endl;

    return 0;
}`,
  },

  expectedOutput: {
    javascript: "true\ntrue\nfalse",
    python: "True\nTrue\nFalse",
    java: "true\ntrue\nfalse",
    cpp: "true\ntrue\nfalse",
  },
},


"valid-parentheses": {
  id: "valid-parentheses",
  title: "Valid Parentheses",
  difficulty: "Easy",
  category: "String • Stack",
  description: {
    text: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
    notes: [
      "An opening bracket must be closed by the same type of bracket.",
      "Opening brackets must be closed in the correct order.",
      "Every closing bracket must have a corresponding opening bracket.",
    ],
  },
  examples: [
    {
      input: 's = "()"',
      output: "true",
      explanation: "The parentheses are correctly matched.",
    },
    {
      input: 's = "()[]{}"',
      output: "true",
      explanation: "All brackets are correctly matched.",
    },
    {
      input: 's = "(]"',
      output: "false",
      explanation: "The opening parenthesis is closed by the wrong bracket.",
    },
  ],
  constraints: [
    "1 ≤ s.length ≤ 10⁴",
    "s consists only of parentheses, brackets, and braces.",
  ],
  starterCode: {
    javascript: `function isValid(s) {
  // Write your solution here
  
}

// Test cases
console.log(isValid("()")); // Expected: true
console.log(isValid("()[]{}")); // Expected: true
console.log(isValid("(]")); // Expected: false`,

    python: `def isValid(s):
    # Write your solution here
    pass

# Test cases
print(isValid("()"))  # Expected: True
print(isValid("()[]{}"))  # Expected: True
print(isValid("(]"))  # Expected: False`,

    java: `import java.util.*;

class Solution {
    public static boolean isValid(String s) {
        // Write your solution here
        
        return false;
    }

    public static void main(String[] args) {
        System.out.println(isValid("()")); // Expected: true
        System.out.println(isValid("()[]{}")); // Expected: true
        System.out.println(isValid("(]")); // Expected: false
    }
}`,

    cpp: `#include <bits/stdc++.h>
using namespace std;

bool isValid(string s) {
    // Write your solution here
    
    return false;
}

int main() {
    cout << boolalpha << isValid("()") << endl;
    cout << boolalpha << isValid("()[]{}") << endl;
    cout << boolalpha << isValid("(]") << endl;

    return 0;
}`,
  },

  expectedOutput: {
    javascript: "true\ntrue\nfalse",
    python: "True\nTrue\nFalse",
    java: "true\ntrue\nfalse",
    cpp: "true\ntrue\nfalse",
  },
},

"majority-element": {
  id: "majority-element",
  title: "Majority Element",
  difficulty: "Easy",
  category: "Array • Hash Table",
  description: {
    text: "Given an array nums of size n, return the majority element. The majority element is the element that appears more than n / 2 times.",
    notes: [
      "The majority element always exists in the array.",
      "The majority element appears more than half of the array length.",
    ],
  },
  examples: [
    {
      input: "nums = [3,2,3]",
      output: "3",
      explanation: "3 appears twice out of three elements, so it is the majority element.",
    },
    {
      input: "nums = [2,2,1,1,1,2,2]",
      output: "2",
      explanation: "2 appears four times, which is more than half of the array.",
    },
    {
      input: "nums = [1]",
      output: "1",
      explanation: "The only element is the majority element.",
    },
  ],
  constraints: [
    "1 ≤ nums.length ≤ 5 × 10⁴",
    "-10⁹ ≤ nums[i] ≤ 10⁹",
    "The majority element always exists in the array.",
  ],
  starterCode: {
    javascript: `function majorityElement(nums) {
  // Write your solution here
  
}

// Test cases
console.log(majorityElement([3, 2, 3])); // Expected: 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Expected: 2
console.log(majorityElement([1])); // Expected: 1`,

    python: `def majorityElement(nums):
    # Write your solution here
    pass

# Test cases
print(majorityElement([3, 2, 3]))  # Expected: 3
print(majorityElement([2, 2, 1, 1, 1, 2, 2]))  # Expected: 2
print(majorityElement([1]))  # Expected: 1`,

    java: `import java.util.*;

class Solution {
    public static int majorityElement(int[] nums) {
        // Write your solution here
        
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(majorityElement(new int[]{3, 2, 3})); // Expected: 3
        System.out.println(majorityElement(new int[]{2, 2, 1, 1, 1, 2, 2})); // Expected: 2
        System.out.println(majorityElement(new int[]{1})); // Expected: 1
    }
}`,

    cpp: `#include <bits/stdc++.h>
using namespace std;

int majorityElement(vector<int>& nums) {
    // Write your solution here
    
    return 0;
}

int main() {
    vector<int> a = {3, 2, 3};
    vector<int> b = {2, 2, 1, 1, 1, 2, 2};
    vector<int> c = {1};

    cout << majorityElement(a) << endl;
    cout << majorityElement(b) << endl;
    cout << majorityElement(c) << endl;

    return 0;
}`,
  },

  expectedOutput: {
    javascript: "3\n2\n1",
    python: "3\n2\n1",
    java: "3\n2\n1",
    cpp: "3\n2\n1",
  },
},



"climbing-stairs": {
  id: "climbing-stairs",
  title: "Climbing Stairs",
  difficulty: "Easy",
  category: "Dynamic Programming • Math",
  description: {
    text: "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 step or 2 steps. Return the number of distinct ways you can climb to the top.",
    notes: [
      "You can climb either 1 step or 2 steps at a time.",
      "The order of the steps matters.",
      "For n = 2, there are 2 ways: 1+1 and 2.",
    ],
  },
  examples: [
    {
      input: "n = 2",
      output: "2",
      explanation: "There are two ways to reach the top: 1+1 or 2.",
    },
    {
      input: "n = 3",
      output: "3",
      explanation: "There are three ways: 1+1+1, 1+2, and 2+1.",
    },
    {
      input: "n = 4",
      output: "5",
      explanation: "There are five distinct ways to reach the top.",
    },
  ],
  constraints: [
    "1 ≤ n ≤ 45",
  ],
  starterCode: {
    javascript: `function climbStairs(n) {
  // Write your solution here
  
}

// Test cases
console.log(climbStairs(2)); // Expected: 2
console.log(climbStairs(3)); // Expected: 3
console.log(climbStairs(4)); // Expected: 5`,

    python: `def climbStairs(n):
    # Write your solution here
    pass

# Test cases
print(climbStairs(2))  # Expected: 2
print(climbStairs(3))  # Expected: 3
print(climbStairs(4))  # Expected: 5`,

    java: `import java.util.*;

class Solution {
    public static int climbStairs(int n) {
        // Write your solution here
        
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(climbStairs(2)); // Expected: 2
        System.out.println(climbStairs(3)); // Expected: 3
        System.out.println(climbStairs(4)); // Expected: 5
    }
}`,

    cpp: `#include <bits/stdc++.h>
using namespace std;

int climbStairs(int n) {
    // Write your solution here
    
    return 0;
}

int main() {
    cout << climbStairs(2) << endl;
    cout << climbStairs(3) << endl;
    cout << climbStairs(4) << endl;

    return 0;
}`,
  },

  expectedOutput: {
    javascript: "2\n3\n5",
    python: "2\n3\n5",
    java: "2\n3\n5",
    cpp: "2\n3\n5",
  },
},


"climbing-stairs": {
  id: "climbing-stairs",
  title: "Climbing Stairs",
  difficulty: "Easy",
  category: "Dynamic Programming • Math",
  description: {
    text: "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 step or 2 steps. Return the number of distinct ways you can climb to the top.",
    notes: [
      "You can climb either 1 step or 2 steps at a time.",
      "The order of the steps matters.",
      "For n = 2, there are 2 ways: 1+1 and 2.",
    ],
  },
  examples: [
    {
      input: "n = 2",
      output: "2",
      explanation: "There are two ways to reach the top: 1+1 or 2.",
    },
    {
      input: "n = 3",
      output: "3",
      explanation: "There are three ways: 1+1+1, 1+2, and 2+1.",
    },
    {
      input: "n = 4",
      output: "5",
      explanation: "There are five distinct ways to reach the top.",
    },
  ],
  constraints: [
    "1 ≤ n ≤ 45",
  ],
  starterCode: {
    javascript: `function climbStairs(n) {
  // Write your solution here
  
}

// Test cases
console.log(climbStairs(2)); // Expected: 2
console.log(climbStairs(3)); // Expected: 3
console.log(climbStairs(4)); // Expected: 5`,

    python: `def climbStairs(n):
    # Write your solution here
    pass

# Test cases
print(climbStairs(2))  # Expected: 2
print(climbStairs(3))  # Expected: 3
print(climbStairs(4))  # Expected: 5`,

    java: `import java.util.*;

class Solution {
    public static int climbStairs(int n) {
        // Write your solution here
        
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(climbStairs(2)); // Expected: 2
        System.out.println(climbStairs(3)); // Expected: 3
        System.out.println(climbStairs(4)); // Expected: 5
    }
}`,

    cpp: `#include <bits/stdc++.h>
using namespace std;

int climbStairs(int n) {
    // Write your solution here
    
    return 0;
}

int main() {
    cout << climbStairs(2) << endl;
    cout << climbStairs(3) << endl;
    cout << climbStairs(4) << endl;

    return 0;
}`,
  },

  expectedOutput: {
    javascript: "2\n3\n5",
    python: "2\n3\n5",
    java: "2\n3\n5",
    cpp: "2\n3\n5",
  },
},

"n-queens": {
  id: "n-queens",
  title: "N-Queens",
  difficulty: "Hard",
  category: "Backtracking • Array",
  description: {
    text: "Given an integer n, place n queens on an n × n chessboard so that no two queens attack each other.",
    notes: [
      "No two queens can be in the same row.",
      "No two queens can be in the same column.",
      "No two queens can be on the same diagonal.",
      "Return all distinct solutions.",
      "Each solution should represent the board using 'Q' for a queen and '.' for an empty cell.",
    ],
  },
  examples: [
    {
      input: "n = 4",
      output: "[[\".Q..\",\"...Q\",\"Q...\",\"..Q.\"],[\"..Q.\",\"Q...\",\"...Q\",\".Q..\"]]",
      explanation: "There are two distinct ways to place four queens so that none can attack another.",
    },
    {
      input: "n = 1",
      output: "[[\"Q\"]]",
      explanation: "A single queen can be placed on the only available cell.",
    },
    {
      input: "n = 2",
      output: "[]",
      explanation: "It is impossible to place two queens on a 2 × 2 board without them attacking each other.",
    },
  ],
  constraints: [
    "1 ≤ n ≤ 9",
  ],
  starterCode: {
    javascript: `function solveNQueens(n) {
  // Write your solution here
  
}

// Test cases
console.log(JSON.stringify(solveNQueens(4)));
// Expected: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]

console.log(JSON.stringify(solveNQueens(1)));
// Expected: [["Q"]]

console.log(JSON.stringify(solveNQueens(2)));
// Expected: []`,

    python: `def solveNQueens(n):
    # Write your solution here
    pass

# Test cases
print(solveNQueens(4))
# Expected: [['.Q..', '...Q', 'Q...', '..Q.'], ['..Q.', 'Q...', '...Q', '.Q..']]

print(solveNQueens(1))
# Expected: [['Q']]

print(solveNQueens(2))
# Expected: []`,

    java: `import java.util.*;

class Solution {
    public static List<List<String>> solveNQueens(int n) {
        // Write your solution here
        
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        System.out.println(solveNQueens(4));
        // Expected: [[.Q.., ...Q, Q..., ..Q.], [..Q., Q..., ...Q, .Q..]]

        System.out.println(solveNQueens(1));
        // Expected: [[Q]]

        System.out.println(solveNQueens(2));
        // Expected: []
    }
}`,

    cpp: `#include <bits/stdc++.h>
using namespace std;

vector<vector<string>> solveNQueens(int n) {
    // Write your solution here
    
    return {};
}

int main() {
    vector<vector<string>> a = solveNQueens(4);
    vector<vector<string>> b = solveNQueens(1);
    vector<vector<string>> c = solveNQueens(2);

    cout << "[";
    for (auto& board : a) {
        cout << "[";
        for (auto& row : board)
            cout << row << " ";
        cout << "] ";
    }
    cout << "]" << endl;

    cout << "[";
    for (auto& board : b) {
        cout << "[";
        for (auto& row : board)
            cout << row << " ";
        cout << "] ";
    }
    cout << "]" << endl;

    cout << "[";
    for (auto& board : c) {
        cout << "[";
        for (auto& row : board)
            cout << row << " ";
        cout << "] ";
    }
    cout << "]" << endl;

    return 0;
}`,
  },

  expectedOutput: {
    javascript: `[[ ".Q..","...Q","Q...","..Q." ],[ "..Q.","Q...","...Q",".Q.." ]]
[["Q"]]
[]`,
    python: `[['.Q..', '...Q', 'Q...', '..Q.'], ['..Q.', 'Q...', '...Q', '.Q..']]
[['Q']]
[]`,
    java: `[[.Q.., ...Q, Q..., ..Q.], [..Q., Q..., ...Q, .Q..]]
[[Q]]
[]`,
    cpp: `[[.Q.. ...Q Q... ..Q. ] [..Q. Q... ...Q .Q.. ]]
[[Q ]]
[]`,
  },
},


"merge-sorted-array": {
  id: "merge-sorted-array",
  title: "Merge Sorted Array",
  difficulty: "Easy",
  category: "Array • Two Pointers",
  description: {
    text: "You are given two integer arrays nums1 and nums2, sorted in non-decreasing order. Merge nums2 into nums1 so that nums1 becomes sorted in non-decreasing order.",
    notes: [
      "nums1 has enough space to hold all elements of nums1 and nums2.",
      "The first m elements of nums1 contain the elements to merge.",
      "The last n elements of nums1 are empty space.",
      "Modify nums1 in-place.",
    ],
  },
  examples: [
    {
      input: "nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3",
      output: "[1,2,2,3,5,6]",
      explanation: "After merging both sorted arrays, nums1 becomes [1,2,2,3,5,6].",
    },
    {
      input: "nums1 = [1], m = 1, nums2 = [], n = 0",
      output: "[1]",
    },
    {
      input: "nums1 = [0], m = 0, nums2 = [1], n = 1",
      output: "[1]",
    },
  ],
  constraints: [
    "0 ≤ m, n ≤ 200",
    "1 ≤ m + n ≤ 200",
    "−10⁹ ≤ nums1[i], nums2[j] ≤ 10⁹",
    "nums1 is sorted in non-decreasing order.",
    "nums2 is sorted in non-decreasing order.",
  ],
  starterCode: {
    javascript: `function merge(nums1, m, nums2, n) {
  // Write your solution here
  
}

// Test cases

let a = [1, 2, 3, 0, 0, 0];
merge(a, 3, [2, 5, 6], 3);
console.log(a); // Expected: [1, 2, 2, 3, 5, 6]

let b = [1];
merge(b, 1, [], 0);
console.log(b); // Expected: [1]

let c = [0];
merge(c, 0, [1], 1);
console.log(c); // Expected: [1]`,

    python: `def merge(nums1, m, nums2, n):
    # Write your solution here
    pass

# Test cases

a = [1, 2, 3, 0, 0, 0]
merge(a, 3, [2, 5, 6], 3)
print(a)  # Expected: [1, 2, 2, 3, 5, 6]

b = [1]
merge(b, 1, [], 0)
print(b)  # Expected: [1]

c = [0]
merge(c, 0, [1], 1)
print(c)  # Expected: [1]`,

    java: `import java.util.*;

class Solution {
    public static void merge(int[] nums1, int m, int[] nums2, int n) {
        // Write your solution here
    }

    public static void main(String[] args) {
        int[] a = {1, 2, 3, 0, 0, 0};
        merge(a, 3, new int[]{2, 5, 6}, 3);
        System.out.println(Arrays.toString(a));

        int[] b = {1};
        merge(b, 1, new int[]{}, 0);
        System.out.println(Arrays.toString(b));

        int[] c = {0};
        merge(c, 0, new int[]{1}, 1);
        System.out.println(Arrays.toString(c));
    }
}`,

    cpp: `#include <bits/stdc++.h>
using namespace std;

void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
    // Write your solution here
}

int main() {
    vector<int> a = {1, 2, 3, 0, 0, 0};
    vector<int> b = {2, 5, 6};
    merge(a, 3, b, 3);

    for (int x : a)
        cout << x << " ";
    cout << endl;

    vector<int> c = {1};
    vector<int> d = {};
    merge(c, 1, d, 0);

    for (int x : c)
        cout << x << " ";
    cout << endl;

    vector<int> e = {0};
    vector<int> f = {1};
    merge(e, 0, f, 1);

    for (int x : e)
        cout << x << " ";
    cout << endl;

    return 0;
}`,
  },

  expectedOutput: {
    javascript: "[1,2,2,3,5,6]\n[1]\n[1]",
    python: "[1, 2, 2, 3, 5, 6]\n[1]\n[1]",
    java: "[1, 2, 2, 3, 5, 6]\n[1]\n[1]",
    cpp: "1 2 2 3 5 6\n1\n1",
  },
},


"product-of-array-except-self": {
  id: "product-of-array-except-self",
  title: "Product of Array Except Self",
  difficulty: "Medium",
  category: "Array • Prefix Sum",
  description: {
    text: "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].",
    notes: [
      "The product of any prefix or suffix fits in a 32-bit integer.",
      "You must solve the problem without using division.",
      "The output array does not count as extra space.",
    ],
  },
  examples: [
    {
      input: "nums = [1,2,3,4]",
      output: "[24,12,8,6]",
      explanation: "For each position, multiply all elements except the element at that position.",
    },
    {
      input: "nums = [-1,1,0,-3,3]",
      output: "[0,0,9,0,0]",
      explanation: "The zero causes most products to become zero.",
    },
    {
      input: "nums = [2,3]",
      output: "[3,2]",
    },
  ],
  constraints: [
    "2 ≤ nums.length ≤ 10⁵",
    "-30 ≤ nums[i] ≤ 30",
    "The product of any prefix or suffix fits in a 32-bit integer.",
  ],
  starterCode: {
    javascript: `function productExceptSelf(nums) {
  // Write your solution here
  
}

// Test cases
console.log(productExceptSelf([1, 2, 3, 4])); // Expected: [24, 12, 8, 6]
console.log(productExceptSelf([-1, 1, 0, -3, 3])); // Expected: [0, 0, 9, 0, 0]
console.log(productExceptSelf([2, 3])); // Expected: [3, 2]`,

    python: `def productExceptSelf(nums):
    # Write your solution here
    pass

# Test cases
print(productExceptSelf([1, 2, 3, 4]))  # Expected: [24, 12, 8, 6]
print(productExceptSelf([-1, 1, 0, -3, 3]))  # Expected: [0, 0, 9, 0, 0]
print(productExceptSelf([2, 3]))  # Expected: [3, 2]`,

    java: `import java.util.*;

class Solution {
    public static int[] productExceptSelf(int[] nums) {
        // Write your solution here
        
        return new int[0];
    }

    public static void main(String[] args) {
        System.out.println(Arrays.toString(
            productExceptSelf(new int[]{1, 2, 3, 4})
        )); // Expected: [24, 12, 8, 6]

        System.out.println(Arrays.toString(
            productExceptSelf(new int[]{-1, 1, 0, -3, 3})
        )); // Expected: [0, 0, 9, 0, 0]

        System.out.println(Arrays.toString(
            productExceptSelf(new int[]{2, 3})
        )); // Expected: [3, 2]
    }
}`,

    cpp: `#include <bits/stdc++.h>
using namespace std;

vector<int> productExceptSelf(vector<int>& nums) {
    // Write your solution here
    
    return {};
}

int main() {
    vector<int> a = {1, 2, 3, 4};
    vector<int> b = {-1, 1, 0, -3, 3};
    vector<int> c = {2, 3};

    for (int x : productExceptSelf(a))
        cout << x << " ";
    cout << endl;

    for (int x : productExceptSelf(b))
        cout << x << " ";
    cout << endl;

    for (int x : productExceptSelf(c))
        cout << x << " ";
    cout << endl;

    return 0;
}`,
  },

  expectedOutput: {
    javascript: "[24,12,8,6]\n[0,0,9,0,0]\n[3,2]",
    python: "[24, 12, 8, 6]\n[0, 0, 9, 0, 0]\n[3, 2]",
    java: "[24, 12, 8, 6]\n[0, 0, 9, 0, 0]\n[3, 2]",
    cpp: "24 12 8 6\n0 0 9 0 0\n3 2",
  },
},

"contains-duplicate": {
  id: "contains-duplicate",
  title: "Contains Duplicate",
  difficulty: "Easy",
  category: "Array • Hash Table",
  description: {
    text: "Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.",
    notes: [
      "A duplicate exists if the same value appears more than once.",
      "Return true if there is at least one duplicate.",
      "Return false if all elements are unique.",
    ],
  },
  examples: [
    {
      input: "nums = [1,2,3,1]",
      output: "true",
      explanation: "The value 1 appears twice, so we return true.",
    },
    {
      input: "nums = [1,2,3,4]",
      output: "false",
      explanation: "Every element is unique, so we return false.",
    },
    {
      input: "nums = [1,1,1,3,3,4,3,2,4,2]",
      output: "true",
      explanation: "Several values appear more than once, so we return true.",
    },
  ],
  constraints: [
    "1 ≤ nums.length ≤ 10⁵",
    "-10⁹ ≤ nums[i] ≤ 10⁹",
  ],
  starterCode: {
    javascript: `function containsDuplicate(nums) {
  // Write your solution here
  
}

// Test cases
console.log(containsDuplicate([1, 2, 3, 1])); // Expected: true
console.log(containsDuplicate([1, 2, 3, 4])); // Expected: false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // Expected: true`,

    python: `def containsDuplicate(nums):
    # Write your solution here
    pass

# Test cases
print(containsDuplicate([1, 2, 3, 1]))  # Expected: True
print(containsDuplicate([1, 2, 3, 4]))  # Expected: False
print(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]))  # Expected: True`,

    java: `import java.util.*;

class Solution {
    public static boolean containsDuplicate(int[] nums) {
        // Write your solution here
        
        return false;
    }

    public static void main(String[] args) {
        System.out.println(containsDuplicate(new int[]{1, 2, 3, 1})); // Expected: true
        System.out.println(containsDuplicate(new int[]{1, 2, 3, 4})); // Expected: false
        System.out.println(containsDuplicate(new int[]{1, 1, 1, 3, 3, 4, 3, 2, 4, 2})); // Expected: true
    }
}`,

    cpp: `#include <bits/stdc++.h>
using namespace std;

bool containsDuplicate(vector<int>& nums) {
    // Write your solution here
    
    return false;
}

int main() {
    vector<int> a = {1, 2, 3, 1};
    vector<int> b = {1, 2, 3, 4};
    vector<int> c = {1, 1, 1, 3, 3, 4, 3, 2, 4, 2};

    cout << boolalpha << containsDuplicate(a) << endl;
    cout << boolalpha << containsDuplicate(b) << endl;
    cout << boolalpha << containsDuplicate(c) << endl;
}`,
  },

  expectedOutput: {
    javascript: "true\nfalse\ntrue",
    python: "True\nFalse\nTrue",
    java: "true\nfalse\ntrue",
    cpp: "true\nfalse\ntrue",
  },
},


  "reverse-string": {
    id: "reverse-string",
    title: "Reverse String",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "Write a function that reverses a string. The input string is given as an array of characters s.",
      notes: ["You must do this by modifying the input array in-place with O(1) extra memory."],
    },
    examples: [
      {
        input: 's = ["h","e","l","l","o"]',
        output: '["o","l","l","e","h"]',
      },
      {
        input: 's = ["H","a","n","n","a","h"]',
        output: '["h","a","n","n","a","H"]',
      },
    ],
    constraints: ["1 ≤ s.length ≤ 10⁵", "s[i] is a printable ascii character"],
    starterCode: {
      javascript: `function reverseString(s) {
  // Write your solution here
  
}

// Test cases
let test1 = ["h","e","l","l","o"];
reverseString(test1);
console.log(test1); // Expected: ["o","l","l","e","h"]

let test2 = ["H","a","n","n","a","h"];
reverseString(test2);
console.log(test2); // Expected: ["h","a","n","n","a","H"]`,
      python: `def reverseString(s):
    # Write your solution here
    pass

# Test cases
test1 = ["h","e","l","l","o"]
reverseString(test1)
print(test1)  # Expected: ["o","l","l","e","h"]

test2 = ["H","a","n","n","a","h"]
reverseString(test2)
print(test2)  # Expected: ["h","a","n","n","a","H"]`,
      java: `import java.util.*;

class Solution {
    public static void reverseString(char[] s) {
        // Write your solution here
        
    }
    
    public static void main(String[] args) {
        char[] test1 = {'h','e','l','l','o'};
        reverseString(test1);
        System.out.println(Arrays.toString(test1)); // Expected: [o, l, l, e, h]
        
        char[] test2 = {'H','a','n','n','a','h'};
        reverseString(test2);
        System.out.println(Arrays.toString(test2)); // Expected: [h, a, n, n, a, H]
    }
}`,
    },
    expectedOutput: {
      javascript: '["o","l","l","e","h"]\n["h","a","n","n","a","H"]',
      python: "['o', 'l', 'l', 'e', 'h']\n['h', 'a', 'n', 'n', 'a', 'H']",
      java: "[o, l, l, e, h]\n[h, a, n, n, a, H]",
    },
  },



  "valid-palindrome": {
    id: "valid-palindrome",
    title: "Valid Palindrome",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.",
      notes: ["Given a string s, return true if it is a palindrome, or false otherwise."],
    },
    examples: [
      {
        input: 's = "A man, a plan, a canal: Panama"',
        output: "true",
        explanation: '"amanaplanacanalpanama" is a palindrome.',
      },
      {
        input: 's = "race a car"',
        output: "false",
        explanation: '"raceacar" is not a palindrome.',
      },
      {
        input: 's = " "',
        output: "true",
        explanation:
          's is an empty string "" after removing non-alphanumeric characters. Since an empty string reads the same forward and backward, it is a palindrome.',
      },
    ],
    constraints: ["1 ≤ s.length ≤ 2 * 10⁵", "s consists only of printable ASCII characters"],
    starterCode: {
      javascript: `function isPalindrome(s) {
  // Write your solution here
  
}

// Test cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
console.log(isPalindrome("race a car")); // Expected: false
console.log(isPalindrome(" ")); // Expected: true`,
      python: `def isPalindrome(s):
    # Write your solution here
    pass

# Test cases
print(isPalindrome("A man, a plan, a canal: Panama"))  # Expected: True
print(isPalindrome("race a car"))  # Expected: False
print(isPalindrome(" "))  # Expected: True`,
      java: `class Solution {
    public static boolean isPalindrome(String s) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
        System.out.println(isPalindrome("race a car")); // Expected: false
        System.out.println(isPalindrome(" ")); // Expected: true
    }
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse\ntrue",
      python: "True\nFalse\nTrue",
      java: "true\nfalse\ntrue",
    },
  },

  "maximum-subarray": {
    id: "maximum-subarray",
    title: "Maximum Subarray",
    difficulty: "Medium",
    category: "Array • Dynamic Programming",
    description: {
      text: "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
      notes: [],
    },
    examples: [
      {
        input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        output: "6",
        explanation: "The subarray [4,-1,2,1] has the largest sum 6.",
      },
      {
        input: "nums = [1]",
        output: "1",
        explanation: "The subarray [1] has the largest sum 1.",
      },
      {
        input: "nums = [5,4,-1,7,8]",
        output: "23",
        explanation: "The subarray [5,4,-1,7,8] has the largest sum 23.",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxSubArray(nums) {
  // Write your solution here
  
}

// Test cases
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Expected: 6
console.log(maxSubArray([1])); // Expected: 1
console.log(maxSubArray([5,4,-1,7,8])); // Expected: 23`,
      python: `def maxSubArray(nums):
    # Write your solution here
    pass

# Test cases
print(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))  # Expected: 6
print(maxSubArray([1]))  # Expected: 1
print(maxSubArray([5,4,-1,7,8]))  # Expected: 23`,
      java: `class Solution {
    public static int maxSubArray(int[] nums) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxSubArray(new int[]{-2,1,-3,4,-1,2,1,-5,4})); // Expected: 6
        System.out.println(maxSubArray(new int[]{1})); // Expected: 1
        System.out.println(maxSubArray(new int[]{5,4,-1,7,8})); // Expected: 23
    }
}`,
    },
    expectedOutput: {
      javascript: "6\n1\n23",
      python: "6\n1\n23",
      java: "6\n1\n23",
    },
  },




  "container-with-most-water": {
    id: "container-with-most-water",
    title: "Container With Most Water",
    difficulty: "Medium",
    category: "Array • Two Pointers",
    description: {
      text: "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).",
      notes: [
        "Find two lines that together with the x-axis form a container, such that the container contains the most water.",
        "Return the maximum amount of water a container can store.",
        "Notice that you may not slant the container.",
      ],
    },
    examples: [
      {
        input: "height = [1,8,6,2,5,4,8,3,7]",
        output: "49",
        explanation:
          "The vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water the container can contain is 49.",
      },
      {
        input: "height = [1,1]",
        output: "1",
      },
    ],
    constraints: ["n == height.length", "2 ≤ n ≤ 10⁵", "0 ≤ height[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxArea(height) {
  // Write your solution here
  
}

// Test cases
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Expected: 49
console.log(maxArea([1,1])); // Expected: 1`,
      python: `def maxArea(height):
    # Write your solution here
    pass

# Test cases
print(maxArea([1,8,6,2,5,4,8,3,7]))  # Expected: 49
print(maxArea([1,1]))  # Expected: 1`,
      java: `class Solution {
    public static int maxArea(int[] height) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxArea(new int[]{1,8,6,2,5,4,8,3,7})); // Expected: 49
        System.out.println(maxArea(new int[]{1,1})); // Expected: 1
    }
}`,
    },
    expectedOutput: {
      javascript: "49\n1",
      python: "49\n1",
      java: "49\n1",
      cpp: "0 1\n1 2\n0 1",
    },
  },
};

export const LANGUAGE_CONFIG = {
  javascript: {
    name: "JavaScript",
    icon: "/javascript.png",
    monacoLang: "javascript",
  },
  python: {
    name: "Python",
    icon: "/python.png",
    monacoLang: "python",
  },
  java: {
    name: "Java",
    icon: "/java.png",
    monacoLang: "java",
  },
  cpp: {
    name: "C++",
    icon: "/cpp.png",
    monacoLang: "cpp",
  },
};
