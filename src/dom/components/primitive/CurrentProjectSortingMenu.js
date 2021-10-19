import { sortCurrentProject } from "../../../logic/ProjectsManager.js";
import ReloadPage from "../../../utility/ReloadPage.js";
import { DATE_ADDED, DUE_DATE, PRIOTITY } from "../../../utility/SortingOptions.js";

const  CurrentProjectSortingMenu = (activeOption=DATE_ADDED)=>{

    const sortOption=(name,isActive=false)=> {
        const sortingOption = document.createElement("span");
        sortingOption.classList.add("sort-options");
        sortingOption.textContent = name;
        if(isActive){
            sortingOption.id="sort-option-active";
        }else{
            sortingOption.addEventListener("click",()=>{
                sortCurrentProject(name);
                ReloadPage();
            });
        }

        return sortingOption;
    }


    const sortingDiv= document.createElement("div") 
    sortingDiv.id="project-view-menu-sorting";

    const priority=sortOption(PRIOTITY,activeOption==PRIOTITY);
    const dueDate=sortOption(DUE_DATE,activeOption==DUE_DATE);
    const dateAdded=sortOption(DATE_ADDED,activeOption==DATE_ADDED);

    sortingDiv.appendChild(priority)
    sortingDiv.appendChild(dueDate)
    sortingDiv.appendChild(dateAdded)
    return sortingDiv;
    
}
export default CurrentProjectSortingMenu;