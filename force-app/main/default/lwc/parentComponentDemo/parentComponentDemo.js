import { LightningElement } from 'lwc';

export default class ParentComponentDemo extends LightningElement {


    DetailsToShow = [ 
        {
            src :"https://www.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg",
            header : "first Card",
            description : "First card description.",
            alternativetext : "First card accessible description."
        },
        {
            src : "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-02.jpg",
            header : "Second Card",
            description : "Second card description.",
            alternativetext : "Second card accessible description."
        },
        {
            src : "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-03.jpg",
            header : "Third Card",
            description : "Third card description.",
            alternativetext : "Third card accessible description."
        }

    ]
    updateprogressvalue
    changeHandler(event){
        this.updateprogressvalue = event.target.value
    }

    Resetit(){
        alert(this.template.querySelector('c-child-component-demo'))
        this.template.querySelector('c-child-component-demo').resetslide()
    }
}