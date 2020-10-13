import { Component } from '@angular/core';

@Component({
  selector: 'app-taulell',
  templateUrl: './taulell.component.html',
  styleUrls: ['./taulell.component.css']
})
export class TaulellComponent {
  torn: string = 'X';
  partidaAcabada: boolean = false;
  constructor() { }

  

  buttonClicked(button) {
    
    if (this.torn == 'X' && document.getElementById('Btn' + button).textContent == "" && !this.partidaAcabada) {
      
      document.getElementById('Btn' + button).textContent = 'X';
      this.comprovarTaulell();
      if (!this.partidaAcabada) {
        this.tornMaquina();
        this.comprovarTaulell();
      }
      this.torn = 'X';
      
    } /*else if(this.torn == 'O' && document.getElementById('Btn' + button).textContent == "") {
      document.getElementById('Btn' + button).textContent = 'O';
    }*/
    
    
    
  }

  


  comprovarTaulell(){
    //COMPROVACIONS VERTICALS
    if (document.getElementById('Btn1').textContent == this.torn && document.getElementById('Btn2').textContent == this.torn && document.getElementById('Btn3').textContent == this.torn) {
      window.alert(this.torn + " win");
      this.partidaAcabada = true;
    } else if (document.getElementById('Btn4').textContent == this.torn && document.getElementById('Btn5').textContent == this.torn && document.getElementById('Btn6').textContent == this.torn) {
      window.alert(this.torn + " win");
      this.partidaAcabada = true;
    } else if (document.getElementById('Btn7').textContent == this.torn && document.getElementById('Btn8').textContent == this.torn && document.getElementById('Btn9').textContent == this.torn) {
      window.alert(this.torn + " win");
      this.partidaAcabada = true;
    }//COMPROVACIO HORITZONTALS
    else if (document.getElementById('Btn1').textContent == this.torn && document.getElementById('Btn4').textContent == this.torn && document.getElementById('Btn7').textContent == this.torn) {
      window.alert(this.torn + " win");
      this.partidaAcabada = true;
    } else if (document.getElementById('Btn2').textContent == this.torn && document.getElementById('Btn5').textContent == this.torn && document.getElementById('Btn8').textContent == this.torn) {
      window.alert(this.torn + " win");
      this.partidaAcabada = true;
    } else if (document.getElementById('Btn3').textContent == this.torn && document.getElementById('Btn6').textContent == this.torn && document.getElementById('Btn9').textContent == this.torn) {
      window.alert(this.torn + " win");
      this.partidaAcabada = true;
    }//COMPROVACIO DIAGONALS
    else if (document.getElementById('Btn1').textContent == this.torn && document.getElementById('Btn5').textContent == this.torn && document.getElementById('Btn9').textContent == this.torn) {
      window.alert(this.torn + " win");
      this.partidaAcabada = true;
    } else if (document.getElementById('Btn3').textContent == this.torn && document.getElementById('Btn5').textContent == this.torn && document.getElementById('Btn7').textContent == this.torn) {
      window.alert(this.torn + " win");
      this.partidaAcabada = true;
    } else if (this.empat()) {
      window.alert("EMPAT");
      this.partidaAcabada = true;
    }
  }
    
/*
    if (this.torn == 'X' && document.getElementById('Btn' + button).textContent == "X") {
      this.torn = 'O'
    } else if (this.torn == 'O' && document.getElementById('Btn' + button).textContent == "O") {
      this.torn = 'X'
    } 
     */
    
  

  empat(){
    return document.getElementById('Btn1').textContent != '' && 
    document.getElementById('Btn2').textContent != '' &&
    document.getElementById('Btn3').textContent != '' &&
    document.getElementById('Btn4').textContent != '' &&
    document.getElementById('Btn5').textContent != '' &&
    document.getElementById('Btn6').textContent != '' &&
    document.getElementById('Btn7').textContent != '' &&
    document.getElementById('Btn8').textContent != '' &&
    document.getElementById('Btn9').textContent != '';
  }

  tornMaquina(){
    let rnd: Number;
    this.torn = 'O';
    rnd = Math.floor(Math.random() * (10 - 1) + 1);
    if (document.getElementById('Btn' + rnd.toString()).textContent == '') {
      document.getElementById('Btn' + rnd.toString()).textContent = 'O';
      this.inteligenciaIA();
    } else {
      this.tornMaquina();
    }
    
    
  }
  playAgain(){
    this.partidaAcabada = false;
    for (let index = 1; index <= 9; index++) {
      document.getElementById('Btn' + index).textContent = '';
      
    }
  }
  inteligenciaIA(){

  }
}
