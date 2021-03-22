const DiagonalMoves = (
    xaxis,
    yaxis,
    axisIndex,
    ValidateInput,
    PircesPositionWhite,
    PircesPositionBlack,
    possibleMoves,
    color
) => {
    const MoveDiagonalRightUp = (xaxis, yaxis) => {
        const nextMove = axisIndex[xaxis + 1] + (yaxis + 1);
        if (ValidateInput(nextMove))
            if (color === "W") {
                if (
                    !PircesPositionWhite.includes(nextMove) ||
                    PircesPositionBlack.includes(nextMove)
                ) {
                    possibleMoves.push(nextMove);
                    if (xaxis !== -1 && yaxis !== 0 && yaxis < 8)
                        if (!PircesPositionBlack.includes(nextMove)) {
                            MoveDiagonalRightUp(xaxis + 1, yaxis + 1);
                        }
                }
            } else {
                if (
                    PircesPositionWhite.includes(nextMove) ||
                    !PircesPositionBlack.includes(nextMove)
                ) {
                    possibleMoves.push(nextMove);
                    if (xaxis !== -1 && yaxis !== 0 && yaxis < 8)
                        if (!PircesPositionWhite.includes(nextMove)) {
                            MoveDiagonalRightUp(xaxis + 1, yaxis + 1);
                        }
                }
            }
    };
    const MoveDiagonalRightDown = (xaxis, yaxis) => {
        const nextMove = axisIndex[xaxis + 1] + (yaxis - 1);
        if (ValidateInput(nextMove))
            if (color === "W") {
                if (
                    !PircesPositionWhite.includes(nextMove) ||
                    PircesPositionBlack.includes(nextMove)
                ) {
                    possibleMoves.push(nextMove);
                    if (xaxis !== -1 && yaxis !== 0 && yaxis < 8)
                        if (!PircesPositionBlack.includes(nextMove)) {
                            MoveDiagonalRightDown(xaxis + 1, yaxis - 1);
                        }
                }
            } else {
                if (
                    PircesPositionWhite.includes(nextMove) ||
                    !PircesPositionBlack.includes(nextMove)
                ) {
                    possibleMoves.push(nextMove);
                    if (xaxis !== -1 && yaxis !== 0 && yaxis < 8)
                        if (!PircesPositionWhite.includes(nextMove)) {
                            MoveDiagonalRightDown(xaxis + 1, yaxis - 1);
                        }
                }
            }
    };
    const MoveDiagonalLeftDown = (xaxis, yaxis) => {
        const nextMove = axisIndex[xaxis - 1] + (yaxis - 1);
        if (ValidateInput(nextMove))
            if (color === "W") {
                if (
                    !PircesPositionWhite.includes(nextMove) ||
                    PircesPositionBlack.includes(nextMove)
                ) {
                    possibleMoves.push(nextMove);
                    if (xaxis !== -1 && yaxis !== 0 && yaxis < 8)
                        if (!PircesPositionBlack.includes(nextMove)) {
                            MoveDiagonalLeftDown(xaxis - 1, yaxis - 1);
                        }
                }
            } else {
                if (
                    PircesPositionWhite.includes(nextMove) ||
                    !PircesPositionBlack.includes(nextMove)
                ) {
                    possibleMoves.push(nextMove);
                    if (xaxis !== -1 && yaxis !== 0 && yaxis < 8)
                        if (!PircesPositionWhite.includes(nextMove)) {
                            MoveDiagonalLeftDown(xaxis - 1, yaxis - 1);
                        }
                }
            }
    };
    const MoveDiagonalLeftUp = (xaxis, yaxis) => {
        const nextMove = axisIndex[xaxis - 1] + (yaxis + 1);
        if (ValidateInput(nextMove))
            if (color === "W") {
                if (
                    !PircesPositionWhite.includes(nextMove) ||
                    PircesPositionBlack.includes(nextMove)
                ) {
                    possibleMoves.push(nextMove);
                    if (xaxis !== -1 && yaxis !== 0 && yaxis < 8)
                        if (!PircesPositionBlack.includes(nextMove)) {
                            MoveDiagonalLeftUp(xaxis - 1, yaxis + 1);
                        }
                }
            } else {
                if (
                    PircesPositionWhite.includes(nextMove) ||
                    !PircesPositionBlack.includes(nextMove)
                ) {
                    possibleMoves.push(nextMove);
                    if (xaxis !== -1 && yaxis !== 0 && yaxis < 8)
                        if (!PircesPositionWhite.includes(nextMove)) {
                            MoveDiagonalLeftUp(xaxis - 1, yaxis + 1);
                        }
                }
            }
    };
    MoveDiagonalRightUp(xaxis, yaxis);
    MoveDiagonalRightDown(xaxis, yaxis);
    MoveDiagonalLeftDown(xaxis, yaxis);
    MoveDiagonalLeftUp(xaxis, yaxis);
};

module.exports = DiagonalMoves;
