import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {



  public items = [{texto: "Teste 1", completo: false}, {texto: "teste 2", completo: false}];
  public model = 1;
  novaTarefa = '';

  complete(index:number){
    this.items[index].completo = !this.items[index].completo;
  }
  // complete(item:string){
  //   let form = document.getElementById(item)
  //   let buttonMark = document.getElementById("ButtonComplete-"+item)
  //   if(form!=null&&buttonMark!=null){
  //     if(form.classList.contains("risk")){
  //       buttonMark.textContent="Concluido";
  //       form.classList.remove('risk');
  //     }else{
  //       buttonMark.textContent="Desmarcar";
  //       form.classList.add('risk');
  //     }
  //   }
  //
  // }

  deleteItem(index:number){
    this.items.splice(index,1);
  }

  addNew(){
    this.items.push({texto: this.novaTarefa, completo: false});
    this.novaTarefa = '';
  }

  changeElement($event:Event, index:number){
    let inputValue = ($event.target as HTMLInputElement).value;
    this.items[index] = {texto: inputValue, completo: false};
    console.log(this.items);
  }

}
