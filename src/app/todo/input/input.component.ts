import { Component, OnInit } from '@angular/core';
import {TodoList} from '../todo.list';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  constructor(private o:TodoList) { }

  work
  

  addWork()
  {
    /*this.mylist.work=this.work
    this.mylist.date=this.wdate
    this.o.setList(this.mylist)*/
     const mylist={
      work:this.work,
      
    }
    this.o.setList(mylist)
  }
}
