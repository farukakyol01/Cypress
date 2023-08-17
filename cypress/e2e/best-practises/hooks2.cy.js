/// <reference types="Cypress"/>
const neatcsv=require('neat-csv');
//const { default: LandingPage } = require('../Pages/landingpage');

import LandingPage from '../Pages/landingpage';
import LoginPage from '../Pages/loginpage';


describe('Hooks2 test',function(){

    const landingPage = new LandingPage()
    const loginPage=new LoginPage()
 var table;
    beforeEach(function(){
        cy.fixture('ConduitData').as('data')

//cy.fixture('ConduitCSV.csv')
 //   .then(neatcsv)
 //       .then(data =>{
 //           table=data
  //      })
        cy.visit('https://react-redux.realworld.io/')
    })
 
    it.skip('Conduit - Fixture Data',function(){
        
        cy.contains('Sign in').click()
        cy.get('input[type="email"]').type(this.data.email)
        cy.get('input[type="password"]').type(this.data.password)
        cy.get('button[type="submit"]').click()
       
        
    })
    it('Custom Command',function(){
        cy.contains('Sign in').click()
        cy.conduitLogin(this.data.email,this.data.password)
        
        
       
        
    })

    it('POM Practises',function(){

        landingPage.clickSigninButton()
        loginPage.enterEmail(this.data.email)
        loginPage.enterPassword(this.data.password)
        cy.get('button[type="submit"]').click()
        //Faruk
       
        
    })


    it.skip('Conduit - Invalid Credentials',function(){
        
        cy.contains('Sign in').click()
        cy.get('input[type="email"]').type(table[0].email)
        //cy.get('input[type="password"]').type(table[0].password)
        cy.xpath('//input[@type="password"]').type(table[0].password)
        cy.get('button[type="submit"]').click()
        

    })

    afterEach(function(){

        cy.contains(' Settings').click()
        cy.contains('Or click here to logout.').click()

    })
})