#!/bin/env python3
#import os
import email, imaplib
import re

#cwd = os.getcwd()
EMAIL_UN  = ''
EMAIL_PW = ''

#regex patterns
#quote
q = re.compile('"(.*)"')
#author
a = re.compile(' - (.*)')

with imaplib.IMAP4_SSL('imap.gmail.com', 993) as M:
    M.login(EMAIL_UN, EMAIL_PW)
    M.select()
    typ, data = M.search(None, 'BODY "Quote of the Week"')
    for mail_id in data[0].split():
        typ, data = M.fetch(mail_id, '(RFC822)')
        email_body = data[0][1]
        email_text = str(email_body)
        mail = email.message_from_string(email_text)
        # print('Message %s\n%s\n' % (num, data[0][1]))
        #print(mail)
        line_list = email_text.split('\\r\\n\\r\\n')
        for line in line_list:
            if "Quote of the Week" in line:
                line = line.replace('=\\r\\n', '')
                line = line.replace('\\r\\n', '')
                line = line.replace('=E2=80=9C', '"')
                line = line.replace('=E2=80=9D', '"')
                line = line.replace('=E2=80=93', '-')
                line = line.replace('=E2=80=94', '-')
                line = line.replace('=E2=80=95', '-')
                line = line.replace('=E2=80=99', '\'')
                line = line.replace('\\\'', '\'')
                #print(line)
                print(q.search(line).group())
                print(a.search(line).group())
                
