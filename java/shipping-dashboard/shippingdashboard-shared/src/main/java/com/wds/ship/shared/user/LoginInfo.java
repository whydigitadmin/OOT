package com.wds.ship.shared.user;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

public class LoginInfo {

    @NotNull(message = "Email may not be null")
    @Email(message = "Email should be valid")
    @Getter
    @Setter
    String email;

    @NotNull(message = "Password may not be null")
    @Getter
    @Setter
    String password;
}
