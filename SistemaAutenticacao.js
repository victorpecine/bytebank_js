/*
Ser autenticável significa ter um método 'autenticar'
*/

export class SistemaAutenticacao {
    static login(autenticavel, senha) {
        if (SistemaAutenticacao.Autenticavel(autenticavel)) {
            return autenticavel.autenticar(senha);
        }
        return false;
    }

    static Autenticavel(autenticavel) {
        // verifica se a chave existe dentro do objeto
        return 'autenticar' in autenticavel && autenticavel.autenticar instanceof Function;
    }
}