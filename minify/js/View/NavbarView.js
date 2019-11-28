class NavbarView extends View {
    constructor(elemento) {
        super(elemento)
        this.logoImage = "img/Logomarca.webp";
        this.lupaImage = "img/Lupa.webp";
        this.redes_sociais = new RedesView(document.querySelector("#redes_sociais"))
    }
    template() { return `
            
            <div class="navbar sticky-top navbar-light bg-light shadow-lg ">
    
            <a class="navbar-brand logo-mobile" href="index.html"><img class="logo" src="${this.logoImage}" alt=""></a>
            <a href="#" data-target="slide-out"  class="sidenav-trigger mr-4 sidebar-button"><i class="fa fa-bars" aria-hidden="true" ></i>  </a>
            
            <div class="pesquisa-desktop pesquisa-mobile">
            <p class="p-pesquisa" align="center">Encontre nossos produtos pela placa.</p>
                    <div class="row" align="center">
    
                    <form onsubmit="controle.enviaDesktop(event)"  class="form-inline col-sm-12 my-2 my-lg-0 font-dark  center-menu">
                           <input  style="type="text" class="form-control buscaInput col-md-3 col-4  mr-3 placa bordainput input" id="placa" placeholder="PLACA DO VEÍCULO"> 
                            <input style="type="text" class="form-control buscaInput col-md-3 col-4 mr-3 produto bordainputproduto input" id="produto" placeholder="PRODUTO" />
                            <button class=" col-2 mr-1 btn btn-light">
                            Buscar
                            </button>
                            <a  href="#catalogo" class="col-2 ml-2 btn btn-light btn-sm pesquisa-avancada">Pesquisa Avançada </a>
                            <br>
                
                            </form>
                  
    
                  </div>
                  </div>
                  <div>
                  <ul class="nav desktop  justify-content-end ">
                 
                  <li class="nav-item "> 
                  <a class="nav-link " id="pills-profile-tab"  href="index.html" role="tab" aria-controls="pills-profile" aria-selected="false" style="color:grey; font-weight: bold; position: relative; left:80px;"> INÍCIO </a>
                  </li> 
                  <li class="nav-item "> 
                  <a class="nav-link " id="pills-profile-tab"  href="http://www.c123.com.br/bastos/" role="tab" aria-controls="pills-profile" aria-selected="false"  style="color:grey; font-weight: bold; position: relative; left:63px;"> CATÁLOGO ONLINE </a>
                  </li> 
                    <li class="nav-item ">
                    <a class="nav-link " id="pills-profile-tab" href="sobre.html" role="tab" aria-controls="pills-profile" aria-selected="false" style="color:grey; font-weight: bold; position: relative; left:47px;"> SOBRE NÓS</a>
                    </li>
                    <li class="nav-item ">
                    <a class="nav-link " id="pills-profile-tab" href="download.html" role="tab" aria-controls="pills-profile" aria-selected="false" style="color:grey; font-weight: bold; position: relative; left:30px;"> DOWNLOAD</a>
                    </li>
                    <li class="nav-item ">
                    <a class="nav-link " id="pills-profile-tab" href="contato.html" role="tab" aria-controls="pills-profile" aria-selected="false" style="color:grey; font-weight: bold; position: relative; left:10px;"> CONTATO </a>
                    </li>  
                    </ul> 
                  <ul id="slide-out" class="sidenav shadow-lg " style=" list-style-type: none; ">
             
                  <li ><a class="waves-effect" href="index.html">INÍCIO</a></li>
                  <li ><a class="waves-effect" href="#layout-mobile">PESQUISA</a></li>
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