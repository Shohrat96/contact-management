import React from 'react';
import { Modal, Button } from 'antd';
import ModalInfoField from '../ModalInfoField/ModalInfoField';

const ModalInfo=({modalProps, title, modalClose})=>{
    const {visible, contact}=modalProps;
    console.log("contact: ",contact);
    const convertToFields={
      id:'Id',
      name: 'Name',
      surname:'Surname',
      fatherName:'Father name',
      email:'Email',
      position:'Position',
      age:'Age',
      gender:'Gender',
      keepUpdated:'Keep me updated'
    }
    return (
        <>
           <Modal
          visible={visible}
          title={title}
          onOk={modalClose}
          onCancel={modalClose}
          footer={[
            <Button key="submit" type="primary" onClick={modalClose}>
              Ok
            </Button>,
          ]}
        >
          {
            Object.keys(convertToFields).map((item, index)=>{

              let fieldName=convertToFields[item];
              let value=contact[item];
              if (item==='keepUpdated'){
                console.log("value: ",value);
                value=value===true || value.toString().toLowerCase()==="yes"?'Yes':'No';
              }
              return (
                <ModalInfoField key={index} name={fieldName} value={value}/>
              )
            })
          }
        </Modal> 
        </>
    )
}

export default ModalInfo