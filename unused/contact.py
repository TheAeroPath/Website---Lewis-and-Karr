from flask import Flask, render_template, request
import smtplib
from email.mime.text import MIMEText

app = Flask(__name__)

@app.route('/')
def html():
    return render_template('contact.html')

@app.route('/styles.css')
def css():
    return render_template('styles.css')

@app.route('/submit', methods=['POST'])
def submit_form():
    name = request.form.get('name')
    email = request.form.get('email')
    message = request.form.get('message')

    # Send email using the smtplib library
    to = 'support@lewisandkarr.com'  # Replace with your distribution list email address
    subject = 'New Message from Contact Form'
    body = f"Name: {name}\nEmail: {email}\nMessage: {message}"

    msg = MIMEText(body)
    msg['Subject'] = subject
    msg['From'] = email

    with smtplib.SMTP('localhost', 587) as server:
        server.starttls()
        server.login(to, 'Rihvoc-vaxwos-2gocvo')
        server.send_message(msg, email, to)

    return 'Form submitted successfully!'

if __name__ == '__main__':
    app.run()