package com.wds.ship.shared.user;

public class ExportWithinsla {
	
	private String action;
	
	private int withinsla;

	public String getAction() {
		return action;
	}

	public void setAction(String action) {
		this.action = action;
	}

	public int getWithinsla() {
		return withinsla;
	}

	public void setWithinsla(int withinsla) {
		this.withinsla = withinsla;
	}

	private Long company;

	private Long branch;

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
