package com.example.gestionFormation.Service;

import com.example.gestionFormation.Repository.FeedbackRepository;
import com.example.gestionFormation.Repository.FormateurRepository;
import com.example.gestionFormation.entity.Feedback;
import com.example.gestionFormation.entity.Formateur;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class FeedbackService {
    private final FeedbackRepository feedbackRepository;
    @Autowired
    public FeedbackService( FeedbackRepository feedbackRepository ){
        this.feedbackRepository=feedbackRepository;
    }
    public List<Feedback> getFeedback(){

        return feedbackRepository.findAll();
    }
    public Feedback saveFeedback(Feedback feedback) {
        return feedbackRepository.save(feedback);
    }
    public double calculateAverageEffectivenessRating() {
        List<Feedback> feedbackList = feedbackRepository.findAll();
        return feedbackList.stream().mapToInt(Feedback::getEffectivenessRating).average().orElse(0);
    }

    public double calculateAverageKnowledgeRating() {
        List<Feedback> feedbackList = feedbackRepository.findAll();
        return feedbackList.stream().mapToInt(Feedback::getKnowledgeRating).average().orElse(0);
    }

    public double calculateAverageEngagementRating() {
        List<Feedback> feedbackList = feedbackRepository.findAll();
        return feedbackList.stream().mapToInt(Feedback::getEngagementRating).average().orElse(0);
    }

    public double calculateAverageClarityRating() {
        List<Feedback> feedbackList = feedbackRepository.findAll();
        return feedbackList.stream().mapToInt(Feedback::getClarityRating).average().orElse(0);
    }

    public double calculateAverageResponsivenessRating() {
        List<Feedback> feedbackList = feedbackRepository.findAll();
        return feedbackList.stream().mapToInt(Feedback::getResponsivenessRating).average().orElse(0);
    }


}
