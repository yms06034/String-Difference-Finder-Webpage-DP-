function findAllCommonSubstrings(str1, str2) {
    const commonSubstrings = [];

    for (let i = 0; i < str1.length; i++) {
        for (let j = 0; j < str2.length; j++) {
            let k = 0;
            while (i + k < str1.length && j + k < str2.length && str1[i + k] === str2[j + k]) {
                k++;
                if (k >= 2) { // Minimum length of 2 characters for common substring
                    const commonSubstring = str1.substring(i, i + k);
                    if (!commonSubstrings.includes(commonSubstring)) {
                        // Check if the common substring is not a part of any longer common substring
                        const isPartOfLongerCommonSubstring = commonSubstrings.some(sub => sub.includes(commonSubstring));
                        if (!isPartOfLongerCommonSubstring) {
                            commonSubstrings.push(commonSubstring);
                        }
                    }
                }
            }
        }
    }

    return commonSubstrings;
}

const string1 = "committer_list_per_month[date + '-' + log[i].author] = 1;";
const string2 = "var date_author = date + '-' + log[i].author;";

const commonSubstrings = findAllCommonSubstrings(string1, string2);
console.log("Common Substrings:", commonSubstrings);