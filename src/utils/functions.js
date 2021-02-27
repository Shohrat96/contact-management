export const checkFormUpdated=(formBefore, formAfter)=>{
    const keys = Object.keys(formBefore);
    
    for (let key of keys) {
        if (formAfter[key]){
            if (formBefore[key] !== formAfter[key]) {
                return true;
            }
        }
        
    }

    return false;

}