from flask import Flask, request, jsonify
from dotenv import load_dotenv
import os
import genai
from IPython.display import Markdown
import textwrap
from craiyon import Craiyon

app = Flask(__name__)

load_dotenv()

def to_markdown(text):
    text = text.replace('•', '  *')
    return Markdown(textwrap.indent(text, '> ', predicate=lambda _: True))

GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")
genai.configure(api_key=GOOGLE_API_KEY)
model = genai.GenerativeModel('gemini-pro')

base_text = "I am trying to help deaf children understand the the lecture of their teacher and I have created a speech to text model, So, I will give you transcription of whole paragraph deliever by teacher, So give me a short summary of the paragraph that could be easily read in time and highlight the important words by using inverted commas. The paragraph is as follows: "

generator = Craiyon() # Instantiates the api wrapper

@app.route('/generate_text', methods=['POST'])
def generate_content():
    data = request.get_json()
    prompt = data.get('prompt', '')
    response = model.generate_content(base_text+prompt)
    result = to_markdown(response.text)

    return jsonify({'result': result})

@app.route('/generate_image', methods=['POST'])
def generate_image():
    data = request.get_json()
    prompt = data.get('prompt', '')
    result = generator.generate(prompt, negative_prompt="spoon", model_type="art")
    image_urls = result.images

    return jsonify({'image_urls': image_urls})

if __name__ == '__main__':
    app.run(debug=True)