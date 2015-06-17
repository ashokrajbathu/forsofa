
import os
from server import *
import unittest
import json
import random


class FlaskrTestCase(unittest.TestCase):

    def setUp(self):
        app.config['TESTING'] = True
        self.app = app.test_client()

    def test_login(self):
        print '===login function testing===='
        pass_login_test = False
        email = 'carole.gilbert16@example.com'
        password = '111'
        response = self.app.post('/auth/login',
            data=json.dumps({
                'email': email,
                'password': password
            }), content_type='application/json')

        if response.status_code == 200 or response.status_code == 401:
            pass_login_test = True
        self.assertTrue(pass_login_test)
        pass_login_test = False

        email = 'wrong_email@example.com'
        password = '222'
        response = self.app.post('/auth/login',
            data=json.dumps({
                'email': email,
                'password': password
            }), content_type='application/json')
        if response.status_code == 200 or response.status_code == 401:
            pass_login_test = True
        self.assertTrue(pass_login_test)


    """def test_register(self):
        print '===registration function testing===='
        pass_register_test = False
        email = 'testing_email'+str(random.randint(1, 101099245))+'@example.com'
        password = '111'
        firstname = 'firstname'
        lastname = 'lastname'
        username = 'satya'
        response = self.app.post('/auth/signup',
            data=json.dumps({
                'email': email,
                'password': password,
                'firstname':firstname,
                'lastname': lastname,
                'username':username
            }), content_type='application/json')

        if response.status_code == 200 or response.status_code == 401:
            pass_register_test = True
        self.assertTrue(pass_register_test)"""

    def test_addConversation(self):
        print '====add conversations===='
        pass_addconversation_test = False
        cuserid = "5571545d7695d01454869bba"
        conversationid = "5570b1567695d001f95b3ff0";
        response = self.app.post('/api/addconversation',
            data=json.dumps({
                'cuserid': cuserid,
                'conversationid': conversationid
            }), content_type='application/json')
        if response.status_code == 200 or response.status_code == 401:
            pass_addconversation_test = True
        self.assertTrue(pass_addconversation_test)

    def test_get_interested_ids(self):
        print '===get interested id====='
        pass_get_interested_ids_test = False
        username = "satya"
        interests = ["chatting", "cricket"];
        response = self.app.post('/get_interested_ids',
            data=json.dumps({
                'username': username,
                'interests': interests
            }), content_type='application/json')
        if response.status_code == 200 or response.status_code == 401:
            pass_get_interested_ids_test = True
        self.assertTrue(pass_get_interested_ids_test)

    def test_matchresults(self):
        print '===match results===='
        pass_matchresults_test = False
        query = "o"
        location = "hyderabad"
        response = self.app.post('/api/matchresults',
            data=json.dumps({
                'query': query,
                'location': location
            }), content_type='application/json')
        if response.status_code == 200 or response.status_code == 401:
            pass_matchresults_test = True
        self.assertTrue(pass_matchresults_test)

    def test_deleteSearchHistoryItem(self):
        print '===delete searchhistoryitem==='
        pass_deleteSearchHistoryItem_test = False
        _id = "556852697695d0141720883d"
        response = self.app.post('/api/deleteSearchHistoryItem',
            data=json.dumps({
                '_id': _id
            }), content_type='application/json')
        if response.status_code == 200 or response.status_code == 401:
            pass_deleteSearchHistoryItem_test = True
        self.assertTrue(pass_deleteSearchHistoryItem_test)

    def test_deleteconversation(self):
        print '===== delete conversations ===='
        pass_deleteconversation_test = False

        cuserid = "5571545d7695d01454869bba"
        conversationid = "5570b1567695d001f95b3ff8"

        response = self.app.post('/api/deleteconversation',
            data=json.dumps({
                'cuserid': cuserid,
                'conversationid': conversationid
            }), content_type='application/json')
        if response.status_code == 200 or response.status_code == 401:
            pass_deleteconversation_test = True
        self.assertTrue(pass_deleteconversation_test)







if __name__ == '__main__':
    unittest.main()