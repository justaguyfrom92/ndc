$(document).ready(function()
{
	$(".show_hide_password a").on('click', function(e)
	{
		e.preventDefault();

		$(".show_hide_password").each(function( index )
		{
			var icon = $(this).find('i');
			var input = $(this).parent().find('input');

			if(icon && input)
			{
				var type = input.attr("type");

				icon.toggleClass('fa-eye');
				icon.toggleClass('fa-eye-slash');

				input.attr('type', (type == "text" ? 'password' : 'text'));
			}
		});
	});

	$(".international-form").on('click', function(e)
	{
		e.preventDefault();

		$(".international").each(function()
		{
			var view = $(this).attr('location');
			$(this).toggleClass('hide');

			$(this).find('input').val('');

			var select = $(this).find('select');
			select.prop('selectedIndex', 0);
		});
	});
});
