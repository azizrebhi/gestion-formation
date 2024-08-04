import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.component.html',
  styleUrls: ['./invitation.component.css']
})
export class InvitationComponent {
  invitationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<InvitationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { formateurId: number }
  ) {
    this.invitationForm = this.fb.group({
      title: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      allDay: [false],
      url: [''],
      location: [''],
      description: ['']
    });
  }

  sendInvitation(): void {
    if (this.invitationForm.valid) {
      // Handle form submission logic here
      console.log('Invitation sent', this.invitationForm.value);
      this.dialogRef.close(true);
    }

}}
