package ma.revend.app.ws.reponse;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data 
@AllArgsConstructor 
@NoArgsConstructor 
@ToString
public class CategoryReponse {

	private String categoryId;
	private String nameCategory;
	private String logoCategory;
	private String descriptionCategory;
	
	
}
