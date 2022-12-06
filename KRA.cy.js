Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  describe('Login HRMS',()=>{

    beforeEach('Login',()=>{   //before each block will excute before excuting the every IT block

        cy.visit("http://192.168.11.50:3026/login");
        cy.get("input[formcontrolname='email']").type("kalyan.penumutchu@senecaglobal.com")
        // cy.contains("Log in").click()
        cy.xpath("//span[text()='Log in']").click();

    })
    it('Operation head',()=>{
        // cy.xpath("//h4[text()='Operation Head']/parent::div").click();
        cy.contains("Operation Head").click();
    })
  })