import { LightningElement,api } from 'lwc';

export default class ChildComponentDemo extends LightningElement {
    @api messagefromparent  
    @api details
    @api progressvalue = 10
    val = 10

    @api resetslide(){
        alert(this.val)
       this.val = 0 
    }

    

}