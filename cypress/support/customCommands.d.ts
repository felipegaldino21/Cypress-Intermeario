declare namespace Cypress {
    interface Chainable<Subject> {
        login(): Chainable<any>
        logout(): Chainable<any>
        gui_createProject(project: any): Chainable<any>
        gui_createIssue(issue: any): Chainable<any>
  }
}