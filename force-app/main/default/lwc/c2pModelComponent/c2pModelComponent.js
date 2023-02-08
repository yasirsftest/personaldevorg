import { LightningElement } from 'lwc';

export default class C2pModelComponent extends LightningElement {

    clickHandler(){
        const ModalclickHandler = new CustomEvent('close' , {
            detail:"Message passing from child"
        })
        this.dispatchEvent(ModalclickHandler)
    }
}