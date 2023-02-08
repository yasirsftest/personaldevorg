import { LightningElement,api,wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';


export default class HelloWorld extends LightningElement {
    FullName = "Zero To Hero"
    @api recordName
    users={
        namepro:'Yasir',
        age:21
    }
    //to get the parameter from url 
    c__param = null
    @wire(CurrentPageReference)
    getStateParameters(currentPageReference) {
       if (currentPageReference) {
           console.log(currentPageReference.state)
          this.urlStateParameters = currentPageReference.state;
          this.setParametersBasedOnUrl();
       }
    }

    setParametersBasedOnUrl() {
        this.c__param = this.urlStateParameters.c__param || null;
        console.log(this.c__param)
    }
    
    title="This is a cource for "
    cource = "Aura"

    changeHandler(event){
        this.cource = event.target.value;
    }

    address={
        city:"Karachi",
        country:"Pakistan"
    }

    //spread operator 
    trackHandler(event){
        this.address = {...this.address,"city":event.target.value}
    }

    //getter demo now
    num1 = 10
    num2 = 20
    usersArr = ["Yasir","Furqan"]

    get FirstElementfromArray(){
        return this.usersArr[0].toUpperCase()
    }

    get multiplenum1num2(){
        return this.num1 * this.num2
    }


}