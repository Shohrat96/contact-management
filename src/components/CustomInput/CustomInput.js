import React from 'react';
import { Form } from 'antd';


export const CustomInput=(props)=>{
    const {inputName, inputLabel, required, children, type}=props;
    return (
        <Form.Item
                label={inputLabel}
                name={inputName}
                rules={[
                {
                    required: required,
                    message: `Please input ${inputLabel}!`,
                    type:type
                },
                ]}
                {...props}
            >
                {children}
            </Form.Item>
    )
}

