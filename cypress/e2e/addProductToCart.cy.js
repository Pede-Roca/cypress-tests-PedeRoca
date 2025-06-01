describe('Login Test', () => {
  it('should login with valid credentials', () => {
    cy.visit('https://pederoca-22e90.web.app/')

    //----------------Fazendo Login--------------------------

        // Clica no botão Menu
    cy.get('#_Button_ssi04_1').click()
    cy.wait(1500)

    // Preenche o campo de email
    cy.get('input[name="email"]').type('h@teste.com.br')
    cy.wait(1500)

    // Preenche o campo de senha
    cy.get('input[name="password"]').type('123456')
    cy.wait(1500)

    // Clica no botão de login
    cy.get('#_btnLogin_pdtmb_1').click()
    cy.wait(2000)

    //Fecha a aba de opções do usuário
    cy.get('button[aria-label="Close"]').click()
    cy.wait(5000)

    //----------------Adicionando produto ao carrinho--------------------------

    // Clica no input e escrever cenoura
    cy.get('#_filtroPesquisa_12ack_1').type('cenoura')
    cy.wait(1500)

    //adiciona o produto ao carrinho
    cy.get('button[aria-label="Adicionar ao Carrinho"]').click()
    cy.wait(1500)

    //abrindo o carrinho
    cy.get('#_Button_ssi04_1').click()
    cy.wait(1500)
    cy.get('._btnNavCart_ssi04_89').click()

    //adicionado mais produtos ao carrinho
    cy.get('._btn_changeQuantityPlus_19ngf_70').click()
    cy.wait(2000)
    cy.get('._btn_changeQuantityPlus_19ngf_70').click()
    cy.wait(2000)
    cy.get('._btn_changeQuantityPlus_19ngf_70').click()
    cy.wait(2000)
    cy.get('._btn_changeQuantityMinus_19ngf_76').click()
    cy.wait(4000)

    //Fechando o carrinho
    cy.get('button[aria-label="Close"]').click()
    cy.wait(4000)

    //abrindo o carrinho
    cy.get('#_Button_ssi04_1').click()
    cy.wait(1500)

    //retirando todos itens do carrinho
    cy.get('._btn_changeQuantityMinus_19ngf_76').click()
    cy.wait(2000)
    cy.get('._btn_changeQuantityMinus_19ngf_76').click()
    cy.wait(2000)
    cy.get('._btn_changeQuantityMinus_19ngf_76').click()
    cy.wait(2000)

    //fechando o carrinho
    cy.get('button[aria-label="Close"]').click()
    cy.wait(2000)

    //Deslogando
    cy.get('#_Button_ssi04_1').click()
    cy.wait(1500)
    cy.get('._btnNavUser_ssi04_89').click()
    cy.wait(1500)
    cy.get('._btnSair_1eagw_51').click()
    cy.wait(2000)
    //Fecha a aba de opções do usuário
    cy.get('button[aria-label="Close"]').click()
    cy.wait(2000)
  })
})