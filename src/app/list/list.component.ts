import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {
   

 
  public items = ["Teste 1", "teste 2"];
  public model = 1;
  riskItem(item:string){
    let form = document.getElementById(item)
    let buttonMark = document.getElementById("ButtonComplete-"+item)
    if(form!=null&&buttonMark!=null){
      if(form.classList.contains("risk")){
        buttonMark.textContent="Concluido";
        form.classList.remove('risk');
      }else{
        buttonMark.textContent="Desmarcar";
        form.classList.add('risk');
      }
    }

  }
  deleteItem(item:string){
    this.items.splice(this.items.indexOf(item),1);
  }
  addNew(){
    let inputValue = (<HTMLInputElement>document.getElementById("inputNew")).value;
    this.items.push(inputValue);
  }
  changeElement(item:string){
    let inputValue = (<HTMLInputElement>document.getElementById(item)).value;
    let index = this.items.indexOf(item);
    this.items[index] = inputValue;
    console.log(this.items);
  }

}
