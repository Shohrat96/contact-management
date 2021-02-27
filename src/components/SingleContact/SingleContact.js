import React, { useContext, useState } from 'react';
import { Link} from 'react-router-dom';

import styles from './SingleContact.module.scss';
import {InfoCircleOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { GlobalContext } from '../../context/GlobalState';
import { Modal } from 'antd';


const SingleContact=({contact, infoClick})=>{
    const {removeContact}=useContext(GlobalContext);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
      };
    const handleOk = () => {
        removeContact(contact.id)
        setIsModalVisible(false);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
      };
    const removeContactHandler=()=>{
        showModal()
    };

    const {name, surname, fatherName, position}= contact;
    return (
        <div className={styles.container}>
            <Modal centered title="Please Confirm" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <p>Delete the contact?</p>
            </Modal>
            <div className={styles.contactDetails}>
                <div className={styles.nameWrapper}>
                    <div className={styles.name}>
                        {name}
                    </div>
                    <div className={styles.surname}>
                        {surname}
                    </div>
                    <div className={styles.fatherName}>
                        {fatherName}
                    </div>
                </div>
                <div className={styles.speciality}>
                    {position}
                </div>
            </div>
            <div className={styles.operations}>
                <InfoCircleOutlined onClick={infoClick} className={styles.infoCircle}/>
                <Link to={`/contacts/edit/${contact.id}`}  style={{textDecoration:'none', color:'black'}}>
                    <EditOutlined className={styles.editIcon}/>
                </Link>
                <DeleteOutlined className={styles.trashIcon} onClick={removeContactHandler}/>
            </div>

        </div>
    )
}

export default SingleContact