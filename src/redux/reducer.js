import { COOKS } from '../shared/Cooks';
import {ABOUT} from '../shared/About';
import {TESTIMONIAL} from '../shared/Testimonial'
import { MENU } from '../shared/Menu';

export const initialState = {
    cooks:COOKS,
    about:ABOUT,
    testimonial:TESTIMONIAL,
    Menu:MENU
};

export const Reducer = (state = initialState, action) => {
    return state;
};