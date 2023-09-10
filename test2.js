function findCommonSubstrings(str1, str2) {
    const commonSubstrings = [];
    let maxLength = 0;
    let maxSubstringIndices = []; // 추가: 가장 긴 공통 부분의 시작 인덱스를 저장

    for (let i = 0; i < str1.length; i++) {
        for (let j = 0; j < str2.length; j++) {
            let k = 0;
            while (i + k < str1.length && j + k < str2.length && str1[i + k] === str2[j + k]) {
                k++;
            }
            if (k > maxLength) {
                maxLength = k;
                commonSubstrings.length = 0; // 이전 결과를 초기화
                commonSubstrings.push(str1.substring(i, i + k));
                maxSubstringIndices = [{ start: i, end: i + k - 1 }];
            } else if (k === maxLength && k > 0) {
                commonSubstrings.push(str1.substring(i, i + k));
                maxSubstringIndices.push({ start: i, end: i + k - 1 });
            }
        }
    }

    // 추가: 가장 긴 부분을 포함하는 문자열을 반환
    const result = maxSubstringIndices.map(({ start, end }) => {
        let substr = '';
        for (let i = start; i <= end; i++) {
            substr += str1[i];
        }
        return substr;
    });

    return result;
}

const string1 = "committer_list_per_month[date + '-' + log[i].author] = 1;";
const string2 = "var date_author = date + '-' + log[i].author;";

const commonSubstrings = findCommonSubstrings(string1, string2);
console.log(commonSubstrings); // 결과: ["te", "th", "date + '-' + log[i].author", ";"]


function findAllCommonSubstrings(str1, str2) {
    const commonSubstrings = [];
  
    for (let i = 0; i < str1.length; i++) {
        for (let j = 0; j < str2.length; j++) {
            let k = 0;
            while (i + k < str1.length && j + k < str2.length && str1[i + k] === str2[j + k]) {
                k++;
            }
            if (k > 0) { // 최소 길이가 1 이상인 공통 부분만 추가
                const commonSubstring = str1.substring(i, i + k);
                commonSubstrings.push(commonSubstring);
            }
        }
    }

    // 중복되는 부분 문자열 걸러내기
    const filteredCommonSubstrings = commonSubstrings.filter(substring => {
        for (const other of commonSubstrings) {
            if (substring !== other && other.includes(substring)) {
                return false;
            }
        }
        return true;
    });

    return filteredCommonSubstrings;
}

const str1 = "committer_list_per_month[date + '-' + log[i].author] = 1;";
const str2 = "var date_author = date + '-' + log[i].author;";

const commonSubstrigs = findAllCommonSubstrings(str1, str2);
console.log(commonSubstrigs);