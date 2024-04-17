import { product } from '../../fixtures/product';
import { RoutePathProvider } from './../../../src/assets/provider';


describe('/products', () => {

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

    it('should be able to select a make from the dropdown', () => {
        cy.get('#makeSelect').select(product.make).should('have.value', product.make);
    });

    it('should be able to select a model from the dropdown', () => {
        cy.get('#modelSelect').select(product.model).should('have.value', product.model);
    });

    it('should be able to select a colour from the dropdown', () => {
        cy.get('#colourSelect').select(product.colour).should('have.value', product.colour);
    });

    it('should make a search request when the search button is clicked', () => {
        cy.get('#makeSelect').select(product.make).should('have.value', product.make);
        cy.get('#modelSelect').select(product.model).should('have.value', product.model);
        cy.get('#colourSelect').select(product.colour).should('have.value', product.colour);

        cy.get('.product__search--btn').click().then(() => {
            cy.get('.item.product').should('exist').and('contain', `${product.make} - ${product.model} - ${product.colour} ${product.vin} - ${product.price}`);
        });
    })

})