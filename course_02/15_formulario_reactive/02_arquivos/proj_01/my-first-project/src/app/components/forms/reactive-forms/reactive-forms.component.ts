import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss',
})
export class ReactiveFormsComponent {
  profileForm = new FormGroup( {
    name: new FormControl('Rudi Antoni'),
    myStacks: new FormGroup({
      front: new FormControl('Angular'),
      back: new FormControl('NodeJS'),
    })
  });
  
  updateName() {
    this.profileForm.patchValue({
      name: 'Nome de teste'
    })
  }
  
  update() {
    this.profileForm.patchValue({
      name: 'Nome de teste',
      myStacks: {
        front: 'React',
        back: 'Kotlin'
      }
    })
  }
}
