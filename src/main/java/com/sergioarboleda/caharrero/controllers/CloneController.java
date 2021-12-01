/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.sergioarboleda.caharrero.controllers;

import com.sergioarboleda.caharrero.app.model.Clone;
import com.sergioarboleda.caharrero.app.services.CloneServices;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("clone")
@CrossOrigin( origins = "*", methods= {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE} )

/**
 *
 * @author Usuario
 */
public class CloneController {
    
    @Autowired
    
    private CloneServices services;
    
    /**
     * 
     * @return 
     */
    @GetMapping("/all")
    public List<Clone> getClones() {
        //ojo el método getAll viene de la capa services
        return services.getAllClones();

    }
    
    @PostMapping("/new")
    @ResponseStatus(HttpStatus.CREATED)
    public Clone saveClone(@RequestBody Clone clone) {
        return services.saveClone(clone);

    }
    
    @PutMapping("/update")
    @ResponseStatus(HttpStatus.CREATED)
    public Clone updateClone (@RequestBody Clone clone){
    return services.updateClone(clone);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public Boolean deleteCloneById(@PathVariable("id") Integer cloneId)
    {
        return services.deleteCloneById(cloneId);
    }
}
