import { palette } from 'sc-companion';

export default {
    color: {
        background: 'white',
        text: '#2E2E2E',
        gray: palette.donkey,
        base: palette.pictonBlue2,
        skill: '#4D4D4D',
    },
    grid: {
        resolution: 12,
        breakpoints: {
            xs: [null, 767],
            sm: [768, 991],
            md: [992, 1199],
            lg: [1200, null],
        },
    },
};
