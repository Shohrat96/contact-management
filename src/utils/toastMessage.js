import {toast } from 'react-toastify';
export const NEW_CONTACT_ADDED='NEW_PRODUCT_ADDED';
export const EDIT_NO_CHANGE='EDIT_NO_CHANGE';
export const NEW_CONTACT_FAIL='NEW_PRODUCT_FAIL';
export const EDIT_CHANGE_OK='EDIT_CHANGE_OK';

export const notify = (type) => {
      switch (type){
        case NEW_CONTACT_ADDED:
          toast.success("Product added successfully");
          break
        case EDIT_NO_CHANGE:
          toast.error("No change made")
          break
        case EDIT_CHANGE_OK:
          toast.success("Contact has been changed")
          break
        case NEW_CONTACT_FAIL:
          toast.error("New contact couldn't be added");
          break
        default :
          return
      }
};
