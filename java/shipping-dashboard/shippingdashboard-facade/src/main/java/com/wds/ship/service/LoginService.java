package com.wds.ship.service;

import com.wds.ship.shared.user.LoginInfo;
import com.wds.ship.shared.user.UserDetails;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

@Component
public class LoginService {

    @Value("${loginservice.url}")
    private String serviceUrl;



    public UserDetails loginInfo(UserDetails userDetails) {
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<UserDetails> responseEntity = restTemplate.postForEntity(serviceUrl + "api/v1/user/findByLoginInfo", userDetails, UserDetails.class);
        if (responseEntity.getStatusCode() == HttpStatus.OK) {
                return responseEntity.getBody();
        } else {
               //
        }
        return null; // or throw an exception if the response is not successful
    }

    public UserDetails loginInfo1(UserDetails userDetails) {
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<UserDetails> responseEntity = restTemplate.postForEntity(serviceUrl + "api/v1/user/findByUser", userDetails, UserDetails.class);
        if (responseEntity.getStatusCode() == HttpStatus.OK) {
            return responseEntity.getBody();
        } else {
            //
        }
        return null; // or throw an exception if the response is not successful
    }


    public UserDetails authlogin(LoginInfo loginInfo) {
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<UserDetails> responseEntity = restTemplate.postForEntity(serviceUrl + "api/v1/user/findByLoginInfo", loginInfo, UserDetails.class);
        if (responseEntity.getStatusCode() == HttpStatus.OK) {
            return responseEntity.getBody();
        } else {
            //
        }
        return null; // or throw an exception if the response is not successful
    }


    public String hello() {
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> responseEntity = restTemplate.getForEntity(serviceUrl + "api/v1/hello",  String.class);
        if (responseEntity.getStatusCode() == HttpStatus.OK) {
            return responseEntity.getBody();
        } else {
            //
        }
        return null; // or throw an exception if the response is not successful
    }

}
