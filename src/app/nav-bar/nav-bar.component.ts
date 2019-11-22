import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {LoginFormComponent} from '../login-form/login-form.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  name: string;
  password: string;
  userStr: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.userStr = 'Вход';
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(LoginFormComponent, {
      width: '250px',
      data: {name: this.name, userStr: this.userStr}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result != null) {
      this.userStr = result; } else {
        this.userStr = 'Вход';
      }
    });
  }
}
