// chessboard

const size = 8;
let board = '';

for (let x = 1; x <= size; x++) {
    for (let y = 8; y > 0; y--) {
        (y - x) % 2 == 0 ? board += ' ' : board += '#';
    };
    board += '\n';
};

console.log(board);