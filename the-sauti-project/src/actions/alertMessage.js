import { alertMessage } from "../messages";

export const alertInfo = {
    success,
    error,
    clear
};

function success(message) {
    return { type: alertMessage.SUCCESS, message }
}

function error(message) {
    return {type: alertMessage.ERROR, message }
}

function clear(){
    return { type: alertMessage.CLEAR };
}