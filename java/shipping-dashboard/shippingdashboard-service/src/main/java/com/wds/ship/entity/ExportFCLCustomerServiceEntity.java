package com.wds.ship.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "PROC_EXPORT_CUSTOMER_SERVICE_FCL_1")
public class ExportFCLCustomerServiceEntity {

    @Column(name = "ID")
    @Id
    private Long id;

    @Column(name = "COUNT")
    private Long count;

    @Column(name = "DEPT")
    private String dept;

    @Column(name = "PRODUCT")
    private String product;

    @Column(name = "ACTION")
    private String action;

    @Column(name = "WITHINSLA")
    private Long withinSLA;
    @Column(name = "OUTOFSLA")
    private Long outOfSLA;

    @Column(name = "CMPY")
    private Long company;

    @Column(name = "BRNID")
    private Long branch;

    @Column(name = "DEPTID")
    private Long deptid;
    public Long getDeptid() {
        return deptid;
    }
    public void setDeptid(Long deptid) {
        this.deptid = deptid;
    }

    public Long getBranch() {
        return branch;
    }

    public void setBranch(Long branch) {
        this.branch = branch;
    }

    public Long getCompany() {
        return company;
    }

    public void setCompany(Long company) {
        this.company = company;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDept() {
        return dept;
    }

    public void setDept(String dept) {
        this.dept = dept;
    }

    public String getProduct() {
        return product;
    }

    public void setProduct(String product) {
        this.product = product;
    }

    public String getAction() {
        return action;
    }

    public void setAction(String action) {
        this.action = action;
    }

    public Long getWithinSLA() {
        return withinSLA;
    }

    public void setWithinSLA(Long withinSLA) {
        this.withinSLA = withinSLA;
    }

    public Long getOutOfSLA() {
        return outOfSLA;
    }

    public void setOutOfSLA(Long outOfSLA) {
        this.outOfSLA = outOfSLA;
    }



}
