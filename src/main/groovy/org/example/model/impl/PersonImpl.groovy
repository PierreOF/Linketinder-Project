package org.example.model.impl

import org.example.model.Person

abstract class PersonImpl implements Person {
    String name
    String email
    String state
    String zipCode
    String description

    PersonImpl(String name, String email, String state, String zipCode, String description) {
        this.name = name
        this.email = email
        this.state = state
        this.zipCode = zipCode
        this.description = description
    }

    @Override
    void displayInfo() {
        println "Name: $name"
        println "Email: $email"
        println "State: $state"
        println "ZIP Code: $zipCode"
        println "Description: $description"
    }

    String getName() {
        return name
    }

    void setName(String name) {
        this.name = name
    }

    String getEmail() {
        return email
    }

    void setEmail(String email) {
        this.email = email
    }

    String getState() {
        return state
    }

    void setState(String state) {
        this.state = state
    }

    String getZipCode() {
        return zipCode
    }

    void setZipCode(String zipCode) {
        this.zipCode = zipCode
    }

    String getDescription() {
        return description
    }

    void setDescription(String description) {
        this.description = description
    }
}
