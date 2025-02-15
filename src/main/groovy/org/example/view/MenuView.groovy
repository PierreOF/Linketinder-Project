package org.example.view

import org.example.model.Candidate
import org.example.model.Company

class MenuView {
    Scanner scanner = new Scanner(System.in)

    void displayMenu() {
        println "********* Welcome to Linketinder *********"
        println "1. List Candidates"
        println "2. List Companies"
        println "3. Register New Candidate"
        println "4. Register New Company"
        println "5. Exit"
        print "Choose an option: "
    }

    void listCandidates(List<Candidate> candidates) {
        println "\nRegistered Candidates:"
        if (candidates.isEmpty()) {
            println "No candidates found."
            return
        }

        candidates.each { c ->
            println "************************************************\n" +
                    "Name: ${c.name}, \n" +
                    "E-mail: ${c.email}, \n" +
                    "CPF: ${c.cpf}, \n" +
                    "Age: ${c.age}, \n" +
                    "State: ${c.state}, \n" +
                    "Skills: ${c.skills.join(', ')}\n" +
                    "************************************************\n"
        }
        println ""
    }

    void listCompanies(List<Company> companies) {
        println "\nRegistered Companies:"
        if (companies.isEmpty()) {
            println "No companies found."
            return
        }

        companies.each { e ->
            println "************************************************\n" +
                    "Name: ${e.name}, \n" +
                    "Corporate Email: ${e.email}, \n" +
                    "CNPJ: ${e.cnpj}, \n" +
                    "Country: ${e.country}, \n" +
                    "State: ${e.state}, \n" +
                    "Expected Skills: ${e.skills.join(', ')}\n" +
                    "************************************************\n"
        }
        println ""
    }

    Candidate registerNewCandidate() {
        println "\nRegister a New Candidate:"
        print "Name: "
        String name = scanner.nextLine()
        print "E-mail: "
        String email = scanner.nextLine()
        print "CPF: "
        String cpf = scanner.nextLine()
        print "Age: "
        int age = scanner.nextInt()
        scanner.nextLine()
        print "State: "
        String state = scanner.nextLine()
        print "ZIP Code: "
        String zipCode = scanner.nextLine()
        print "Personal Description: "
        String description = scanner.nextLine()
        print "Skills (comma-separated): "
        List<String> skills = scanner.nextLine()?.split(',').collect { it.trim() }

        return new Candidate(name, email, cpf, age, state, zipCode, description, skills)
    }

    Company registerNewCompany() {
        println "\nRegister a New Company:"
        print "Name: "
        String name = scanner.nextLine()
        print "Corporate Email: "
        String email = scanner.nextLine()
        print "CNPJ: "
        String cnpj = scanner.nextLine()
        print "Country: "
        String country = scanner.nextLine()
        print "State: "
        String state = scanner.nextLine()
        print "ZIP Code: "
        String zipCode = scanner.nextLine()
        print "Company Description: "
        String description = scanner.nextLine()
        print "Expected Skills (comma-separated): "
        List<String> requiredSkills = scanner.nextLine()?.split(',').collect { it.trim() }

        return new Company(name, email, cnpj, country, state, zipCode, description, requiredSkills)
    }
}
