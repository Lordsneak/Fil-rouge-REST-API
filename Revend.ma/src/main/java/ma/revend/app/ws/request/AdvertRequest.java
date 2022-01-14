package ma.revend.app.ws.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data 
@AllArgsConstructor 
@NoArgsConstructor 
@ToString
public class AdvertRequest {

	private String titleAdvert;
	private String descriptionAdvert;
	private String priceAdvert;
	private String imageAdvert;
	
}
