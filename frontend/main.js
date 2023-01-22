import 'core-js/stable';
import 'regenerator-runtime/runtime';
import Login from './modules/Login';
import Contato from './modules/Contato';

const login = new Login('.form-login');
const cadastro = new Login('.form-cadastro');
const contatoR = new Contato('.form-contato-register')
const contatoU = new Contato('.form-contato-update')

login.init();
cadastro.init();
contatoR.init();
contatoU.init();

