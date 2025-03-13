from flask import Flask, render_template
import datetime

app = Flask(__name__)

@app.context_processor
def inject_now():
    return {'now': datetime.datetime.now()}

@app.route('/')
def home():
    # Define projects to showcase
    projects = [
        {
            'name': 'SikumAI',
            'description': 'A Telegram bot that automatically generates quizzes from uploaded documents (PDF, DOCX, PPTX, TXT) using Google\'s Gemini AI to help students learn and test their knowledge.',
            'tech': 'Python, Telegram API, Google Gemini AI',
            'github': 'https://github.com/buzagloidan/sikum-ai',
            'link': 'http://SikumAI.com'
        },
        {
            'name': 'Jeenify',
            'description': 'Chrome extension that enhances the prompt writing experience on Jeen.ai platforms with features like template management and history tracking.',
            'tech': 'JavaScript, Chrome Extensions API, HTML/CSS',
            'github': 'https://github.com/buzagloidan/jeenify',
            'link': 'https://github.com/buzagloidan/jeenify'
        },
        {
            'name': 'AI News WhatsApp Channel',
            'description': 'WhatsApp channel for artificial intelligence news in Hebrew, keeping followers updated on the latest developments in AI.',
            'tech': 'WhatsApp Business API, Content Curation',
            'github': 'https://github.com/buzagloidan',
            'link': 'https://t.co/A8CnMoU068'
        }
    ]
    
    # Publications as an economist
    publications = [
        {
            'title': 'Buildings Classified as Unfit for Use: Review and Policy Recommendations',
            'year': '2024',
            'organization': 'National Economic Council, Prime Minister\'s Office',
            'link': 'https://www.gov.il/BlobFolder/news/news-building201124/he/building201124.pdf'
        },
        {
            'title': 'The Strategic Housing Plan for 2050',
            'year': '2025',
            'organization': 'National Economic Council, Prime Minister\'s Office',
            'link': 'https://www.gov.il/BlobFolder/news/2050-120325/he/file_2050-120325.pdf'
        }
    ]
    
    # Personal info
    personal = {
        'name': 'Idan Buzaglo',
        'current_role': 'AI Solutions Engineer',
        'company': 'Jeen.ai',
        'education': [
            {
                'degree': 'Master\'s in Data Science',
                'institution': 'Ben Gurion University',
                'status': 'In Progress'
            },
            {
                'degree': 'Bachelor\'s in Economics',
                'institution': 'Ariel University',
                'status': 'Completed'
            }
        ],
        'previous_role': 'Economist',
        'previous_org': 'Prime Minister\'s Office',
        'github': 'https://github.com/buzagloidan',
        'linkedin': 'https://www.linkedin.com/in/buzagloidan/',
        'email': 'buzagloidan@gmail.com',
        'website': 'buzagloidan.com'
    }
    
    return render_template('index.html', 
                          title='Idan Buzaglo - AI Solutions Engineer',
                          projects=projects,
                          publications=publications,
                          personal=personal)

if __name__ == '__main__':
    app.run(debug=True) 