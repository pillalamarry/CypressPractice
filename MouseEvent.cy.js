Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

describe('MouseOperations',()=>{

    it('Mouse Hover',()=>{

        cy.visit("https://demo.opencart.com/");
        cy.get(".nav :nth-child(1) a[class='nav-link dropdown-toggle']").trigger('mouseover').click()

        cy.get("a[class=nav-link]").contains("Mac (1)").click()

    })

    it('Right click',()=>{
        //here two approches are there for right click
        //directly we can use right click method 
        //or we can trigger the right click event by using the trigger method

        //Approach 1 by using trigger method
        // cy.visit('https://demoqa.com/buttons')
        // cy.get('#rightClickBtn').trigger('contextmenu').click()
        // cy.get('#rightClickMessage').should('be.visible');
        

        //Approach 2 by using right click method
        cy.visit('https://demoqa.com/buttons')
        cy.get('#rightClickBtn').rightclick().click()
        cy.get('#rightClickMessage').should('be.visible');
    })


    it.skip('Double click button',()=>{

        //Approach 1 by using trigger method

        cy.visit('https://demoqa.com/buttons')
        // cy.get('#doubleClickBtn').trigger('dblclick').click()
        // cy.get('#doubleClickMessage').should('be.visible');

        //Approach 2 by double click
        cy.get('#doubleClickBtn').dblclick();
        cy.get('#doubleClickMessage').should('be.visible');
    
      })


    it('Drag and Drop',()=>{

        cy.visit('https://demoqa.com/droppable')
        // cy.get("#draggable").drag('droppable',{force:true});

        cy.get('#draggable').trigger('dragstart')
        cy.get('#droppable').trigger('drop').trigger('dragend')
    })

    it.only('Scrolling the page',()=>{

        cy.visit('https://demo.automationtesting.in/Register.html')
        cy.get('[value="Refresh"]').scrollIntoView({duration:2000});//by using this method we can scroll the page 
        //and we can mention the duration also
        cy.get('[value="Refresh"]').should('be.visible')
        cy.wait(3000);

        //again we want to scroll the page to up
        cy.contains('Automation Demo Site').scrollIntoView({duration:2000});
        cy.get('Automation Demo Site').should('be.visible')
    })


})