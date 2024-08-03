package com.example.gestionFormation.repositries;

import com.example.gestionFormation.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {
    Optional<User>  findOneByNameAndPassword(String name,String password);
    //Optional<User>  findByEmail(String email);
    Optional<User> findByName(String name);
    Boolean existsByName(String name);

    Boolean existsByEmail(String email);
    Optional<User> findByResetToken(String resetToken); // Ajout de la méthode findByResetToken
    User findAllById(Long userIds);



}
