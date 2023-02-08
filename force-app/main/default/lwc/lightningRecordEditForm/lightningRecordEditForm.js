import { LightningElement } from 'lwc';
import CONTACT_OBJECT from '@salesforce/schema/Contact'
import NAME_FIELD from '@salesforce/schema/Contact.Name'
import PHONE_FIELD from '@salesforce/schema/Contact.Phone'
import EMAIL_FIELD from '@salesforce/schema/Contact.Email'
import ACCOUNT_FIELD from '@salesforce/schema/Contact.AccountId'
import TITLE_FIELD from '@salesforce/schema/Contact.Title'
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class LightningRecordEditForm extends LightningElement {
    contactobj = CONTACT_OBJECT
    fields = {
        namef:NAME_FIELD,
        phonef:PHONE_FIELD,
        emailf:EMAIL_FIELD,
        accf:ACCOUNT_FIELD,
        titlef:TITLE_FIELD
    }
    clickhandler(event){
        const ToastEvent = new ShowToastEvent({
            title:"Record Created",
            message:"Record has been Created :"+event.detail.id,
            variant:"success"
        })
        this.dispatchEvent(ToastEvent)
    }
    resetHandler(event){
        const inputvalues = this.template.querySelectorAll('lightning-input-field')
         if(inputvalues){
            Array.from(inputvalues).forEach(item=>{
            item.reset()
            })
        }
    }
}