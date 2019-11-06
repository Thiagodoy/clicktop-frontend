describe(' Register a Company Test', function(){
    it('Logar',function(){
        cy.visit('http://localhost:8080');
        cy.wait(10000)
        
        cy.get('#company-name').type('Sophia e Bianca Locações de Automóveis Ltda',{delay:40});

        cy.get('#telephone').type('(16) 3324-1382',{delay:40});
        cy.get('#telephone-comercial').type('0800-6498',{delay:40});
        cy.get('#cell-phone').type('(14) 98966-1375',{delay:40});

        //address
        cy.get('#address').type('AV Travessa Brasil, Vila São Lúcio',{delay:40});
        cy.get('#address-number').type('987',{delay:40});
        cy.get('#zip-code').type('18603-300',{delay:40});
        cy.get('#city-state').type('Araraquara / SP',{delay:40});
       // cy.get('.vbst-item list-group-item list-group-item-action').click();


        cy.get('#description').type('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet quam pellentesque nisi blandit tincidunt. Mauris magna erat, pretium ut diam eu, congue dapibus magna. Maecenas semper ipsum quis metus consectetur malesuada id ut dui. Morbi eu ultricies magna, sed dignissim odio. Nulla efficitur dui elit. In malesuada enim nec suscipit laoreet. Praesent viverra, diam ac imperdiet volutpat, velit diam facilisis elit, ac feugia',{delay:20});

        //horario de funcionamento
        cy.get('#opening-hours').type('10:00',{delay:40});
        cy.get('#closing-hours').type('20:45',{delay:40});

        cy.get('#email').type('fiscal@sophiaebiancalocacoesdeautomoveisltda.com.br',{delay:40});
        cy.get('#keys').type('Estofados,Acabamento,Funilaria,Designer',{delay:40});

        cy.get('#main-products').type('Estofados e Madeira MDF',{delay:40});
        cy.get('#website').type('www.sophiaebiancalocacoesdeautomoveisltda.com.br',{delay:40});

        cy.get('#facebook').type('facebook@facebook.com',{delay:40})
        cy.get('#instagran').type('instagram@instagran.com',{delay:40})
       
        
        
       

       
       
    })
})