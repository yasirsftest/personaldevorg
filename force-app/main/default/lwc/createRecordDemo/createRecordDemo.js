import { createRecord, wire } from 'lightning/uiRecordApi';
import { LightningElement } from 'lwc';
import CONTACT_OBJECT from '@salesforce/schema/Contact'
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class CreateRecordDemo extends LightningElement {
     formField = {}

     changeHandler(event){
        //const {name,value} = event.target
        this.formField[event.target.name] = event.target.value
        console.log(JSON.stringify(this.formField))
     }

     createContact(event){
        const recordInput = {'apiName':CONTACT_OBJECT.objectApiName, fields:this.formField}
        console.log(JSON.stringify(recordInput))

        createRecord(recordInput).then(result=>{
            this.toastMessage('Successfully Created', 'Record has been Created','success')
            this.template.querySelector('createForm').reset()
        }).catch(error=>{
            this.toastMessage('Error Occured', error.body.message,'error')
        })
     }

     toastMessage(ptitle,pmessage,pvariant){
        const ToastEvent = new ShowToastEvent({
            title:ptitle,
            message:pmessage,
            variant:pvariant
        })
        this.dispatchEvent(ToastEvent)
     }

}