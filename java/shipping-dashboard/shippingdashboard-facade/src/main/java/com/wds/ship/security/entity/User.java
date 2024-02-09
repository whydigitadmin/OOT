package com.wds.ship.security.entity;



import jakarta.persistence.*;

import java.util.List;


@Entity
@Table(name = "stff_staff")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "STFF_RID")
    private Long id;

    @Column(name = "STFF_LOGIN_NAME")
    private String loginName;

    @Column(name = "STFF_PASSWORD")
    private String password;

    @Column(name = "STFF_DEPARTMENT_NAME")
    private String staffDepartmentName;

    public String getStaffDepartmentName() {
        return staffDepartmentName;
    }

    public void setStaffDepartmentName(String staffDepartmentName) {
        this.staffDepartmentName = staffDepartmentName;
    }

    public Long getHomeDepartmentId() {
        return homeDepartmentId;
    }

    public void setHomeDepartmentId(Long homeDepartmentId) {
        this.homeDepartmentId = homeDepartmentId;
    }

    @Column(name = "STFF_MDPT_HOME_DEPARTMENT")
    private Long homeDepartmentId;

    @Column(name = "STFF_MCPY")
    private Long company;

    @Column(name = "STFF_STATUS")
    private String status;

    @OneToMany(fetch = FetchType.EAGER, mappedBy = "user")
    private List<UserGroup> userGroups;

    @OneToMany(fetch = FetchType.EAGER, mappedBy = "userRole")
    private List<UserRoleMapping> roleMapping;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLoginName() {
        return loginName;
    }

    public void setLoginName(String loginName) {
        this.loginName = loginName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public List<UserGroup> getUserGroups() {
        return userGroups;
    }

    public void setUserGroups(List<UserGroup> userGroups) {
        this.userGroups = userGroups;
    }

    public Long getCompany() {
        return company;
    }

    public void setCompany(Long company) {
        this.company = company;
    }

    public List<UserRoleMapping> getRoleMapping() {
        return roleMapping;
    }

    public void setRoleMapping(List<UserRoleMapping> roleMapping) {
        this.roleMapping = roleMapping;
    }
}
