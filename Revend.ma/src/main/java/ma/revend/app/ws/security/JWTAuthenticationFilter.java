package ma.revend.app.ws.security;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.fasterxml.jackson.databind.ObjectMapper;

import ma.revend.app.ws.entity.AppUser;
import ma.revend.app.ws.services.AccountService;
import ma.revend.app.ws.services.impl.AccountServiceImpl;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.context.ApplicationContext;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class JWTAuthenticationFilter extends UsernamePasswordAuthenticationFilter {
    private AuthenticationManager authenticationManager;
    AccountService accountService;
    
    public JWTAuthenticationFilter(AuthenticationManager authenticationManager, ApplicationContext ctx) {
        this.authenticationManager = authenticationManager;
        this.accountService= ctx.getBean(AccountServiceImpl.class);
    }


    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {
        try {
            AppUser appUser= new ObjectMapper().readValue(request.getInputStream(),AppUser.class);
            return authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(appUser.getUsername(),appUser.getPassword()));
        } catch (IOException e) {
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response,
                                            FilterChain chain, Authentication authResult) throws IOException, ServletException {
        User user=(User)authResult.getPrincipal();
        AppUser utilisateur = accountService.loadUserByUsername(user.getUsername());
        List<String> roles=new ArrayList<>();
        authResult.getAuthorities().forEach(a->{
            roles.add(a.getAuthority());
        });
        String token= JWT.create()
                .withIssuer(request.getRequestURI())
                .withSubject(user.getUsername())
                .withClaim("id", utilisateur.getId())
                .withClaim("email", utilisateur.getEmail())
                .withClaim("firstName", utilisateur.getFirstName())
                .withClaim("lastName", utilisateur.getLastName())
                .withArrayClaim("roles",roles.toArray(new String[roles.size()]))
                .withExpiresAt(new Date(System.currentTimeMillis()+SecurityParams.EXPIRATION))
                .sign(Algorithm.HMAC256(SecurityParams.SECRET));
        		response.addHeader(SecurityParams.JWT_HEADER_NAME,token);
        		
        		response.getWriter().write("{\"token\": \"" 
        				+
        				token
        				+ 
        				"\", \"id\": \""
        				+ 
        				utilisateur.getId()
        				+ 
        				"\", \"username\": \""
        				+
        				user.getUsername()
        				+
        				"\", \"email\": \""
        				+
        				utilisateur.getEmail()
        				+
        				"\", \"firstname\": \""
        				+
        				utilisateur.getFirstName()
        				+
        				"\", \"lastname\": \""
        				+
        				utilisateur.getLastName()
        				+
        				"\"}");
        		
    }

}
