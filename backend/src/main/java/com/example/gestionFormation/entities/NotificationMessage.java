package com.example.gestionFormation.entities;

public class NotificationMessage {


    private String title;
    private String team;
    private String startDate;
    private String endDate;
    private String formateurName;
    private boolean online;
    private boolean presentiel;

    public NotificationMessage() {
    }

    public NotificationMessage(String title, String team, String startDate, String endDate, String formateurName, boolean online, boolean presentiel) {
        this.title = title;
        this.team = team;
        this.startDate = startDate;
        this.endDate = endDate;
        this.formateurName = formateurName;
        this.online = online;
        this.presentiel = presentiel;
    }


    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getTeam() {
        return team;
    }

    public void setTeam(String team) {
        this.team = team;
    }

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }

    public String getFormateurName() {
        return formateurName;
    }

    public void setFormateurName(String formateurName) {
        this.formateurName = formateurName;
    }

    public boolean isOnline() {
        return online;
    }

    public void setOnline(boolean online) {
        this.online = online;
    }

    public boolean isPresentiel() {
        return presentiel;
    }

    public void setPresentiel(boolean presentiel) {
        this.presentiel = presentiel;
    }
}
