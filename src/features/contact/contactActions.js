import axios from "axios";
import {
    CREATE_CONTACT_FAILURE,
    CREATE_CONTACT_REQUEST,
    CREATE_CONTACT_SUCCESS,
    DELETE_CONTACT_FAILURE,
    DELETE_CONTACT_REQUEST,
    DELETE_CONTACT_SUCCESS,
    GET_ALL_CONTACTS_FAILURE,
    GET_ALL_CONTACTS_REQUEST,
    GET_ALL_CONTACTS_SUCCESS,
} from "./contactTypes";




export const createContactRequest = () => {
    return {
        type: CREATE_CONTACT_REQUEST,
    }
}


export const createContactSuccess = (contact) => {
    return {
        type: CREATE_CONTACT_SUCCESS,
        payload: contact
    }
}

export const createContactError = (err) => {
    return {
        type: CREATE_CONTACT_FAILURE,
        payload: err.message
    }
}

export const getContactRequest = () => {
    return {
        type: GET_ALL_CONTACTS_REQUEST
    }
}

export const getContactSuccess = (contacts) => {
    return {
        type: GET_ALL_CONTACTS_SUCCESS,
        payload: contacts
    }
}

export const getContactFailure = (err) => {
    return {
        type: GET_ALL_CONTACTS_FAILURE,
        payload: err.message
    }
}



export const deleteContactRequest = () => {
    return {
        type: DELETE_CONTACT_REQUEST,
    }
}


export const deleteContactSuccess = (id) => {
    return {
        type: DELETE_CONTACT_SUCCESS,
        payload: id
    }
}

export const deleteContactFailure = (err) => {
    return {
        type: DELETE_CONTACT_FAILURE,
        payload: err.message

    }
}

// async tasks

export const createContact = (contact) => {
  return async (dispatch) => {
    try {
      console.log("contact is : ", contact);
        dispatch(createContactRequest())
      const res = await axios.post(`${process.env.REACT_APP_BACKEND_BASE_URL}/contact/create`, {
        brandId: "143c97fd-4369-4174-a86b-1d1bee42a468",
        email: contact.email,
        phoneNo: contact.phoneNo,
        firstName: contact.firstName,
        lastName: contact.lastName,
        tags: contact.tags,
        locationIds: [
            "ec218c00-4b5a-419b-ad3c-facde3fc296d"
        ]
    }, {
        headers: {
          accept: "application/json, text/plain, */*",
          "accept-language": "en-US,en;q=0.9,gu;q=0.8,hi;q=0.7",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIyYmY4ZmQ4NC05MWVjLTUwNDgtOWViOC1jZjJlZTlkNjZiNjQiLCJyb2xlIjoiTyIsImNsaWVudElkIjoiZWR1d2s5OXliMW91ODV3cTJsNTMzcHV2aHczcTU1M2tqeWczOHEyaiIsIm93bmVySWQiOiIyYmY4ZmQ4NC05MWVjLTUwNDgtOWViOC1jZjJlZTlkNjZiNjQiLCJpZCI6ImM2MWUxZDI3NzE3ZWQzN2UiLCJpYXQiOjE3MDQyNjc1MzksImV4cCI6MTcwOTQ1MTUzOX0.r1QvHWkHI4CO7Zo7ff6aWmhVZcuDFLsvDFu9K4_TQ5c",
          "content-type": "application/json",
          "sec-ch-ua":
            '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "x-api-key": "NVte8b23ke6Q1oPThpFmz9fswOdQPY0C8ZzwLV3c",
          xclientid: "eduwk99yb1ou85wq2l533puvhw3q553kjyg38q2j",
          xclientsecret: "eduwk99yb1ou85wq2l533puvhw3q553kjyg38q2j",
          Referer: "https://review-dev.socialpilot.co/",
          "Referrer-Policy": "strict-origin-when-cross-origin",
        }})

        dispatch(createContactSuccess(res?.data?.response))
      console.log("here data is this : ", res?.data);
    } catch (err) {
      dispatch(createContactError(err));
      console.log(err);
    }
  };
};

export const getContacts = () => {
  return async (dispatch) => {
    try {

        dispatch(getContactRequest())
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_BASE_URL}/contact/list?brandId=143c97fd-4369-4174-a86b-1d1bee42a468&page=1&q=&limit=50&sort=name.ASC&createdBy=`,
        {
          headers: {
            accept: "application/json, text/plain, */*",
            authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIyYmY4ZmQ4NC05MWVjLTUwNDgtOWViOC1jZjJlZTlkNjZiNjQiLCJyb2xlIjoiTyIsImNsaWVudElkIjoiZWR1d2s5OXliMW91ODV3cTJsNTMzcHV2aHczcTU1M2tqeWczOHEyaiIsIm93bmVySWQiOiIyYmY4ZmQ4NC05MWVjLTUwNDgtOWViOC1jZjJlZTlkNjZiNjQiLCJpZCI6ImM2MWUxZDI3NzE3ZWQzN2UiLCJpYXQiOjE3MDQyNjc1MzksImV4cCI6MTcwOTQ1MTUzOX0.r1QvHWkHI4CO7Zo7ff6aWmhVZcuDFLsvDFu9K4_TQ5c",
            "content-type": "application/json",
            "sec-ch-ua":
              '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"Windows"',
            "x-api-key": "NVte8b23ke6Q1oPThpFmz9fswOdQPY0C8ZzwLV3c",
            xclientid: "eduwk99yb1ou85wq2l533puvhw3q553kjyg38q2j",
            xclientsecret: "eduwk99yb1ou85wq2l533puvhw3q553kjyg38q2j",
            Referer: "https://review-dev.socialpilot.co/",
            "Referrer-Policy": "strict-origin-when-cross-origin",
          },
          body: null,
          method: "GET",
        }
      );

      const data = await res.json();

      console.log("data for contacts : ", data?.response);

      dispatch(getContactSuccess(data?.response?.list))
    } catch (err) {
      dispatch(getContactFailure(err))
      console.log(err);
    }
  };
};


export const deleteContact = (id) => {
    return async(dispatch) => {
        console.log("delete contact called");
        console.log("id of delete id : ", id);
        try{
            dispatch(deleteContactRequest());
            const res = await axios.delete(`${process.env.REACT_APP_BACKEND_BASE_URL}/contact/delete`,{
                headers: {
                    "accept": "application/json, text/plain, */*",
                    "accept-language": "en-US,en;q=0.9,gu;q=0.8,hi;q=0.7",
                    "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIyYmY4ZmQ4NC05MWVjLTUwNDgtOWViOC1jZjJlZTlkNjZiNjQiLCJyb2xlIjoiTyIsImNsaWVudElkIjoiZWR1d2s5OXliMW91ODV3cTJsNTMzcHV2aHczcTU1M2tqeWczOHEyaiIsIm93bmVySWQiOiIyYmY4ZmQ4NC05MWVjLTUwNDgtOWViOC1jZjJlZTlkNjZiNjQiLCJpZCI6ImM2MWUxZDI3NzE3ZWQzN2UiLCJpYXQiOjE3MDQyNjc1MzksImV4cCI6MTcwOTQ1MTUzOX0.r1QvHWkHI4CO7Zo7ff6aWmhVZcuDFLsvDFu9K4_TQ5c",
                    "content-type": "application/json",
                    "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\", \"Google Chrome\";v=\"120\"",
                    "sec-ch-ua-mobile": "?0",
                    "sec-ch-ua-platform": "\"Windows\"",
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "same-site",
                    "x-api-key": "NVte8b23ke6Q1oPThpFmz9fswOdQPY0C8ZzwLV3c",
                    "xclientid": "eduwk99yb1ou85wq2l533puvhw3q553kjyg38q2j",
                    "xclientsecret": "eduwk99yb1ou85wq2l533puvhw3q553kjyg38q2j",
                    "Referer": "https://review-dev.socialpilot.co/",
                    "Referrer-Policy": "strict-origin-when-cross-origin"
                },
                data: {
                    contactId: [id[0]],
                    brandId: id[1]
                }
            })


            console.log("res in delete contact : ", res?.data);
            dispatch(deleteContactSuccess(id[0]))

        }
        catch(err){
            dispatch(deleteContactFailure(err))
            console.log(err);
        }
    }
}
