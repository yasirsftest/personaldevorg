import { LightningElement, wire, api } from 'lwc'
import { getRecord, getFieldValue, getFieldDisplayValue } from 'lightning/uiRecordApi'
import NAME_FIELD from '@salesforce/schema/Account.Name'
import OWNER_NAME_FIELD from '@salesforce/schema/Account.Owner.Name'
import ANNUAL_REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue'

export default class GetRecordUIDemo extends LightningElement {

    @api recordId
    name
    owner
    revenue

    namefield
    ownerfield
    revenuefield

    namedisplay
    ownerdispay
    revenuedispaly
    @wire(getRecord, {recordId : '$recordId', fields:[NAME_FIELD, OWNER_NAME_FIELD, ANNUAL_REVENUE_FIELD]})
    getRecordDetails({data}){
        if(data){
            this.revenue = data.fields.AnnualRevenue.displayValue ? data.fields.AnnualRevenue.displayValue : data.fields.AnnualRevenue.value
            this.name = data.fields.Name.displayValue ? data.fields.Name.displayValue : data.fields.Name.value
            this.owner = data.fields.Owner.displayValue ? data.fields.Owner.displayValue : data.fields.Owner.value 

            //get field value
            this.namefield = getFieldValue(data,NAME_FIELD)
            this.ownerfield = getFieldValue(data,OWNER_NAME_FIELD)
            this.revenuefield = getFieldValue(data,ANNUAL_REVENUE_FIELD)

            //get field display
            this.namedisplay = getFieldDisplayValue(data,NAME_FIELD)
            this.ownerdispay = getFieldDisplayValue(data,OWNER_NAME_FIELD)
            this.revenuedispaly = getFieldDisplayValue(data,ANNUAL_REVENUE_FIELD)

        }
    }
}