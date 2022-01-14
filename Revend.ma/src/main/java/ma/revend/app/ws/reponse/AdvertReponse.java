package ma.revend.app.ws.reponse;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data 
@AllArgsConstructor 
@NoArgsConstructor 
@ToString
public class AdvertReponse {
	
	private String advertId;
	private String titleAdvert;
	private String descriptionAdvert;
	private String priceAdvert;
	private String imageAdvert;


}
