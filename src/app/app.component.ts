import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit() {
    console.log('Lifecycle Hook with spontaneous response.');
  }

  tinyAlert() {
    Swal.fire('Hey there!');
  }

  successNotification() {
    Swal.fire('Hi', 'We have been informed!', 'success');
  }

  alertConfirmation() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This process is irreversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, go ahead.',
      cancelButtonText: 'No, let me think.',
    }).then((result) => {
      if (result.value) {
        Swal.fire('Removed!', 'Product still in our database.', 'error');
      }
    });
  }
}
