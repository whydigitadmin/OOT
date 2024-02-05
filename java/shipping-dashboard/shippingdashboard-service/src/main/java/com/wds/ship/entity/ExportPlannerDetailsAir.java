package com.wds.ship.entity;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="PROC_EXPORT_PLANNER_DETAILS_air")
public class ExportPlannerDetailsAir {
	
	@Id
	private int id;
	private int sno;
	private String dept;
	private String product;
	private String action;
	private String ref_no;
	private Date ref_date;
	private String ref_type;
	private String ref_mode;
	private int withinsla;
	private int outofsla;
	
	public int getWithinsla() {
		return withinsla;
	}
	public void setWithinsla(int withinsla) {
		this.withinsla = withinsla;
	}
	public int getOutofsla() {
		return outofsla;
	}
	public void setOutofsla(int outofsla) {
		this.outofsla = outofsla;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public void setRef_no(String ref_no) {
		this.ref_no = ref_no;
	}
	public int getSno() {
		return sno;
	}
	public void setSno(int sno) {
		this.sno = sno;
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
	public String getRef_no() {
		return ref_no;
	}
	public void setRefno(String ref_no) {
		this.ref_no = ref_no;
	}
	public Date getRef_date() {
		return ref_date;
	}
	public void setRef_date(Date ref_date) {
		this.ref_date = ref_date;
	}
	public String getRef_type() {
		return ref_type;
	}
	public void setRef_type(String ref_type) {
		this.ref_type = ref_type;
	}
	public String getRef_mode() {
		return ref_mode;
	}
	public void setRef_mode(String ref_mode) {
		this.ref_mode = ref_mode;
	}

}

