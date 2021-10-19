const CurrentProjectHeader=(title,description)=>{

    const headerDiv=document.createElement("div")
    headerDiv.id = "project-view-header";

        const heading=document.createElement("h2")
        heading.textContent=title;
        const descPara=document.createElement("p")
        descPara.textContent=description;

    headerDiv.appendChild(heading);
    headerDiv.appendChild(descPara);

    return headerDiv;

}
export default CurrentProjectHeader