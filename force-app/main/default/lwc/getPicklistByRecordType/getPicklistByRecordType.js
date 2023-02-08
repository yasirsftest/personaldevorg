import { LightningElement, wire } from 'lwc';
import { getObjectInfo, getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'

export default class GetPicklistByRecordType extends LightningElement {

    accObjDetails = ACCOUNT_OBJECT
    objectDetails
    @wire(getObjectInfo, {objectApiName:'$accObjDetails'})
    getdetails(response){
        if(response.data){
            this.objectDetails = response.data 
        }
        if(response.error){

        }
    }
    AccountSourceOptions
    CleanStatusOptions
    @wire(getPicklistValuesByRecordType, {objectApiName:ACCOUNT_OBJECT, recordTypeId:'$objectDetails.defaultRecordTypeId'})
    getpicklistvalue(response){
        if(response.data){
            console.log(response.data)
            this.AccountSourceOptions = this.generatePicklistValues(response.data.picklistFieldValues.AccountSource)
            this.CleanStatusOptions = this.generatePicklistValues(response.data.picklistFieldValues.CleanStatus)
        }
        if(response.error){

        }
    }

    generatePicklistValues(data){
        if(data){
            return data.values.map(item=>({label:item.label,value:item.value})) 
        }
    }
    selectedAccountSource
    selectedCleanStatus
    handleChange(event){
        const {name,value} = event.target
        console.log(event.target.name)
        if(name == 'AccountSource')
            this.selectedAccountSource = value
        if(name == 'CleanStatus')
            this.selectedCleanStatus = value
        // console.log(event.target.name)
        // if(event.target.name == 'AccountSource')
        //     this.selectedAccountSource = event.target.value
        //     if(event.target.name == 'CleanStatus')
        //     this.selectedCleanStatus = event.target.value
    }
}