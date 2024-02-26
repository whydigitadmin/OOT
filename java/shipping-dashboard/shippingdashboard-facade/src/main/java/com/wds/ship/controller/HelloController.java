package com.wds.ship.controller;

import com.wds.ship.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/hello")
public class HelloController {

    @Value("${env}")
    private  String environment;

    @Autowired
    LoginService loginService;

    @GetMapping("/hello")
    public String index() {
        return "Greetings from Spring Boot!";
    }

    @GetMapping("/environment")
    public String environment() {
        return "Environment :" + environment;
    }

    @GetMapping("/hello/service")
    public String helloservice() {
        String res = loginService.hello();
        return
                "Greetings from Spring Boot - Facade! - " + res + "- Service";
    }
}
