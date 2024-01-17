import { CREATE_CONTACT_FAILURE, CREATE_CONTACT_REQUEST, CREATE_CONTACT_SUCCESS, DELETE_CONTACT_FAILURE, DELETE_CONTACT_REQUEST, DELETE_CONTACT_SUCCESS, GET_ALL_CONTACTS_FAILURE, GET_ALL_CONTACTS_REQUEST, GET_ALL_CONTACTS_SUCCESS, GET_SPECIFIC_CONTACT_FAILURE, GET_SPECIFIC_CONTACT_REQUEST, GET_SPECIFIC_CONTACT_SUCCESS, UPDATE_SPECIFIC_CONTACT_FAILURE, UPDATE_SPECIFIC_CONTACT_SUCCESS, UPDATE_SPECIFIC_CONTACT_REQUEST} from "./contactTypes"

const initalState = {
    contacts: null,
    allContacts: [],
    creatingContact: false,
    createContactError: null,

    gettingAllContacts: false,
    getContactsError: null,

    deletingContact: false,
    deleteContactError: null,

    gettingSpecificContact: false,
    getSpecificContactError: null,
    specificContact: {},


    updatingSpecificContact: false,
    updateSpecificError: null

}

const contactReducer = (state = initalState, action) => {
    switch(action.type){
        case CREATE_CONTACT_REQUEST:
            return {
                ...state, 
                creatingContact: true,
                createContactError: null,
                contacts: null

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
        case GET_SPECIFIC_CONTACT_REQUEST:
            return {
                ...state, 
                gettingSpecificContact: true,
                getSpecificContactError: null
            }
        case GET_SPECIFIC_CONTACT_SUCCESS:
            return {
                ...state, 
                gettingSpecificContact: false,
                specificContact: action.payload

            }
        case GET_SPECIFIC_CONTACT_FAILURE:
            return {
                ...state, 
                gettingSpecificContact: false,
                getSpecificContactError: action.payload
            }
        case UPDATE_SPECIFIC_CONTACT_REQUEST:
            return {
                ...state,
                updatingSpecificContact: true,
                updateSpecificError: null
            }
        
        case UPDATE_SPECIFIC_CONTACT_SUCCESS:
            const gotContact = action.payload
            return {
                ...state, 
                updatingSpecificContact: false,
                allContacts: state.allContacts.map((contact) => {
                    if(contact.contactId === gotContact.contactId){
                        return {...contact, email: gotContact.email, firstName: gotContact.firstName, lastName: gotContact.lastName, phoneNo: gotContact.phoneNo.substr(2), tags: gotContact.tags}
                    }
                    else{
                        return contact
                    }
                })
            } 
        case UPDATE_SPECIFIC_CONTACT_FAILURE:
            return {
                ...state, 
                updatingSpecificContact: false,
                updateSpecificError: action.payload
            }
        
        
        
        default:
            return state
    }
}


export default contactReducer