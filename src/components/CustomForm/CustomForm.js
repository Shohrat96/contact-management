import React from 'react'
import { Form, Input, Checkbox, InputNumber } from 'antd';
import {CustomInput, CustomButton, CustomSelect, CustomRadio} from '../index';
import styles from './CustomForm.module.scss';
import {genders, positions} from '../../utils/constants';

export const CustomForm=(props)=>{
    const {onFinish, onFinishFailed, formInitialValues}=props;
    console.log("initials: ",formInitialValues);
    const layout = {
        labelCol: {
          span: 7,
        },
        wrapperCol: {
          span: 16,
        },
      };
      const tailLayout = {
        wrapperCol: {
          offset: 8,
          span: 16,
        },
      };
    
    return (
        <Form
            {...layout}
            name="basic"
            initialValues={formInitialValues?{...formInitialValues, size:'large', keepUpdated:(formInitialValues.keepUpdated==="yes"||formInitialValues.keepUpdated===true)?true:false}:{keepUpdated:true, size:'large'}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            className={styles.form}
            size={"large"}
            labelAlign={"left"}
            >
            <CustomInput inputName="name" inputLabel="Name" required>
                <Input/>
            </CustomInput>
            <CustomInput inputName="surname" inputLabel="Surname" required>
                <Input/>
            </CustomInput>
            <CustomInput inputName="fatherName" inputLabel="Father Name" required>
                <Input/>
            </CustomInput>
            <CustomInput inputName="email" inputLabel="Email" type="email" required>
                <Input/>
            </CustomInput>
            <CustomInput inputName="age" inputLabel="Age" type="number" required>
                <InputNumber/>
            </CustomInput>
            <CustomSelect 
                optionsArr={positions}
                inputName="position"
                inputLabel="Position"
                required
            />
            
            <CustomRadio 
                options={genders}
                inputName="gender"
                inputLabel="Gender"
                required
            />

            <Form.Item {...tailLayout} name="keepUpdated" valuePropName="checked">
                <Checkbox>Keep me updated</Checkbox>
            </Form.Item>

            <CustomInput {...tailLayout}>
                <CustomButton 
                title={props.formInitialValues?"Edit contact":"Create contact"} 
                type={"primary"} 
                htmlType="submit"/>
            </CustomInput>
        </Form>
    )
}