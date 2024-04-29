package com.wds.ship.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="proc_export_sales_support")
public class ExportSalesSupportSea {
	
	@Id
	private Long id;
	private String dept;
	private String product;
	private String action;
	private long count;
	@Column(name = "CMPY")
	private Long company;

	@Column(name = "BRNID")
	private Long branch;

	private Long deptid;

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

	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getDept() {
		return dept;
	}
	public void setDept(String dept) {
		this.dept = dept;
	}
	public String getProduct() {
		return product;
	}
	public void setProduct(String product) {
		this.product = product;
	}
	public String getAction() {
		return action;
	}
	public void setAction(String action) {
		this.action = action;
	}
	public long getCount() {
		return count;
	}
	public void setCount(long count) {
		this.count = count;
	}
	
	

}
