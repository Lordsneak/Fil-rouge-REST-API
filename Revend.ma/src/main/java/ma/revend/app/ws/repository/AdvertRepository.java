package ma.revend.app.ws.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ma.revend.app.ws.entity.AdvertEntity;

@Repository
public interface AdvertRepository extends JpaRepository<AdvertEntity, Long> {
	
	AdvertEntity findByTitleAdvert(String titleAdvert);

	AdvertEntity findByAdvertId(String advertId);

	AdvertEntity findByPriceAdvert(String priceAdvert);
	
}
