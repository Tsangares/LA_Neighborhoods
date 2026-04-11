from flask import Flask, render_template, redirect, request
# Generate a pymongo for flask
from flask_pymongo import PyMongo, ObjectId
#dotenv
from dotenv import load_dotenv
import os

load_dotenv()
app = Flask(__name__)
# Set the URI for the connection
app.config["MONGO_URI"] = os.getenv("MONGO_URI")
mongo = PyMongo(app)
# Connect to the "lamaps" database
zones = mongo.db.zones

@app.route('/')
def index():
    data = [e for e in zones.find()]
    for zone in data:
        if 'link' not in zone:
            zone['link'] = ''
    data = {e['path_id']: {'name': e['name'], 'link': e['link']} for e in data}
    return render_template('index.html', zones=data)


@app.route('/edit', methods=['GET'])
def edit_page():
    #Get the data from the database
    data = [e for e in zones.find()]
    for zone in data:
        if 'link' not in zone:
            zone['link'] = ''
    return render_template('mapping.html', zones=data)

@app.route('/add', methods=['POST'])
def add_data():
    data = request.form
    path_id = data.get('path_id','')
    link = data.get('link','')
    name = data.get('name','')
    # Insert the data into the database
    zones.insert_one({'path_id': path_id, 'link': link, 'name': name})
    return redirect('/edit')
@app.route('/edit/<string:_id>', methods=['POST'])
def update_data(_id):
    data = request.form
    link = data.get('link','')
    name = data.get('name','')
    
    # Update the data in the database
    zones.update_one({'_id': ObjectId(_id)}, {'$set': {'link': link, 'name': name}})
    return redirect('/edit')
    


if __name__ == '__main__':
    app.run(debug=True, port=9561)
