
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  describe('Handle Table',()=>{

    beforeEach('Login',()=>{   //before each block will excute before excuting the every IT block

        // cy.visit("https://demoqa.com/webtables");
        cy.visit("https://testautomationpractice.blogspot.com/");

    })
    it.skip('check number rows and columns',()=>{
        cy.get(".web-tables-wrapper .rt-tbody .rt-tr-group").should('have.length','10');//have.length it is used to find out the length
        cy.get(".web-tables-wrapper .rt-tr .rt-th").should('have.length','7');
    })

    it.skip('check cell data from specific and column',()=>{

      cy.get(".rt-tr-group:nth-child(3) .rt-td:nth-child(1)").contains("Kierra");
      //cy.get(".web-tables-wrapper .rt-tbody .rt-tr-group:nth-child(2) .rt-th:nth-child(2)").contains("Cantrell");

    })

    it.skip('Read all the rows and columns data in the first page',()=>{

      cy.get(".web-tables-wrapper .rt-tbody .rt-tr-group")//capture all the rows
      .each(($row,index,$rows)=>{  //read each row from table for that each block
        cy.wrap($row).within(()=>{  //wraping this current row and within that row getting all columns
          cy.get("[role='row']").each(($col,index,$cols)=>{ //read each column from table for that each block
            cy.log($col.text());
          })
        })

      })    
    })

    it.only('check value',()=>{
      
      //check value presence anywhere in the Table 

      // cy.get("[class='rt-tbody'] .rt-tr").contains('Cierra').should('be.visible')

       //verify the book name Master In Java whose author is Amod

      //$e it will exract the element
      // index is variable it will start from 1 
      // $list whole list will be saved here
       cy.get("table[name='BookTable']>tbody>tr td:nth-child(2)").each(($e,index,$list) =>{

        const text=$e.text()  //text() this method will exract the text value from this element
        if(text.includes("Amod")){
          cy.get("table[name='BookTable']>tbody>tr td:nth-child(1)").eq(index).then(function(bname){

            const bookName = bname.text()
            expect(bookName).to.equal("Master In Java")
          })
        }


       })


    })



    it("based on condition",()=>{

      cy.get("table[name='BookTable']>tbody>tr td:nth-child(4)").each(($ele,index,$list)=>{

        const text=$ele.text()
        if(text.includes(1000)){
          cy.get("table[name='BookTable']>tbody>tr td:nth-child(2)").eq(index)//.then(function(author){

          //   const Name=author.text()
          //   expect(Name).to.equal("Amit")
    
          // })
        }

      })

    })


    it.only("based on condition",()=>{

      cy.get("table[name='BookTable']>tbody>tr td:nth-child(4)").each(($ele,index,$list)=>{

        const text=$ele.text()
        if(text.includes(300)){
          cy.get("table[name='BookTable']>tbody>tr td:nth-child(2)").eq(index)
        }

      })

    })

   


})
  