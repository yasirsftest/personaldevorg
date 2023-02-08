public with sharing class ContactHandler {
    @AuraEnabled(cacheable=true)
    public static list<Contact> getContactList(){
        try {
            return [select id,Name,Email,Phone,Title from Contact];
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
