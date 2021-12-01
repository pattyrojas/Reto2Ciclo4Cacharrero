/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.sergioarboleda.caharrero.app.repositories.crud;

import com.sergioarboleda.caharrero.app.model.Clone;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 *
 * @author Usuario
 */
public interface CloneCrudRepository extends MongoRepository<Clone,Integer> {
    
}
