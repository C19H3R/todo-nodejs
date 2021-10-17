const ProjectCard= (title,description)=>{

    const CardEle=document.createElement("div");
    CardEle.classList.add("test");

    const cardHeading=document.createElement("h3")
    cardHeading.textContent=title;

    const descriptionEle=document.createElement("p")
    descriptionEle.textContent=description

    CardEle.appendChild(cardHeading)
    CardEle.appendChild(descriptionEle);

    CardEle.addEventListener("click",()=>{
        console.log("hhola");
    })

    return CardEle
}
export default ProjectCard;