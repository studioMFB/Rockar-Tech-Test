import { customer } from '../../fixtures/customer';
import { RoutePathProvider } from '../../../src/assets/provider';


describe('/customers', () => {

    beforeEach(() => {
        cy.visit(RoutePathProvider.customers);
    })

    it('should greet with title "Customers"', () => {
        cy.assertTitle('Customers');
    })

    it('should render a list of users', () => {
        cy.get('.item.customer').should('exist').and('have.length.greaterThan', 0);
    })

    it('Each user element should display a forename and surname', () => {
        cy.get('.item.customer').find('a').should('have.attr', 'href', `${RoutePathProvider.customer}/${customer.forename}/${customer.surname}`).and('contain', `${customer.forename} - ${customer.surname}`);
    })

    it('Should visit /customer/Tom/Harding and display user details', () => {

        cy.get(`.item.customer a[href="${RoutePathProvider.customer}/${customer.forename}/${customer.surname}"]`).click().then(() => {
            cy.url().should('include', `${RoutePathProvider.customer}/${customer.forename}/${customer.surname}`);
            cy.assertTitle('Customer');

            cy.get('.item.customer').should('exist').and('contain', `${customer.forename} - ${customer.surname} ${customer.email} - ${customer.contactNumber} ${customer.postcode}`);
        });
    })


})