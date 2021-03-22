const { Input, AutoComplete } = require("enquirer");
const DiagonalMoves = require("./DiagonalMoves");
const DirectionalMoves = require("./DirectionalMoves");
const KnightMoves = require("./KnightMoves");
const { bgWhite, black, bold, green } = require("kleur");
const boxen = require("boxen");

let PircesPositionWhite = [];
let PircesPositionBlack = [];
const axisIndex = ["A", "B", "C", "D", "E", "F", "G", "H"];

const ValidateInput = (position, split) => {
    let xaxis = axisIndex.indexOf(position[0]);
    if (xaxis === -1) return false;
    let yaxis = parseInt(position[1]);
    if (isNaN(yaxis)) return false;
    if (yaxis === 0) return false;
    if (yaxis > 8) return false;

    return split ? { xaxis, yaxis } : position;
};

const KingMoves = (position, color) => {
    let { xaxis, yaxis } = ValidateInput(position, true);
    if (xaxis + 1 && yaxis) {
        possibleMoves = [];

        const MoveValidation = (nextMove) => {
            if (ValidateInput(nextMove))
                if (color === "W") {
                    if (!PircesPositionWhite.includes(nextMove)) {
                        possibleMoves.push(nextMove);
                    }
                } else {
                    possibleMoves.push(nextMove);
                }
        };

        //Move Right
        MoveValidation(axisIndex[xaxis + 1] + yaxis);
        //Move Left
        MoveValidation(axisIndex[xaxis - 1] + yaxis);
        //Move Up
        MoveValidation(axisIndex[xaxis] + (yaxis + 1));
        //Move Down
        MoveValidation(axisIndex[xaxis] + (yaxis - 1));
        //Move Up Right
        MoveValidation(axisIndex[xaxis + 1] + (yaxis + 1));
        //Move Down Left
        MoveValidation(axisIndex[xaxis + 1] + (yaxis - 1));
        //Move Up Right
        MoveValidation(axisIndex[xaxis - 1] + (yaxis + 1));
        //Move Down Left
        MoveValidation(axisIndex[xaxis - 1] + (yaxis - 1));

        // console.log(possibleMoves);
        console.log(
            boxen(
                bold().black(`King On ${position} can move to: `) +
                    bold().green(possibleMoves),
                {
                    padding: 1,
                    margin: 2,
                    backgroundColor: "white",
                }
            )
        );
    } else {
        console.log("Invalid Input");
    }
};

const QueenMoves = (position, color) => {
    let possibleMoves = [];

    let { xaxis, yaxis } = ValidateInput(position, true);
    if (xaxis + 1 && yaxis) {
        DirectionalMoves(
            xaxis,
            yaxis,
            axisIndex,
            ValidateInput,
            PircesPositionWhite,
            PircesPositionBlack,
            possibleMoves,
            color
        );

        DiagonalMoves(
            xaxis,
            yaxis,
            axisIndex,
            ValidateInput,
            PircesPositionWhite,
            PircesPositionBlack,
            possibleMoves,
            color
        );

        // console.log(possibleMoves);
        console.log(
            boxen(
                bold().black(`Queen On ${position} can move to: `) +
                    bold().green(possibleMoves),
                {
                    padding: 1,
                    margin: 2,
                    backgroundColor: "white",
                }
            )
        );
    } else {
        console.log("Invalid Input");
    }
};

const RookMoves = (position, color) => {
    let possibleMoves = [];

    let { xaxis, yaxis } = ValidateInput(position, true);
    if (xaxis + 1 && yaxis) {
        DirectionalMoves(
            xaxis,
            yaxis,
            axisIndex,
            ValidateInput,
            PircesPositionWhite,
            PircesPositionBlack,
            possibleMoves,
            color
        );
        // console.log(possibleMoves);
        console.log(
            boxen(
                bold().black(`Rook On ${position} can move to: `) +
                    bold().green(possibleMoves),
                {
                    padding: 1,
                    margin: 2,
                    backgroundColor: "white",
                }
            )
        );
    } else {
        console.log("Invalid Input");
    }
};

const BishopMoves = (position, color) => {
    let possibleMoves = [];

    let { xaxis, yaxis } = ValidateInput(position, true);
    if (xaxis + 1 && yaxis) {
        DiagonalMoves(
            xaxis,
            yaxis,
            axisIndex,
            ValidateInput,
            PircesPositionWhite,
            PircesPositionBlack,
            possibleMoves,
            color
        );
        // console.log(possibleMoves);
        console.log(
            boxen(
                bold().black(`Bishop On ${position} can move to: `) +
                    bold().green(possibleMoves),
                {
                    padding: 1,
                    margin: 2,
                    backgroundColor: "white",
                }
            )
        );
    } else {
        console.log("Invalid Input");
    }
};

const KnightMove = (position, color) => {
    let possibleMoves = [];

    let { xaxis, yaxis } = ValidateInput(position, true);
    if (xaxis + 1 && yaxis) {
        KnightMoves(
            axisIndex,
            xaxis,
            yaxis,
            PircesPositionWhite,
            ValidateInput,
            possibleMoves,
            color
        );
        // console.log(possibleMoves);
        console.log(
            boxen(
                bold().black(`Kinght On ${position} can move to: `) +
                    bold().green(possibleMoves),
                {
                    padding: 1,
                    margin: 2,
                    backgroundColor: "white",
                }
            )
        );
    } else {
        console.log("Invalid Input");
    }
};

const PawnMoves = (position, color) => {
    let possibleMoves = [];

    let { xaxis, yaxis } = ValidateInput(position, true);
    if (xaxis + 1 && yaxis) {
        const nextMove = axisIndex[xaxis] + (yaxis + 1);

        if (ValidateInput(nextMove))
            if (color === "W") {
                if (!PircesPositionWhite.includes(nextMove)) {
                    possibleMoves.push(nextMove);
                }
            } else {
                possibleMoves.push(nextMove);
            }
        // console.log(possibleMoves);
        console.log(
            boxen(
                bold().black(`Pawn On ${position} can move to: `) +
                    bold().green(possibleMoves),
                {
                    padding: 1,
                    margin: 2,
                    backgroundColor: "white",
                }
            )
        );
    } else {
        console.log("Invalid Input");
    }
};

async function main() {
    const numberOfPiecesInp = new Input({
        message: "Enter the number of Pieces?",
    });
    const numberOfPieces = await numberOfPiecesInp.run();
    let choicesList = ["King", "Queen", "Rook", "Bishop", "Knight", "Pawn"];
    let piecesArray = [];
    for (i = 0; i < numberOfPieces; i++) {
        const pieceInp = new AutoComplete({
            name: "Piece",
            message: "Pick One Piece",
            choices: choicesList,
        });
        const piece = await pieceInp.run();

        const colorInp = new AutoComplete({
            name: "color",
            message: "Pick One Color",
            choices: ["B", "W"],
        });
        const color = await colorInp.run();

        const piecePositionInp = new Input({
            message: "Enter the position of Pieces? (Example: A1, B1, D4)",
        });
        const Position = await piecePositionInp.run();
        if (color === "B") {
            PircesPositionBlack.push(Position.toUpperCase());
        } else {
            PircesPositionWhite.push(Position.toUpperCase());
        }
        piecesArray.push({ piece, color, Position: Position.toUpperCase() });
    }
    piecesArray.map(({ piece, color, Position }) => {
        switch (piece) {
            case "King":
                KingMoves(Position, color);
                break;
            case "Queen":
                QueenMoves(Position, color);
                break;
            case "Rook":
                RookMoves(Position, color);
                break;
            case "Bishop":
                BishopMoves(Position, color);
                break;
            case "Knight":
                KnightMove(Position, color);
                break;
            case "Pawn":
                PawnMoves(Position, color);
                break;

            default:
                break;
        }
    });
}
main();
