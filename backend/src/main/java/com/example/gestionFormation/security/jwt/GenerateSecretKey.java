package com.example.gestionFormation.security.jwt;

import java.security.SecureRandom;
import java.util.Base64;

public class GenerateSecretKey {
    public static void main(String[] args) {
        SecureRandom random = new SecureRandom();
        byte[] bytes = new byte[32]; // 256 bits
        random.nextBytes(bytes);
        String secretKey = Base64.getEncoder().encodeToString(bytes);
        System.out.println("secretKey  : "+ secretKey);
    }
}
