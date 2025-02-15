package org.example.model

import org.example.model.impl.PersonImpl

class Candidate extends PersonImpl {

    String cpf
    int age
    List<String> skills

    Candidate(String name, String email, String cpf, int age, String state, String zipCode, String description, List<String> skills) {
        super(name, email, state, zipCode, description)
        this.cpf = cpf
        this.age = age
        this.skills = skills
    }

    @Override
    void displayInfo() {
        super.displayInfo()
        println "CPF: $cpf"
        println "Age: $age"
        println "Skills: ${skills.join(', ')}"
    }

    String getCep() {
        return null
    }
}
