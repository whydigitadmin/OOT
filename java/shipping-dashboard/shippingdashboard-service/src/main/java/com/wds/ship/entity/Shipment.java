package com.wds.ship.entity;



import jakarta.persistence.*;

import java.util.List;


@Entity
@Table(name = "jshp_shipment")
public class Shipment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "JSHP_RID")
    private Long id;

    @Column(name = "JSHP_MCPY")
    private Long companyId;

    @Column(name = "JSHP_SHIPMENT_STATUS")
    private String status;

    @Column(name = "JSHP_MDPT")
    private Long department;

    @Column(name = "JSHP_CARGO_STATUS")
    private String cargoStatus;

    @Column(name = "JSHP_TRANSPORT_MODE")
    private String mode;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getCompanyId() {
        return companyId;
    }

    public void setCompanyId(Long companyId) {
        this.companyId = companyId;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Long getDepartment() {
        return department;
    }

    public void setDepartment(Long department) {
        this.department = department;
    }

    public String getCargoStatus() {
        return cargoStatus;
    }

    public void setCargoStatus(String cargoStatus) {
        this.cargoStatus = cargoStatus;
    }

    public String getMode() {
        return mode;
    }

    public void setMode(String mode) {
        this.mode = mode;
    }



}
