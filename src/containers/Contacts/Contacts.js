import React, { useContext, useState } from 'react';
import { GlobalContext } from "../../context/GlobalState";
import styles from './Contacts.module.scss';
import SingleContact from '../../components/SingleContact/SingleContact';
import ModalInfo from '../../components/ModalInfo/ModalInfo';
import { CSVLink } from "react-csv";
import {DownloadOutlined} from '@ant-design/icons'

const headers=["id", "name", "surname", "fatherName", "email", "position", "age", "gender", "keepUpdated"];

const Contacts=()=>{
    const {contacts}=useContext(GlobalContext);
    const [modalProps, setModalProps]=useState({
        visible:false,
        contact:null,
    })
    const handleInfoClick=(contact)=>{
        setModalProps(prevState=>({
            ...prevState,
            visible:true,
            contact:contact
        }))
    }
    const modalClose=()=>{
        setModalProps(prevState=>({
            ...prevState,
            visible:false
        }))
    };
    
    return (
        <div className={styles.container}>
            {modalProps.contact&&
            <ModalInfo
            modalProps={modalProps}
            title={"Contact Details"}
            modalClose={modalClose}
            />}
            <h1 className={styles.sectionTitle}>Contacts list</h1>
            <div className={styles.extractToCSV}>
                <p className={styles.extractLabel}>Click to save as a CSV file</p>
                <CSVLink data={contacts} headers={headers} filename={"contracts-extract.csv"}>
                    <DownloadOutlined style={{fontSize:"25px"}} className={styles.downloadIcon}/>
                </CSVLink>
            </div>


            {
                contacts.length>0? (
                    <>
                        {
                            contacts.map(contact=>(
                                <SingleContact 
                                contact={contact} 
                                key={contact.id} 
                                infoClick={()=>handleInfoClick(contact)}/>
                            ))
                        }
                    </>
                ):<div>NO DATA</div>
            }
        </div>
    )
}

export default Contacts