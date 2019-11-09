describe(' Register a Company Test', function(){
    it('Logar',function(){
        cy.visit('http://localhost:8080');
        cy.wait(5000)
        

        cy.get('#header-login').click()
        cy.wait(500);
        cy.get('#login-email').type('thiago@thiago.com',{delay:40});
        cy.get('#login-password').type('123456',{delay:40});
        cy.get('#bt-login').click();


        cy.wait(5000)


        cy.get('#company-name').type('Sophia e Bianca Locações de Automóveis Ltda',{delay:40});

        cy.get('#telephone').type('(16) 3324-1382',{delay:40});
        cy.get('#telephone-comercial').type('0800-6498',{delay:40});
        cy.get('#cell-phone').type('(14) 98966-1375',{delay:40});

        //address
        cy.get('#address').type('Uchoa, Jd América',{delay:40});

        cy.get('#category').type('Adestradores',{delay:40});
        cy.get('.vbst-item').click();

        cy.get('#address-number').type('393',{delay:40});
        cy.get('#zip-code').type('14811-238',{delay:40});
        
        cy.get('#city-state').type('Araraquara / SP',{delay:40});
        cy.get('.vbst-item').click({multiple:true, force:true});


        cy.get('#description').type('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet quam pellentesque nisi blandit tincidunt.',{delay:20});

        //horario de funcionamento
        cy.get('#opening-hours').type('1000',{delay:40});
        cy.get('#closing-hours').type('2045',{delay:40});

        cy.get('#email').type('fiscal@sophiaebiancalocacoesdeautomoveisltda.com.br',{delay:40});
        cy.get('#keys').type('Estofados,Acabamento,Funilaria,Designer',{delay:40});

        cy.get('#main-products').type('Estofados e Madeira MDF',{delay:40});
        cy.get('#website').type('www.sophiaebiancalocacoesdeautomoveisltda.com.br',{delay:40});

        cy.get('#facebook').type('facebook@facebook.com',{delay:40});
        cy.get('#instagran').type('instagram@instagran.com',{delay:40});

        cy.get('#btn-company-save').click();
       
        
        
       

       
       
    })
})