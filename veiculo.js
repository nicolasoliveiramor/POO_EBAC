function Veiculo(tipo, modelo, locomocao, velocidade) {
    this.tipo = tipo || "Tipo de veiculo não informado";
    this.modelo = modelo || "Veiculo sem modelo";
    this.locomocao = locomocao || "Veiculo sem tipo de locomoção";
    this.velocidade = velocidade || "Veiculo sem velocidade";

    let _velocidade = velocidade || "Velocidade não definida";

    this.getVelocidade = function() {
        return _velocidade;
    };

    this.setVelocidade = function(valor) {
        if (typeof valor === "number") {
            _velocidade = valor;
        } else {
            console.log(`${valor} não é um valor válido!`);
        }
    };
}

Veiculo.prototype.turbo = function(multiplicador) {
    const novaVelocidade = this.getVelocidade() * multiplicador;
    this.setVelocidade(novaVelocidade);
};

// Construtores específicos para cada tipo de veículo

function Terrestre(tipo, modelo, locomocao, velocidade) {
    Veiculo.call(this, tipo, modelo, locomocao, velocidade);
}
Terrestre.prototype = Object.create(Veiculo.prototype);
Terrestre.prototype.constructor = Terrestre;

Terrestre.prototype.exibir = function() {
    console.log(`Tipo: ${this.tipo}, Modelo: ${this.modelo}, Locomoção: ${this.locomocao}, Velocidade com turbo: ${this.getVelocidade()}`);
};

Terrestre.prototype.turbo = function() {
    Veiculo.prototype.turbo.call(this, 1.2);  // Fator de 1.2 para veículos terrestres
};

function Aereo(tipo, modelo, locomocao, velocidade) {
    Veiculo.call(this, tipo, modelo, locomocao, velocidade);
}
Aereo.prototype = Object.create(Veiculo.prototype);
Aereo.prototype.constructor = Aereo;

Aereo.prototype.exibir = function() {
    console.log(`Tipo: ${this.tipo}, Modelo: ${this.modelo}, Locomoção: ${this.locomocao}, Velocidade com turbo: ${this.getVelocidade()}`);
};

Aereo.prototype.turbo = function() {
    Veiculo.prototype.turbo.call(this, 1.6);  // Fator de 1.6 para veículos aéreos
};

function Naval(tipo, modelo, locomocao, velocidade) {
    Veiculo.call(this, tipo, modelo, locomocao, velocidade);
}
Naval.prototype = Object.create(Veiculo.prototype);
Naval.prototype.constructor = Naval;

Naval.prototype.exibir = function() {
    console.log(`Tipo: ${this.tipo}, Modelo: ${this.modelo}, Locomoção: ${this.locomocao}, Velocidade com turbo: ${this.getVelocidade()}`);
}

Naval.prototype.turbo = function() {
    Veiculo.prototype.turbo.call(this, 1.4);  // Fator de 1.4 para veículos navais
};

// Testando os veículos

const veiculoUm = new Terrestre("Carro", "Ferrari", "Rodas", 100);
const veiculoDois = new Aereo("Aviao", "Jato", "Turbina", 900);
const veiculoTres = new Naval("Navio", "Titanic", "Helice", 30);

veiculoUm.turbo();
veiculoUm.exibir()

veiculoDois.turbo();
veiculoDois.exibir()

veiculoTres.turbo();
veiculoTres.exibir()
