describe('counter E2E tests', () => {
    before(() => {
        cy.visit('http://localhost:3000/')
        cy.waitForReact(); // 1000 is the timeout in milliseconds, you can provide as per AUT
    });
    it('should have 0 if we dont give props', () => {
        const counter = cy.get('.counter')
        counter.contains(0)
    })
    it('should increment after click', () => {
        const incrementBtn = cy.get('.increment')
        incrementBtn.click()
        incrementBtn.click()
        const counter = cy.get('.counter')
        counter.contains(2)
    })
    it('should reduce after click & return to initial value after clicking reset', () => {
        const reduceBtn = cy.get('.reducer')
        reduceBtn.click()
        let counter = cy.get('.counter')
        counter.contains(1)
        const resetBtn = cy.get('.reset')
        resetBtn.click()
        counter = cy.get('.counter')
        counter.contains(0)
    })
    it('should change counter value after passing number and clicking change', () => {
        let counter = cy.get('.counter')
        counter.contains(0)
        const input = cy.get('.initVal')
        input.type('10')
        const changeBtn = cy.get('.change')
        changeBtn.click()
        counter = cy.get('.counter')
        counter.contains(10)

    })
    it('should change initial Value depending of props that we pass.', () => {
        cy.react('Button', { props: { start: 0 } })
        const resetBtn = cy.get('.reset')
        resetBtn.click()
        const counter = cy.get('.counter')
        counter.contains(0)
    })
})
