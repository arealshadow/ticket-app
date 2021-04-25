import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';






@Component({
  selector: 'app-make-appointment',
  templateUrl: './make-appointment.component.html',
  styleUrls: ['./make-appointment.component.css']
  
})
export class MakeAppointmentComponent implements OnInit {
  
  size: NzButtonSize = 'large';
  validateForm!: FormGroup;

  value?: string;
  time = new Date();
  selectedValue = new Date();
  date = null;

  selectChange(select: Date): void {
    console.log(`Select value: ${select}`);
    this.selectedValue = select;
  }
 
  

  onChange(result: Date): void {
    console.log('onChange: ', result);
    
  }
  cancel(): void {
    this.nzMessageService.info('click cancel');
  }

  confirm(): void {
    this.nzMessageService.info('click confirm');
  } 
  
  constructor(
    private nzMessageService: NzMessageService
    ) {
    
   }

   

  ngOnInit(): void {
    
    

  }
}
