import { getToDoData } from './lib/firebase/api';
import { toDoItemTemplate } from './templates/toDoItem';


let store = [];
async function appInit() {
     const appData = await getToDoData();
     const todoItems = Object.values(appData).map((obj)=>{
        return toDoItemTemplate(obj);
     })
     todoItems.forEach((todo) => {
        document.querySelector('#listItem').insertAdjacentHTML('afterbegin',todo)
     })
    console.log(todoItems)
}

appInit();
