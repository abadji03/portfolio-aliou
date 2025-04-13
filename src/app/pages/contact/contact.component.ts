import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { title } from 'process';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  formData = {
    title:'',
    name: '',
    email: '',
    message: ''
  };

  sendEmail() {
    emailjs.send(
      'service_pd4m8ym',    // remplace par ton Service ID EmailJS
      'template_jlfrzft',   // remplace par ton Template ID
      this.formData,
      't0nfPDfWGu1KYR4Cr'      // remplace par ta clé publique EmailJS
    ).then(
      (response) => {
        alert('Message envoyé ! ✅');
        this.formData = { title:'',name: '', email: '', message: '' };
      },
      (error) => {
        alert('Erreur lors de l\'envoi du message ❌');
        console.error(error);
      }
    );
  }
}
