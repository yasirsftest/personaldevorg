import { LightningElement, wire } from 'lwc'

import getContactList from '@salesforce/apex/ContactHandler.getContactList'

export default class LwcWireDemo1 extends LightningElement {

    ContactContainer 
    @wire(getContactList)
    getRecords({data,error}){
        if(data){
            
            this.ContactContainer = [...data]
            console.log(this.ContactContainer)
        }
        if(error){

        }
    }
}