package com.wds.ship.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Sbrn_staff_branch")
public class MasterBranch {

    @Id
    @Column(name = "SBRN_RID")
    private Long rid;

    @Column(name = "SBRN_STFF")
    private Long userId;

    @Column(name = "SBRN_MCPY")
    private Long companyId;

    @Column(name = "SBRN_MBRN")
    private Long branchId;

    @Column(name = "SBRN_STATUS")
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

    public Long getBranchId() {
        return branchId;
    }

    public void setBranchId(Long branchId) {
        this.branchId = branchId;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }


}
