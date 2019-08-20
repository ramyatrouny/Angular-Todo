import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  todoForm: FormGroup;
  todoArray: Array<string> = [];
  sucessAlert: Boolean = false;
  alertRemoved: Boolean = false;
  isEdit: boolean = false;
  isEditIndex: number = 0;

  ngOnInit() {
    this.todoForm = new FormGroup({
      todo: new FormControl('')
    });
  }

  submitTodo(form) {
    this.sucessAlert = true;

    this.clearBanner();

    if (this.isEdit) {
      this.todoArray[this.isEditIndex] = form.value.todo;
      this.isEdit = false;
      this.isEditIndex = 0;
      return;
    } else {
      this.todoArray.push(form.value.todo);
      this.todoForm.setValue({ todo: null });
    }

  }

  editTodo(todo, index) {
    this.todoForm.setValue({
      todo: todo
    });

    this.isEdit = true;
    this.isEditIndex = index;
  }

  clearBanner() {
    setTimeout(() => {
      this.sucessAlert = false;
      this.alertRemoved = false;

    }, 3000);
  }

  removeTodo(todo, index) {
    if(this.sucessAlert){
      this.sucessAlert = false;
    }
    this.alertRemoved = true;
    this.todoArray.splice(index, 1);

    this.clearBanner();
  }
}
