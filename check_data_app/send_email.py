import smtplib
from email.mime.text import MIMEText

def sendEmail(countAvailable):
    host = 'smtp.gmail.com'
    port = 587
    sender_email = ''
    recipient_email = ''
    # recipient_email = ''
    password = ''
    subject = "رسالة تذكير مهمة"
    body = "قـم بمراجعة مواعيد السفارة هناك مواعيد متاحة في " + str(countAvailable) + "أيام"
    try:
        html_message = f''' 
        <div style="background-color:#eee;padding:10px 20px;">
            <h2 style="font-family:Georgia,'Times New Roman', Times, serif;color#454349;text-align:center;">{body}</h2>
        </div>
        '''
        message = MIMEText((html_message), 'html')  
        
        message['From'] = f'مهم جدا من <{sender_email}>'
        message['To'] = f'المستقبل <{recipient_email}>'
        message['Cc'] = f'لا يوجد <>'
        message['Subject'] = f'{subject}'
        msg = message.as_string()

        server = smtplib.SMTP(host, port)
        print("Connection Status: Connected")
        server.set_debuglevel(1)
        server.ehlo()
        server.starttls()
        server.ehlo()
        server.login(sender_email, password)
        print("Connection Status: Logged in")
        server.sendmail(sender_email, recipient_email, msg)
        print("Status: Email as HTML successfully sent")

    except Exception as e:
            print(e)
            print("Error: unable to send email")