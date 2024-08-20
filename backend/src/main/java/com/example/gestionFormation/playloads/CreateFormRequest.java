package com.example.gestionFormation.playloads;

import java.util.List;

public class CreateFormRequest {

    private String title;
    private List<Long> pollIds;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public List<Long> getPollIds() {
        return pollIds;
    }

    public void setPollIds(List<Long> pollIds) {
        this.pollIds = pollIds;
    }
}
