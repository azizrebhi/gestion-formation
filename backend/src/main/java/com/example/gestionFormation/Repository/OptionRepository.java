/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.gestionFormation.Repository;

import com.example.gestionFormation.entity.Option;

import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author klemen
 */
public interface OptionRepository extends CrudRepository<Option, Long> {
    
    void deleteByPollId(Long id);
    
}
