package com.wds.ship.entity;



import jakarta.persistence.*;


@Entity
@Table(name = "senq_enquiry")
public class Enquiry {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "SENQ_RID")
    private Long id;

    @Column(name = "SENQ_MCPY")
    private Long companyId;

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

    public Long getDepartmentId() {
        return departmentId;
    }

    public void setDepartmentId(Long departmentId) {
        this.departmentId = departmentId;
    }

    public Long getStatus() {
        return status;
    }

    public void setStatus(Long status) {
        this.status = status;
    }

    @Column(name = "SENQ_MDPT")
    private Long departmentId;

    @Column(name = "SENQ_STATUS")
    private Long status;



}
