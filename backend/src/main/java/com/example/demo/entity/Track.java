package com.example.demo.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "heroes")
public class Track {
    @Id
    @NotBlank(message = "Id is mandatory")
    private String id;
}
