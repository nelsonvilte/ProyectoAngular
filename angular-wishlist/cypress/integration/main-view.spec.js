describe('ventana principal', () => {// Describe funcionalidad que se pretende probar, nombre descriptivo.
    // Código de preparación y actuación pruebas
    it('tiene encabezado correcto y en español por defecto', () => {//Primera línea de un nuevo test dentro de nuestro suite de tests.
      // Actuaciones como usuario
      cy.visit('http://localhost:4200');// El comando cy.visit accede a la URL especificada.
      // Comprobaciones como un programador
      cy.contains('angular-whishlist');
      cy.get('h1 b').should('contain', 'HOLA es');
    });  
});


describe( 'Test link home', ()=> {// Describe funcionalidad que se pretende probar, nombre descriptivo.
    // Código de preparación y actuación pruebas
    it( 'Visitar apartado Home', ()=> {// Primera línea de un nuevo test dentro de nuestro suite de tests.
      // Actuaciones como usuario
      cy.visit( 'http://localhost:4200' );// El comando cy.visit accede a la URL especificada.
      
      // Comprobaciones como un programador
      cy.contains( 'Home' ).click();// El comando cy.contains busca el elemento que contenga el texto pasado como parámetro, y después hacemos click en él.
      cy.url().should( 'include', '/home' );// A través del comando cy.url nos aseguramos de que la ruta a la que accedemos es la correcta.
    } );
} );

describe('Test ingreso de ciudad en formulario', ()=>{
    it('Buscar el input para cargar una ciudad y luego click en el boton guardar', () => {
        cy.visit('http://localhost:4200');
        cy.get('input#nombre').type('Cafayate');// El comando cy.get escribe el nombre de la ciudad en el input
        cy.get('button#submit').click();  // Click sobre el botón #submit

    });
})


