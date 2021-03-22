const DirectionalMoves = (
    xaxis,
    yaxis,
    axisIndex,
    ValidateInput,
    PircesPositionWhite,
    PircesPositionBlack,
    possibleMoves,
    color
) => {
    const MoveValidation = (nextMove) => {
        if (ValidateInput(nextMove)) {
            if (color === "W") {
                if (
                    !PircesPositionWhite.includes(nextMove) ||
                    PircesPositionBlack.includes(nextMove)
                ) {
                    possibleMoves.push(nextMove);
                    if (PircesPositionBlack.includes(nextMove)) {
                        return false;
                    } else {
                        return true;
                    }
                } else {
                    return false;
                }
            } else {
                if (
                    !PircesPositionBlack.includes(nextMove) ||
                    PircesPositionWhite.includes(nextMove)
                ) {
                    possibleMoves.push(nextMove);
                    if (PircesPositionWhite.includes(nextMove)) {
                        return false;
                    } else {
                        return true;
                    }
                } else {
                    return false;
                }
            }
        }
    };
    //Move Right
    for (i = xaxis; i < 8; i++) {
        const nextMove = axisIndex[i + 1] + yaxis;
        if (!MoveValidation(nextMove)) break;
    }
    //Move Left
    for (i = xaxis; i > 0; i--) {
        const nextMove = axisIndex[i - 1] + yaxis;
        if (!MoveValidation(nextMove)) break;
    }

    //Move Up
    for (i = yaxis; i < 8; i++) {
        const nextMove = axisIndex[xaxis] + (i + 1);
        if (!MoveValidation(nextMove)) break;
    }
    //Move Down
    for (i = yaxis; i > 0; i--) {
        const nextMove = axisIndex[xaxis] + (i - 1);
        if (!MoveValidation(nextMove)) break;
    }
    return possibleMoves;
};
// LeftRightUpDown();
module.exports = DirectionalMoves;
