import { product } from '../../fixtures/product';
import { RoutePathProvider } from './../../../src/assets/provider';


describe('/projects', () => {

    beforeEach(() => {
        cy.visit(RoutePathProvider.products);
    })

    it('should greet with title "Products"', () => {
        cy.assertTitle('Products');
    })

    it('should render 3 input fields and a search button', () => {
        cy.get('.product__search--imput').should('exist').and('have.length', 3);
        cy.get('.product__search--btn').should('exist');
    })

    it('should make a search request when the search button is clicked', () => {
        cy.get('[type="text"][placeholder="Make"]').should('exist').as('makeInput').clear().type(product.make);
        cy.get('[type="text"][placeholder="Model"]').should('exist').as('modelInput').clear().type(product.model);
        cy.get('[type="text"][placeholder="Colour"]').should('exist').as('colourInput').clear().type(product.colour);

        cy.get('.product__search--btn').click().then(() => {
            cy.get('@makeInput').should('have.value', product.make);
            cy.get('@modelInput').should('have.value', product.model);
            cy.get('@colourInput').should('have.value', product.colour);

            cy.get('.item.product').should('exist').and('contain', `${product.make} - ${product.model} - ${product.colour} ${product.vin} - ${product.price}`);
        });
    })

})