package com.example.gestionFormation.Repository;

import com.example.gestionFormation.entity.Poll;
import com.example.gestionFormation.entity.User;


import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 *
 * @author klemen
 */
public interface PollRepository extends JpaRepository<Poll, Long> {
    List<Poll> findAllByUser(User user);
    public List<Poll> findAllByUserAndVisible(User user, boolean b);
}
