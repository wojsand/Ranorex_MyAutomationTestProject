function importStepFinishedPoll(baseUrl, stepToPoll, currentStepStatus) {
	setTimeout(function() {
		$.ajax({
			type : "POST",
			url : baseUrl + "import/poll/step/status.do",
			data : {
				pendingStep : stepToPoll,
				currentStatus : currentStepStatus
			},
			success : function(data) {
				if (data.progressState !== 0) {
					$(".progress .bar").css("width", (data.progressState / 5) + "%");
					$(".progress .bar").attr("aria-valuenow", data.progressState);
				}
				if (data.finished === true) {
					location.reload();
				} else {
					importStepFinishedPoll(baseUrl, stepToPoll, currentStepStatus);
				}
			},
			dataType : "json"
		});
	}, 2000);
}
