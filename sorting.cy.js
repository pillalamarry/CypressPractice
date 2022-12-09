Cypress.on('uncaught:exception', (err, runnable) => {

    return false;
  
  });
  
  describe('Handle Table',()=>{

    it('Launch sites',()=>{

       let beforesort = [];
       let aftersort = [];
      
       cy.visit("https://www.bu.edu/tech/services/cccs/websites/www/wordpress/how-to/sortable-searchable-tables/")
       cy.xpath("//table[1]//tr//td[1]").each(($ele, index)=> {
        const text= $ele.text();
        beforesort[index] = text
       }).then(() => {
        cy.log(beforesort[0])

        aftersort = beforesort.sort();
        cy.log(aftersort[1])
        cy.xpath('//table[1]//th[@class="header" and contains(text(),"Athlete")]').click()
        cy.wait(2000)
        cy.xpath("//table[1]//tbody//tr//td[1]").invoke('text').then(value=>{
          cy.log(value)
        except(value).to.eq(aftersort[0])
        })
        })
       })
    
    


})