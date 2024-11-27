describe("Fitpeo test suite", () => {
  beforeEach(() => {
    // 1.Navigate to the FitPeo Homepage
    cy.visit("/");
    cy.title().should("include", "Remote Patient Monitoring (RPM)");
  });

  it("Fitpeo validations - Revenue Calculator", () => {
    // 2.Navigate to the Revenue Calculator Page:
    cy.visit("/revenue-calculator");
    cy.url().should("include", "revenue-calculator");
    // 3.Scroll Down to the Slider section
    // 4.Adjust the Slider to 820
    cy.get('input[type="range"]')
      .scrollIntoView()
      .invoke("attr", "value", "820")
      .trigger("input", { force: true }) // Using {force: true} since element is covered
      .trigger("change", { force: true })
      .and("have.attr", "aria-valuenow", "820");
    // Verify the text field updates to 820
    cy.get('input[type="number"]').and("have.value", "820");
    // 5.Update the Text Field to 560
    cy.get('input[type="number"]').clear().type("560").and("have.value", "560"); // Validate the value is visible
    // 6.Validate Slider updates as per text field
    cy.get('input[type="range"]').and("have.attr", "aria-valuenow", "560");
    // 7.Select CPT Codes
    cy.get('input[type="checkbox"]').eq(0).check().and("be.checked");
    cy.get('input[type="checkbox"]').eq(1).check().and("be.checked");
    cy.get('input[type="checkbox"]').eq(2).check().and("be.checked");
    cy.get('input[type="checkbox"]').eq(7).check().and("be.checked");
    // 8.Validate Total Recurring Reimbursement
    cy.get("p")
      .eq(5)
      .should(
        "have.text",
        "Total Recurring Reimbursement for all Patients Per Month"
      );
    // 9. Validate the value
    cy.get("p").eq(6).should("have.text", "$75600");
  });
});
