package ma.revend.app.ws.services;

import java.util.List;

import ma.revend.app.ws.shared.dto.AdvertDto;

public interface AdvertService {
	
	List<AdvertDto> getAdverts(int page, int limit);
	AdvertDto createAdvert(AdvertDto advert);
	AdvertDto getAdvert(String titleAdvert);
	AdvertDto getAdvertByAdvertId(String advertId);
	AdvertDto getAdvertByPrice(String priceAdvert);
	AdvertDto updateAdvert(String advertId, AdvertDto advertDto);
	void deleteAdvert(String advertId);
	
}
