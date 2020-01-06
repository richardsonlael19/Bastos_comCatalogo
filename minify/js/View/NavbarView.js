class NavbarView extends View {
    constructor(elemento) {
        super(elemento)
        this.logoImage = "img/Logomarca.webp";
        this.lupaImage = "img/Lupa.webp";
        this.redes_sociais = new RedesView(document.querySelector("#redes_sociais"))
    }
    template() { return `
    <div class="navbar sticky-top navbar-light bg-light shadow-lg ">
    
    <a class="align-middle navbar-brand mx-auto" href="index.html"><img class="align-middle" src="${this.logoImage}" width="140" alt=""></a>
    <a href="#" data-target="slide-out"  class="sidenav-trigger mr-4 sidebar-button"><i class="fa fa-bars" aria-hidden="true"></i>  </a>
        <div class=" cormenuplaca">
        <br>   
        <p class="mx-auto text-center align-text-bottom fontplaca"><strong>Encontre nossos produtos pela placa.</strong></p>
                <div class="row mx-auto" >
                <form onsubmit="controle.enviar(event)" class="form-inline col-sm-12 my-2 my-lg-0 font-dark ">
                       <input  type="text" class="form-control buscaInput col-md-4 col-3  ml-3 placa bordainput input mx-auto"" id="placa" placeholder="PLACA "> 
                        <input type="text" class="form-control buscaInput col-md-4 col-4 ml-3 produto bordainputproduto input mx-auto"" id="produto" placeholder="PRODUTO" />
                        <button  type="submit" class="button-pesquisa buscaInputMobile  btn btn-light ml-2 col-2">Buscar</button> <br> <br>
                        </form>
              </div>
              </div>
              <div class="mx-auto">
              <ul class="nav desktop  justify-content-center mx-auto">
              <li class="nav-item "> 
              <a class="nav-link "  href="index.html" role="tab" aria-controls="pills-profile"   aria-selected="false" style="color:grey; font-weight: bold;"> 
              INÍCIO 
              </a>
              </li> 
              <li class="nav-item "> 
              <a class="nav-link "  href="http://www.c123.com.br/bastos/" role="tab" aria-controls="pills-profile" aria-selected="false"  style="color:grey; font-weight: bold;">
              CATÁLOGO ONLINE
               </a>                  
               </li> 
                <li class="nav-item ">
                <a class="nav-link "  href="sobre.html" role="tab" aria-controls="pills-profile" aria-selected="false" style="color:grey; font-weight: bold;">
                SOBRE
                </a>                    
                </li>
                <li class="nav-item ">
                <a class="nav-link " href="download.html" role="tab" aria-controls="pills-profile" aria-selected="false" style="color:grey; font-weight: bold;">
                DOWNLOAD
                </a>
                </li>
                <li class="nav-item ">
                <a class="nav-link " href="contato.html" role="tab" aria-controls="pills-profile" aria-selected="false" style="color:grey; font-weight: bold;">
                CONTATO 
                </a>
                </li>  
                </ul> 
           
                  <ul id="slide-out" class="sidenav shadow-lg " style=" list-style-type: none; ">
             
                  <li ><a class="waves-effect" href="index.html">INÍCIO</a></li>
                  <li ><a class="waves-effect" href="http://www.c123.com.br/bastos/"> CATÁLOGO ONLINE</a></li>
                  <li ><a class="waves-effect" href="sobre.html">SOBRE NÓS</a></li>
                  <li ><a class="waves-effect" href="download.html">DOWNLOAD</a></li>
                  <li ><a class="waves-effect" href="contato.html"> CONTATO</a></li>
                  <li><div class="divider"></div></li>
                 ${this.redes_sociais.template() /* <---- aqui estou re-executando apenas template */}
               
                </ul>
               
                <script>
            if(window.innerWidth < 1025){
           $(".form-inline").removeClass("center-menu");
    }
        </script>
    
                ` }
}
