import { LightningElement ,wire} from 'lwc';
import SAMPLEMC from '@salesforce/messageChannel/SampleMessageChannel__c'
import { subscribe,unsubscribe, MessageContext,APPLICATION_SCOPE} from 'lightning/messageService'

export default class LmsComponentB extends LightningElement {
    showmessage
    
    @wire(MessageContext)
    context

    connectedCallback(){
        this.subscribeMessage()    
    }
    //subscribe(messageContext, messageChannel, listner, subscribeOptions)
    subscribeMessage(){
        subscribe(this.context, SAMPLEMC, (message)=>{this.handlemessage(message)}, {scope:APPLICATION_SCOPE})
    }
    
    handlemessage(message){
        this.showmessage = message.messageToSend.value ? message.messageToSend.value:message.messageToSend.name  
    }
    
}