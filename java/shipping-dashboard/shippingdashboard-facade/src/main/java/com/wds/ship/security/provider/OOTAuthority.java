package com.wds.ship.security.provider;

import org.springframework.security.core.GrantedAuthority;

public class OOTAuthority implements GrantedAuthority {

    public OOTAuthority(String authority , String roleId){
        this.authority = authority;
        this.roleId = roleId;
    }
    private String authority;
    private String roleId;

    @Override
    public String getAuthority() {
        return authority;
    }

    public String getRoleId()
    {
        return roleId;
    }
}
