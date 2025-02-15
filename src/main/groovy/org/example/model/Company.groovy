package org.example.model

import org.example.model.impl.PersonImpl

class Company extends PersonImpl {
    String cnpj
    String country
    List<String> skills

    Company(String name, String email, String cnpj, String country, String state, String zipCode, String description, List<String> requiredSkills) {
        super(name, email, state, zipCode, description)
        this.cnpj = cnpj
        this.country = country
        this.skills = skills
    }

    @Override
    void displayInfo() {
        super.displayInfo()
        println "CNPJ: $cnpj"
        println "Country: $country"
        println "Required Skills: ${skills.join(', ')}"
    }

}
