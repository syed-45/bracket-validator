import findMatchingBracketIndex from "./findMatchingBracketIndex";

function isNestedCorrectly(nestedBrackets: string): boolean {
  const workStack: string[] = [];
  let matchingIndex: number;

  if (
    nestedBrackets[0] === "{" ||
    nestedBrackets[0] === "[" ||
    nestedBrackets[0] === "("
  ) {
    matchingIndex = findMatchingBracketIndex(nestedBrackets);

    if (matchingIndex === -1) {
      return false;
    } else if (matchingIndex === 1) {
      if (nestedBrackets.length > 2) {
        workStack.push(nestedBrackets.slice(2, nestedBrackets.length));
      } else {
        return true;
      }
    } else {
      // we are nested :0
      if (nestedBrackets.length > matchingIndex + 1) {
        workStack.push(
          nestedBrackets.slice(matchingIndex + 1, nestedBrackets.length),
        );
      }
      workStack.push(nestedBrackets.slice(1, matchingIndex));
    }
  } else {
    return false;
  }

  while (workStack[0] !== undefined) {
    let currentNestOrBracket = workStack.pop();
    if (currentNestOrBracket) { 
      if (
        currentNestOrBracket[0] === "{" ||
        currentNestOrBracket[0] === "[" ||
        currentNestOrBracket[0] === "("
      ) {
        matchingIndex = findMatchingBracketIndex(currentNestOrBracket);
        if (matchingIndex === -1) {
          return false;
        } else if (matchingIndex === 1 && currentNestOrBracket.length > 2) {
          workStack.push(
            currentNestOrBracket.slice(2, currentNestOrBracket.length),
          );
        } else {
          // we are nested :0
          if (currentNestOrBracket.length > matchingIndex) {
            workStack.push(
              currentNestOrBracket.slice(
                matchingIndex + 1,
                currentNestOrBracket.length,
              ),
            );
          }
          workStack.push(currentNestOrBracket.slice(1, matchingIndex));
        }
      } else {
        return false;
      }
    }
  }

  return true;
}

export default isNestedCorrectly;
