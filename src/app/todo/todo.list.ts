import {Injectable} from '@angular/core';

@Injectable()

export class TodoList
{
    wlist=[
        
    ]
    getlist()
    {
        return this.wlist
    }
    setList(o)
    {
        this.wlist.push(o);
    }
    
}