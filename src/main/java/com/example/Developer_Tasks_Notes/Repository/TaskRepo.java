package com.example.Developer_Tasks_Notes.Repository;

import com.example.Developer_Tasks_Notes.Model.Tasks;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskRepo extends JpaRepository<Tasks,Integer> {

}
