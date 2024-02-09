package com.wds.ship.controller;




import com.google.gson.Gson;

import com.wds.ship.service.LoginService;
import com.wds.ship.shared.user.UserDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/facade/user")
public class LoginController {

    @Autowired
    LoginService loginService;

    // @CrossOrigin(origins = "http://localhost:4200")
    @CrossOrigin(origins = {"https://devphp.shipsoft.co",  "https://18.140.188.121", "http://localhost", "http://localhost:4200"})
    @PostMapping("/loginInfo")
    public UserDetails loginInfo(@RequestBody UserDetails userDetails)
    {
        return loginService.loginInfo(userDetails);
        //return "Greetings from Spring Boot!";
    }

    // @CrossOrigin(origins = "http://localhost:4200")
    //@CrossOrigin(origins = "https://devphp.shipsoft.co")
    @CrossOrigin(origins = {"https://devphp.shipsoft.co",  "https://18.140.188.121", "http://localhost", "http://localhost:4200"})
    @PostMapping("/loginInfo1")
    public UserDetails loginInfo1(@RequestBody String reqUserDetails)
    {
        Gson gson = new Gson();
        UserDetails userDetails
                = gson.fromJson(reqUserDetails,
                UserDetails.class);

        return loginService.loginInfo(userDetails);
        //return "Greetings from Spring Boot!";
    }
}
