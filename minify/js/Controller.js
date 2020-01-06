class Controller{constructor(){let $=document.querySelector.bind(document)
    this.navbar=new NavbarView($("#navbar"));this.redes_sociais=new RedesView($("#redes_sociais"));this.init()
    this.validacaoDesktop=new Bibi($("#placa"),$("#produto"))}
    init(){this.navbar.update();this.redes_sociais.update();M.Sidenav.init($('.sidenav'))}
    enviar(event){return this.validacaoDesktop.init(event)}}
