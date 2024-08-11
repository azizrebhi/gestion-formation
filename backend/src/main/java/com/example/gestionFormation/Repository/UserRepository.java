
package com.example.gestionFormation.Repository;

import com.example.gestionFormation.entity.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findOneByUsername(String username);


    Optional<User> findByEmail(String email);

    Boolean existsByEmail(String email);
}
