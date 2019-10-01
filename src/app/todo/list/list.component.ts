import { Component, OnInit } from '@angular/core';
import {TodoList} from '../todo.list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private o:TodoList) { }
  wlist=[]
  ngOnInit() {this.wlist=this.o.getlist()
  }
  delete(i){
    this.wlist=this.o.getlist()
    this.wlist.splice(i,1)
    this.o.setList(this.wlist)

  }  

}
