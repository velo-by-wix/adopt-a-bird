import wixWindow from 'wix-window';

$w.onReady(function () {
	const corvid = $w('#dynamicDataset').getCurrentItem()
	if (corvid.adopter) {
		$w('#adopterGroup').show()
	} else {
		$w('#adoptBtn').show()
		$w('#adoptBtn').onClick(() => {
			wixWindow.openLightbox('ADOPT', corvid)
		})
	}
});