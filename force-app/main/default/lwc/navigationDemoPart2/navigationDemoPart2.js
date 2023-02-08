import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
//to load the default values with the new contact page we need to import this 
import { encodeDefaultFieldValues } from 'lightning/pageReferenceUtils'

export default class NavigationDemoPart2 extends NavigationMixin(LightningElement) {
    NavigateContactListview(event){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Contact',
                actionName:'list'
            },
            state:{
                filterName:'AllContacts'
            }
        })
    }

    //navigate to Files
    NavigateFiles(event){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'ContentDocument',
                actionName:'home'
            }        
        })
    }

    //navigate to record in view mode
    NavigateContactView(event){
        let mode = event.target.title
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId:'0032w00000rEX8dAAG',
                objectApiName:'Contact',
                actionName:mode
            }        
        })
    }

    //navigate to Tab
    NavigateToTab(event){
        this[NavigationMixin.Navigate]({
            type:'standard__navItemPage',
            attributes:{
                apiName:'LWC_Fundamentals'
            }        
        })
    }

    //navigate to ObjectRelatedList
    NavigateToAccountRelated(event){
        this[NavigationMixin.Navigate]({
            type:'standard__recordRelationshipPage',
            attributes:{
                recordId:'0012w000017CyvoAAC',
                objectApiName:'Account',
                relationshipApiName:'Contacts',
                actionName:'view'
            }        
        })
    }
}