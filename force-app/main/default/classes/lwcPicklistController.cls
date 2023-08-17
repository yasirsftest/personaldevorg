public with sharing class lwcPicklistController {

 //fetch picklist values from custom object in lwc
 @AuraEnabled(cacheable=true)
 public static List < customValueWrapper > pickListValueDynamically(sObject customObjInfo, string selectPicklistApi) {

    Schema.DescribeSObjectResult objDescribe = customObjInfo.getSObjectType().getDescribe();     
    map < String, Schema.SObjectField > customFieldMap = objDescribe.fields.getMap();      
    list < Schema.PicklistEntry > custPickValues = customFieldMap.get(selectPicklistApi).getDescribe().getPickListValues();
    list < customValueWrapper > customObjWrapper = new list < customValueWrapper > ();
    
    system.debug('custPickValues' + custPickValues);

    for (Schema.PicklistEntry myCustPick: custPickValues) {
      customValueWrapper selectOptionValueWrapper = new customValueWrapper();
         selectOptionValueWrapper.label = myCustPick.getLabel();
         selectOptionValueWrapper.value = myCustPick.getValue();
        customObjWrapper.add(selectOptionValueWrapper);
    }

    system.debug('customObjWrapper : '+customObjWrapper);
    
    return customObjWrapper;

  }
  // wrapper class 
    public with sharing class customValueWrapper {
      @auraEnabled public string label {get;set;}
      @auraEnabled public string value {get;set;}
    }
}
