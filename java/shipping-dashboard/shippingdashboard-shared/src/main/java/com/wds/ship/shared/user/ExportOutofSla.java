package com.wds.ship.shared.user;

public class ExportOutofSla {
	
	private String action;
	
	private int outofsla;

	private Long branch;

	private Long company;

	private Long deptid;

	public String getAction() {
		return action;
	}

	public void setAction(String action) {
		this.action = action;
	}

	public int getOutofsla() {
		return outofsla;
	}

	public void setOutofsla(int outofsla) {
		this.outofsla = outofsla;
	}


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

}
