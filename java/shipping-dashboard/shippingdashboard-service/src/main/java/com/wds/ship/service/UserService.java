package com.wds.ship.service;

import com.wds.ship.entity.User;
import com.wds.ship.shared.user.UserDetails;
import com.wds.ship.shared.user.UserInfo;

public interface UserService {
    UserInfo findUserById(long userId);

    UserDetails findUserByName(String name);

    String updateUserById(long userId);

    UserDetails findByLoginInfo(String email);
}
