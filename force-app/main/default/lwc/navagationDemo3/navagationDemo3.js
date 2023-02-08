import { LightningElement, wire } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
//to load the default values with the new contact page we need to import this 
import { encodeDefaultFieldValues } from 'lightning/pageReferenceUtils'
//this will be used when we need to get the page reference 
import {CurrentPageReference} from 'lightning/navigation'

export default class NavagationDemo3 extends NavigationMixin(LightningElement) {

    NavigateWebPage(event){
        this[NavigationMixin.Navigate]({
            type:'standard__webPage',
            attributes:{
                url:'https://www.google.com'
            }
        })
    }
    
    //it will open your lwc component into a new page
    NavigateLwcPage(event){
        let defination ={
            componentDef:'c:helloWorld',
            attributes:{
                recordName:"Passing this value on button click"
            }
        }
        this[NavigationMixin.Navigate]({
            type:'standard__webPage',
            attributes:{
                url:'/one/one.app#'+btoa(JSON.stringify(defination))
            }
        })
    }

    //call the apex page from the lwc component
    NavigateApexPage(event){
        this[NavigationMixin.Navigate]({
            type:'standard__webPage',
            attributes:{
                url:'/apex/LwcNavigation'
            }
        }).then(generateURL=>{
            window.open(generateURL,"_blank")
        })
    }

    @wire(CurrentPageReference)
    pageRef

    get pageReference(){
        return this.pageRef  ? JSON.stringify(this.pageRef,null,2):''
    }

}