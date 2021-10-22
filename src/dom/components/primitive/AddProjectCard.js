const AddProjectCard=()=>{
    const AddCard=document.createElement("div")
    AddCard.classList.add("add-new-proj");

        const AddImg=document.createElement("img");
        AddImg.src="https://raw.githubusercontent.com/C19H3R/todo-nodejs/main/assets/add_black_24dp.svg";
    AddCard.appendChild(AddImg)

    return AddCard;
}

export default AddProjectCard;