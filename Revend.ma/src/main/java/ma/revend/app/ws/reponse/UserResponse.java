package ma.revend.app.ws.reponse;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data 
@AllArgsConstructor 
@NoArgsConstructor 
@ToString
public class UserResponse {
	
    private String userId;
    private String username;
    private boolean actived;
    private String roleName;
    private String firstName;
    private String lastName;
    private String address;
    private String email;
    private String numero;
    private String type;
	
	
}
