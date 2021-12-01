/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.sergioarboleda.caharrero.app.services;

import com.sergioarboleda.caharrero.app.model.User;
import com.sergioarboleda.caharrero.app.repositories.UserRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Usuario
 */
@Service
public class UserServices {

    @Autowired
    private UserRepository repository;

    public List<User> getAll() {
        return repository.getall();
    }

    /**
     *
     * @param user
     * @return
     */
    public User save(User user) {
        //ojo este user viene de la capa services
        if (user.getName() == null || user.getEmail() == null || user.getPassword() == null
                ||user.getIdentification()==null || user.getType()==null) {
            return user;
        } else {
            List<User> existUser = repository.getUsersByNameOrEmail(user.getName(), user.getEmail());
            if (existUser.isEmpty()) {
                if (user.getId() == null) {
                    return repository.save(user);

                } else {
                    Optional<User> existUser2 = repository.getUserById(user.getId());
                    if (existUser2.isEmpty()) {
                        return repository.save(user);
                    } else {
                        return user;
                    }
                }

            } else {
                return user;
            }
        }
    }

    /**
     *
     * @param email
     * @return
     */
    public boolean getUserByEmail(String email) {
        //is present contrario de is empty
        return repository.getUserByEmail(email).isPresent();

    }

    public User getByEmailPass(String email, String password) {
        Optional<User> userExist = repository.getUserEmailAndPassword(email, password);
        if (userExist.isPresent()) {
            return userExist.get();
        } else {
            return new User(); //para retornar vacío
        }
    }

    public User update(User user) {
        Optional<User> userExist = repository.getUserById(user.getId());
        if (userExist.isPresent()) {
            if (user.getIdentification() != null) {
                userExist.get().setIdentification(user.getIdentification());
            }
            if (user.getName() != null) {
                userExist.get().setName(user.getName());
            }
          
            if (user.getAddress() != null) {
                userExist.get().setAddress(user.getAddress());
            }
            if (user.getCellPhone() != null) {
                userExist.get().setCellPhone(user.getCellPhone());
            }
            if (user.getEmail() != null) {
                userExist.get().setEmail(user.getEmail());
            }
            if (user.getPassword() != null) {
                userExist.get().setPassword(user.getPassword());
            }
            if (user.getZone() != null) {
                userExist.get().setZone(user.getZone());
            }
            if (user.getType() != null) {
                userExist.get().setType(user.getType());
            }
            return repository.save(userExist.get());
        } else {
            return user;
        }
        
        
    }

   
  
  public boolean deleteById(Integer id){
        Optional<User> user = repository.getUserById(id);
        if(user.isPresent()){
            repository.deleteById(id);
            return true;
        }else{
            return false;
        }
    }
  /*
    public void deleteById (Integer id){
        repository.deleteById(id);
    }
    
    /*
      public void delete (User user){
        repository.delete(user);
    }
*/
}