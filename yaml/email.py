import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from sql import create_engine, Table, Column, String, MetaData, select

# Database configuration
DB_URI = 'sqlite:///emails.db'  # Example: 'mysql+pymysql://user:password@host/dbname'
TABLE_NAME = 'email_content'

# SMTP configuration (e.g., Mailtrap for testing)
SMTP_SERVER = 'smtp.mailtrap.io'
SMTP_PORT = 587
SMTP_USERNAME = 'your_mailtrap_username'
SMTP_PASSWORD = 'your_mailtrap_password'

# Recipient email (for controlled testing)
RECIPIENT_EMAIL = 'test@example.com'

# Set up the database connection
engine = create_engine(DB_URI)
metadata = MetaData()

# Define table structure
email_table = Table(
    TABLE_NAME, metadata,
    Column('sender_email', String),
    Column('subject', String),
    Column('body', String)
)

# Function to send emails
def send_email(sender_email, recipient_email, subject, body):
    msg = MIMEMultipart()
    msg['From'] = sender_email
    msg['To'] = recipient_email
    msg['Subject'] = subject

    # Add email body
    msg.attach(MIMEText(body, 'plain'))

    # Connect to SMTP server and send email
    try:
        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
            server.starttls()
            server.login(SMTP_USERNAME, SMTP_PASSWORD)
            server.sendmail(sender_email, recipient_email, msg.as_string())
            print(f"Email sent successfully from {sender_email}")
    except Exception as e:
        print(f"Failed to send email from {sender_email}: {e}")

# Load emails from the database and send
def load_and_send_emails():
    with engine.connect() as connection:
        stmt = select([email_table])
        result = connection.execute(stmt)

        for row in result:
            send_email(row['sender_email'], RECIPIENT_EMAIL, row['subject'], row['body'])

# Main execution
if __name__ == '__main__':
    load_and_send_emails()
