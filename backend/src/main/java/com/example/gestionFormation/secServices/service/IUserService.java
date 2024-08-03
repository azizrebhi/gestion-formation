package com.example.gestionFormation.secServices.service;

import com.example.gestionFormation.dto.UserDTO;
import com.example.gestionFormation.entities.User;

public interface IUserService {
User save(UserDTO userDTO);
}
