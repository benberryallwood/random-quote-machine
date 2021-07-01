#!/bin/env python3
#import os
import email, imaplib

#cwd = os.getcwd()
EMAIL_UN  = ''
EMAIL_PW = ''

with imaplib.IMAP4_SSL('imap.gmail.com', 993) as M:
    M.login(EMAIL_UN, EMAIL_PW)
    M.select()
    typ, data = M.search(None, 'BODY "Quote of the Week"')
    for num in data[0].split():
        typ, data = M.fetch(num, '(RFC822)')
        email_body = data[0][1]
        email_text = str(email_body)
        # print('Message %s\n%s\n' % (num, data[0][1]))
        line_list = email_text.splitlines()
        for line in line_list:
            if "Quote of the Week" not in line:
                line_list.remove(line)
        #print(line_list)
