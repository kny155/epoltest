export const CHANGE_FILTER = 'CHANGE_FILTER';
export const CHOOSE_ORDER = 'CHOOSE_ORDER';

export function changeFilter(text) {
    return {
        type: CHANGE_FILTER,
        text
    }
}

export function chooseOrder(field) {
    return {
        type: CHOOSE_ORDER,
        field
    }
}
