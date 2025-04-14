package com.company.uniqueProject.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.company.uniqueProject.Repository.Entities.UserEntity;

import lombok.NonNull;

public interface UserRepo extends JpaRepository<UserEntity, Long> {

	UserEntity findByUserName(@NonNull String userName);

}
