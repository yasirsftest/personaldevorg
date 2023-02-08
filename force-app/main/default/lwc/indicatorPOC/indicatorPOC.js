import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class IndicatorPOC extends NavigationMixin (LightningElement) {
    handleStepBlur(event) {
        const stepIndex = event.detail.index;
    }
    clickHandler(event){
        window.location.href="https://www.facebook.com"
    }
    linktonav = ''//window.location.origin + '/lightning/n/LWC_Fundamentals?c__param=Yasir'
    
    NavigateToPF(event){
        let paramtopass = event.target.title
        this.linktonav =  window.location.origin + '/lightning/n/LWC_Fundamentals?c__param='+paramtopass
    }
    // SMEclickHandler(event){
    //     console.log(event.target.name)
    //     let paramtopass = event.target.name
    //     let defination ={
    //         componentDef:'c:helloWorld',
    //         attributes:{
    //             recordName:paramtopass
    //         }
    //     }
        
    //     this[NavigationMixin.Navigate]({
    //         type:'standard__webPage',
    //         attributes:{
    //             url:'/one/one.app#'+btoa(JSON.stringify(defination))
    //         }
    //     })

    //}

    handleStepClick(event) {
        this[NavigationMixin.GenerateUrl]({
            type: 'standard__recordPage',
            attributes: {
                recordId: event.target.dataset.id,
                actionName: 'view'
            }
        })
            .then((url) => window.open(url, '_blank'))
            .catch((err) => console.error(err));
    }
}