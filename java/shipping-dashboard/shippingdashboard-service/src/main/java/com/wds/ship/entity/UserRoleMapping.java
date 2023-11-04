package com.wds.ship.entity;

import jakarta.persistence.*;

import java.util.Set;


@Entity
@Table(name = "DB_USER_ROLE_MAPPING")
public class UserRoleMapping {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "USER_ID"  , referencedColumnName = "STFF_RID")
    private User userRole;

    public User getUserRole() {
        return userRole;
    }

    public void setUserRole(User userRole) {
        this.userRole = userRole;
    }

    @ManyToOne
    @JoinColumn(name = "ROLE_ID"   , referencedColumnName = "ROLE_ID")
    private ProductRoleMaster roleMaster;

    @Column(name = "STATUS")
    private String status;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }



    public ProductRoleMaster getRoleMaster() {
        return roleMaster;
    }

    public void setRoleMaster(ProductRoleMaster roleMaster) {
        this.roleMaster = roleMaster;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }


}
