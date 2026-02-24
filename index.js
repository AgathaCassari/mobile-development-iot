// AULA 1 - Programação Orientada a Objetos em JavaScript

// ==========================
// 1. ENCAPSULAMENTO
// ==========================

class ContaBancaria {
    #saldo = 0; // atributo privado

    depositar(valor) {
        if (valor > 0) {
            this.#saldo += valor;
        }
    }

    getSaldo() {
        return this.#saldo;
    }
}

const conta = new ContaBancaria();
conta.depositar(200);
console.log("Saldo:", conta.getSaldo());


// ==========================
// 2. HERANÇA
// ==========================

class Funcionario {
    constructor(nome) {
        this.nome = nome;
    }

    calcularBonus() {
        console.log("Bônus padrão do funcionário");
    }
}

class Desenvolvedor extends Funcionario {
    calcularBonus() {
        console.log("Bônus baseado em performance de projetos");
    }
}

const dev = new Desenvolvedor("Agatha");
dev.calcularBonus();


// ==========================
// 3. POLIMORFISMO
// ==========================

function mostrarBonus(funcionario) {
    funcionario.calcularBonus();
}

const funcionario1 = new Funcionario("João");
const funcionario2 = new Desenvolvedor("Maria");

mostrarBonus(funcionario1);
mostrarBonus(funcionario2);


// ==========================
// 4. ABSTRAÇÃO
// ==========================

class Pagamento {
    processar(valor) {
        throw new Error("Método precisa ser implementado");
    }
}

class PagamentoCartao extends Pagamento {
    processar(valor) {
        console.log(`Pagamento no cartão: R$ ${valor}`);
    }
}

const pagamento = new PagamentoCartao();
pagamento.processar(150);

// ==========================
// 5. EXERCÍCIOS DA AULA
// ==========================

// Exercício 1 - Classe Cliente (Encapsulamento)

class Cliente {
    #nome;
    #email;

    constructor(nome, email) {
        this.#nome = nome;
        this.#email = email;
    }

    setNome(nome) {
        this.#nome = nome;
    }

    getNome() {
        return this.#nome;
    }

    setEmail(email) {
        this.#email = email;
    }

    getEmail() {
        return this.#email;
    }
}

// Exercício 2 - Utilizando o objeto

const cliente = new Cliente("Ana Souza", "ana.souza@email.com");

console.log("Nome do cliente:", cliente.getNome());
console.log("Email do cliente:", cliente.getEmail());