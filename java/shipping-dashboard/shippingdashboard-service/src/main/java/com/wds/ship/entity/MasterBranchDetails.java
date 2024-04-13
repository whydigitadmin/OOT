package com.wds.ship.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "MBRN_BRANCH")
public class MasterBranchDetails {


    @Id
    @Column(name = "MBRN_RID")
    private Long rid;

    @Column(name = "MBRN_NAME")
    private String branchName;

    @Column(name = "MBRN_STATUS")
    private String branchStatus;

    public Long getRid() {
        return rid;
    }

    public void setRid(Long rid) {
        this.rid = rid;
    }

    public String getBranchName() {
        return branchName;
    }

    public void setBranchName(String branchName) {
        this.branchName = branchName;
    }

    public String getBranchStatus() {
        return branchStatus;
    }

    public void setBranchStatus(String branchStatus) {
        this.branchStatus = branchStatus;
    }
}
