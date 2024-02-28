
export const openPopup = (popUpRefVariable: any) => {
    if (popUpRefVariable != null) {
        popUpRefVariable.classList.add("show");
        popUpRefVariable.style.display = "block";
    }
}

export const closePopup = (popUpRefVariable: any) => {
    if (popUpRefVariable != null) {
        popUpRefVariable.classList.remove("show");
        popUpRefVariable.style.display = "none";
    }
}