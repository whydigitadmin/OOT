package com.wds.ship.shared.user;

public class ExportOutofSla {
	
	private String action;
	
	private int outofsla;

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

	private Long company;

	private Long branch;

	private Long deptid;

	public Long getBranch() {
		return branch;
	}

	public void setBranch(Long branch) {
		this.branch = branch;
	}

	public Long getDeptid() {
		return deptid;
	}

	public void setDeptid(Long deptid) {
		this.deptid = deptid;
	}


	public Long getCompany() {
		return company;
	}

	public void setCompany(Long company) {
		this.company = company;
	}
	

}
