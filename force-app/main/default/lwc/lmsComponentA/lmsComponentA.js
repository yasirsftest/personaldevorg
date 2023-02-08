import { LightningElement ,wire} from 'lwc';
import { publish, MessageContext} from 'lightning/messageService'
import SAMPLEMC from "@salesforce/messageChannel/SampleMessageChannel__c";

export default class LmsComponentA extends LightningElement {
   
    @wire(MessageContext)
    context
    
    sourceMessage

    inputHandler(event){
        this.sourceMessage = event.target.value
    }

    publishHandler(event){
        //publish(messageContext, messageChannel,message)
        const message ={
            messageToSend : {
                value:this.sourceMessage,
                name:"Yasir"
            }
        }
        publish(this.context, SAMPLEMC, message)
    }
    
}