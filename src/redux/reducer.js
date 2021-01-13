import { COOKS } from '../shared/Cooks';
import {ABOUT} from '../shared/About';
import {TESTIMONIAL} from '../shared/Testimonial'
import { MENU } from '../shared/Menu';
import {REVIEW} from '../shared/Review';

export const initialState = {
    cooks:COOKS,
    about:ABOUT,
    testimonial:TESTIMONIAL,
    menu:MENU,
    review:REVIEW
};

export const Reducer = (state = initialState, action) => {
    return state;
};