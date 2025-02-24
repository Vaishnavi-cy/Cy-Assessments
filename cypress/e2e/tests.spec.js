describe("Test scenarios for Tooljet", () => {
  it("App Creation through Create an App", () => {
    cy.login("test@example.com", "password");
    cy.get('[data-cy="create-new-app-button"]').click();
    cy.get('[data-cy="app-name-input"]').type("Cricket");
    cy.get('[data-cy="+-create-app"]').click();
    cy.get(".driver-close-btn", { timeout: 30000 }).click();
    cy.contains("Drag and drop a component").should("be.visible");
    cy.contains("Create a Query").should("be.visible");
    cy.contains("Share your application!")
      .scrollIntoView({ alignment: "center" })
      .should("be.visible");
    cy.contains("Invite collaborators").should("be.visible");
    cy.get('[data-cy="editor-page-logo"]').click();
    cy.get('[data-cy="back-to-app-option"]').click();
    cy.get('[data-cy="cricket-card"]', { timeout: 30000 }).should("be.visible");
    // Can add steps for deleting application to avoid failures in next run
  });

  it("App Creation through Choose from Template", () => {
    cy.login("test@example.com", "password");
    cy.get('[data-cy="import-dropdown-menu"]').click();
    cy.get('[data-cy="choose-from-template-button"]').click();
    cy.contains("Select template").should("be.visible");
    cy.get('[data-cy="all-categories-list-item"]').should("be.visible");
    cy.contains("Admin Panel (ToolJet Database)").should("be.visible");
    cy.get('[data-cy="cancel-button"]').should("be.visible");
    cy.get('[data-cy="create-application-from-template-button"]').should(
      "be.visible"
    );
    cy.get('[data-cy="cancel-button"]').click()
    // Check navigation to the main dashboard
    cy.contains("Applications").should("be.visible");
  });

  it("App Creation through Import from device", () => {
    cy.login("test@example.com", "password");
    cy.get('[data-cy="import-dropdown-menu"]').click();
    cy.get('[data-cy="import-option-label"]').click();
    // You cannot select files on your system through cypress
    // cy.attachFile() can work if attaching file through a web element
  });
});
