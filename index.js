import axios from 'axios';
import {countWorkers,countWorks} from "./input";
import Table from './tableworker'
const submit_btn =document.getElementById('submit-btn');

submit_btn.onclick=(event)=>{
    Table.fill_table();//Заполняем таблицу значениями
}





let data ={

    timetable:[
        {
            worker:1,
            jobs:["A","B","C"]
        },
        {
            worker:2,
            jobs:["D","E","F"]
        },
        {
            worker:3,
            jobs:["G","H","I"]
        }
    ]
};

