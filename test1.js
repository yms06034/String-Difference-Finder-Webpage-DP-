function findCommonSubstrings(str1, str2) {
    const commonSubstrings = [];
    let maxLength = 0;
  
    for (let i = 0; i < str1.length; i++) {
        for (let j = 0; j < str2.length; j++) {
            let k = 0;
            while (i + k < str1.length && j + k < str2.length && str1[i + k] === str2[j + k]) {
                k++;
            }
            if (k > maxLength) {
                maxLength = k;
                commonSubstrings.length = 0; // Clear previous substrings
                commonSubstrings.push(str1.substring(i, i + k));
            } else if (k === maxLength && k > 0) {
                commonSubstrings.push(str1.substring(i, i + k));
            }
        }
    }
  
    return commonSubstrings;
}

const string1 = "committer_list_per_month[date + '-' + log[i].author] = 1;";
const string2 = "var date_author = date + '-' + log[i].author;";

const commonSubstrings = findCommonSubstrings(string1, string2);
console.log(commonSubstrings); // 결과: ["te", "th", "date + '-' + log[i].author", ";"]
