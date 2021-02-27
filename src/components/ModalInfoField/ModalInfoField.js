import React from 'react';
import styles from './ModalInfoField.module.scss';

const ModalInfoField=({name, value})=>{
    return (
        <div className={styles.fieldWrapper}>
            <div className={styles.fieldName}>
                {name}:
            </div>
            <div className={styles.fieldValue}>
                {value}
            </div>
        </div>
    )
}

export default ModalInfoField