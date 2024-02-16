package com.wds.ship.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class WelcomeController {

    @GetMapping("/")
    public String index() {
        return "Welcome -- OOT!";
    }

    @GetMapping("/login")
    public Map<String,String> login() {
        Map<String,String> map = new HashMap<>();
        map.put("welcome" , "OOT - WDS");
        return map;
    }

}
