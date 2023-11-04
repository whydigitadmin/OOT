package com.wds.ship.shared.lcl.export;

public class CustomerServicePOJO {

    private Long id;

    private String dept;

    private String product;

    private String action;

    private Long withinSLA;

    private Long outOfSLA;

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

    public Long getWithinSLA() {
        return withinSLA;
    }

    public void setWithinSLA(Long withinSLA) {
        this.withinSLA = withinSLA;
    }

    public Long getOutOfSLA() {
        return outOfSLA;
    }

    public void setOutOfSLA(Long outOfSLA) {
        this.outOfSLA = outOfSLA;
    }


}
