package com.wds.ship.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "MCPY_COMPANY")
public class MasterCompanyDetails {


    @Id
    @Column(name = "MCPY_RID")
    private Long rid;

    @Column(name = "MCPY_NAME")
    private String companyName;

    @Column(name = "MCPY_STATUS")
    private String companyStatus;

    @Column(name = "MCPY_CODE")
    private String companyCode;

    public Long getRid() {
        return rid;
    }

    public void setRid(Long rid) {
        this.rid = rid;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getCompanyStatus() {
        return companyStatus;
    }

    public void setCompanyStatus(String companyStatus) {
        this.companyStatus = companyStatus;
    }

    public String getCompanyCode() {
        return companyCode;
    }

    public void setCompanyCode(String companyCode) {
        this.companyCode = companyCode;
    }

//    @OneToOne(fetch = FetchType.EAGER)
//    @JoinColumn(name = "MCPY_RID") // Foreign key column name in MCPY_COMPANY table
//    private MasterCompany masterCompany;
//
//    public MasterCompany getMasterCompany() {
//        return masterCompany;
//    }
//
//    public void setMasterCompany(MasterCompany masterCompany) {
//        this.masterCompany = masterCompany;
//    }
}
