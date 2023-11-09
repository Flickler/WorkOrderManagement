package com.example.springboot.dto;

public class ApiDog {

    private String dog;
    private Long fileSizeBytes;

    public String getDog() {
        return dog;
    }

    public void setDog(String dog) {
        this.dog = dog;
    }

    public Long getFileSizeBytes() {
        return fileSizeBytes;
    }

    public void setFileSizeBytes(Long fileSizeBytes) {
        this.fileSizeBytes = fileSizeBytes;
    }

    @Override
    public String toString() {
        return "ApiDog{" +
                "dog='" + dog + '\'' +
                ", fileSizeBytes=" + fileSizeBytes +
                '}';
    }
}
