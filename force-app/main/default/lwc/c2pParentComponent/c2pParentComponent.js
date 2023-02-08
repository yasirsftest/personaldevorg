import { LightningElement } from 'lwc';

export default class C2pParentComponent extends LightningElement {
    isModelVisible = false
    Msg

    handleClick(event){
        this.isModelVisible = true
    }

    modalclosehandler(event){
        this.Msg = event.detail
        this.isModelVisible = false
    }
}