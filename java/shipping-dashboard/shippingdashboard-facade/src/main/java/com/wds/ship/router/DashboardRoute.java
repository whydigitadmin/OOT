package com.wds.ship.router;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class DashboardRoute {

    @Value("${dashboard.service.url}")
    public String dashboardServiceUrl;
}
