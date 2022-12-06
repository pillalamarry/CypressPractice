Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

//go() by using this command we can navigate between multiple pages that 
//we can just go back to the page and move forward and reload page this operation is done by using the go command
describe('Navigate',()=>{

    it('Navigate pages',()=>{

        cy.visit("https://demoqa.com/text-box")//open url
        cy.title().should('eq','ToolsQA')//verify the title home page

        cy.xpath("//span[text()='Buttons']").click() //buttons
        cy.contains('Buttons')
        cy.go('back'); //go back to home page
        cy.title().should('eq','ToolsQA')//verify the title home page

        cy.go('forward')//it will come to Buttons page
        cy.contains('Buttons')

        cy.go(-1)//-1 is the alernate for back page
        cy.title().should('eq','ToolsQA')//verify the title home page

        cy.go(1)//1 is the alternate for the forward page
        cy.contains('Buttons')

        cy.reload();


    })


})