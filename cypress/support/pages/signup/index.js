import { el } from './elements'
import toast from '../../components/toast'
import alert from '../../components/alert'

class SignupPage {

    constructor() {
        this.toast = toast
        this.alert = alert
    }

    go() {
        //acessando a página de cadastro
        cy.visit('/signup')

        cy.contains(el.title)
            .should('be.visible')
    }

    form(user) {
        //preenchendo e submentendo o formulário de cadastro
        cy.get(el.name).clear().type(user.name)
        cy.get(el.email).clear().type(user.email)
        cy.get(el.password).clear().type(user.password)

    }

    submit() {
        cy.contains(el.signupButton).click()
    }
}

export default new SignupPage()