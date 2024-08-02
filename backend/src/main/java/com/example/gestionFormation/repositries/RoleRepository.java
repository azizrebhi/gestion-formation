package com.example.gestionFormation.repositries;

import com.example.gestionFormation.entities.Role;
import com.example.gestionFormation.enumeration.EnumRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role,Long> {

    Optional<Role> findByName(EnumRole name);
}
