import { LightningElement } from 'lwc';

export default class ConditionalRenedering extends LightningElement {
    isVisible = false
    ButtonLabel = "Show"
    ButtonVariant = "brand"

    carList = ["Alto", "City", "Corolla", "Audi"]  

   

    users = [
        {
            id:1,
            name:"Yasir",
            company:"Aware Services",
            Technology:"Salesforce Dev"
        },
        {
            id:2,
            name:"Furqan",
            company:"Bss",
            Technology:"Salesforce Admin"
        },
        {
            id:3,
            name:"Moiz",
            company:"Txtel",
            Technology:"Salesforce Dev"
        },
        {
            id:4,
            name:"Anas",
            company:"Systems Limited",
            Technology:"Salesforce Dev"
        },
        {
            id:5,
            name:"Waleed",
            company:"Ten Pearls",
            Technology:"Mobile Apps Dev"
        }
    ]

    
    //promise creation 
    checkissuccess(data){
	    return new Promise(function(resolve,reject){
            if(data === 'success'){
                return resolve(`successfully Executed`)
            } else {
                return resolve(`Unsuccessfully Executed`)
            }
	    })
    }

    handleClick(event){
        if(this.isVisible){            
            this.isVisible = false
            this.ButtonLabel = "Show" 
            this.ButtonVariant = "brand"   
        }
        else if(!this.isVisible){
            this.isVisible = true
            this.ButtonLabel = "Hide"
            this.ButtonVariant = "destructive"
        }
        
        //array function practise map
        let arr = [2,4,5,6,5,3]

        let newarr = arr.map(function(currentItem, index, arrs){
            console.log(`current items are ${currentItem} and their index are ${index} `)
            return currentItem+1
        })
        //console.log(`${newarr}`)

        //array function practise filter use it whenever you have some condition like return number > 3
        let arrfilter = [2,4,5,6,5,3]

        let newarrfilter = arrfilter.filter(function(currentItem, index, arrs){
            console.log(`current items are ${currentItem} and their index are ${index} `)
            return currentItem > 4
        })
        //console.log(`filter values greater then 3 ${newarrfilter}`)

        //array function practise every and some use it whenever you have some condition and you need to meet all in case every
        //sub condition true hongi to true aiyega and on some case 1 bhi condition true hogi to true aiyega

        let arrEvery = [2,4,5,6,5,3]

        let newarrEvery = arrEvery.every(function(currentItem, index, arrs){
            return currentItem >= 2
        })
        //console.log(`check all the items must be  greater then 2 ${newarrEvery}`)


        let arrReduce = [2,4,5,6,5,3]

        let newarrReduce = arrReduce.reduce(function(currentItem, index){
            return currentItem+index
        },0)
        //console.log(`sum of this array values ${arrReduce} is ${newarrReduce}`)


       let arrLoop = [2,4,5,6,5,3]
        arrLoop.forEach(function(item){
            console.log(`for loop iteration ${item}`)
        })

    //promise calling
        checkissuccess('success1').then(function(result){
            console.log(result)
        }).catch(function(error){
            console.log(result)
        })

    }

    
    
    
}