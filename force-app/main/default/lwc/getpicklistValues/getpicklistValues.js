import { LightningElement, wire } from 'lwc';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'
import TYPE_FIELD from '@salesforce/schema/Account.Type'

export default class GetpicklistValues extends LightningElement {

    defaultRecordTypeIds
    accObjDetails = ACCOUNT_OBJECT
    industry = INDUSTRY_FIELD
    typeOptions
    typefield = TYPE_FIELD
    selectedType
    industryOptions

    @wire(getObjectInfo, {objectApiName:'$accObjDetails'})
    getdetails(response){
        if(response.data){
            this.defaultRecordTypeIds = response.data.defaultRecordTypeId
        }
    }
    
    @wire(getPicklistValues,{recordTypeId:'$defaultRecordTypeIds', fieldApiName:'$industry'})
    getpicklistvalues1(response){
        if(response.data){
            this.industryOptions = [...this.generatePicklist(response.data)]
        }
        if(response.error){

        }
    }

    
    @wire(getPicklistValues,{recordTypeId:'$defaultRecordTypeIds', fieldApiName:'$typefield'})
    getpicklistvalues(response){
        if(response.data){
            this.typeOptions = [...this.generatePicklist(response.data)]
        }
        if(response.error){

        }
    }


    value = '';
    selectedIndustry
    generatePicklist(data) {
        return data.values.map(item=>({label:item.label, value:item.value}))
    }

    handleChangeindustry(event) {
        console.log(event.target)
        this.selectedIndustry = event.detail.value;
    }

    handleChangetype(event) {
        console.log(event.target)
        this.selectedType = event.detail.value;
    }
}