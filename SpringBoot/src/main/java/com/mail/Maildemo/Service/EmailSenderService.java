package com.mail.Maildemo.Service;

public interface EmailSenderService {
    void sendEmail(String toEmail,String subject,String body);
}
