import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
//to load the default values with the new contact page we need to import this 
import { encodeDefaultFieldValues } from 'lightning/pageReferenceUtils'


export default class NavagationDemo extends NavigationMixin(LightningElement) {

    NavigateToHome(event){
        this[NavigationMixin.Navigate]({
            type:'standard__namedPage',
            attributes:{
                pageName:'home'
            }
        })
    }

    NavigateTochatter(event){
        this[NavigationMixin.Navigate]({
            type:'standard__namedPage',
            attributes:{
                pageName:'chatter'
            }
        })
    }

    NavigateToCreateContactWithValues(event){
        const defaults = encodeDefaultFieldValues({
            //fieldApiName : value
            FirstName:'Yasir',
            LastName:'Ali'
        })
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Contact',
                actionName:'new'
            },
            state:{
                defaultFieldValues:defaults
            }
        })
    }
    NavigateToCreate(event){
        let titleObject = event.target.title
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:titleObject,
                actionName:'new'
            }
        })
    }
}