import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import NAME_FIELD from '@salesforce/schema/Account.Name'
import ANNUAL_REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue'
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'
import TYPE_FIELD from '@salesforce/schema/Account.Type'
import { ShowToastEvent } from 'lightning/platformShowToastEvent';


export default class LightningRecordForm extends LightningElement {
    objectname = ACCOUNT_OBJECT
    fields = [NAME_FIELD, ANNUAL_REVENUE_FIELD, INDUSTRY_FIELD, TYPE_FIELD]

    successHandler(event){
        console.log(event.detail.id)

        const ToastEvent = new ShowToastEvent({
            title:"Record Created",
            message:"Record has been Created :"+event.detail.id,
            variant:"success"
        })
        this.dispatchEvent(ToastEvent)

    }

    ShowToastmessage(event){

        const ToastEvent = new ShowToastEvent({
            title:'Record Created',
            message:'Record has been Created :',
            variant:'success'
        })
        this.dispatchEvent(ToastEvent)

    }

}