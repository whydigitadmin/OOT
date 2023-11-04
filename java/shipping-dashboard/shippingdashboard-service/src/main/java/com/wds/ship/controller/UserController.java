package com.wds.ship.controller;

import com.wds.ship.service.UserService;
import com.wds.ship.shared.user.UserDetails;
import com.wds.ship.shared.user.UserInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/user")
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping("/findByUserId")
    public UserInfo findByUserId(@RequestParam(name = "userId", required = true) Long userId) {
        return userService.findUserById(userId);

    }

    @PostMapping("/findByUser")
    public UserDetails findByUser(@RequestBody UserDetails userDetails)
    {
        return userService.findUserByName(userDetails.getEmail());
    }

    @PostMapping("/updateUserPassword")
    public String updateUserPassword(@RequestBody UserInfo userInfo)
    {
        return userService.updateUserById(userInfo.getId());
    }

    @PostMapping("/findByLoginInfo")
    public UserDetails findByLoginInfo(@RequestBody UserDetails userDetails)
    {
        return userService.findByLoginInfo(userDetails.getEmail());
    }
}
