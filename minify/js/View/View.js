class View {
    constructor(elemento) { this._element = elemento }
    template(model) { throw Error("Declare o Método") }
    update(model) { this._element.innerHTML = this.template(model) }
}