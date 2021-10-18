const AddProjectCard=()=>{
    const AddCard=document.createElement("div")
    AddCard.classList.add("add-new-proj");

        const AddImg=document.createElement("img");
        AddImg.src="../assets/add_black_24dp.svg";
    AddCard.appendChild(AddImg)

    return AddCard;
}

export default AddProjectCard;