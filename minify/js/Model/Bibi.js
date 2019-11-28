class Bibi {
    constructor(placa, produto) {
        this.placa = placa;
        this.produto = produto;
        this.placa.addEventListener('input', () => this.validarPlaca())
        this.placa.addEventListener('focusout', () => {
            if (this.validarPlaca()) {
                $(this.placa).addClass("sucess-border");
                $(this.placa).removeClass("error-border")
            } else {
                $(this.placa).addClass("error-border");
                $(this.placa).removeClass("sucess-border")
            }
        })
        this.produto.addEventListener('input', () => this.validarProduto())
        this.produto.addEventListener('focusout', () => {
            if (this.validarProduto()) {
                $(this.produto).addClass("sucess-border");
                $(this.produto).removeClass("error-border")
            } else {
                $(this.produto).addClass("error-border");
                $(this.produto).removeClass("sucess-border")
            }
        })
        this.placa.addEventListener('focus', () => {
            $(this.placa).removeClass("error-border")
            $(this.placa).removeClass("sucess-border")
        })
    }
    validarPlaca() {
        let regra = /[A-Z]{3}-?[0-9][0-9  A-J][0-9]{2}/.test(this.placa.value.toUpperCase());
        if (this.placa.value.replace('-', '').length > 7) {
            console.log("Digitos execedentes");
            this.placa.value = this.placa.value.substr(0, this.placa.value.length - 1)
            return !1
        }
        if (this.placa.value.replace('-', '').length > 5 && !regra) {
            $(this.placa).removeClass("error-border")
            $(this.placa).removeClass("sucess-border")
        }
        if (regra) { return !0 } else { return !1 }
    }
    validarProduto() {
        if (this.produto.value) {
            $(this.produto).addClass("sucess-border");
            $(this.produto).removeClass("error-border")
            return true;
        } else {
            $(this.produto).addClass("error-border");
            $(this.produto).removeClass("sucess-border")
            return false;
        }
    }
    envia() {
        localStorage.setItem('pesquisa', 'true');
        window.location.assign(`https://bastosjuntas.bibipecas.com.br/search/${this.placa.value}/${this.produto.value}`)
    }
    init(event) {
        event.preventDefault();
        if (this.validarPlaca() && this.validarProduto()) { this.envia() } else {
            $(this.placa).addClass("error-border");
            $(this.placa).removeClass("sucess-border")
        }
    }
}