import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {User} from '../models/user';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user;
  items;
  updateForm;
  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) {
    this.updateForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.user = User[+params.get('name')];
    });
  }
  onSubmit(customerData) {
    // Process checkout data here
    window.alert('Успешно');
    this.updateForm.reset();
  }

}
