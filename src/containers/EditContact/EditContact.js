import React, { useContext} from 'react';
import { GlobalContext } from '../../context/GlobalState';
import 'antd/dist/antd.css';
import styles from './EditContact.module.scss';
import {useHistory } from 'react-router-dom';
import { checkFormUpdated } from '../../utils/functions';
import {CustomForm} from '../../components/index'
import {EDIT_CHANGE_OK, EDIT_NO_CHANGE, notify} from '../../utils/toastMessage'


const EditContact=(props)=>{

    let history=useHistory();
    const {contacts, editContact}=useContext(GlobalContext);
    const currentUserId = props.match.params.id;
    const contactId = currentUserId;
    const selectedContact = contacts.find(contact =>contact.id === contactId);

  const onFinish = (value) => {

    if (checkFormUpdated(selectedContact, value)){
        notify(EDIT_CHANGE_OK)
        editContact({...value, id:selectedContact.id});
        history.goBack();
    } else {
        notify(EDIT_NO_CHANGE);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

    return (
        <div>
            <h1 className={styles.sectionTitle}>Edit Contact</h1>
            <CustomForm 
            onFinish={onFinish} 
            onFinishFailed={onFinishFailed}
            formInitialValues={selectedContact}
            />
        </div>
    )
}

export default EditContact