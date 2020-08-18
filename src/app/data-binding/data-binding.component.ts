import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  url: string = 'https://toti.site/';
  urlImagem: string = 'https://picsum.photos/400';
  nome_curso: string = 'Introdução ao Angular';
  campo_texto: string = '';
  valor_salvo: string = '';
  nome: string = '';

  botaoClicado() {
    alert("Ai, doeu! Você me clicou");
  }

  salvarValor(valor) {
    this.valor_salvo = valor;
  }

  saiuDoCampo() {
    console.log('Poxa, você saiu do campo!');
  }

  passeiMouse() {
    console.log('Olá, você passou o mouse aqui!')
  }

  onKeyUp(valor) {
    this.campo_texto = valor;
  }

  valorSelecionado(nome) {
    this.nome = nome;
  }

  getValor(): number {
    return 1;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
