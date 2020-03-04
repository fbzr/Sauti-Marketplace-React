import { userMessages } from "../messages";

export function users(state = {}, action) {
    switch (action.type) {
        case userMessages.GETALL_REQUEST:
            return{
                loading: true
            };
            case userMessages.GETALL_SUCCESS:
                return{
                    items: action.user
                };
                case userMessages.DELETE_REQUEST:
                    return{
                        ...state,
                        items: state.items.map(user => 
                            user.id === action.id? { ...user, deleting: true }
                            : user
                            )
                    };
                    case userMessages.DELETE_SUCCESS:
                        return {
                            items: state.items.filter(user => user.id !== action.id)
                        };
                        case userMessages.DELETE_FAILURE:
                            return{
                                ...state,
                                items: state.items.map(user => {
                                    if (user.id === action.id) {
                                        const { deleting, ...userCopy } = user;
                                        return { ...userCopy, deleteError: action.error};
                                    }
                                    return user;
                                })
                            };
                            default:
                                return state
    }
}