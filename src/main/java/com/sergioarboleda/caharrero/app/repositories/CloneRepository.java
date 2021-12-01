/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.sergioarboleda.caharrero.app.repositories;

import com.sergioarboleda.caharrero.app.model.Clone;
import com.sergioarboleda.caharrero.app.model.User;
import com.sergioarboleda.caharrero.app.repositories.crud.CloneCrudRepository;
import com.sergioarboleda.caharrero.app.repositories.crud.UserCrudRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Usuario
 */
@Repository
public class CloneRepository {

    @Autowired
    private CloneCrudRepository repository;

    /**
     *
     * @return
     */
    public List<Clone> getallClones() {
        return (List<Clone>) repository.findAll();
    }

    /**
     *
     * @param id
     * @return
     */
    public Optional<Clone> getCloneById(Integer id) {
        return repository.findById(id);

    }

    /**
     *
     * @param clone
     * @return
     */
    public Clone saveClone(Clone clone) {
        return repository.save(clone);
    }
//aca tengo una duda con el update
    public Clone updateClone(Clone clone) {
        return repository.save(clone);
    }
    
    /**
     *
     * @param clone
     */
    public void deleteClone(Clone clone) {
        repository.delete(clone);
    }

     public void deleteCloneById(Integer id){
     repository.deleteById(id);
   }
}
