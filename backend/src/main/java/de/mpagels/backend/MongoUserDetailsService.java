package de.mpagels.backend;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.argon2.Argon2PasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MongoUserDetailsService implements UserDetailsService {

    private final MongoUserRepo repo;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        MongoUser mongoUser = repo.findMongoUserByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User with username: " + username + " not found"));
        return new User(mongoUser.getUsername(), mongoUser.getPassword(), List.of());
    }


    public MongoUser saveUser(MongoUser user) {
        if (repo.findMongoUserByUsername(user.getUsername()).equals(user.getUsername())){
            throw new IllegalArgumentException("Username already taken");
        }
        PasswordEncoder encoder = Argon2PasswordEncoder.defaultsForSpringSecurity_v5_8();
        repo.save(user.withPassword(encoder.encode(user.getPassword())));
        return user;
    }
}
