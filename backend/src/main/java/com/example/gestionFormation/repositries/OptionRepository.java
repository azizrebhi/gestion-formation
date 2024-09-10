/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.gestionFormation.repositries;

import com.example.gestionFormation.entities.Option;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author klemen
 */
public interface OptionRepository extends CrudRepository<Option, Long> {
    
    void deleteByPollId(Long id);
    
}
