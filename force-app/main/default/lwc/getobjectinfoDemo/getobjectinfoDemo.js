import { LightningElement, wire } from 'lwc';
import { getObjectInfo, getObjectInfos } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import OPPORTUNITY_OBJECT from '@salesforce/schema/Contact'

export default class GetobjectinfoDemo extends LightningElement {

    MetaDetails 
    
    accObjDetails = ACCOUNT_OBJECT

    @wire(getObjectInfo, {objectApiName:'$accObjDetails'})
    getdetails(response){
        if(response.data){
            this.MetaDetails = response.data
        }
    }
    objs = [ACCOUNT_OBJECT, OPPORTUNITY_OBJECT]

    objectDetailsArr
    @wire(getObjectInfos, {objectApiNames:'$objs'})
    ObjObjectInfoHandler({data}){
        if(data){
            console.log(data )
            this.objectDetailsArr = data 
        }
    }

}