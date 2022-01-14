package ma.revend.app.ws.shared.dto;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;



@Data 
@AllArgsConstructor 
@NoArgsConstructor 
@ToString
public class AdvertDto implements Serializable{

	private static final long serialVersionUID = 5599002969692637189L;

	private Long id;
	private String advertId;
	private String titleAdvert;
	private String descriptionAdvert;
	private String priceAdvert;
	private String imageAdvert;

	
	
}
