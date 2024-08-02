package com.example.gestionFormation.security.services;

import com.example.gestionFormation.entities.User;
import com.example.gestionFormation.repositries.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

  @Autowired
    UserRepository userRepository;
    @Override

    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user =userRepository.findByName(username).orElseThrow(()->new UsernameNotFoundException("USER NOT FOUND WITH NAME :"+username));

        return UserDetailsImpl.build(user) ;





    }
}
