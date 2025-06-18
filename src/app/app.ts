import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'fabel';
  
 formData = {
    nombre: '',
    email: '',
    telefono: '',
    servicio: '',
    mensaje: ''
  };

  enviarWhatsapp() {
    const { nombre, email, telefono, servicio, mensaje } = this.formData;
    const texto = `Hola, mi nombre es ${nombre}.%0A` +
                  `mi correo de contacto es: ${email}%0A` +
                  `y mi Teléfono: ${telefono}%0A` +
                  `,: ${servicio}%0A` +
                  `Comentarios: ${mensaje}`;

    const numero = '526181584255'; 
    const url = `https://wa.me/${numero}?text=${texto}`;

    window.open(url, '_blank');
  }

}
