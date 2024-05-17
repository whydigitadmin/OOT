package com.wds.ship.shared.user;

public class DetailsAction {

    private String action;

    private int withinsla;

    private Long company;

    private Long branch;

    private int outofsla;

   
	private String dept;

	

    public String getDept() {
		return dept;
	}

	public void setDept(String dept) {
		this.dept = dept;
	}

	public String getAction() {
        return action;
    }

    public void setAction(String action) {
        this.action = action;
    }

    public int getWithinsla() {
        return withinsla;
    }

    public void setWithinsla(int wihtinsla) {
        this.withinsla = wihtinsla;
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
