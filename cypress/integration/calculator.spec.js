describe("Calculator", () => {


  beforeEach(() => {

    cy.visit("http://localhost:3000");

  });


  it('should have working number buttons', () => {

    cy.get('#number2').click();

    cy.get('.display').should('contain', '2');

  });


  it('should perform arithmetical operations', () => {

    cy.get('#number1').click();
    cy.get('#operator_add').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();

    cy.get('.display').should('contain', '4');

  });


  it('should be able to chain multiple operations together', () => {

    cy.get('#number7').click();
    cy.get('#operator-subtract').click();
    cy.get('#number2').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();

    cy.get('.display').should('contain', '10');

  });


  it('should be able to give negative answers', () => {

    cy.get('#number3').click();
    cy.get('#operator-subtract').click();
    cy.get('#number9').click();
    cy.get('#operator-equals').click();

    cy.get('.display').should('contain', '-6');

  });

  
  it('should be able to perform arithmetical operations on decimals', ()=> {

    cy.get('#number6').click();
    cy.get('#decimal').click();
    cy.get('#number2').click();
    cy.get('#number1').click();
    cy.get('#operator-subtract').click();
    cy.get('#number3').click();
    cy.get('#decimal').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();

    cy.get('.display').should('contain', '2.71');

  });


  it('should be able to calculate large numbers', () => {

    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#operator-multiply').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#operator-equals').click();

    cy.get('.display').should('contain', '9999800001');

  });


  it('should return infinity if dividing by zero', () => {

    cy.get('#number1').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();

    cy.get('.display').should('contain', 'Infinity');

  });


});