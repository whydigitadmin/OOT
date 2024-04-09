package com.wds.ship.shared.user;

import java.util.List;

public class UserDetails {

    private Long id;
    private String email;

    private String password;

    public Long getCompanyId() {
        return companyId;
    }

    public void setCompanyId(Long companyId) {
        this.companyId = companyId;
    }

    private Long companyId;

    private String status;

    private List<String> roles;


    private String deptName;

    private Long homeDeptId;

    private List<ProductRole> productRoles;

    public List<ProductRole> getProductRoles() {
        return productRoles;
    }

    public void setProductRoles(List<ProductRole> productRoles) {
        this.productRoles = productRoles;
    }



    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }






    public List<String> getRoles() {
        return roles;
    }

    public void setRoles(List<String> roles) {
        this.roles = roles;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }


    public String getDeptName() {
        return deptName;
    }

    public void setDeptName(String deptName) {
        this.deptName = deptName;
    }

    public Long getHomeDeptId() {
        return homeDeptId;
    }

    public void setHomeDeptId(Long homeDeptId) {
        this.homeDeptId = homeDeptId;
    }

    private List<Long> companyIds;
    public List<Long> getCompanyIds() {
        return companyIds;
    }

    public void setCompanyIds(List<Long> companyIds) {
        this.companyIds = companyIds;
    }

    private List<BranchIds> branchIds;
    public List<BranchIds> getBranchIds() {
        return branchIds;
    }

    public void setBranchIds(List<BranchIds> branchIds) {
        this.branchIds = branchIds;
    }




}
