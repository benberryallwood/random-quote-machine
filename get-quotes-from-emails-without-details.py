#!/bin/env python3
import email
import imaplib
import re
import json

EMAIL_UN = ''
EMAIL_PW = ''

quotes_dict = dict()

with imaplib.IMAP4_SSL('imap.gmail.com', 993) as M:
    M.login(EMAIL_UN, EMAIL_PW)
    M.select()
    typ, data = M.search(None, 'BODY "Quote of the Week"')
    i = 0
    for mail_id in data[0].split():
        typ, data = M.fetch(mail_id, '(RFC822)')
        email_body = data[0][1]
        email_text = str(email_body)
        mail = email.message_from_string(email_text)
        # print('Message %s\n%s\n' % (num, data[0][1]))
        # print(mail)
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

                q = re.search('"(.*)" - ', line).group(1)  # quote
                a = re.search('" - (.*)', line).group(1)  # author
                quotes_dict[str(i)] = {'quote': q, 'author': a}
                i += 1

quotes_json = json.dumps(quotes_dict, indent=2)
#quotes_json = json.dumps(quotes_dict)
print(quotes_json)

with open("quotes.json", "w") as Q:
    Q.write(quotes_json)
