module.exports = KnightMoves = (
    axisIndex,
    xaxis,
    yaxis,
    PircesPositionWhite,
    PircesPositionBlack,
    ValidateInput,
    possibleMoves,
    color
) => {
    const MoveValidation = (nextMove) => {
        if (ValidateInput(nextMove))
            if (color === "W") {
                if (!PircesPositionWhite.includes(nextMove)) {
                    possibleMoves.push(nextMove);
                    return true;
                }
            } else {
                if (!PircesPositionBlack.includes(nextMove)) {
                    possibleMoves.push(nextMove);
                    return true;
                }
            }
    };
    //Top Right2
    MoveValidation(axisIndex[xaxis + 2] + (yaxis + 1));
    //Top2 Right
    MoveValidation(axisIndex[xaxis + 1] + (yaxis + 2));

    //Bottom Right2
    MoveValidation(axisIndex[xaxis + 2] + (yaxis - 1));
    //Bottom2 Right
    MoveValidation(axisIndex[xaxis + 1] + (yaxis - 2));

    //Top Left2
    MoveValidation(axisIndex[xaxis - 2] + (yaxis + 1));
    //Top2 Left
    MoveValidation(axisIndex[xaxis - 1] + (yaxis + 2));

    //Bottom Left2
    MoveValidation(axisIndex[xaxis - 2] + (yaxis - 1));
    //Bottom2 Left
    MoveValidation(axisIndex[xaxis - 1] + (yaxis - 2));
};
