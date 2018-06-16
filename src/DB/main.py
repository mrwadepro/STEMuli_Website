from pprint import pprint
from pymongo import MongoClient
from pymongo import ReturnDocument
from bson.objectid import ObjectId

class MongoDBManagement:
    def __init__(self):
        self.client = MongoClient('localhost', 27017)
        self.db = self.client['STEMuli']
        self.collection_user = self.db['users']

    def insert_one_user(self):
        self.collection_user.insert_one({
            "name":"Kylo Ren"
        })

if __name__ == "__main__":
        mongoDB = MongoDBManagement()
        mongoDB.insert_one_user()
