package com.example.gestionFormation.Repository;

import com.example.gestionFormation.entity.Role;
import com.example.gestionFormation.entity.RoleName;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {

    Role findByName(RoleName name);
}

