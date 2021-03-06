$(function(){
	$.extend(WorkoutLog, {
		// signup method
		signup: function(){
			// username & password variables
			var username = $("#su_username").val();
			var password = $("#su_password").val();
			// user object
			var user = {
				user: {
					username: username,
					password: password
				}
			};

			// signup post
			var signup = $.ajax({
				type:"POST",
				url: WorkoutLog.API_BASE + "user",
				data: JSON.stringify(user),
				contentType: "application/json"
			});

			// signup done/fail
			signup.done(function(data){
				if (data.sessionToken) {
					WorkoutLog.setAuthHeader(data.sessionToken);
					console.log("Hey! You did it! You're signed in!");
					console.log(data.sessionToken);
				}

				$("#signup-modal").modal("hide");
				$(".disabled").removeClass("disabled");
				$("#loginout").text("Logout");
				
			}).fail(function(){
				$("#su_error").text("Hmm... Something happened with your sign up.").show();
			});
		},

		// login

		login: function() {
			var username = $("#li_username").val();
			var password = $("#li_password").val();
			var user = {user: {username: username, password: password }}
			var login = $.ajax({
				type: "POST",
				url: WorkoutLog.API_BASE + "login",
				data: JSON.stringify(user),
				contentType: "application/json"
			});

			login
			.done(function(data) {
				if (data.sessionToken) {
					WorkoutLog.setAuthHeader(data.sessionToken);
					console.log(data.sessionToken);
				}

				$("#login-modal").modal("hide");
				$(".disabled").removeClass("disabled");
				$("#loginout").text("Lougout");
			})

			.fail(function(){
				$("#li_error").text("Huh... Something happened during sign up. ")
			});
		},

		loginout:function(){
			if (window.localStorage.getItem("sessionToken")){
				window.localStorage.removeItem("sessionToken");
				$("#loginout").text("Login");
			}
		} 			// To Do: Make sure stuff is disabled on logout
	});

	// bind events
	$("#login").on("click", WorkoutLog.login);
	$("#signup").on("click", WorkoutLog.signup);
	$("#loginout").on("click", WorkoutLog.loginout);

	if (window.localStorage.getItem("sessionToken")) {
		$("#loginout").text("Logout");
	}
});