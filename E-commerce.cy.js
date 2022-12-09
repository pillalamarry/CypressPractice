///<reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('E-Commerce Website', () => {

    beforeEach("Before", () => {
        cy.visit('https://demo.nopcommerce.com/')
        //cy.visit('https://demo.nopcommerce.com/jewelry')
        cy.title().should('eq', 'nopCommerce demo store')   //Home page       
    })

    it('Registeration page', () => {

        function makeid(length) {
            var result           = '';
            var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for ( var i = 0; i < length; i++ ) {
               result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
         }
         
         console.log(makeid(5));

        cy.get('.ico-register').contains('Reg').click()
        cy.title().should('eq', 'nopCommerce demo store. Register')   //Register page
        //Gender
        cy.get('#gender-female').click()
        //FirstName
        cy.get('#FirstName').type('Sowji').should('have.value', 'Sowji')
        //LastName
        cy.get('#LastName').type('Pillalamarry').should('have.value', 'Pillalamarry')
        //Select day from DropDown
        cy.get('[name="DateOfBirthDay"]').select('6').should('have.value', '6')
        cy.wait(1000)
        //Select Month from DropDown
        cy.get('[name="DateOfBirthMonth"]').select('12').should('have.value', '12')
        cy.wait(1000)
        //Select Year from DropDown
        cy.get('[name="DateOfBirthYear"]').select('1998').should('have.value', '1998')
        // Email
        cy.get('#Email')
                  .type(makeid(5) + "@gmail.com")

        cy.wait(3000)
        // Company Name
        cy.get('#Company').type('Cypress').should('have.value', 'Cypress')
        //Password
        cy.get('#Password').type('Seneca123$')
        //Confirm password
        cy.get('#ConfirmPassword').type('Seneca123$')
        //Register
        cy.get('#register-button').click()
        //cy.get('.result').contains('Your registration completed').should('be.visible')
    })

    it.skip('Login page', () => {
        cy.get('.ico-login').click()
        cy.get('#Email').type(makeid(5) + "@gmail.com")
        cy.get('#Password').type('Seneca123$')
        cy.get('form > .buttons > .button-1').click()
    })

    it.skip('My Account page', () => {
        cy.get('.ico-account').click()  //My account
    })

    it('Select any one Jewelry item from the list', () => {

        cy.get('.menu-toggle').click()
        cy.get(':nth-child(2) > .product-item > .details > .add-info > .buttons > .product-box-add-to-cart-button').click()
        cy.get('.cart-label').click()
        cy.get('#termsofservice').click()
        cy.get('#checkout').click()
        cy.get('.checkout-as-guest-button').click()

    })


    it('Address page', () => {
        cy.get('.customer-addresses > a').click({ force: true })  //Addresses
        cy.get('.add-button > .button-1').click()
        cy.get('#Address_FirstName').type('Sowjanya').should('have.value', 'Sowjanya')
        cy.get('#Address_LastName').type('Pillalamarry').should('have.value', 'Pillalamarry')
        cy.get('#Address_Email').type('Testing@gmail.com').should('have.value', 'Testing@gmail.com')
        cy.get('#Address_Company').type('Cypress').should('have.value', 'Cypress')
        cy.get('#Address_CountryId').select('133').should('have.value', '133')
        cy.get('#Address_City').type('Hyderabad').should('have.value', 'Hyderabad')
        cy.get('#Address_Address1').type('Hyderabad').should('have.value', 'Hyderabad')
        cy.get('#Address_ZipPostalCode').type('123456').should('have.value', '123456')
        cy.get('#Address_PhoneNumber').type('9874561230').should('have.value', '9874561230')
        cy.get('.buttons > .button-1').click()
    })
   
})