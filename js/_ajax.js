


    function obterDados(){
       $.ajax({
	              "async": true,
	              "crossDomain": true,
	              "url": "https://realtor.p.rapidapi.com/properties/v2/list-for-rent?city=New%20York%20City&state_code=NY&limit=20&offset=0&sort=relevance",
	              "method": "GET",
	              "headers": {
		            "x-rapidapi-key": "7d2d8e2fc3msh8a2e5b1a7396f13p1f3d66jsn63c752aeb0e0",
		            "x-rapidapi-host": "realtor.p.rapidapi.com"
                },
           beforeSend: function(){
               $('#esse').after('<p class="loading">Espera papai</p>');
           },
           error: function(){
               $('#esse').after('<p class="loading">Carregou com Sucesso</p>');
           },
           success: function(dados){
                mostrarDados(dados);
           },
           complete: function(){
               $('.loading').remove();               
           }
       })      
       
       function mostrarDados(dados){
        const tbody = $('#esse');
           $.each(dados["properties"], function(i, el){

          //if( el.price >  1000)


               tbody.append(`<div class="container float-left" style="width: 660px; height: 600px;">
                              <div class="card border-info text-white mb-5">
                                <img class="card-img" src="img/casa.jpeg" alt="Card image">
                              <div class="card-img-overlay">
                                <h5 class="card-title">${el.prop_type} em ${el.city}, ${el.country}</h5>
                                  <p class="card-text">Construido em ${el.year_built}, está ${el.prop_status} </p>
                                  <p class="card-text">${el.prop_status}.</p>
                                  <p class="card-text">${el.country}.</p>
                                  <p class="card-text">Id da propriedade: ${el.property_id}</p>
                                </div>
                                  <div class="card-footer text-muted">
                                  Ultima Atualização: ${el.last_update}
                                  </div>
                                </div>
                            </div>`)
           })
       }
    }
    
    //debugger;
    obterDados();
    