import { checkForWinners, tableIsFull } from '.';

describe('Test utils functions', () => {
    it('Check for winners when no winners', () => {
        const winner = checkForWinners([
            [0, null, 1],
            [1, 1, 0],
            [0, 0, null]
        ]);
        expect(winner).toEqual(false);
    });

    it('Check for winners when winner exists (1)', () => {
        const winner = checkForWinners([
            [0, null, 1],
            [1, 0, 1],
            [0, 0, 0]
        ]);
        expect(winner).toEqual(0);
    });

    it('Check for winners when winner exists (2)', () => {
        const winner = checkForWinners([
            [0, null, 0],
            [1, 1, 1],
            [0, 0, null]
        ]);
        expect(winner).toEqual(1);
    });

    it('Check for winners when winner exists (3)', () => {
        const winner = checkForWinners([
            [0, null, 1],
            [0, 1, 0],
            [1, 0, null]
        ]);
        expect(winner).toEqual(1);
    });

    it('Check if table is full (1)', () => {
        const isFull = tableIsFull([
            [0, null, 1],
            [0, 1, 0],
            [1, 0, null]
        ]);
        expect(isFull).toEqual(false);
    });

    it('Check if table is full (2)', () => {
        const isFull = tableIsFull([
            [0, 1, 1],
            [0, 1, 0],
            [1, 0, 0]
        ]);
        expect(isFull).toEqual(true);
    });
});
