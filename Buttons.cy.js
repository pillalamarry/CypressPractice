/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {

    return false;
  
  });
  
  
  
  describe('Access Website', () => {
  
    it('Launch sites',()=>{
  
      cy.visit('https://demoqa.com/buttons')
  
      cy.title().should('eq','ToolsQA')
  
    })
  
  })
  
  
  
  
  
  describe('Double click button', () => {
  
    it('Double click button',()=>{
  
      cy.get('#doubleClickBtn').dblclick();
  
    })
  
  })
  
  
  
  
  describe('Right click button', () => {
  
    it('Right click button',()=>{
  
      cy.get('#rightClickBtn').rightclick();
  
    })
  
  })
  
  describe(' click button', () => {
  
    it(' click button',()=>{
  
      cy.xpath('//button[starts-with(text(),"Click Me")]').click()
  
    })
  
  })