import { LightningElement,api } from 'lwc';

export default class SetterChildComponent extends LightningElement {
    
    Userdetails
    @api
    get details(){
        return this.Userdetails 
    }
    set details(data){
        this.Userdetails = data
    }
}