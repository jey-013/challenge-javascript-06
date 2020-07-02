/**
 * @param {number[]} candidates - candidate numbers we're picking from.
 * @param {number} remainingSum - remaining sum after adding candidates to currentCombination.
 * @param {number[][]} finalCombinations - resulting list of combinations.
 * @param {number[]} currentCombination - currently explored candidates.
 * @param {number} startFrom - index of the candidate to start further exploration from.
 * @return {number[][]}
 */

const combinationSumRecursive = (candidates, target) => {
  //Declarar
  let results = []
  let temp = new Array()
  const reducer = (accumulator, curentValue) => accumulator + curentValue;
  for (let i = 0; i < candidates.length; i++) {
    let condition = true
    while (condition) {
      temp.push(candidates[i])
      
      if (temp.reduce(reducer, 0) === target) {
        let drop = new Array()
        drop = Array.from(temp)
        results.push(drop)
        condition = false
      }
      
      if (temp.reduce(reducer, 0) > target) {
        if (temp[0] == candidates[i]) condition = false
        if (temp.length > 0) temp.pop()
        temp.splice(0,1)
      }
    }
  }
  return results
}
  
  /**
   * Backtracking algorithm of finding all possible combination for specific sum.
   *
   * @param {number[]} candidates
   * @param {number} target
   * @return {number[][]}
   */
const combinationSum = (candidates, target) => {
    return combinationSumRecursive(candidates, target);
  }

module.exports = combinationSum;