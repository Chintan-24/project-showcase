//darkmode toggle
function changeMode(themeObj){
if(themeObj.dataset.mode=="light"){
    document.documentElement.setAttribute("data-theme","dark");
    themeObj.dataset.mode="dark";
}else{
    document.documentElement.setAttribute("data-theme","light");
    themeObj.dataset.mode="light";
}
}
//filter projects
const filterItem = document.querySelector(".items");
const filterProject = document.querySelectorAll(".project-title");

window.onload = () =>{ 
    filterItem.onclick = (selectedItem)=>{
        if(selectedItem.target.classList.contains("item")){
            filterItem.querySelector(".active").classList.remove("active");
            selectedItem.target.classList.add("active");
            let filterName = selectedItem.target.getAttribute("data-name");
            console.log(filterName);
            filterProject.forEach((e)=>{
                let filterimages = e.getAttribute("data-name");
                if((filterimages == filterName) || (filterName == "all")){
                    e.classList.remove("hide");
                    e.classList.add("show");
                }else{
                    e.classList.add("hide");
                    e.classList.remove("show");
                }
            
            });
        }
    }
}