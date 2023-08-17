class LandingPage{

    gettingSignin(){return 'Sign in'}

clickSigninButton(){

    cy.contains(this.gettingSignin()).click()

}

}

export default LandingPage