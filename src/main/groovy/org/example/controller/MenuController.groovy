package org.example.controller

import org.example.repository.CandidateRepository
import org.example.repository.CompanyRepository
import org.example.model.Candidate
import org.example.model.Company
import org.example.view.MenuView

class MenuController {
    CandidateRepository candidateRepo
    CompanyRepository companyRepo
    MenuView view
    Scanner scanner = new Scanner(System.in)

    MenuController(CandidateRepository candidateRepo, CompanyRepository companyRepo, MenuView view) {
        this.candidateRepo = candidateRepo
        this.companyRepo = companyRepo
        this.view = view
    }

    void start() {
        while (true) {
            view.displayMenu()
            try {
                def option = scanner.nextLine().toInteger()

                switch (option) {
                    case 1:
                        view.listCandidates(candidateRepo.getCandidates())
                        break
                    case 2:
                        view.listCompanies(companyRepo.getCompanies())
                        break
                    case 3:
                        Candidate newCandidate = view.registerNewCandidate()
                        candidateRepo.candidates.add(newCandidate)
                        println "Candidate successfully registered!"
                        break
                    case 4:
                        Company newCompany = view.registerNewCompany()
                        companyRepo.companies.add(newCompany)
                        println "Company successfully registered!"
                        break
                    case 5:
                        println "Exiting program. See you next time!"
                        System.exit(0)
                        break
                    default:
                        println "Invalid option! Please try again.\n"
                }
            } catch (Exception e) {
                print(e.getMessage())
                println "Invalid input. Please enter a number."
            }
        }
    }
}
