package com.ioa.ticketing;

import javax.persistence.*;

@Entity
public class Ticket {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String date;
    private boolean expressPass;

    public Ticket() {
    }

    public Ticket(String date, boolean expressPass) {
        this.date = date;
        this.expressPass = expressPass;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public boolean isExpressPass() {
        return expressPass;
    }

    public void setExpressPass(boolean expressPass) {
        this.expressPass = expressPass;
    }
}