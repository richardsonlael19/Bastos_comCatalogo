function validacao() { var e = document.getElementById("palavrachave").value,
        t = document.getElementById("codbastos").value,
        a = document.getElementById("similar").value,
        n = document.getElementById("medida").value,
        o = document.getElementById("montadora").value,
        d = document.getElementById("veiculo").value,
        l = document.getElementById("subgrupo").value; return e || t || a || n || o || d || l ? "" != o && "" != d ? (event.preventDefault(), void window.location.assign(`http://www.c123.com.br/bastos/res.asp?v=${d}&m=${o}`)) : "" != o && "" != d && "" != n ? (event.preventDefault(), void window.location.assign(`http://www.c123.com.br/bastos/res.asp?f=${n}&v=${d}&m=${o}`)) : "" != e ? (event.preventDefault(), void window.location.assign(`http://www.c123.com.br/bastos/res.asp?d=${e}`)) : "" != t ? (event.preventDefault(), void window.location.assign(`http://www.c123.com.br/bastos/res.asp?n=${t}`)) : "" != a ? (event.preventDefault(), void window.location.assign(`http://www.c123.com.br/bastos/res.asp?x=${a}`)) : "" != n ? (event.preventDefault(), void window.location.assign(`http://www.c123.com.br/bastos/res.asp?f=${n}`)) : "" != o ? (event.preventDefault(), void window.location.assign(`http://www.c123.com.br/bastos/res.asp?m=${o}`)) : "" != d ? (event.preventDefault(), void window.location.assign(`http://www.c123.com.br/bastos/res.asp?v=${d}`)) : "" != l ? (event.preventDefault(), void window.location.assign(`http://www.c123.com.br/bastos/res.asp?s=${l}`)) : void 0 : (event.preventDefault(), void $(".borda").addClass("error-border")) }

function apagar_palavrachave() { document.getElementById("codbastos").value = "", document.getElementById("similar").value = "", document.getElementById("medida").value = "", document.getElementById("montadora").value = "", document.getElementById("veiculo").value = "", document.getElementById("subgrupo").value = "" }

function apagar_codigo() { document.getElementById("palavrachave").value = "", document.getElementById("similar").value = "", document.getElementById("medida").value = "", document.getElementById("montadora").value = "", document.getElementById("veiculo").value = "", document.getElementById("subgrupo").value = "" }

function apagar_similar() { document.getElementById("palavrachave").value = "", document.getElementById("codbastos").value = "", document.getElementById("medida").value = "", document.getElementById("montadora").value = "", document.getElementById("veiculo").value = "", document.getElementById("subgrupo").value = "" }

function apagar_geral() { document.getElementById("palavrachave").value = "", document.getElementById("codbastos").value = "", document.getElementById("similar").value = "" }