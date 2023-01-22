import validator from 'validator'


export default class Login {
  constructor(formClass) {
    this.form = document.querySelector(formClass);
  }

  init() {
    this.events();
  }

  events() {
    if(!this.form) return;
    this.form.addEventListener('submit', e => {
      e.preventDefault();
      this.validate(e);
    })
  }
  

  validate(e) {
    const el = e.target;

    const nome = el.querySelector('input[name="nome"]');
    const sobrenome = el.querySelector('input[name="sobrenome"]');
    const email = el.querySelector('input[name="email"]');
    const telefone = el.querySelector('input[name="telefone"]');
    let error = false;

    if(typeof nome.value !== 'string'){
      nome.value = 'Precisa ter um texto';
      nome.style.color = 'red';
      error = true;
    }

    if(email.value !== 'string' && telefone.value !== 'string'){
      email.value = 'Precisa ter pelo menos um email ';
      telefone.value = 'Precisa ter pelo menos um telefone';

      email.style.color = 'red';
      telefone.style.color = 'red';
      error = true;
    }

    if(!error) el.submit();
  }
}