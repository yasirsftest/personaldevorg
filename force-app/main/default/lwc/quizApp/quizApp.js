import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
    selected={}
    totalcorrectanswer = 0
    

    myQuestion = [
        {
            id:"Question 1",
            question:"What is your name?",
            answer:
            {
                a:"Yasir",
                b:"Usama",
                c:"Furqan"
            },
            selectedAnswer:"a"
        },
        {
            id:"Question 2",
            question:"What is your father name?",
            answer:
            {
                a:"Yasir father",
                b:"Usama father",
                c:"Furqan father"
            },
            selectedAnswer:"a"
        },
        {
            id:"Question 3",
            question:"What is your mother name?",
            answer:
            {
                a:"Yasir mother",
                b:"Usama mother",
                c:"Furqan mother"
            },
            selectedAnswer:"a"
        }
    ]

    get allselectedornot(){
        return !(Object.keys(this.selected).length === this.myQuestion.length)
    }

    changeHandler(event){
        const {name,value} = event.target
        this.selected = {...this.selected , [name]:value}
        console.log("changeHandler : "+JSON.stringify(this.selected))
    }

    submitHandler(event){
        //it wont allow page to be refreshed
        event.preventDefault()
        let resultcorrectanswer = this.myQuestion.filter(items=>this.selected[items.id] === items.selectedAnswer)
        
        console.log("resultcorrectanswer : " + JSON.stringify(resultcorrectanswer))
        console.log("resultcorrectanswer length : " + resultcorrectanswer.length)
        this.totalcorrectanswer = resultcorrectanswer.length
        //getting the wrong answer count
        let wronganswer = this.myQuestion.filter(items=> items.selectedAnswer != this.selected[items.id])
    }

    resetHandler(event){
        this.selected = {}
        this.totalcorrectanswer = 0
    }
}