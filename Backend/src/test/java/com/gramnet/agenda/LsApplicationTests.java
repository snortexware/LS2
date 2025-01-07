package com.gramnet.agenda;
import com.gramnet.agenda.service.CustomUserDetailsService;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

@SpringBootTest
class LsApplicationTests {

    @MockBean
    private CustomUserDetailsService userDetailsService;

    @Test
    void contextLoads() {
        // This will test if the application context loads successfully
    }
}
