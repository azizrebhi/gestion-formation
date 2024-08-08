package com.example.gestionFormation.controller;
import com.example.gestionFormation.Service.FeedbackService;
import com.example.gestionFormation.entity.Feedback;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@CrossOrigin(origins ="*")
@RestController
@RequestMapping(path="api/v1/feedback")
public class FeedbackController {
    private final FeedbackService feedbackService;
    @Autowired
    private FeedbackController( FeedbackService feedbackService){
        this.feedbackService=feedbackService ;
    }
    @PostMapping
    private void registernewFeedback(@RequestBody Feedback feedback){
        feedbackService.saveFeedback(feedback);
    }
    @GetMapping
    public List<Feedback> getAllFeedback() {
        return feedbackService.getFeedback();
    }
    @GetMapping("/average-effectiveness-rating")
    public double getAverageEffectivenessRating() {
        return feedbackService.calculateAverageEffectivenessRating();
    }

    @GetMapping("/average-knowledge-rating")
    public double getAverageKnowledgeRating() {
        return feedbackService.calculateAverageKnowledgeRating();
    }
    @GetMapping("/average-engagement-rating")
    public double getAverageEngagementRating() {
        return feedbackService.calculateAverageEngagementRating();
    }
    @GetMapping("/average-clarity-rating")
    public double getAverageClarityRating() {
        return feedbackService.calculateAverageClarityRating();
    }
    @GetMapping("/average-responsiveness-rating")
    public double getAverageResponsivenessRating() {
        return feedbackService.calculateAverageResponsivenessRating();
    }
}
