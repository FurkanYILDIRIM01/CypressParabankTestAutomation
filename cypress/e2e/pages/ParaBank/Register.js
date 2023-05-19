class Register{
    fillFirstName(value){
        cy.get("[id='customer.firstName']").type(value);
        return this;
    }
    fillLastName(value){
        cy.get("[id='customer.lastName']").type(value);
        return this;
    }
    fillAdress(value){
        cy.get("[id='customer.address.street']").type(value);
        return this;
    }
    fillCity(value){
        cy.get("[id='customer.address.city']").type(value);
        return this;
    }
    fillState(value){
        cy.get("[id='customer.address.state']").type(value);
        return this;
    }
    fillzipCode(value){
        cy.get("[id='customer.address.zipCode']").type(value);
        return this;
    }
    fillphoneNumber(value){
        cy.get("[id='customer.phoneNumber']").type(value);
        return this;
    }
    fillssn(value){
        cy.get("[id='customer.ssn']").type(value);
        return this;
    }
    fillusername(value){
        cy.get("[id='customer.username']").type(value);
        return this;
    }
    fillpassword(value){
        cy.get("[id='customer.password']").type(value);
        return this;
    }
    fillrepeatedPassword(value){
        cy.get("[id='repeatedPassword']").type(value);
        return this;
    }
    registerButton(){
        cy.get("#customerForm > table > tbody > tr:nth-child(13) > td:nth-child(2) > input").click();
        return this;
    }
    loggedInControl(value){
        cy.get("#rightPanel > h1").should("have.text",value)
        return this;
    }
    usernameErrorControl(value){
        cy.get("[id='customer\.username\.errors']").should("have.text",value)
        return this;
    }
    firstnameErrorControl(value){
        cy.get("[id='customer.firstName.errors']").should("have.text",value)
        return this;
    }
}
export default Register;
