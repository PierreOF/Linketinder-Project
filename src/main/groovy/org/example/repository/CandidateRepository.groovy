package org.example.repository

import org.example.model.Candidate

class CandidateRepository {

    List<Candidate> candidates = []

    CandidateRepository() {
        candidates.addAll([
                new Candidate("Alice Johnson", "alice.johnson@email.com", "123.456.789-00", 27, "CA", "90001", "Passionate software engineer with a focus on AI.", ["Python", "Machine Learning", "Deep Learning"]),
                new Candidate("Michael Brown", "michael.brown@email.com", "234.567.890-11", 30, "NY", "10001", "Experienced Java developer specializing in backend systems.", ["Java", "Spring Boot", "Microservices"]),
                new Candidate("Samantha Green", "samantha.green@email.com", "345.678.901-22", 25, "TX", "75001", "Full-stack web developer with expertise in modern JavaScript frameworks.", ["JavaScript", "React", "Node.js"]),
                new Candidate("David Smith", "david.smith@email.com", "456.789.012-33", 29, "FL", "33101", "Data analyst passionate about big data and predictive analytics.", ["SQL", "Pandas", "Power BI"]),
                new Candidate("Laura White", "laura.white@email.com", "567.890.123-44", 26, "IL", "60007", "Mobile app developer focused on creating user-friendly iOS applications.", ["Swift", "Kotlin", "Flutter"])
        ])
    }

    List<Candidate> getCandidates() {
        return candidates
    }
}
