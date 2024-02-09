package com.wds.ship.security.repository;


import com.wds.ship.security.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AuthRepository extends JpaRepository<User, Long> {

    User findByLoginName(String loginName);
}
