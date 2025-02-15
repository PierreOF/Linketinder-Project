package org.example.repository

import org.example.model.Company

class CompanyRepository {

    List<Company> companies = []

    CompanyRepository() {
        companies.addAll([
                new Company("Tech Innovators", "hr@techinnovators.com", "12.345.678/0001-99", "USA", "CA", "90001", "Leading software company focusing on AI and cloud solutions.", ["Python", "Machine Learning", "Cloud Computing"]),
                new Company("Data Solutions", "jobs@datasolutions.com", "23.456.789/0001-88", "USA", "NY", "10001", "Big data analytics company helping businesses make data-driven decisions.", ["SQL", "Data Science", "Business Intelligence"]),
                new Company("CodeCraft", "careers@codecraft.com", "34.567.890/0001-77", "USA", "TX", "75001", "Innovative startup building modern web applications.", ["React", "Node.js", "GraphQL"]),
                new Company("CyberTech Security", "contact@cybertech.com", "45.678.901/0001-66", "USA", "FL", "33101", "Cybersecurity company specializing in protecting businesses from digital threats.", ["Cybersecurity", "Penetration Testing", "Encryption"]),
                new Company("AppMasters", "jobs@appmasters.com", "56.789.012/0001-55", "USA", "IL", "60007", "Mobile development agency creating intuitive and engaging apps.", ["Swift", "Kotlin", "Flutter"])
        ])
    }

    List<Company> getCompanies() {
        return companies
    }
}
