// For full API documentation, including code examples, visit http://wix.to/94BuAAs

$w.onReady(function () {
	$w('#repeater1').onItemReady(($item, itemData) => {
		if (itemData.adopter) {
			$item('#adoptedBtn').show()
		}
	})
});