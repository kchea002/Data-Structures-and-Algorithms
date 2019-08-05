function getPermutations(array) {
    let permutations = []
    getPermutationsHelper(array, [], permutations)
    return permutations
}

function getPermutationsHelper(array, currentPerm, permutations) {
    if (array.length === 0 && currentPerm.length !== 0) {
        permutations.push(currentPerm)
    } else {
        for (let i = 0; i < array.length; i++) {
            let newArray = array.slice(0, i).concat(array.slice(i + 1))
            let newPerm = currentPerm.concat(array[i])
            getPermutationsHelper(newArray, newPerm, permutations)
        }
    }


}