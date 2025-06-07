import registerPage from "../support/pageObject/registerPage"

describe('Register Functionality', () => {

  function randomEmail(){
    const randomString = Math.random().toString(36).substring(2,9)
    const email = randomString + "@mailinator.com"
    return email
}

let useremail = randomEmail()

  beforeEach(() => {
    cy.visit('')
    cy.contains('Create an Account').click()
  })

    it('Verify Failed Regist - User create new user with valid name, invalid email, and valid password', () => {
      cy.get(registerPage.name1).type('SanbercodeXX')
      cy.get(registerPage.name2).type('Kelompok')
      cy.get(registerPage.email).type('sanbercode')
      cy.get(registerPage.pwd).type('Sanbercode')
      cy.get(registerPage.pwd_confirm).type('Sanbercode')
      registerPage.clickRegister()
      cy.get(registerPage.err_email).should('contain.text','Please enter a valid email address (Ex: johndoe@domain.com).')
    })
    it('Verify Failed Regist - Email already registered', () => {
      cy.get(registerPage.name1).type('Sanbercode53')
      cy.get(registerPage.name2).type('Kelompok9')
      cy.get(registerPage.email).type('sanbercodeteam9@gmail.com')
      cy.get(registerPage.pwd).type('Sanbercodeteam9')
      cy.get(registerPage.pwd_confirm).type('Sanbercodeteam9')
      registerPage.clickRegister()
      cy.get(registerPage.err_msg).should('contain.text','There is already an account with this email address. If you are sure that it is your email address,')
    })
    it('Verify Failed Regist - Password not unique', () => {
      cy.get(registerPage.name1).type('Sanbercode53')
      cy.get(registerPage.name2).type('Kelompok9')
      cy.get(registerPage.email).type('sanbercode53team9@gmail.com')
      cy.get(registerPage.pwd).type('sanbercode')
      cy.get(registerPage.pwd_confirm).type('sanbercode')
      registerPage.clickRegister()
      registerPage.verifyError()
    })
    it('Verify Failed Regist - Password weak & less than 8 character', () => {
      cy.get(registerPage.name1).type('Sanbercode53')
      cy.get(registerPage.name2).type('Kelompok9')
      cy.get(registerPage.email).type('sanbercode53team9@gmail.com')
      cy.get(registerPage.pwd).type('san')
      cy.get(registerPage.pwd_confirm).type('san')
      registerPage.clickRegister()
      registerPage.verifyError()
    })
    it('Verify Failed Regist - Password confirmation not match', () => {
      cy.get(registerPage.name1).type('Sanbercode53')
      cy.get(registerPage.name2).type('Kelompok9')
      cy.get(registerPage.email).type('sanbercode53team9@gmail.com')
      cy.get(registerPage.pwd).type('Sanbercode9')
      cy.get(registerPage.pwd_confirm).type('Sanbercode')
      registerPage.clickRegister()
      cy.get(registerPage.err_pwd).should('contain.text','Please enter the same value again.')
    })
    it('Verify Success Register - User create new user with valid name, email, and password', () => {
      cy.get(registerPage.name1).type('Sanbercode53')
      cy.get(registerPage.name2).type('Kelompok9')
      cy.get(registerPage.email).type(useremail)
      cy.get(registerPage.pwd).type('Sanbercodeteam9')
      cy.get(registerPage.pwd_confirm).type('Sanbercodeteam9')
      registerPage.clickRegister()
      cy.get(registerPage.success).should('contain.text','Thank you for registering with Main Website Store.')
    })
  })