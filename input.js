/*
Формы ввода и получения информации от пользователя
  */
const workers_input = document.getElementById('count_workers');

let el = document.getElementById('count_works'),
    countWorkers,// Количество работников ,
    countWorks, // Количество выполняемых работ
    letters = "abcdefghijklmnopqrstuvwxyz".toLocaleUpperCase();


/* Events elements --------------------------- */


workers_input.onchange=(event)=>{
    countWorkers=workers_input.value;
    console.log(countWorkers);
}

el.onchange =(event)=>{
    countWorks=el.value;
    RenderInput(countWorks);
};
/* End events element -------------------------- */

/* Генерация формы для задания приоритетов */
function  RenderInput(count) {
    const group= document.getElementById('input-list')
    while (group.firstChild) group.firstChild.remove();

    for (var i=0;i<countWorks;i++) group.appendChild(InputWorks(letters[i], count));

}
/* Вывод формы для заполнения элемента работ */
function InputWorks(name,number){
    const input =document.createElement('input');
    input.type="number";
    input.placeholder="Приоритет :"+name;
    input.name=name;
    input.id="work_"+number;
    return input;
}
export { countWorks,countWorkers}