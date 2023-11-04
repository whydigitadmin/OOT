package com.wds.ship.entity;

import jakarta.persistence.*;

import java.sql.Date;


@Entity
@Table(name = "ssug_staff_usergroup")
public class UserGroup {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "SSUG_RID")
    private Long rid;

    @Column(name = "CREATED_DATE")
    private Date createdDate;

    @Column(name = "UPDATED_DATE")
    private Date updatedUser;

    @Column(name = "CREATED_BY")
    private String createdBy;

    @Column(name = "UPDATED_BY")
    private String updatedBy;

//    @Column(name = "SSUG_STFF")
//    private Long stff;

    @Column(name = "SSUG_MCPY")
    private Long company;


    @Column(name = "SSUG_SUSG")
    private Long userGroup;

    @Column(name = "SSUG_STATUS")
    private String status;

    @Column(name = "SSUG_REMARKS")
    private String remarks;


    public Long getRid() {
        return rid;
    }

    public void setRid(Long rid) {
        this.rid = rid;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }

    public Date getUpdatedUser() {
        return updatedUser;
    }

    public void setUpdatedUser(Date updatedUser) {
        this.updatedUser = updatedUser;
    }

    public String getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

    public String getUpdatedBy() {
        return updatedBy;
    }

    public void setUpdatedBy(String updatedBy) {
        this.updatedBy = updatedBy;
    }

//    public Long getStff() {
//        return stff;
//    }
//
//    public void setStff(Long stff) {
//        this.stff = stff;
//    }

    public Long getCompany() {
        return company;
    }

    public void setCompany(Long company) {
        this.company = company;
    }

    public Long getUserGroup() {
        return userGroup;
    }

    public void setUserGroup(Long userGroup) {
        this.userGroup = userGroup;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @ManyToOne
    @JoinColumn(name = "SSUG_STFF", referencedColumnName = "STFF_RID")
    private User user; // Create a User object to represent the foreign key relationship

}
