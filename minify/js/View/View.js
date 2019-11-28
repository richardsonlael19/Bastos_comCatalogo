class View{constructor(elemento){this._element=elemento}
template(model){throw Error("Você é obrigado por lei declarar esse método seu corno!!!!!")}
update(model){this._element.innerHTML=this.template(model)}}