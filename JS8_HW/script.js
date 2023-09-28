let maxSum = [];
let startIndex = 0;
let endIndex = 0;
function findMaxSubarray(arr) {
    if (arr.length === 0) {
        console.log("[....]");
        return;
    }

    let currentSum = arr[0];

    let tempStartIndex = 0;

    for (let i = 1; i < arr.length; i++) {
        if (currentSum + arr[i] < arr[i]) {
            currentSum = arr[i];
            tempStartIndex = i;
        } else {
            currentSum += arr[i];
        }

        if (currentSum > maxSum) {
            maxSum = currentSum;
            startIndex = tempStartIndex;
            endIndex = i;
        }
        return startIndex, endIndex;
    }

    console.log("Максимальная сумма:", maxSum);
    console.log("Индексы начала и конца фрагмента:", startIndex, endIndex);
}

const numbers = [6, 5, 43, 3, 61, -45, 9, -8, 4, 34, 2, 1, -6, 4, -4, 3, 61, -69, 8, 4, 76, 9, -4, 6];
findMaxSubarray(numbers);
alert(maxSum, startIndex, endIndex)
