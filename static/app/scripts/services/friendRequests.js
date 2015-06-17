angular.module('weberApp')
.factory('friendsActivity', function($http, Restangular, $alert, $timeout,CurrentUser) {

        var friendsActivity = function(currentuser, profileuser){
            //console.log(profileuser)
            this.currentuser = currentuser;
            this.profileuser = profileuser;
            this.status = null;
            this.status_method = null;

            if (typeof this.profileuser.notifications === "undefined"){
                profileuser.patch({
                    "notifications": []
                })
            }

            if(typeof this.currentuser.notifications === "undefined"){
                currentuser.patch({
                    "notifications": []
                })
            }
        }



        friendsActivity.prototype.getRelation = function(){

                if(this.status === null){
                    if(this.profileuser.friends.indexOf(this.currentuser._id) > -1){
                        this.status = 'unfriend';
                    }
                }

                if(this.status === null){
                    var k = '';
                    for (k in this.profileuser.notifications){
                        if((this.profileuser.notifications[k].friendid == (this.currentuser._id)) &&
                          (this.profileuser.notifications[k].notific_type == 1)){
                            this.status = 'cancelrequest';
                        }
                    }
                }

                if(this.status === null){
                    var k = ''
                    for (k in this.currentuser.notifications){
                        if((this.currentuser.notifications[k].friendid == (this.profileuser._id)) &&
                           (this.currentuser.notifications[k].notific_type == 1))
                        {
                            this.status = 'reject_accept';
                        }
                    }
                }

                if(this.status === null){
                    this.status = 'addfriend';
                }
            return (this.status);
        }

         return friendsActivity;
	})
	.service('Friends', function($http, Restangular) {

         this.addFriend = function(cuserid, puserid){
             var self = this;
             console.log('clicked on add friend')
                var req = {
                    method: 'POST',
                    url: '/api/addfriend',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: {
                            cuserid : cuserid,
                            puserid : puserid,
                            seed:Math.random()
                    }
                }

                return $http(req);
         }


		 this.cancelRequest = function(cuserid, puserid){
             var self = this;
                var req = {
                    method: 'POST',
                    url: '/api/cancelfriend',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: {
                            cuserid : cuserid,
                            puserid : puserid,
                            seed:Math.random()
                    }
                }

                return $http(req);
         }

		 this.acceptRequest = function(cuserid, puserid){
             var self = this;
                var req = {
                    method: 'POST',
                    url: '/api/acceptfriend',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: {
                            cuserid : cuserid,
		                    puserid : puserid,
		                    seed:Math.random()
                    }
                }
                return $http(req);
         }

         this.rejectRequest = function(cuserid, puserid){
             var self = this;
                var req = {
                    method: 'POST',
                    url: '/api/rejectfriend',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: {
                            cuserid : cuserid,
		                    puserid : puserid,
		                    seed:Math.random()
                    }
                }
                return $http(req);
         }


         this.unFreind = function(cuserid, puserid){
             var self = this;
             var req = {
                method: 'POST',
                url: '/api/unfriend',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                        cuserid : cuserid,
                        puserid : puserid,
                        seed:Math.random()
                }
             }
                return $http(req);
         }

		  this.makeSeen = function(cuserid){
             var self = this;
                var req = {
                    method: 'POST',
                    url: '/api/makeseen',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: {
                            cuserid : cuserid,
		                    seed:Math.random()
                    }
                }
                return $http(req);
         }
	})
	.service('socketOperations', function($http, Restangular, socket) {

         this.emitSocket = function(property, roomId){
             socket.emit(property, {id:roomId});
             return 'hai'
         }


	});