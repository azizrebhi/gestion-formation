package com.example.gestionFormation.controller;

import com.example.gestionFormation.Service.ResponseService;
import com.example.gestionFormation.entity.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;
import java.util.Map;

@CrossOrigin(origins ="*")
@RestController
@RequestMapping(path="api/v1/Response")
public class ResponseController {
    private final ResponseService responseService;
@Autowired
public ResponseController ( ResponseService responseService){this.responseService=responseService ;}
    @PostMapping
    public Response submitResponse(@RequestBody Response response) {
        return responseService.saveResponse(response);
    }

    @GetMapping("/{formId}")
    public List<Response> getResponsesByFormId(@PathVariable Long formId) {
        return responseService.getResponsesByFormId(formId);
    }

    @GetMapping("/statistics/{formId}")
    public Map<String, Map<String, Integer>> getStatistics(@PathVariable Long formId) {
        return responseService.getStatistics(formId);
    }
}
