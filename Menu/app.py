import os
import pymongo
from flask import Flask,request,jsonify
app = Flask(__name__)

mongoURL = “mongodb://comp3122:12345@mongo:27017/“
client = MongoClient(mongoURL)

@app.route("/")	
def main():
	return "Welcome to Poly Eats!"
	
if __name__ == "__main__":
	app.run(host="0.0.0.0", port=8080, debug=True, use_reloader=True)
