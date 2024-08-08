package com.example.gestionFormation.Service;

import com.example.gestionFormation.Repository.ResponseRepository;
import com.example.gestionFormation.entity.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class ResponseService {
    @Autowired
    private ResponseRepository responseRepository;

    public Response saveResponse(Response response) {
        return responseRepository.save(response);
    }

    public List<Response> getResponsesByFormId(Long formId) {
        return responseRepository.findByFormId(formId);
    }

    public Map<String, Map<String, Integer>> getStatistics(Long formId) {
        List<Response> responses = getResponsesByFormId(formId);
        Map<String, Map<String, Integer>> statistics = new HashMap<>();

        for (Response response : responses) {
            List<String> answers = response.getAnswers();

            for (int i = 0; i < answers.size(); i++) {
                String question = response.getForm().getQuestions().get(i).getText();
                String answer = answers.get(i);

                statistics.computeIfAbsent(question, k -> new HashMap<>())
                        .merge(answer, 1, Integer::sum);
            }
        }

        return statistics;
    }
}

