import { LightningElement, wire } from 'lwc';
import Id from '@salesforce/user/Id'
import {getRecord} from 'lightning/uiRecordApi'
import NAME_FIELD from '@salesforce/schema/User.Name'
import EMAIL_FIELD from '@salesforce/schema/User.Username'

const fields = [NAME_FIELD, EMAIL_FIELD ]
export default class WireDemoUserDetails extends LightningElement {
    userid = Id
    
    userDetails
    @wire(getRecord, {recordId:'$userid', fields})
    userDetailsHandler(response){
        //alert(JSON.stringify(response))
        if(response.data){
            this.userDetails = response.data 
        }
    }
    
    
    @wire(getRecord, {recordId:'0052w000009Mo7hAAC', fields})
    userDetailsRecord
}