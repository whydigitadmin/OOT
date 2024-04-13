package com.wds.ship.entity;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "Scpy_staff_company")
public class MasterCompany {

    @Id
    @Column(name = "SCPY_RID")
    private Long rid;

    @Column(name = "SCPY_STFF")
    private Long userId;

    @Column(name = "SCPY_MCPY")
    private Long companyId;

    @Column(name = "SCPY_STATUS")
    private String status;

    public Long getRid() {
        return rid;
    }

    public void setRid(Long rid) {
        this.rid = rid;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
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



//    @ManyToOne
//    @JoinColumn(name = "USER_ID"  , referencedColumnName = "STFF_RID")
//    private User userRole;

//    @OneToOne(cascade=CascadeType.ALL)
//    @JoinColumn(name="MCPY_RID")
//    @OneToOne(mappedBy = "masterCompany", cascade = CascadeType.ALL)
//    private MasterCompanyDetails companyDetails;
//
//    public MasterCompanyDetails getCompanyDetails() {
//        return companyDetails;
//    }
//
//    public void setCompanyDetails(MasterCompanyDetails companyDetails) {
//        this.companyDetails = companyDetails;
//    }


}
