// function isNestedCorrectly(nestedBrackets: string): boolean {
//   const workStack: string[] = [];
//   let matchingIndex: number

//   if (nestedBrackets.slice(0,1)) {
//     matchingIndex = findMatchingBracket(nestedBrackets)

//     // if nestedBrackets
//   }
// }

function findMatchingBracket (nest: string): number {
  const nestArray = nest.split("");
  if (nestArray[0] === "{") {
    return nestArray.findIndex((bracket) => bracket === "}")
  } else if (nestArray[0] === "[") {
    return nestArray.findIndex((bracket) => bracket === "]")
  } else {
    return nestArray.findIndex((bracket) => bracket === ")")
  }

}

console.log(findMatchingBracket('({{{'))

// export default isNestedCorrectly;
