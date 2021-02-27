import React from 'react';
import {Form, Radio} from 'antd';


export const CustomRadio=(props)=>{
    const {inputName, inputLabel, required, options}=props;

    return (
        <Form.Item
        label={inputLabel}
        name={inputName}
        initialValue={options&&options[0]}
        rules={[
        {
            required: required,
            message: `Please input ${inputLabel}!`,
        },
        ]}
        {...props}
    >
        <Radio.Group>
            {
                options.map((option, index)=>{
                    return (
                        <Radio 
                        value={option.toLowerCase()}
                        key={index}                        
                        >
                            {option[0].toUpperCase()+option.slice(1).toLowerCase()}

                        </Radio>
                    )
                })
            }
        </Radio.Group>
    </Form.Item>
        
    )
}

