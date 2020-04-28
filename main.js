$("body").on("change", ".filter", function (e) {
	const this_select = e.target;
	const choice = $(this_select).val();

	$(".station.active").removeClass("active");
	$(`.station.${choice}`).addClass('active');
});