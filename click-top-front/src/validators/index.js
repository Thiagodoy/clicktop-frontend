import { Validator } from 'vee-validate';


const dictionary = {
    pt_BR: {
        messages: {
            required: () => 'Campo é obrigatório.',
            // min: (field, arg) => `Tamanho mínimo do campo de ${arg} caracteres.`,
             max: (field, arg) => `Tamanho máximo do campo de ${arg} caracteres.`,
            // after: (field) => `Campo deve ser após ${field}`,
            // confirmed: (field) => `Senhas não conferem`,
            // email: (field) => 'O formato do e-mail é inválido.',
            // decimal: (field) => 'Campo deve ser numérico',
            // max_value: (field, arg) => `Campo inválido(a) , máximo(a) possível = ${arg} `,
            // min_value: (field, arg) => `Campo inválido(a) , mínimo(a) possível = ${arg}`,
            // caracterEspecial: () => 'Senha tem que ter pelo menos 1 caracter especial[ @#$%&*()_+=§ª ]',
            // passwordLength: () => 'Senha tem que ter pelo menos 8 caracteres!',
            // passwordLowerCase: () => 'Senha tem quem ter pelo menos 1 letra em minúscula!',
            // passwordUpperCase: () => 'Senha tem quem ter pelo menos 1 letra em maiúscula!',
            // passwordCaracterRepeated:()=> 'Senha com pelo menos 3 caracteres repetidos em sequencia!',
            // validaNroMaxAgencia:()=> 'Numero máximo para o perfil selecionado é uma agencia',
            // validaNroMaxPerfil:()=> 'É permitido selecionar apenas um perfil!',
            // userExists:() => 'Cpf já cadastrado na base de dados!',
            // validaCPF:() => 'Cpf inválido!'
        }
    },
    // en: {
    //     messages: {           
    //     }
    // }
};



const plugin = {};

plugin.install = function(Vue, options) {
    // Validator.extend('userExists', accountExists);
    // Validator.extend('caracterEspecial', caracterEspecial);
    // Validator.extend('passwordLength', passwordLength);
    // Validator.extend('passwordLowerCase', passwordLowerCase);
    // Validator.extend('passwordUpperCase', passwordUpperCase);
    // Validator.extend('passwordCaracterRepeated', caracterRepeated);
    // Validator.extend('validaNroMaxAgencia', validaNroMaxAgencia,{ hasTarget: true });
    // Validator.extend('validaNroMaxPerfil', validaNroMaxPerfil);
    // Validator.extend('validaCPF', validCpf);
    
    
};

export { dictionary, plugin }