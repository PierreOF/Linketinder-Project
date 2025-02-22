package org.example.controller

import org.example.model.Candidate
import org.example.model.Company
import org.example.repository.CandidateRepository
import org.example.repository.CompanyRepository
import spock.lang.Specification

class MenuControllerSpec extends Specification {

    def "Option 3 should add a new candidate to the repository"() {
        given:
        CandidateRepository candidateRepo = new CandidateRepository()

        Candidate newCandidate = new Candidate(
                "Lucas Andrade",
                "lucas.andrade@email.com",
                "78965412300",
                30,
                "MG",
                "30123-456",
                "Software engineer passionate about system architecture.",
                ["Kotlin", "Rust", "AWS"]
        )

        when:
        candidateRepo.candidates.add(newCandidate)

        then:
        candidateRepo.candidates.size() == 6
        candidateRepo.candidates.last() == newCandidate
    }

    def "Option 4 should add a new company to the repository"() {
        given:
        CompanyRepository companyRepo = new CompanyRepository()

        Company newCompany = new Company(
                "InovaTech Solutions",
                "contact@inovatech.com",
                "55.444.333/0001-22",
                "Brazil",
                "SC",
                "88000-001",
                "Company specialized in innovative technological solutions.",
                ["Go", "Node.js", "Cloud Computing"]
        )

        when:
        companyRepo.companies.add(newCompany)

        then:
        companyRepo.companies.size() == 6
        companyRepo.companies.last() == newCompany
    }

    def "Should not allow registering a candidate with a duplicate CPF"() {
        given:
        CandidateRepository candidateRepo = new CandidateRepository()

        Candidate existingCandidate = candidateRepo.candidates.first() // Existing CPF
        Candidate duplicateCandidate = new Candidate(
                "Ana Pereira",
                "ana.pereira@email.com",
                existingCandidate.cpf,
                27, "PR", "80000-000",
                "Full stack developer focused on scalable applications.",
                ["React", "TypeScript", "MongoDB"]
        )

        when:
        if (!candidateRepo.candidates.find { it.cpf == duplicateCandidate.cpf }) {
            candidateRepo.candidates.add(duplicateCandidate)
        }

        then:
        candidateRepo.candidates.size() == 5
        !candidateRepo.candidates.contains(duplicateCandidate)
    }

    def "Should not allow registering a company with a duplicate CNPJ"() {
        given:
        CompanyRepository companyRepo = new CompanyRepository()

        Company existingCompany = companyRepo.companies.first()
        Company duplicateCompany = new Company(
                "CodeTech Hub",
                "support@codetech.com",
                existingCompany.cnpj,
                "Brazil", "RS", "90000-200",
                "Learning platform for developers.",
                ["Python", "Django", "Big Data"]
        )

        when:
        if (!companyRepo.companies.find { it.cnpj == duplicateCompany.cnpj }) {
            companyRepo.companies.add(duplicateCompany)
        }

        then:
        companyRepo.companies.size() == 5 // No new company should be added
        !companyRepo.companies.contains(duplicateCompany)
    }
}
