import AddProjectForm from "../components/primitive/AddProjectForm.js"


const Page=(middle)=>{
    //header
    const headeEle=document.createElement("header")
        const headingTxt=document.createElement("h1")
        headingTxt.textContent="Todo-APP"
        headeEle.appendChild(headingTxt)

    //middle
    const middleElement=document.createElement("main");
         middleElement.appendChild(middle);
        //  middleElement.appendChild(AddProjectForm())

    //footer
    const footerEle=document.createElement("footer")
        footerEle.innerHTML=`<p>Made By <a href="/">c19H3R</a></p>`;

    
    const mainDiv =  document.createElement("div")
    mainDiv.style.cssText="margin: 0; width: 100%; height: 100%";

    mainDiv.appendChild(headeEle);
    mainDiv.appendChild(middleElement);
    mainDiv.appendChild(footerEle);

    return mainDiv;
}

export default Page;