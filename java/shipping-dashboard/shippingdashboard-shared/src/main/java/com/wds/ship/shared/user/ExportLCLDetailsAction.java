package com.wds.ship.shared.user;

public class ExportLCLDetailsAction {
		
		private String action;
		
		private int wihtinsla;

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
