page {
	config {
		## 2 = disable pag title completely
		noPageTitle = 2
	}

	headerData {
		## Page Title Configuration - Lib/Misc/Htmltitle/Setup.ts
		10 =< lib.misc.htmltitle

		## Enable Support HTML5 in old IE browsers
		20 = TEXT
		20.value (
			<!--[if lt IE 9]><script type="text/javascript" src="typo3conf/ext/best_box/Resources/Public/JavaScript/html5shiv.js"></script><![endif]-->
		)

		## Prepare Google Analytics
		## headerData.20000000 is reserved and 20000000
		20000000 < lib.misc.analytics
	}
}