from flask import Flask, jsonify, request
from migrations.language import view, insert, Language

app = Flask(__name__)

@app.route('/')
def hello_world():
    return '¡Hola, mundo!'

@app.route('/languages', methods=['GET'])
def get_languages():
    languages = view()
    return jsonify([{
        'id': lang.id,
        'name': lang.name,
        'abbreviation': lang.abbreviation,
        'flag': lang.flag,
        'order': lang.order
    } for lang in languages])

@app.route('/languages', methods=['POST'])
def add_language():
    data = request.get_json()
    new_language = Language(
        id=data['id'],
        name=data['name'],
        abbreviation=data['abbreviation'],
        flag=data['flag'],
        order=data['order']
    )
    insert(new_language)
    return 'Language added successfully'

if __name__ == '__main__':
    app.run(debug=True)
