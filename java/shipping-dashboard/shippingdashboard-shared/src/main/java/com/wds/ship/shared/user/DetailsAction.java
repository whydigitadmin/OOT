package com.wds.ship.shared.user;

public class DetailsAction {

    private String action;

    private int wihtinsla;

    private Long company;

    private Long branch;

    private int outofsla;

    private Long deptid;


    public Long getDeptid() {
        return deptid;
    }
    public void setDeptid(Long deptid) {
        this.deptid = deptid;
    }

    public String getAction() {
        return action;
    }

    public void setAction(String action) {
        this.action = action;
    }

    public int getWihtinsla() {
        return wihtinsla;
    }

    public void setWihtinsla(int wihtinsla) {
        this.wihtinsla = wihtinsla;
    }

    public Long getCompany() {
        return company;
    }

    public void setCompany(Long company) {
        this.company = company;
    }

    public Long getBranch() {
        return branch;
    }

    public void setBranch(Long branch) {
        this.branch = branch;
    }

    public int getOutofsla() {
        return outofsla;
    }

    public void setOutofsla(int outofsla) {
        this.outofsla = outofsla;
    }
}
