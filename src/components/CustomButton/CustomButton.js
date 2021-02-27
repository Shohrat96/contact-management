import React from 'react';
import {Button} from 'antd';
// import styles from './CustomButton.module.scss';

export const CustomButton=(props)=>{
    const {title, type, htmlType}=props;
    //let btnClassName=type==="primary"?"btnPrimary":"btnNormal";
    return (
        <Button type={type} htmlType={htmlType} {...props}>
            {title}
        </Button>
    )
}

