import { random } from 'lodash';

const colors = ['green', 'yellow', 'red', 'blue', 'purple', 'orange'];

export const pickColors = () => {
    const index1 = random(0, colors.length - 1);
    let index2 = random(0, colors.length - 1);
    while (index1 === index2) {
        index2 = random(0, colors.length - 1);
    }
    return ({
        0: colors[index1],
        1: colors[index2]
    });
};
