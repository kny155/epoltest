export const CHANGE_DATA = 'CHANGE_DATA';
export const TOGGLE_INACTIVE = 'TOGGLE_INACTIVE';
export const TOGGLE_DELETE = 'TOGGLE_DELETE';
export const TOGGLE_EDIT = 'TOGGLE_EDIT';


export function changeData(id, text, field) {
    return {
        type: CHANGE_DATA,
        id,
        text,
        field
    }
}

export function toggleInactive(id) {
    return {
        type: TOGGLE_INACTIVE,
        id
    }
}

export function toggleDelete(id, data) {
    return {
        type: TOGGLE_DELETE,
        id,
        data
    }
}

export function toggleEdit(id, data) {
    return {
        type: TOGGLE_EDIT,
        id,
        data
    }
}