import { LightningElement, api, wire } from 'lwc'
import { getRecordUi } from 'lightning/uiRecordApi'


export default class RecordUIDemoUpdated extends LightningElement {
    @api recordId
    formFields = [
        {"fieldName":"Name", "label":"Full Name"},
        {"fieldName":"Type", "label":"Type"},
        {"fieldName":"Industry", "label":"Industry"}
    ]

    @wire(getRecordUi, {recordIds:'$recordId', layoutTypes:'Full', modes:'Edit'})
    accountRecordHandler({data,error}){
        if(data){
            console.log(this.recordId)
            this.formFields = this.formFields.map(item=>{
                console.log('data.records[this.recordId] : ' + data.records[this.recordId])
                console.log('data.records[this.recordId].fields[item.fieldName] : ' +JSON.stringify(data.records[this.recordId].fields[item.fieldName]))
                console.log('data.records[this.recordId].fields[item.fieldName].value : ' + data.records[this.recordId].fields[item.fieldName].value)
                
                return {...item, value:data.records[this.recordId].fields[item.fieldName].value}
            }) 
            console.log(this.formFields)
            
        }
        if(error){

        }
    }
}