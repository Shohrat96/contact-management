import React, { useContext, useState} from 'react'
import styles from './CreateContact.module.scss'
import 'react-toastify/dist/ReactToastify.css';
import { GlobalContext } from '../../context/GlobalState';
import {useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import {CustomForm, CustomButton} from '../../components/index'
import {NEW_CONTACT_ADDED, NEW_CONTACT_FAIL, notify} from '../../utils/toastMessage'
import CSVReader from "react-csv-reader";
import { CSVLink } from "react-csv";

const csvTemplate= [
    ["name", "surname", "fatherName", "email", "position", "age", "gender", "keepUpdated"],
  ];
const CreateContact = () => {
    let history=useHistory()
    const {addContact}=useContext(GlobalContext)
    const [importedData, setImportedData]=useState([]);

    const onFinish = (newContact) => {
        addContact({...newContact,id:uuidv4()})
        notify(NEW_CONTACT_ADDED);
        history.goBack();
    };
    const onImportFromField=(dataArr)=>{
        let result=[];
        for (let i=1;i<dataArr.length-1;i++){
            let obj={};
            for (let j=0;j<dataArr[0].length;j++){
                obj[dataArr[0][j]]=dataArr[i][j];
            }
            result.push(obj);
        }
        try {
            result.forEach(item=>{
                addContact({...item, age:Number(item.age), id:uuidv4()});
            })
        } catch (error) {
            console.log("error: ",error);
        }
        notify(NEW_CONTACT_ADDED);
        history.goBack();

    }
    const onFinishFailed = () => {
        notify(NEW_CONTACT_FAIL);
    };

    return (
        <div className={styles.formContainer}>
            <h1 className={styles.title}>Create Contact</h1>
            <div className={styles.mainContent}>
                <div className={styles.dataUpload}>
                    <CSVReader 
                    label={"Import from .CSV file"}
                    cssClass={styles.uploadBtn} 
                    cssInputClass={styles.fileUploadInput} 
                    onFileLoaded={(data) =>setImportedData(data)}
                    />
                    <CustomButton title={"Load"} onClick={()=>onImportFromField(importedData)}/>
                        <div className={styles.downloadTemplateWrap}>
                            <CSVLink data={csvTemplate} filename={"template.csv"}>
                                Click to get the CSV template to fill.
                            </CSVLink>;
                            <div className={styles.templateRules}>
                                <b>Some rules: Don't modify already-filled header fields!</b>
                                <br/>
                                <b>If you want the person to receive emails from us, write "yes" in the "keepUpdated field, otherwise, leave blank!</b>
                                <b>Don't change file format!</b>
                            </div>
                        </div>
                </div>
                <CustomForm 
                onFinish={onFinish} 
                onFinishFailed={onFinishFailed}
                />
            </div>
        </div>
    );
};

export default CreateContact