import { LightningElement, wire } from 'lwc';
import { getListUi } from 'lightning/uiListApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact' 
const cols = [
    // {label:'Id',fieldname:'Id'},
    {label:'Name',fieldname:'Name'},
    {label:'Title',fieldname:'Title'},
    {label:'Phone',fieldname:'Phone', editable:true},
    {label:'Email',fieldname:'Email', editable:true}
]
const url = window.location.origion
export default class UpdateRecordDemo extends LightningElement {

    ContactsWithLink = [
        {"Name":"" , "url":""}
    ]
    contacts = []
    cols = cols;
    draftValues = []
    contactsobj = CONTACT_OBJECT
    currentURL = url
    
    @wire(getListUi, {
        objectApiName:'$contactsobj',
        listViewApiName:'AllContacts'
    })
    getListRecords({data,error}){
        if(data){
            console.log(data)
            this.contacts = data.records.records.map(item=>{    
                return {
                    // "Id":this.getvalue(item,"Id"),
                    "Name":this.getvalue(item,"Name"),
                    "Title":this.getvalue(item,"Title"),
                    "Phone":this.getvalue(item,"Phone"),
                    "Email":this.getvalue(item,"Email"),
                    "URL":window.location.origin+"/"+this.getvalue(item,"Id"),
                    "paramEmail":item.fields["Email"].value
                }
            })

            this.ContactsWithLink = [...this.ContactsWithLink, this.contacts.map(item=>{
                return{
                    "Name":item.Name,
                    "url":item.URL
                }
            })]
        }
        console.log(this.contacts)
        console.log(this.ContactsWithLink)
        if(error){

        }
    }

    getvalue(data,field){
        return data.fields[field].value
    }

    saveHandler(event){

    }
}