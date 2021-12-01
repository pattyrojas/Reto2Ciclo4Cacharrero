/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.sergioarboleda.caharrero.app.services;

import com.sergioarboleda.caharrero.app.model.Clone;
import com.sergioarboleda.caharrero.app.repositories.CloneRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Usuario
 */
@Service
public class CloneServices {

    @Autowired
    private CloneRepository repository;

    /**
     *
     * @return
     */
    public List<Clone> getAllClones() {
        return repository.getallClones();
    }

    /**
     *
     * @param clone
     * @return
     */
    public Clone saveClone(Clone clone) {
        if (clone.getBrand() == null || clone.getProcesor() == null
                || clone.getOs() == null || clone.getDescription() == null
                || clone.getMemory() == null || clone.getHardDrive() == null
                || clone.getPhotography() == null) {
            return clone;

        }else{
           Optional<Clone> cloneExists = repository.getCloneById(clone.getId());
            if (cloneExists.isEmpty()) {
                return repository.saveClone(clone);
                
            } else {
                return clone;
                
            }
        }
    }

    public boolean deleteCloneById(Integer id) {
        if (repository.getCloneById(id).isPresent()) {
            repository.deleteCloneById(id);
            return true;
        }
        return false;
    }

    public Clone updateClone(Clone clone) {
        if (clone.getId() != null) {
            Optional<Clone> cloneExist = repository.getCloneById(clone.getId());
            if (cloneExist.isPresent()) {
                if (clone.getBrand() != null) {
                    cloneExist.get().setBrand(clone.getBrand());
                }
                if (clone.getProcesor() != null) {
                    cloneExist.get().setProcesor(clone.getProcesor());
                }
                if (clone.getOs() != null) {
                    cloneExist.get().setOs(clone.getOs());
                }
                if (clone.getDescription() != null) {
                    cloneExist.get().setDescription(clone.getDescription());
                }
                if (clone.getMemory() != null) {
                    cloneExist.get().setMemory(clone.getMemory());
                }
                if (clone.getHardDrive() != null) {
                    cloneExist.get().setHardDrive(clone.getHardDrive());
                }
                if (clone.getPrice() != null) {
                    cloneExist.get().setPrice(clone.getPrice());
                }
                if (clone.getQuantity() != null) {
                    cloneExist.get().setQuantity(clone.getQuantity());
                }
                if (clone.getPhotography() != null) {
                    cloneExist.get().setPhotography(clone.getPhotography());
                }
                if (clone.getAvailability() != null) {
                    cloneExist.get().setAvailability(clone.getAvailability());
                }
                return repository.saveClone(cloneExist.get());
            }
            return clone;
        }
        return clone;
    }
}
