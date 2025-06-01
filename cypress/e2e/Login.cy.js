describe('Login Test', () => {
  it('should login with valid credentials', () => {
    cy.visit('https://pederoca-22e90.web.app/')

    // Clica no botão Menu
    cy.get('#_Button_ssi04_1').click()

    // Preenche o campo de email
    cy.get('input[name="email"]').type('h@teste.com.br')

    // Preenche o campo de senha
    cy.get('input[name="password"]').type('123456')

    // Clica no botão de login
    cy.get('#_btnLogin_pdtmb_1').click()
    cy.wait(4000)

    //Fecha a aba de opções do usuário
    cy.get('button[aria-label="Close"]').click()
    
    cy.wait(5000)
    // Clica no botão Menu
    cy.get('#_Button_ssi04_1').click()

    //Fazendo logout
    cy.get('._btnSair_1eagw_51').click()
    cy.wait(2000)

    //Fecha a aba de opções do usuário
    cy.get('button[aria-label="Close"]').click()
  })
})