package ma.revend.app.ws.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ma.revend.app.ws.entity.CategoryEntity;

@Repository
public interface CategoryRepository extends JpaRepository<CategoryEntity, Long> {
	
	CategoryEntity findByNameCategory(String nameCategory);

	CategoryEntity findByCategoryId(String categorieId);

}
