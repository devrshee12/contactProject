import { CREATE_CONTACT_FAILURE, CREATE_CONTACT_REQUEST, CREATE_CONTACT_SUCCESS, DELETE_CONTACT_FAILURE, DELETE_CONTACT_REQUEST, DELETE_CONTACT_SUCCESS, GET_ALL_CONTACTS_FAILURE, GET_ALL_CONTACTS_REQUEST, GET_ALL_CONTACTS_SUCCESS, } from "./contactTypes"

const initalState = {
    contacts: [],
    allContacts: [],
    creatingContact: false,
    createContactError: null,
    gettingAllContacts: false,
    getContactsError: null,
    deletingContact: false,
    deleteContactError: null

}

const contactReducer = (state = initalState, action) => {
    switch(action.type){
        case CREATE_CONTACT_REQUEST:
            return {
                ...state, 
                creatingContact: true,
                createContactError: null,

            }
        case CREATE_CONTACT_SUCCESS:
            return {
                ...state, 
                creatingContact: false,
                contacts: action.payload
            }

        case CREATE_CONTACT_FAILURE:
            return {
                ...state,
                creatingContact: false,
                createContactError: action.payload,
            }
        case GET_ALL_CONTACTS_REQUEST:
            return {
                ...state,
                gettingAllContacts: true,
                getContactsError: null
            }
        case GET_ALL_CONTACTS_SUCCESS:
            return {
                ...state,
                gettingAllContacts: false,
                allContacts: action.payload
            }
        
        case GET_ALL_CONTACTS_FAILURE:
            return {
                ...state, 
                gettingAllContacts: false,
                getContactsError: action.payload
            }
        
        case DELETE_CONTACT_REQUEST: 
            return {
                ...state,
                deletingContact: true,
                deleteContactError: null,
            }
        
        case DELETE_CONTACT_SUCCESS:
            return {
                ...state, 
                deletingContact: false,
                allContacts: state.allContacts.filter((contact) => {
                    return contact.contactId !== action.payload
                })
            }
        
        case DELETE_CONTACT_FAILURE:
            return {
                ...state,
                deletingContact: false,
                deleteContactError: action.payload
            }
        
        default:
            return state
    }
}


export default contactReducer