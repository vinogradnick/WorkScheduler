/* Заполнение и вывыод информации в таблице */
import {countWorkers,countWorks} from "./input";

let table =document.getElementById('result-table');
let tableEl  =document.getElementById('done_works');
let letters = "abcdefghijklmnopqrstuvwxyz".toLocaleUpperCase();


/* Заполнение таблциы элементами */
function fill_table(){
    /* Очищение таблицы перед заполнением */
    while(table.rows[1].firstChild){
        table.rows[1].firstChild.remove();
    }
    /* Заполнение таблциы рабочими */
    for (let i=0;i<countWorkers;i++){
        addWorker({worker:i,jobs:["A","B","C"]});//Добавляем рабочих
    }

    //table.rows[1].appendChild(createTh(10));
    for(let i=1;i<=countWorks;i++) table.rows[1].appendChild(createTh(i));

}
/* Создание элемента таблицы */
function createTr() {
    const element =document.createElement('tr');
    return element;
}
/* Созадние элемента таблицы */
function createTh(data) {
    const element =document.createElement('th');
    element.innerText=data;
    return element;
}
function writeWork(element,jobs){
    jobs.forEach((el,index)=>{
        element.rows[1].appendChild(createTh(el));
    })
    return element;
}

function addWorker({worker:number,jobs:[]}){
    console.log(number+ " "+job.toString());
    let tr = createTr();
    tr.appendChild(createTh("Работник"+number));
    tr=writeWork(tr,jobs);
}

export default {
    fill_table,
}