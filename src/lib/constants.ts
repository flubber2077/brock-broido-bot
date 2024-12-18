export const LOCAL = !!process.env.LOCAL;
export const RUN_NUMBER = process.env.POST_RUN_NUMBER;

// POST GENERATION
// Hard limits
export const CHAR_LIMIT = 300; // unused

// Artistic choices
export const LINE_AMOUNT = 6;
export const LINE_LENGTH = 40;
export const CHAR_PROBABILITY = 0.08; // probability there is a character instead of empty space, between 0 and 1

export const STAR_CHARACTERS = `*.··˚⊹⋆✦✧✫✵✹✺`;
