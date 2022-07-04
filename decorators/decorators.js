"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function logarClasse(constructor) {
    console.log(constructor);
}
function decoratorVazio(_) { }
function logarClasseSe(valor) {
    return valor ? logarClasse : decoratorVazio;
}
function decorator(obj) {
    return function (constructor) {
        console.log(obj.a, obj.b);
    };
}
function logarObjeto(construtor) {
    console.log('Carregado....');
    return class extends construtor {
        constructor(...args) {
            console.log("Antes...");
            super(...args);
            console.log("Depois...");
        }
    };
}
// @logarClasse
// @decorator({ a: 'teste', b: 123 })
// @decorator({ a: 'teste'})
// @logarClasseSe(true)
let Eletrodomestico = class Eletrodomestico {
    constructor() {
        console.log("novo...");
    }
};
Eletrodomestico = __decorate([
    logarObjeto,
    imprimivel
], Eletrodomestico);
function imprimivel(construtor) {
    construtor.prototype.imprimir = function () {
        console.log(this);
    };
}
//(<any>new Eletrodomestico()).imprimir();
const eletro = new Eletrodomestico();
eletro.imprimir && eletro.imprimir();
/* Desafio Decorator perfilAdmin */
const usuarioLogado = {
    nome: "Felipe",
    email: "felipebarreto148@gmail.com",
    admin: true
};
let MudancaAdministrativa = class MudancaAdministrativa {
    critico() {
        console.log('Algo crítico foi alterado!');
    }
};
MudancaAdministrativa = __decorate([
    perfilAdmin
], MudancaAdministrativa);
function perfilAdmin(construtor) {
    return class extends construtor {
        constructor(...args) {
            super(...args);
            if (!usuarioLogado || !usuarioLogado.admin) {
                throw new Error('Sem permissão!');
            }
        }
    };
}
new MudancaAdministrativa().critico();
class contaCorrente {
    constructor(saldo) {
        this.saldo = saldo;
    }
    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            return true;
        }
        return false;
    }
    getSaldo() {
        return this.saldo;
    }
}
__decorate([
    naoNegativo
], contaCorrente.prototype, "saldo", void 0);
__decorate([
    congelar,
    __param(0, paramInfo)
], contaCorrente.prototype, "sacar", null);
__decorate([
    congelar
], contaCorrente.prototype, "getSaldo", null);
const cc = new contaCorrente(6000);
cc.sacar(500);
console.log(cc.getSaldo());
/* cc.getSaldo = function () {
    return this['saldo'] + 1000;
} */
cc.sacar(7000);
console.log(cc.getSaldo());
// Object.freeze()
function congelar(alvo, nomeMetodo, descritor) {
    console.log(alvo);
    console.log(nomeMetodo);
    descritor.writable = false;
}
function naoNegativo(alvo, nomePropriedade) {
    delete alvo[nomePropriedade];
    Object.defineProperty(alvo, nomePropriedade, {
        get: function () {
            return alvo['_' + nomePropriedade];
        },
        set: function (valor) {
            if (valor < 0) {
                throw new Error('Valor negativo!');
            }
            else {
                alvo['_' + nomePropriedade] = valor;
            }
        },
    });
}
function paramInfo(alvo, nomeMetodo, indiceParam) {
    console.log(alvo);
    console.log(nomeMetodo);
    console.log(indiceParam);
}
//# sourceMappingURL=decorators.js.map