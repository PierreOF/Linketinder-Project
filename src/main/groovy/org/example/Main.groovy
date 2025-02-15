package org.example

import org.example.controller.MenuController
import org.example.repository.CandidateRepository
import org.example.repository.CompanyRepository
import org.example.view.MenuView

static void main(String[] args) {

    CandidateRepository candidateRepository = new CandidateRepository()
    CompanyRepository companyRepository = new CompanyRepository()
    MenuView menuView = new MenuView()

    MenuController menuController = new MenuController(candidateRepository,companyRepository,menuView)


    menuController.start()

}
