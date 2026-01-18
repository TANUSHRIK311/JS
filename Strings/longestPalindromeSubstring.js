function longestPalindromeSubstring(s) {
    if (s.length === 0) return "";  
    let start = 0;
    let end = 0;    
    for (let i = 0; i < s.length; i++) {
        const len1 = expandAroundCenter(s, i, i);
        const len2 = expandAroundCenter(s, i, i + 1);
        const len = Math.max(len1, len2);
        if (len > end - start) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }   
    }
    return s.substring(start, end + 1);
}

function expandAroundCenter(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) { 
        left--;
        right++;
    }
    return right - left - 1;
}

// Example usage:
console.log(longestPalindromeSubstring("babad")); // Output: "bab" or "aba"
console.log(longestPalindromeSubstring("cbbd"));  // Output: "bb"

//---------------------------------------------------------------------------


function longestPalindromeManacher(s) {
    if (!s || s.length <= 1) return s;

    // 1. Preprocess: "aba" -> "#a#b#a#"
    let T = "#" + s.split("").join("#") + "#";
    let n = T.length;
    let P = new Array(n).fill(0); // Stores radius of palindrome at each center
    let C = 0, R = 0; // Current center and right boundary
    let maxLen = 0, centerIndex = 0;

    for (let i = 0; i < n; i++) {
        // Use mirror property to skip redundant checks
        let mirror = 2 * C - i;
        if (i < R) {
            P[i] = Math.min(R - i, P[mirror]);
        }

        // Attempt to expand around center i
        while (i + 1 + P[i] < n && i - 1 - P[i] >= 0 && T[i + 1 + P[i]] === T[i - 1 - P[i]]) {
            P[i]++;
        }

        // Update boundary if new palindrome extends further right
        if (i + P[i] > R) {
            C = i;
            R = i + P[i];
        }

        // Track the absolute longest
        if (P[i] > maxLen) {
            maxLen = P[i];
            centerIndex = i;
        }
    }

    // Extract the substring from the original string
    let start = (centerIndex - maxLen) / 2;
    return s.substring(start, start + maxLen);
}

// Example usage:
console.log(longestPalindromeManacher("babad")); // "bab" or "aba"
console.log(longestPalindromeManacher("cbbd"));  // "bb"

//---------------------------------------------------------------------

function longestPalindromeDP(s) {
    const n = s.length;
    if (n === 0) return "";
    const dp = Array.from(Array(n), () => Array(n).fill(false));
    let start = 0;
    let maxLength = 1;  
    for (let i = 0; i < n; i++) {
        dp[i][i] = true; // Every single character is a palindrome
    }
    for (let length = 2; length <= n; length++) {
        for (let i = 0; i < n - length + 1; i++) {
            const j = i + length - 1;   
            if (s[i] === s[j]) {
                if (length === 2 || dp[i + 1][j - 1]) {
                    dp[i][j] = true;        
                    if (length > maxLength) {
                        start = i;
                        maxLength = length;
                    }   
                }
            }
        }
    }
    return s.substring(start, start + maxLength);
}
// Example usage:
console.log(longestPalindromeDP("sasat")); // Output: "sas" 
console.log(longestPalindromeDP("tatto"));  // Output: "tat"