describe('Visual regression tests', {
  retries: 2
}, () => {
  ['assembly_instructions'].forEach((test_name) => {
    it(`Should match previous screenshot "${test_name}"`, () => {
      // 'https://viewer:ipex@ipex-viewer.azurewebsites.net/main/#/assembly_instructions/'

      cy.visit('https://viewer:ipex@ipex-viewer.azurewebsites.net/main/#/assembly_instructions/')

      cy.wait(1500)
    })
  })
})
