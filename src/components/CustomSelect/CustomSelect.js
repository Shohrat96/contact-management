import React from 'react';
import {Form, Select} from 'antd';

const {Option}=Select;

export const CustomSelect=(props)=>{
    const {inputName, inputLabel, required, optionsArr}=props;
    
    return (
        <Form.Item
                label={inputLabel}
                name={inputName}
                initialValue={optionsArr&&optionsArr[0]}
                rules={[
                {
                    required: required,
                    message: `Please input ${inputLabel}!`,
                    
                },
                ]}
                {...props}
            >
                <Select>
            {
                optionsArr.map((option, index)=>{
                    return (
                        <Option
                        value={option.toLowerCase()}
                        key={index}
                        >
                            {option[0].toUpperCase()+option.slice(1).toLowerCase()}
                        </Option>
                    )
                })
            }

        </Select>
            </Form.Item>
        
    )
}

